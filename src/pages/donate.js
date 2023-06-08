import * as React from "react";
import { Layout } from "../components/common";
import DonateWidget from "../components/DonateWidget";
import { Disclosure } from "@headlessui/react";
import faqs from "../../content/faq.json";
import { SEO } from "../components/seo";

const Index = () => {
  return (
    <Layout>
      <TopSection />
      <WaysToSupport />
      <FaqSection />
    </Layout>
  );
};

export default Index;

function TopSection() {
  return (
    <>
      <div className="bg-bg-black">
        <div className="px-4 py-6 pb-48 md:text-lg responsive-container">
          <div className="bg-bg-black min-w-full">
            <div id="header-card" className="mt-16 mb-24 max-w-3xl">
              <h1 className="text-white text-3xl leading-7 not-italic">
                Support Our Work
              </h1>
              <p id="site-banner-desc" className="text-gray-400 mt-3">
                When you donate to IFF, you join a community of over 4000 Indians who believe that collective action can secure and advance our constitutional freedoms in an increasingly digital world. Your donation supports our collective vision for the internet—an internet that is transparent, accountable, inclusive, equal, safe, and free.
              </p>
              <br />
              <span className="text-gray-400"> We fight for the digital rights of every Indian, but we can’t do it alone—donate today.</span>
            </div>
          </div>
        </div>
      </div>
      <DonateWidget />
    </>
  );
}
function OurPrinciples() {
  return (
    <div className="px-4 py-6 md:py-16 md:text-lg  border-b-2 text-gray-500 flex-col lg:flex-row gap-8 responsive-container flex">
      <div className="">
        <h2 className="text-2xl text-black mb-2">Our Principles</h2>
        <p className="text-grey">
          Digital rights are constitutional rights, and must be defended
          constitutionally. To this end, we are guided by the following
          principles:
        </p>
        <div className="flex flex-wrap -mx-2 mb-8">
          <div className="w-full lg:w-1/2 px-2">
            <div className="mr-6 mt-4">
              <h1 className="text-iff-orange text-xl">
                Progressive constitutionalism
              </h1>
              <p className="text-sm text-justify mt-4">
                We are first and foremost believers in the Constitution of
                India. While the Constitution was drafted several decades before
                the invention of the internet, it is a progressive and visionary
                document. All technologies must respect the fundamental rights
                of citizens and further constitutional values of justice,
                equality, liberty and fraternity.
              </p>

            </div>
          </div>
          <div className="w-full lg:w-1/2 px-2">
            <div className="mr-6 mt-4">
              <h1 className="text-iff-orange text-xl">Non-Partisanship</h1>
              <p className="text-sm text-justify mt-4">
                We represent all individuals and organisations to achieve
                systemic policy change, regardless of ideological leanings or
                party politics. Our allegiance is not towards any political
                objective, but with the letter and the spirit of the
                Constitution of India.
              </p>

            </div>
          </div>
          <div className="w-full lg:w-1/2 px-2">
            <div className="mr-6 mt-4">
              <h1 className="text-iff-orange text-xl">Collaboration</h1>
              <p className="text-sm text-justify mt-4">
                We recognize the value of adopting a collaborative approach
                because the harms arising from new technologies are often
                disproportionately borne by vulnerable and marginalized groups.
              </p>

            </div>
          </div>
          <div className="w-full lg:w-1/2 px-2">
            <div className="mr-6 mt-4">
              <h1 className="text-iff-orange text-xl">
                Technological expertise
              </h1>
              <p className="text-sm text-justify mt-4">
                Our board of trustees, staff, and group of volunteers consist of
                several technologists and we also seek input from external
                experts with domain knowledge. This enables us to assist courts
                by shedding light on the technological feasibility of different
                alternatives which may be under consideration.
              </p>

            </div>
          </div>
          <div className="w-full lg:w-1/2 px-2">
            <div className="mr-6 mt-4">
              <h1 className="text-iff-orange text-xl">Indigenously funded</h1>
              <p className="text-sm text-justify mt-4">
                IFF is wholly funded by Indian citizens and organisations. We do
                not accept foreign funding. None of the funding we gather is
                case-specific and we take active steps to ensure transparency,
                prevent co-option, and maintain autonomy. All funding received
                by IFF goes into our general corpus.
              </p>

              <p className="text-xs">
                Read more in our Strategic Litigation Handbook
              </p>
              <button className="btn-secondary mt-4">Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LatestUpdates() {
  return (
    <div className="px-4 py-6 md:py-16 md:text-lg text-gray-500 responsive-container">
      <h1 className="text-subheading-1 mb-10">Latest Updates</h1>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/3">
          <UpdateCard
            title={"Lorem ipsum dolor sit amet, consectetur"}
            description={
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco \
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
            reprehenderit in voluptate velit esse cillum dolore eu fugiat \
            nulla pariatur. Lorem ipsum."
            }
            tags={["litigation", "policy"]}
          />
        </div>
        <div className="w-full lg:w-1/3">
          <UpdateCard
            title={"Lorem ipsum dolor sit amet, consectetur"}
            description={
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco \
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
            reprehenderit in voluptate velit esse cillum dolore eu fugiat \
            nulla pariatur. Lorem ipsum."
            }
            tags={["litigation", "policy"]}
          />
        </div>
        <div className="w-full lg:w-1/3">
          <UpdateCard
            title={"Lorem ipsum dolor sit amet, consectetur"}
            description={
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco \
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
            reprehenderit in voluptate velit esse cillum dolore eu fugiat \
            nulla pariatur. Lorem ipsum."
            }
            tags={["litigation", "policy"]}
          />
        </div>
      </div>
    </div>
  );
}

function UpdateCard({ title, description, tags, author, date, length }) {
  return (
    <div className="mr-6 sm:mb-6">
      <div className="w-full h-48 dark:bg-gray-200 rounded-lg"></div>
      <div className="">
        {tags.map(function (d, idx) {
          return (
            <a className="text-sm px-3 inline-block bg-gray-100 rounded-lg tracking-tight text-black mr-2 mb-2 capitalize">
              {d}
            </a>
          );
        })}
      </div>
      <h1 className="text-xl font-bold mb-2 text-black"> {title} </h1>
      <p className="text-grey-200 text-sm text-justify"> {description} </p>
    </div>
  );
}

function FaqSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto responsive-container px-6 py-20">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            FAQs
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.items.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <svg
                              fill="none"
                              className="h-6 w-6"
                              aria-hidden="true"
                              stroke="currentColor"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M18 12H6"
                              ></path>
                            </svg>
                          ) : (
                            <svg
                              fill="none"
                              className="h-6 w-6"
                              aria-hidden="true"
                              stroke="currentColor"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6v12m6-6H6"
                              ></path>
                            </svg>
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="my-8">
                      <p className="prose max-w-2xl"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}>
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function WaysToSupport() {
  return (
    <div className="prose py-20 px-4 mx-auto max-w-4xl border-b space-y-6 text-gray-600 hover:prose-a:text-iff-orange">
      <span className="text-2xl font-bold leading-10 text-gray-900">
        How else can I support IFF?
      </span>
      <p>
        Thank you for your interest in supporting us, we really appreciate it! Here are other ways you can help us out:
      </p>
      <ul className="list-disc list-inside">
        <li className="text-iff-orange">
          <span className="text-gray-600">Host birthday fundraisers</span>
        </li>
        <li className="text-iff-orange">
          <span className="text-gray-600">Host match donations</span>
        </li>
        <li className="text-iff-orange">
          <span className="text-gray-600">Host a fundraising event for IFF</span>
        </li>
      </ul>
      <p>
        Start a conversation with us by reaching out to us at: {" "}
        <a href="mailto:donate@internetfreedom.in">
          donate@internetfreedom.in
        </a>
        <br />
        We understand that not everyone is able to support us through financial contributions, but there are plenty of other ways to get involved with our community by volunteering with your time and skills. Read more about volunteering for IFF <a href="https://internetfreedom.in/volunteer-for-digital-freedom/">here.</a>
      </p>
    </div>
  );
}

export const Head = () => (
  <SEO
    title={"Donate to Internet Freedom Foundation"}
    description={"We fight for the digital rights of every Indian, but we can’t do it alone—donate today."}
    url={"https://www.internetfreedom.in/donate/"}
  />
)
