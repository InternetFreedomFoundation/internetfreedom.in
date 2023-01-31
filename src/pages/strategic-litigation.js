import * as React from "react";
import PropTypes from "prop-types";
import { Layout } from "../components/common";

const Index = () => {
  return (
    <Layout>
      <TopSection />
      <OurPrinciples />
      <LatestUpdates />
      <LegalDocket />
    </Layout>
  );
};

export default Index;

function TopSection() {
  return (
    <div className="bg-bg-black">
      <div className="px-4 py-6 md:py-16 md:text-lg responsive-container">
        <h1 className="text-white text-2xl font-semibold md:text-3xl">
          Strategic Litigation
        </h1>
        <p className=" text-gray-400 mt-3">
          The Internet Freedom Foundation is committed to defending and
          expanding fundamental rights as India gets more digitally connected.
          As part of this mandate, we strategically engage with courts,
          regulators, and other legal institutions across India. On this page,
          we list principles which guide our litigation advocacy and provide
          details of cases in which we have acted as parties, collaborators or
          our retained lawyers have acted in the capacity of counsel.
        </p>

        <div className="mt-6">
          <button className="btn">Donate</button>
          <button className="btn-secondary ml-4">Subscribe</button>
        </div>
      </div>
    </div>
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

function LegalDocket() {
  return (
    <div className="px-4 py-6 md:py-16 md:text-lg text-gray-500 responsive-container">
      <h1 className="text-subheading-1 mb-4">Our legal docket</h1>
      <p className="text-base mb-3">
        To understand the full nature of legal challenges and actions that
        relate to digital rights litigation in India, please see IFF’s &nbsp;
        <a className="text-iff-orange" href="">
          case docket and past litigation
        </a>{" "}
        to learn more about our previous and ongoing advocacy engagements.
      </p>
      <ActiveDockets />
      <PastDockets />
    </div>
  );
}

function ActiveDockets() {
  return (
    <div className="responsive-container my-3">
      <h1 className="text-iff-orange text-subheading-2">Active Dockets:</h1>
      <p className="text-sm my-4 text-gray-400">
        Currently, we are engaged in the following cases:
      </p>
      <div className="flex flex-wrap">
        <div class="w-full lg:w-1/2 py-3 pr-3">
          <DocketCard
            court={"Supreme Court"}
            name={
              "Antony Clement Rubin v. Union of India [T.C. (C) No. 189 of 2020]"
            }
            role={"Intervenor"}
            issue={"Anonymity, Encryption, Intermediary Liability"}
            link={"#"}
          />
        </div>
        <div class="w-full lg:w-1/2  py-3 pr-3">
          <DocketCard
            court={"Supreme Court"}
            name={
              "Antony Clement Rubin v. Union of India [T.C. (C) No. 189 of 2020]"
            }
            role={"Intervenor"}
            issue={"Anonymity, Encryption, Intermediary Liability"}
            link={"#"}
          />
        </div>
        <div class="w-full lg:w-1/2  py-3 pr-3">
          <DocketCard
            court={"Supreme Court"}
            name={
              "Antony Clement Rubin v. Union of India [T.C. (C) No. 189 of 2020]"
            }
            role={"Intervenor"}
            issue={"Anonymity, Encryption, Intermediary Liability"}
            link={"#"}
          />
        </div>
        <div class="w-full lg:w-1/2  py-3 pr-3">
          <DocketCard
            court={"Supreme Court"}
            name={
              "Antony Clement Rubin v. Union of India [T.C. (C) No. 189 of 2020]"
            }
            role={"Intervenor"}
            issue={"Anonymity, Encryption, Intermediary Liability"}
            link={"#"}
          />
        </div>
        <div class="w-full lg:w-1/2 py-3 pr-3">
          <DocketCard
            court={"Supreme Court"}
            name={
              "Antony Clement Rubin v. Union of India [T.C. (C) No. 189 of 2020]"
            }
            role={"Intervenor"}
            issue={"Anonymity, Encryption, Intermediary Liability"}
            link={"#"}
          />
        </div>
        <div class="w-full lg:w-1/2 py-3 pr-3">
          <DocketCard
            court={"Supreme Court"}
            name={
              "Antony Clement Rubin v. Union of India [T.C. (C) No. 189 of 2020]"
            }
            role={"Intervenor"}
            issue={"Anonymity, Encryption, Intermediary Liability"}
            link={"#"}
          />
        </div>
        
      </div>
    </div>
  );
}

function PastDockets() {
  return (
    <div className="responsive-container my-3">
      <h1 className="text-iff-orange text-subheading-2">Past Dockets:</h1>
      <p className="text-sm my-4 text-gray-400">
      We have previously been involved in the following matters:
      </p>
      <div className="flex flex-wrap">
        <div class="w-full lg:w-1/2 py-3 pr-3">
          <DocketCard
            court={"Supreme Court"}
            name={
              "Antony Clement Rubin v. Union of India [T.C. (C) No. 189 of 2020]"
            }
            role={"Intervenor"}
            issue={"Anonymity, Encryption, Intermediary Liability"}
            link={"#"}
          />
        </div>
        <div class="w-full lg:w-1/2  py-3 pr-3">
          <DocketCard
            court={"Supreme Court"}
            name={
              "Antony Clement Rubin v. Union of India [T.C. (C) No. 189 of 2020]"
            }
            role={"Intervenor"}
            issue={"Anonymity, Encryption, Intermediary Liability"}
            link={"#"}
          />
        </div>
        <div class="w-full lg:w-1/2  py-3 pr-3">
          <DocketCard
            court={"Supreme Court"}
            name={
              "Antony Clement Rubin v. Union of India [T.C. (C) No. 189 of 2020]"
            }
            role={"Intervenor"}
            issue={"Anonymity, Encryption, Intermediary Liability"}
            link={"#"}
          />
        </div>
        <div class="w-full lg:w-1/2  py-3 pr-3">
          <DocketCard
            court={"Supreme Court"}
            name={
              "Antony Clement Rubin v. Union of India [T.C. (C) No. 189 of 2020]"
            }
            role={"Intervenor"}
            issue={"Anonymity, Encryption, Intermediary Liability"}
            link={"#"}
          />
        </div>
        <div class="w-full lg:w-1/2 py-3 pr-3">
          <DocketCard
            court={"Supreme Court"}
            name={
              "Antony Clement Rubin v. Union of India [T.C. (C) No. 189 of 2020]"
            }
            role={"Intervenor"}
            issue={"Anonymity, Encryption, Intermediary Liability"}
            link={"#"}
          />
        </div>
        <div class="w-full lg:w-1/2 py-3 pr-3">
          <DocketCard
            court={"Supreme Court"}
            name={
              "Antony Clement Rubin v. Union of India [T.C. (C) No. 189 of 2020]"
            }
            role={"Intervenor"}
            issue={"Anonymity, Encryption, Intermediary Liability"}
            link={"#"}
          />
        </div>
        
      </div>
    </div>
  );
}

function DocketCard({ court, name, role, issue, link }) {
  return (
    <div className="text-sm border border-gray-200 rounded-md p-3">
      <p className="mb-2 font-bold">{court}</p>
      <p className="text-iff-orange mb-2">{name}</p>
      <p className="mb-2"><span className="font-bold">IFF's Role:</span> {role}</p>
      <p className="mb-2"><span className="font-bold">Issue:</span> {issue}</p>
      <a href={link} className="text-iff-orange underline">Download Document</a>
    </div>
  );
}
