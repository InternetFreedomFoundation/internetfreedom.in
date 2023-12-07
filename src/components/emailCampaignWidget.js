import React, { useState } from "react";

const apiEndpoint = "https://heimdall.internetfreedom.in/campaigns/capture";
const defaultFormData = {
  name: "",
  email: "",
  campaign: "",
  organization: "",
  metadata: "",
  source: "",
  communication_consent: false,
};

const EmailCampaignWidget = (props) => {
  const { title, campaign, emailContent } = props;
  const [formData, setFormData] = useState({ ...defaultFormData, campaign });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "communication_consent") {
      setFormData({
        ...formData,
        communication_consent: !formData.communication_consent,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    formData.metadata = navigator.userAgent;
    formData.source = window.location.href;

    await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    window.location.href = emailContent;
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 border border-gray-200 p-12 rounded-xl">
      <h4 className="text-center">{title || "Write to TRAI to #SaveTheInternet"}</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-iff-orange"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-iff-orange"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="organization" className="block text-gray-600">
            Organization (optional):
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-iff-orange"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 prose-sm">
            <input
              type="checkbox"
              name="communication_consent"
              checked={formData.communication_consent}
              onChange={handleChange}
              className="mr-2"
            />
            I'm willing to be contacted for support on digital rights issues, including net neutrality, privacy, freedom of speech, surveillance, and internet shutdowns.
          </label>
        </div>


        <div className="text-center">
          <button
            type="submit"
            className="btn w-full text-xl font-light h-14"
          >
            Write now
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailCampaignWidget;
