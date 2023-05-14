import React from "react";
import { useState } from "react";

const DonateWidget = () => {
  const steps = [
    {
      id: 1,
      title: "Choose Tier",
    },
    {
      id: 2,
      title: "Personal Info",
    },
    {
      id: 3,
      title: "Cofirmation",
    },
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [currentMembership, setCurrentMembership] = useState({
    type: "Membership (Monthly)",
    amount: 2500,
    title: "Bakshi Tek Chand",
    description:
      "Ut enim ad minim veniam, quis nostrud  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  });
  const [userDetails, setUserDetails] = useState({
    name: "",
    pan: "",
    email: "",
    phone: "",
    address: "",
  });

  return (
    <div
      id="donate-widget"
      className="w-full h-auto responsive-container -mt-48"
    >
      <div className="text-sm font-medium text-gray-500">
        <div className="bg-[#2E2E2E]">
          <Steps
            steps={steps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
          <div className="w-full h-auto bg-[#212121] p-8">
            {currentStep === 1 && (
              <TierSelection
                setCurrentStep={setCurrentStep}
                setCurrentMembership={setCurrentMembership}
                currentMembership={currentMembership}
              />
            )}
            {currentStep === 2 && (
              <PersonalInfo
                setCurrentStep={setCurrentStep}
                currentMembership={currentMembership}
                userDetails={userDetails}
                setUserDetails={setUserDetails}
              />
            )}
            {currentStep === 3 && (
              <Confirmation
                setCurrentStep={setCurrentStep}
                currentMembership={currentMembership}
                userDetails={userDetails}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TierSelection = ({
  setCurrentStep,
  currentMembership,
  setCurrentMembership,
}) => {
  return (
    <div className="flex sm:flex-row flex-col">
      <Tabs setCurrentMembership={setCurrentMembership} />
      <div className="bg-[#2E2E2E] sm:w-1/4 w-full rounded-md">
        <div className="w-full h-full p-8 flex flex-col items-center justify-center space-y-5">
          <span className="text-[#888888]">{currentMembership.type}</span>
          <span className="text-white text-xl text-center">
            {currentMembership.title}
          </span>
          <span className="text-white text-3xl">
            ₹{currentMembership.amount}
          </span>
          <button className="btn mt-4" onClick={() => setCurrentStep(2)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const PersonalInfo = ({
  setCurrentStep,
  currentMembership,
  userDetails,
  setUserDetails,
}) => {
  const [name, setName] = useState(userDetails.name);
  const [pan, setPan] = useState(userDetails.pan);
  const [email, setEmail] = useState(userDetails.email);
  const [phone, setPhone] = useState(userDetails.phone);
  const [address, setAddress] = useState(userDetails.address);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePanChange = (e) => {
    setPan(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !pan || !email || !phone || !address) {
      alert("Please fill all the fields");
      return;
    }
    if (pan.length !== 10 || !pan.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)) {
      alert("Please enter a valid PAN number");
      return;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
      alert("Please enter a valid phone number");
      return;
    }
    if (!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
      alert("Please enter a valid email");
      return;
    }
    setUserDetails({
      name,
      pan,
      email,
      phone,
      address,
    });
    setCurrentStep(3);
  };

  return (
    <form className="flex sm:flex-row flex-col">
      <div className="sm:w-3/4 w-full p-4">
        <div className="sm:grid w-full sm:grid-cols-2 space-y-5 gap-x-6 gap-y-8">
          <div className="col-span-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-white"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                onChange={handleNameChange}
                name="name"
                id="name"
                autoComplete="given-name"
                className="block w-full rounded-sm border-0 py-1.5 pl-4 text-white placeholder:text-gray-400 bg-[#2E2E2E] focus:bg-[#3E3E3E] focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="pan"
              className="block text-sm font-medium leading-6 text-white"
            >
              PAN
            </label>
            <div className="mt-2">
              <input
                type="text"
                onChange={handlePanChange}
                name="pan"
                id="pan"
                className="block w-full rounded-sm border-0 py-1.5 pl-4 text-white placeholder:text-gray-400 bg-[#2E2E2E] focus:bg-[#3E3E3E] focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                onChange={handleEmailChange}
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-sm border-0 py-1.5 pl-4 text-white placeholder:text-gray-400 bg-[#2E2E2E] focus:bg-[#3E3E3E] focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-white"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                type="text"
                onChange={handlePhoneChange}
                name="phone"
                id="phone"
                autoComplete="tel"
                className="block w-full rounded-sm border-0 py-1.5 pl-4 text-white placeholder:text-gray-400 bg-[#2E2E2E] focus:bg-[#3E3E3E] focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-white"
            >
              Address
            </label>
            <div className="mt-2">
              <input
                type="text"
                onChange={handleAddressChange}
                name="address"
                id="address"
                autoComplete="street-address"
                className="block w-full rounded-sm border-0 py-1.5 pl-4 text-white placeholder:text-gray-400 bg-[#2E2E2E] focus:bg-[#3E3E3E] focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2E2E2E] sm:w-1/4 w-full rounded-md">
        <div className="w-full h-full p-8 flex flex-col items-center justify-center space-y-5">
          <span className="text-[#888888]">{currentMembership.type}</span>
          <span className="text-white text-xl text-center">
            {currentMembership.title}
          </span>
          <span className="text-white text-3xl">
            ₹{currentMembership.amount}
          </span>
          <button
            className="btn mt-4"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Next
          </button>
          <button
            className="text-iff-orange mt-4"
            onClick={() => setCurrentStep(1)}
          >
            Back
          </button>
        </div>
      </div>
    </form>
  );
};

const Confirmation = ({ setCurrentStep, currentMembership, userDetails }) => {
  return (
    <div className="flex sm:flex-row flex-col">
      <div className="sm:w-3/4 w-full flex flex-col space-y-5">
        <span className="text-[#888888]">{currentMembership.type}</span>
        <span className="text-white text-xl">{currentMembership.title}</span>
        <div className="flex flex-col">
          <span className="text-[#888888]">Your Contribution</span>
          <span className="text-white text-3xl pt-2">
            ₹{currentMembership.amount}
          </span>
        </div>
        <span className="text-[#888888]">{currentMembership.description}</span>
      </div>
      <div className="bg-[#2E2E2E] w-full mt-10 sm:mt-0 sm:w-1/4 rounded-md">
        <div className="w-full h-full p-8 flex flex-col items-center justify-center space-y-5">
          <span className="text-[#888888]">
            {userDetails.name}, would you like to proceed with making the
            donation?
          </span>
          <button
            className="btn mt-4"
            onClick={() => {
              // Make API call here for razorpay
            }}
          >
            Next
          </button>
          <button
            className="text-iff-orange mt-4"
            onClick={() => setCurrentStep(2)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

const Tabs = ({ setCurrentMembership }) => {
  const [openTab, setOpenTab] = React.useState(2);
  return (
    <>
      <div className="flex flex-wrap sm:w-3/4 w-full">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-right">
              <a
                className={
                  "" +
                  (openTab === 1
                    ? "underline decoration-4 text-iff-orange underline-offset-8"
                    : "text-body-grey")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                One time
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "" +
                  (openTab === 2
                    ? "underline decoration-4 text-iff-orange underline-offset-8"
                    : "text-body-grey")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Monthly
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-left">
              <a
                className={
                  "" +
                  (openTab === 3
                    ? "underline decoration-4 text-iff-orange underline-offset-8"
                    : "text-body-grey")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Annual
              </a>
            </li>
          </ul>
          <hr class="h-px mx-auto w-1/2 -mt-3 mb-8 bg-white border-0 dark:bg-gray-700"></hr>

          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={openTab === 1 ? "block" : "hidden"}
                  id="One time"
                >
                  <p>TODO: Add one time payment options here</p>
                </div>
                <div
                  className={openTab === 2 ? "block" : "hidden"}
                  id="Monthly"
                >
                  <Card
                    tiers={[
                      {
                        name: "Alladi Krishnaswamy Ayyar",
                        price: 1800,
                        perks:
                          "Ut enim ad minim veniam, quis nostrud exercitation  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                      },
                      {
                        name: "Bakshi Tek Chand",
                        price: 2500,
                        perks:
                          "Ut enim ad minim veniam, quis nostrud  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                      },
                      {
                        name: "Begum Aizaz Rasul",
                        price: 800,
                        perks:
                          "Ut enim ad minim veniam,  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                      },
                      {
                        name: "Jawahar Lal Nehru",
                        price: 10000,
                        perks:
                          "Ut enim ad  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                      },
                      {
                        name: "Dakshayani Velayudhan",
                        price: 2800,
                        perks:
                          "Ut  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                      },
                    ]}
                    setCurrentMembership={setCurrentMembership}
                  />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="Annual">
                  <p>TODO: Yearly payment options card here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ tiers, setCurrentMembership }) => {
  const [tier, setTier] = React.useState(1);
  return (
    <div className="flex flex-row mb-4">
      <div className="w-full" id="picker">
        <div className="flex flex-col">
          <div className="flex flex-row flex-wrap">
            {tiers.map(function (d, idx) {
              return (
                <div
                  className="lg:w-1/3 my-3"
                  onClick={(e) => {
                    setCurrentMembership({
                      type: "Membership (Monthly)",
                      title: d["name"],
                      amount: d["price"],
                      description: d["perks"],
                    });
                    setTier(idx);
                  }}
                >
                  <input
                    id={idx}
                    name="ripple"
                    type="radio"
                    className="accent-iff-orange"
                    checked={tier === idx}
                  />
                  <label
                    className="relative cursor-pointer items-center rounded-full p-3"
                    for={idx}
                    data-ripple-dark="true"
                  >
                    {d["name"]}
                  </label>
                </div>
              );
            })}
          </div>
          <hr class="h-px mx-auto w-full my-4 bg-white border-0 dark:bg-gray-700"></hr>
          <div className="">
            <p className="font-bold text-white">
              {tiers[tier]["name"]} membership perks
            </p>
            <p className="">{tiers[tier]["perks"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function Steps({ steps, currentStep, setCurrentStep }) {
  console.log(steps);
  return (
    <div className="bg-[#2E2E2E] p-10 grid grid-flow-col grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
      {steps.map((step) => (
        <div
          className={`flex flex-row items-center ${
            step.id <= currentStep ? "text-white hover:cursor-pointer" : ""
          }`}
          onClick={() => {
            if (step.id < currentStep) setCurrentStep(step.id);
          }}
        >
          <span className="flex-shrink-0">
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full ${
                step.id < currentStep
                  ? "bg-[#1D6411]"
                  : step.id === currentStep
                  ? "bg-iff-orange"
                  : "bg-[#444444]"
              }`}
            >
              {step.id < currentStep ? (
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  />
                </svg>
              ) : (
                <span
                  className={`${
                    step.id === currentStep ? "text-white" : "text-[#888888]"
                  } text-xs`}
                >
                  {step.id}
                </span>
              )}
            </span>
          </span>
          <span className="ml-1">{step.title}</span>
        </div>
      ))}
    </div>
  );
}

export default DonateWidget;
