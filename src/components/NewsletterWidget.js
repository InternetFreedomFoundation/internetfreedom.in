import React from "react";
export default function NewsletterWidget() {
  return (
    <>
      <div className="mx-auto m-8 sm:px-6 lg:px-8">
        <div className="relative isolate flex flex-col gap-10 overflow-hidden bg-bg-black px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32">
          <h2 className="max-w-2xl text-2xl font-bold text-white sm:text-3xl xl:max-w-none xl:flex-auto">
            Subscribe to our newsletter, and don't miss out on our latest
            updates.
          </h2>
          <form className="w-full max-w-md">
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
              <button type="submit" className="btn font-light">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
