import * as React from "react";
import { Layout } from "../components/common";
import people from "../../content/people.json";
import { Link, navigate } from "gatsby";
import { SEO } from "../components/seo";

const Index = () => {
  return (
    <Layout>
      <TopSection />
      <ImpactsAndProgress />
      <PeopleAtIff />
    </Layout>
  );
};

export default Index;

export const Head = () => (
  <SEO
    title={"About Internet Freedom Foundation"}
    description={"We fight with courage and strategy to advance liberty, equality, fraternity and social justice in the digital age."}
    url={"https://www.internetfreedom.in/about/"}
  />
)

function TopSection() {
  return (
    <div className="bg-bg-black">
      <div className="px-4 py-6 md:py-32 md:text-lg space-y-5 responsive-container">
        <h1 className="text-white text-2xl font-semibold md:text-3xl">
          Community powered and funded
        </h1>
        <p className=" text-gray-400 mt-3">
          At the Internet Freedom Foundation, we fight with courage and strategy
          to advance liberty, equality, fraternity and social justice in the
          digital age.
        </p>
        <p className=" text-gray-400 mt-2">
          We sustain IFF on a large community of volunteers and donations by
          ordinary Indians like you. IFF makes monthly disclosures and quarterly
          calls and is rated by Guidestar and Credibility Alliance. Join IFF and
          help support people over power and platforms.
        </p>
        <p className=" text-gray-400 mt-2">
          We follow radical{" "}
          <Link to= "/transparency-and-finances/" className="text-iff-orange">Transparency and Disclosures</Link>
        </p>
        <div className="mt-6">
          <button
            onClick={() => { navigate("/donate/") }}
            className="btn w-full text-xl font-light md:w-36  h-14">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}

function ImpactsAndProgress() {
  return (
    <div className="px-4 py-6 md:py-16 md:text-lg  border-b-2 text-gray-500 flex-col lg:flex-row gap-8 responsive-container flex">
      <div className="">
        <h2 className="text-subheading-2 mb-4">
          India’s digital rights under threat
        </h2>
        <p>
          While India is racing towards a tech revolution, there is a growing
          concentration of power and profit that is eroding our fundamental
          rights. We are witnessing a rise in web censorship, internet
          shutdowns, surveillance and fresh challenges by artificial
          intelligence. There is no denying the simple fact: our digital
          liberties are under constant threat. Technology today is often being
          seen not only as a friend, but as a Big Brother! It’s time to fight
          back.
        </p>
        <button className="btn-secondary mt-4">IFF’s impact</button>
      </div>

      <div className="">
        <h2 className="text-subheading-2 mb-4">
          Public advocacy, public victories
        </h2>
        <p>
          We are born out of the net neutrality, SaveTheInternet.in movement.
          Our campaigning roots tie in with policy expertise. IFF’s staff and
          volunteers weave digital literacy campaigns and special projects. Such
          advocacy channels the power of an informed community towards
          government institutions. When that fails, we have a proven record of
          strategic litigation. We achieve victories with collaboration,
          strategy, and rigour.
        </p>
        <button className="btn-secondary mt-4">IFF’s progress</button>
      </div>
    </div>
  );
}

function PeopleAtIff() {
  return (
    <div className="px-4 py-6 md:py-16 md:text-lg text-gray-500 responsive-container">
      <h1 className="text-subheading-1 mb-5">People at IFF</h1>
      <p>
        We are a group of fierce organisers, campaigners, designers, lawyers,
        and technologists who work on a broad range of digital rights issues.
        Our staff is small (yet, brave). IFF strengthens its work with
        principles of collaboration and unleashing the power of being a
        community-centric organisation. Our most important work comes from the
        labour and initiative of volunteers
      </p>
      <Staffs />
      <OfCounsels />
      <Leadership />
    </div>
  );
}

function Avatar({ name, title, description = null }) {
  return (
    <div className="flex text-base">
      <img
        src={"/images/icons/avatar.svg"}
        loading="lazy"
        className="object-cover w-10 h-10 mr-3 mt-1 rounded-full z-10 border-none outline-none"
      />
      <div>
        <h3 className="text-subheading-3">{name}</h3>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Staffs() {
  return (
    <div className="mt-12">
      <h1 className="text-subheading-2 pb-2 mb-6 border-b">Staff</h1>

      <div className="grid md:grid-cols-3 gap-5 gap-y-10">
        {
          people.Staff.map((data) => {
            return <Avatar name={data.name} title={data.title} />
          }
          )
        }
      </div>
    </div>
  );
}

function OfCounsels() {
  return (
    <div className="mt-12">
      <h1 className="text-subheading-2 pb-2 mb-6 border-b">
        Of-Counsels and Legal Fellows
      </h1>

      <div className="grid md:grid-cols-3 gap-5 gap-y-10">
        {
          people.councels.map((data) => {
            return <Avatar name={data.name} title={data.title} />
          }
          )
        }
      </div>
    </div>
  );
}

function Leadership() {
  return (
    <div className="mt-12">
      <h1 className="text-subheading-2 pb-2 mb-6 border-b">
        {" "}
        Leadership at IFF
      </h1>

      <div className="grid md:grid-cols-2 gap-y-10 gap-x-20">
        {
          people.leadership.map((data) => {
            return <Avatar name={data.name} title={data.title} description={data.desc} />
          }
          )
        }
      </div>
    </div>
  );
}
