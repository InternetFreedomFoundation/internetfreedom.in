import * as React from "react";
import { Layout } from "../components/common";

const links = [
  { title: 'Donate', description: 'Donate to Internet Freedom Foundation', url: '/donate/' },
  { title: 'Support', description: 'Our contact info and support  ', url: '/contact/' },
  { title: 'Blog', description: 'Read our articles', url: '/blogs/' },
]

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="bg-white">
        <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 pt-16">
            <img
              className="mx-auto h-12 w-auto"
              src="/images/logo.svg"
              alt="IFF-logo"
            />
          </div>
          <div className="max-w-xl mx-auto py-16 sm:py-24">
            <div className="text-center">
              <p className="text-sm font-semibold text-iff-orange uppercase tracking-wide">404 error</p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Oops! This page does not exist.
              </h1>
              <p className="mt-2 text-lg text-gray-500">The page you are looking for could not be found.</p>
            </div>
            <div className="mt-12">
              <h2 className="text-sm font-semibold text-gray-500 tracking-wide uppercase">Popular pages</h2>
              <ul role="list" className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
                {links.map((link, linkIdx) => (
                  <li key={linkIdx} className="relative py-6 flex items-start space-x-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-medium text-gray-900 underline underline-offset-4">
                        <span>
                          <a href={link.url} className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            {link.title}
                          </a>
                        </span>
                      </h3>
                      <p className="text-base text-gray-500">{link.description}</p>
                    </div>
                    <div className="flex-shrink-0 self-center">
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="/" className="text-base font-medium text-iff-orange">
                  Or go back home<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
