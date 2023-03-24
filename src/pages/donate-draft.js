import * as React from "react";
import PropTypes from "prop-types";
import { Layout } from "../components/common";

const Index = () => {
  return (
    <Layout>
      <TopSection />
      <OurPrinciples />
    </Layout>
  );
};

export default Index;

function TopSection() {
  return (
    <div className="bg-bg-black">
      <div className="px-4 py-6 md:py-16 md:text-lg responsive-container h-[80vh]">
        <h1 className="text-white text-2xl font-semibold md:text-3xl"></h1>
        <p className=" "></p>

        <div className="bg-bg-black min-w-full">
          <div id="header-card" className="mt-16 mb-24 max-w-3xl">
            <h1 className="text-white text-3xl leading-7 not-italic">
              Support Our Work
            </h1>
            <p id="site-banner-desc" className="text-gray-400 mt-3">
              The Internet Freedom Foundation is committed to defending and
              expanding fundamental rights as India gets more digitally
              connected. As part of this mandate, we strategically engage with
              courts, regulators, and other legal institutions across India. On
              this page, we list principles which guide our litigation advocacy
              and provide details of cases in which we have acted as parties,
              collaborators or our retained lawyers have acted in the capacity
              of counsel.
            </p>
          </div>
          <div id="donate-widget" className="xl:w-[942px] xl: h-[438px]">
            <div class="text-sm font-medium text-gray-500">
              <Tabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(2);
  return (
    <>
      <div className="flex flex-wrap">
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

          <div className="relative flex flex-col min-w-0 break-words bg-bg-dark-grey w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={openTab === 1 ? "block" : "hidden"}
                  id="One time"
                >
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div
                  className={openTab === 2 ? "block" : "hidden"}
                  id="Monthly"
                >
                  <Card
                    tiers={[
                      {"name":"Alladi Krishnaswamy Ayyar", "price": 1800, "perks":"Ut enim ad minim veniam, quis nostrud exercitation  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
                      {"name":"Bakshi Tek Chand", "price": 2500, "perks":"Ut enim ad minim veniam, quis nostrud  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
                      {"name":"Begum Aizaz Rasul", "price": 800, "perks":"Ut enim ad minim veniam,  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
                      {"name":"Jawahar Lal Nehru", "price": 10000, "perks":"Ut enim ad  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
                      {"name":"Dakshayani Velayudhan", "price": 2800, "perks":"Ut  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
                    
                    ]}
                  />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="Annual">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ tiers }) => {
  const [tier, setTier] = React.useState(0);
  return (
    <div className="flex flex-row mb-4">
      <div className="w-3/4" id="picker">
        <div className="flex flex-col">
          <div className="flex flex-row flex-wrap">
            {tiers.map(function (d, idx) {
              return (
                <div className="lg:w-1/3 my-3"
                  onClick={(e) => {
                    setTier(idx);
                  }}   
                >
                  <input
                    id={idx}
                    name="ripple"
                    type="radio"
                    className="accent-iff-orange"
                    checked = {tier === idx}
                    
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
            <p className="font-bold text-white">{tiers[tier]['name']} membership perks</p>
            <p className="">{tiers[tier]['perks']}</p>
          </div>
        </div>
      </div>
      <div className="w-1/4 ml-10 m-6 " id="card">
        <p className="my-2">Membership</p>
        <p className="font-bold text-white text-sm my-2">{tiers[tier]['name']} </p>
        <p className="text-3xl text-white my-2">₹ {tiers[tier]['price']} <span className="text-xs"> /month</span> </p>
        <button className="btn my-4">Donate</button>
      </div>
    </div>
  );
};
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

