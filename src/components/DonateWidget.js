import React, { Fragment } from "react";
import { useState } from "react";
import donationData from "../../content/donation.json";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import useRazorpay from "react-razorpay";

const DonateWidget = () => {
  const Razorpay = useRazorpay();
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const createOrder = async (orderType) => {
    if (!['SUBS-PROXY', 'ONETIME-PROXY'].includes(orderType)) {
      throw new Error('Invalid orderType. Must be either "SUBS-PROXY" or "ONETIME-PROXY"');
    }

    const fetchOrder = await fetch(
      '/api/donate',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userDetails.name,
          email: userDetails.email,
          contact: userDetails.phone,
          pan: userDetails.pan,
          plan: currentMembership.plan_id,
          max_amount: currentMembership.amount * 100,
          type: orderType,
          frequency: currentMembership.frequency,
          address: {
            address_line1: userDetails.address,
            pincode: parseInt(userDetails.pincode),
          },
          source: window.location.search || window.location.pathname,
        }),
      }
    );

    const order = await fetchOrder.json();
    return order;
  };


  const handlePayment = async () => {
    let options = {};
    if (currentMembership.frequency !== "onetime") {
      // handle subscription donations
      const sub = await createOrder('SUBS-PROXY');

      options = {
        key: "rzp_live_hjnqVr1bRh6gsb",
        subscription_id: sub.id,
        amount: currentMembership.amount * 100,
        name: "Donate",
        description:
          "Support the fight for Internet Freedom - " + currentMembership.title,
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
          contact: userDetails.phone,
        },
        notes: {
          REFERENCE: sub.reference,
          EMAIL: userDetails.email,
        },
        handler: (res) => {
          handlePaymentResponse(res);
        },
        theme: {
          color: "#CC7755",
        },
      };
    } else {
      // handle one time donations
      const order = await createOrder('ONETIME-PROXY')

      options = {
        key: "rzp_live_hjnqVr1bRh6gsb",
        amount: currentMembership.amount * 100,
        currency: "INR",
        name: "Donate",
        description: "Support the fight for Internet Freedom",
        order_id: order.id,
        handler: (res) => {
          handlePaymentResponse(res);
        },
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
          contact: userDetails.phone,
        },
        notes: {
          EMAIL: userDetails.email,
          REFERENCE: order.reference,
        },
        theme: {
          color: "#CC7755",
        },
      };
    }

    const rzpay = new Razorpay(options);
    rzpay.open();
  };

  const handlePaymentResponse = (res) => {
    if (res.razorpay_payment_id) {
      setIsSuccess(true);
      setIsOpen(true);
      setCurrentStep(1);
    } else {
      setIsSuccess(false);
      setIsOpen(true);
    }
  };

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
      title: "Confirmation",
    },
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [currentMembership, setCurrentMembership] = useState(
    donationData.monthly[0]
  );
  const [userDetails, setUserDetails] = useState({
    name: "",
    pan: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
  });

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
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
                  handlePayment={handlePayment}
                />
              )}
            </div>
          </div>
        </div>
        <span className="p-4 italic text-xs text-gray-400">
          All donations to IFF are 50% tax deductible under Section 80G of the
          Income Tax Act
        </span>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {isSuccess ? "Donation Successful" : "Donation Failed"}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {isSuccess
                        ? "Thanks for making the donation!"
                        : "There was an error while completing the payment."}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={closeModal}
                    >
                      Got it, Thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
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
          {currentMembership.frequency !== "onetime" && (
            <span className="text-white text-xl text-center">
              {currentMembership.title}
            </span>
          )}
          <span className="text-white text-3xl">
            ₹{currentMembership.amount}
          </span>
          <button
            className="btn mt-4"
            onClick={() => {
              if (currentMembership.amount < 1) {
                alert("Please enter valid donation amount");
                return;
              }
              setCurrentStep(2);
            }}
          >
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
  const [pincode, setPincode] = useState(userDetails.pincode);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePanChange = (e) => {
    setPan(e.target.value.toUpperCase());
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

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !pan || !email || !phone || !address) {
      alert("Please fill all the fields");
      return;
    }
    if (pan.length !== 10 || !pan.match(/^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/)) {
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
    if (!pincode.match(/^[0-9]{6}$/)) {
      alert("Please enter a valid pincode");
      return;
    }

    setUserDetails({
      name,
      pan,
      email,
      phone,
      address,
      pincode,
    });
    setCurrentStep(3);
  };

  return (
    <form className="flex sm:flex-row flex-col">
      <div className="sm:w-3/4 w-full p-4">
        <div className="sm:grid w-full sm:grid-cols-2 space-y-5 sm:space-y-0 gap-x-6 gap-y-8">
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
                placeholder="Enter Your Full Name"
                className="block w-full rounded border-0 py-1.5 pl-4 text-white placeholder:text-gray-400 bg-[#2E2E2E] focus:bg-[#3E3E3E] focus:outline-none sm:text-sm sm:leading-6"
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
                placeholder="ABCDE1234F"
                className="block w-full rounded border-0 py-1.5 pl-4 text-white placeholder:text-gray-400 bg-[#2E2E2E] focus:bg-[#3E3E3E] focus:outline-none sm:text-sm sm:leading-6"
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
                placeholder="test@example.com"
                className="block w-full rounded border-0 py-1.5 pl-4 text-white placeholder:text-gray-400 bg-[#2E2E2E] focus:bg-[#3E3E3E] focus:outline-none sm:text-sm sm:leading-6"
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
                placeholder="9876543210"
                className="block w-full rounded border-0 py-1.5 pl-4 text-white placeholder:text-gray-400 bg-[#2E2E2E] focus:bg-[#3E3E3E] focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-1">
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
                className="block w-full rounded border-0 py-1.5 pl-4 text-white placeholder:text-gray-400 bg-[#2E2E2E] focus:bg-[#3E3E3E] focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="pincode"
              className="block text-sm font-medium leading-6 text-white"
            >
              Pincode
            </label>
            <div className="mt-2">
              <input
                type="number"
                onChange={handlePincodeChange}
                name="pincode"
                id="pincode"
                className="block w-full rounded border-0 py-1.5 pl-4 text-white placeholder:text-gray-400 bg-[#2E2E2E] focus:bg-[#3E3E3E] focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2E2E2E] sm:w-1/4 w-full rounded-md">
        <div className="w-full h-full p-8 flex flex-col items-center justify-center space-y-5">
          <span className="text-[#888888]">{currentMembership.type}</span>
          {currentMembership.frequency !== "onetime" && <span className="text-white text-xl text-center">
            {currentMembership.title}
          </span>}
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

const Confirmation = ({
  setCurrentStep,
  currentMembership,
  userDetails,
  handlePayment,
}) => {
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
        {currentMembership.perks.length != 0 && <div className="">
          <p className="font-bold text-white">
            {currentMembership.title} membership perks
          </p>
          <ul>
            {currentMembership.perks.map((perk) => (
              <ul className="my-4 text-left text-gray-400">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>{perk}</span>
                </li>
              </ul>
            ))}
          </ul>
        </div>}
      </div>
      <div className="bg-[#2E2E2E] w-full mt-10 sm:mt-0 sm:w-1/4 rounded-md">
        <div className="w-full h-full p-8 flex flex-col items-center justify-center space-y-5">
          <span className="text-[#888888]">
            {userDetails.name}, would you like to proceed with making the
            donation?
          </span>
          <button className="btn mt-4" onClick={handlePayment}>
            Next
          </button>
          <button
            className="text-iff-orange mt-4"
            onClick={() => {
              setCurrentStep(2);
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

const Tabs = ({ setCurrentMembership }) => {
  const [openTab, setOpenTab] = React.useState(1);
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
                  setCurrentMembership({
                    type: "One Time Donation",
                    title: donationData.onetime[0].name,
                    amount: donationData.onetime[0].amount,
                    frequency: donationData.onetime[0].frequency,
                    description: donationData.onetime[0].description,
                    perks: donationData.onetime[0].perks,
                  });
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
                  setCurrentMembership({
                    type: "Monthly Membership",
                    title: donationData.monthly[0].name,
                    frequency: donationData.monthly[0].frequency,
                    amount: donationData.monthly[0].amount,
                    perks: donationData.monthly[0].perks,
                    plan_id: donationData.monthly[0].plan_id,
                  });
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
                  setCurrentMembership({
                    type: "Annual Membership",
                    title: donationData.annual[0].name,
                    frequency: donationData.annual[0].frequency,
                    amount: donationData.annual[0].amount,
                    perks: donationData.annual[0].perks,
                    plan_id: donationData.annual[0].plan_id,
                  });
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Annual
              </a>
            </li>
          </ul>
          <hr className="h-px mx-auto w-1/2 -mt-3 mb-8 bg-white border-0 dark:bg-gray-700"></hr>

          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={openTab === 1 ? "block" : "hidden"}
                  id="One time"
                >
                  <OneTimeOptions setCurrentMembership={setCurrentMembership} />
                </div>
                <div
                  className={openTab === 2 ? "block" : "hidden"}
                  id="Monthly"
                >
                  <Card
                    type="monthly"
                    tiers={donationData.monthly}
                    setCurrentMembership={setCurrentMembership}
                  />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="Annual">
                  <Card
                    type="annual"
                    tiers={donationData.annual}
                    setCurrentMembership={setCurrentMembership}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function OneTimeOptions({ setCurrentMembership }) {
  const [selectedAmount, setSelectedAmount] = useState(donationData.onetime[0]);

  React.useEffect(() => {
    setCurrentMembership({
      type: "One Time Donation",
      frequency: selectedAmount.frequency,
      title: selectedAmount.title,
      amount: selectedAmount.amount,
      description: selectedAmount.description,
      perks: selectedAmount.perks,
    });
  }, [selectedAmount]);

  return (
    <>
      <RadioGroup value={selectedAmount} onChange={setSelectedAmount}>
        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
          {donationData.onetime.map((amount) => (
            <RadioGroup.Option
              key={amount.id}
              value={amount}
              className={({ checked, active }) =>
                classNames(
                  checked ? "border-transparent" : "border-gray-600",
                  active ? "border-iff-orange ring-2 ring-iff-orange" : "",
                  "relative flex cursor-pointer rounded-lg border bg-white/10 p-4 shadow-sm focus:outline-none"
                )
              }
            >
              {({ checked, active }) => (
                <>
                  <span className="flex flex-1">
                    <span className="flex flex-col mx-auto ">
                      <RadioGroup.Label
                        as="span"
                        className="text-xl font-medium text-gray-100"
                      >
                        {amount.title}
                      </RadioGroup.Label>
                    </span>
                  </span>
                  <span
                    className={classNames(
                      active ? "border" : "border-2",
                      checked ? "border-iff-orange" : "border-transparent",
                      "pointer-events-none absolute -inset-px rounded-lg"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
      <div className="mt-5">
        <label
          htmlFor="custom-amount"
          className="block text-sm font-medium leading-6 text-gray-300"
        >
          Custom amount
        </label>
        <input
          type="number"
          className="w-full rounded-sm border-0 py-1.5 pl-4 text-white placeholder:text-gray-400 bg-[#2E2E2E] focus:bg-[#3E3E3E] focus:outline-none sm:text-sm sm:leading-6"
          placeholder="Enter custom amount"
          min="100"
          step="50"
          onChange={(e) => {
            setCurrentMembership({
              type: "One Time Donation",
              title: "Custom Amount",
              amount: e.target.value,
              frequency: "onetime",
              description: "One Time Donation",
              perks: [],
            });
          }}
        />
      </div>
    </>
  );
}

const Card = ({ tiers, type, setCurrentMembership }) => {
  const [tier, setTier] = React.useState(0);
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
                      type:
                        (type == "monthly" ? "Monthly" : "Annual") +
                        " Membership",
                      title: d["name"],
                      amount: d["amount"],
                      perks: d["perks"],
                      plan_id: d["plan_id"],
                      frequency: d["frequency"]
                    });
                    setTier(idx);
                  }}
                >
                  <input
                    id={type + "-" + idx}
                    name={type}
                    type="radio"
                    className="accent-iff-orange"
                    checked={tier === idx}
                  />
                  <label
                    className="relative cursor-pointer items-center rounded-full p-3"
                    for={type + "-" + idx}
                    data-ripple-dark="true"
                  >
                    {d["name"]}
                  </label>
                </div>
              );
            })}
          </div>
          <hr className="h-px mx-auto w-full my-4 bg-white border-0 dark:bg-gray-700"></hr>
          <div className="">
            <p className="font-bold text-white">
              {tiers[tier] != undefined && tiers[tier]["name"]} membership perks
            </p>
            <ul>
              {tiers[tier] != undefined &&
                tiers[tier].perks.map((perk) => (
                  <ul className="my-4 text-left text-gray-400">
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>{perk}</span>
                    </li>
                  </ul>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

function Steps({ steps, currentStep, setCurrentStep }) {
  return (
    <div className="bg-[#2E2E2E] p-10 grid grid-flow-col grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
      {steps.map((step) => (
        <div
          className={`flex flex-row items-center ${step.id <= currentStep ? "text-white hover:cursor-pointer" : ""
            }`}
          onClick={() => {
            if (step.id < currentStep) setCurrentStep(step.id);
          }}
        >
          <span className="flex-shrink-0">
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full ${step.id < currentStep
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
                  className={`${step.id === currentStep ? "text-white" : "text-[#888888]"
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
