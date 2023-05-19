import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function NewsletterWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: e.target.email.value,
      campaign: 'newsletter',
      metadata: navigator.userAgent,
      source: window.location.pathname,
    };

    console.log(JSON.stringify(formData));
    try {
      const response = await fetch('https://heimdall.internetfreedom.in/campaigns/capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setIsOpen(true);
      }
    } catch (error) {
      setIsSuccess(false);
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="mx-auto m-8 sm:px-6 lg:px-8">
        <div className="relative isolate flex flex-col gap-10 overflow-hidden bg-bg-black px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32">
          <h2 className="max-w-2xl text-2xl font-bold text-white sm:text-3xl xl:max-w-none xl:flex-auto">
            Subscribe to our newsletter, and don't miss out on our latest updates.
          </h2>
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded border-0 bg-white/5 px-3.5 py-2 text-white sm:text-sm sm:leading-6 focus:outline-none"
                placeholder="Enter your email"
              />
              <button type="submit" className="btn font-semibold">
                Subscribe
              </button>
            </div>
          </form>
        </div>
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
                    {isSuccess ? 'Subscription Successful' : 'Subscription Failed'}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {isSuccess
                        ? "You're now subscribed to our newsletter. We appreciate your interest, sincere thanks!"
                        : "There was an error while subscribing to our newsletter. Please try again later."}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={closeModal}
                    >
                      Got it, thanks!
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
}
