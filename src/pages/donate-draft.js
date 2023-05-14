import * as React from "react";
import PropTypes from "prop-types";
import { Layout } from "../components/common";
import DonateWidget from "../components/DonateWidget";
import { Disclosure } from "@headlessui/react";

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
                The Internet Freedom Foundation is committed to defending and
                expanding fundamental rights as India gets more digitally
                connected. As part of this mandate, we strategically engage with
                courts, regulators, and other legal institutions across India.
                On this page, we list principles which guide our litigation
                advocacy and provide details of cases in which we have acted as
                parties, collaborators or our retained lawyers have acted in the
                capacity of counsel.
              </p>
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
        <div class="flex flex-wrap -mx-2 mb-8">
          <div class="w-full lg:w-1/2 px-2">
            <div class="mr-6 mt-4">
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
          <div class="w-full lg:w-1/2 px-2">
            <div class="mr-6 mt-4">
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
          <div class="w-full lg:w-1/2 px-2">
            <div class="mr-6 mt-4">
              <h1 className="text-iff-orange text-xl">Collaboration</h1>
              <p className="text-sm text-justify mt-4">
                We recognize the value of adopting a collaborative approach
                because the harms arising from new technologies are often
                disproportionately borne by vulnerable and marginalized groups.
              </p>
               
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-2">
            <div class="mr-6 mt-4">
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
          <div class="w-full lg:w-1/2 px-2">
            <div class="mr-6 mt-4">
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
        <div class="w-full lg:w-1/3">
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
        <div class="w-full lg:w-1/3">
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
        <div class="w-full lg:w-1/3">
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
      <div class="w-full h-48 dark:bg-gray-200 rounded-lg"></div>
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
  const faqs = [
    {
      question: "Who funds IFF?",
      answer: `Beyond the Trustees who chipped in with initial contributions, more than 4000 supporters have donated to us over the course of time. We have also received donations from organisations.
IFF is eligible to receive donations from Indian citizens and Indian companies. We are registered under the Indian Trusts Act, 1882, Section 80G of the Income Tax Act, and can accept CSR contributions.
We welcome all donations and hope to grow a large, diverse donor-base of Indians cutting across all regional, gender, caste, and language barriers— united in the belief of realising their fundamental rights with technology.`,
    },
    {
      question: "Why should I contribute to IFF?",
      answer:
        'IFF champions digital rights, privacy, and free speech in India, which is vital to safeguarding online freedoms and securing fundamental rights for a growing community of Indians, who are connected online. When asked who funds us and whom we represent, our answer is easy - "the people of India!" Thus, it is important that the core base of our financial support comes from a donor base of ordinary Indian internet users like you.',
    },
    {
      question: "What does IFF do with the public funding?",
      answer:
        "All the funds are directly used to sustain our work. IFF's work involves strategic litigation in courts, policy advocacy, representations to public authorities, engaging with the Right to Information Act, and digital literacy. IFF uses the funds to pay staff/contractor salaries and scale up its existing areas of work.",
    },
    {
      question: "How do I cancel or change my recurring donation?",
      answer:
        "You can cancel anytime by writing to us at donate@internetfreedom.in with details of your membership (the email address that you used to sign up or your subscription ID). In case you wish to change the amount of your recurring donation, you can write to us to cancel your existing membership and set up a new recurring donation.",
    },
    {
      question: "How do I renew my halted membership?",
      answer:
        "You can update your linked card or switch to another method of payment to renew your halted membership. Alternatively, you can sign up for the membership again or make a one time annual payment as per your preferred tier. In case you need a direct link to update the card, please drop us a line at donate@internetfreedom.in",
    },
    {
      question: "Will I get a receipt to claim a 80G tax exemption?",
      answer:
        "Yes, you will receive an 80G tax exemption receipt as soon as you make a donation via email. For recurring donors, the consolidated 80G receipt is sent across at the end of the financial year in March every year. If you haven’t received a copy, please write to us at donate@internetfreedom.in and we will send it across.",
    },
    {
      question: "Are my payment details safe?",
      answer:
        "Yes, your payment details are secure. We believe in keeping the absolute least amount of data necessary for keeping in touch (your name and email) and regulatory tax compliance (payment details, address, and PAN) and will resist overbroad requests for our donor data.",
    },
    {
      question: "Why do you need my address and PAN details?",
      answer:
        "In order to meet regulatory compliance requirements, we are required to collect the address and PAN details of all donors. Without the complete and accurate information, we will be unable to accept your donation.",
    },
    {
      question:
        "I signed up to become a member on IFF’s old tiers of membership. What happens to my membership?",
      answer:
        "IFF introduced its new tiers of membership in April 2023. However, we did not discontinue any of our previously existing memberships and you will continue to be charged each month for the amount that you had originally signed up for the remaining validity of your membership. If you wish to change your membership tier, reach out to donate@internetfreedom.in.",
    },
    {
      question: "Do you accept matching funds from my employer?",
      answer:
        "Yes, we would be happy to work with you to get your donation matched by your employer. However, due to regulatory compliance restrictions, we only accept donations from Indian companies. In case you wish to support us through a match donation from your employer, please write to us at donate@internetfreedom.in. ",
    },
    {
      question: "Why are you asking for recurring donations?",
      answer:
        "Victory on digital rights requires long term and strategic advocacy action. Recurring donations are the most reliable source of revenue and help us build a consistent and predictable capital flow to plan our expenses and build capacity accordingly. Each rupee counts towards internet freedom!",
    },
    {
      question: "What does my membership letter and card get me?",
      answer:
        "Your membership card and letter is a token of gratitude and personal recognition for your generous contribution. It gives you priority access to exclusive events and meetups and reserved seating at all IFF events.",
    },
    {
      question: "What is the IFF membership merchandise?",
      answer:
        "We send out member merchandise kits that include a set of laptop stickers, card games, mugs, and notebooks based on the level of support in regular batches every month. These goodies are not meant for sale and are sent as a token of our appreciation to our members.",
    },
    {
      question: "What are IFF quarterly calls and when will they take place?",
      answer:
        "We organise members' calls with IFF leadership, including the executive director and trustees, every quarter to discuss our work, fundraising, and the impact we have had in the previous quarter. These calls also give us an opportunity to listen to the thoughts and concerns of our supporters.",
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto responsive-container px-6 py-20">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            FAQs
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
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
                              aria-hidden="true"
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
                              aria-hidden="true"
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
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
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
    <div className="py-20 mx-auto max-w-4xl border-b space-y-6 text-gray-600">
      <span className="text-2xl font-bold leading-10 text-gray-900">
        Other Ways to Support Us
      </span>
      <p>
        Our community is helping us fight issues like mass surveillance,
        internet shutdowns and protecting the rights guaranteed by our
        constitution. It’s about acting with a sense of responsibility and care,
        as we address these challenging issues, devise solutions and take
        responsibility for our collective future. You can help us become a
        sustainable and autonomous organisation by making your contribution
        today.
      </p>
      <p>Here are other ways you can support us:</p>
      <ul className="list-disc list-inside">
        <li class="text-iff-orange">
          <span class="text-gray-600">Host birthday fundraisers (links)</span>
        </li>
        <li class="text-iff-orange">
          <span class="text-gray-600">Host match donations</span>
        </li>
        <li class="text-iff-orange">
          <span class="text-gray-600">Become an IFF Patron</span>
        </li>
        <li class="text-iff-orange">
          <span class="text-gray-600">Pledge a major donation</span>
        </li>
      </ul>
      <p>
        Start a conversation with us by reaching out to us at{" "}
        <a className="text-iff-orange" href="mailto:donate@internetfreedom.in">
          donate@internetfreedom.in
        </a>
      </p>
    </div>
  );
}
