import * as React from "react";
import PropTypes from "prop-types";
import { Layout } from "../components/common";

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

function TopSection() {
  return (
    <div className="bg-bg-black">
      <div className="px-4 py-6 md:py-16 md:text-lg  responsive-container">
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
          <span className="text-iff-orange">Transparency and Disclosures</span>
        </p>
        <div className="mt-6">
          <button className="btn">Donate</button>
          <button className="btn-secondary ml-4">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

function ImpactsAndProgress() {
  return (
    <div className="px-4 py-6 md:py-16 md:text-lg  border-b-2 text-gray-500 flex-col lg:flex-row gap-8 responsive-container flex">
      <div className="">
        <h2 className="text-subheading-2 mb-2">
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
        <h2 className="text-subheading-2 mb-2">
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
      <h1 className="text-subheading-1 mb-2">People at IFF</h1>
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
      <Interns />
      <Alumni />
      <Leadership />
    </div>
  );
}

function Avatar({ name, title, description = null }) {
  return (
    <div className="flex text-base">
      <img
        src={"/images/icons/avatar.svg"}
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
      <h1 className="text-subheading-2 pb-2 mb-6 border-b-2">Staff</h1>

      <div className="grid md:grid-cols-3 gap-5">
        <Avatar name={"Apar Gupta"} title={"Executive Director"} />
        <Avatar name={"Apar Gupta"} title={"Executive Director"} />
        <Avatar name={"Apar Gupta"} title={"Executive Director"} />
        <Avatar name={"Apar Gupta"} title={"Executive Director"} />
        <Avatar name={"Apar Gupta"} title={"Executive Director"} />
        <Avatar name={"Apar Gupta"} title={"Executive Director"} />
        <Avatar name={"Apar Gupta"} title={"Executive Director"} />
        <Avatar name={"Apar Gupta"} title={"Executive Director"} />
      </div>
    </div>
  );
}

function OfCounsels() {
  return (
    <div className="mt-12">
      <h1 className="text-subheading-2 pb-2 mb-6 border-b-2">Of-Counsels and Legal Fellows</h1>

      <div className="grid md:grid-cols-3 gap-5">
        <Avatar name={"Apar Gupta"} title={"Executive Director"} />
        <Avatar name={"Apar Gupta"} title={"Executive Director"} />
        <Avatar name={"Apar Gupta"} title={"Executive Director"} />
      </div>
    </div>
  );
}

function Interns() {
  return (
    <div className="mt-12">
      <h1 className="text-subheading-2 pb-2 mb-6 border-b-2">Interns</h1>

      <div className="grid md:grid-cols-3 gap-5">
        <Avatar name={"Apar Gupta"} title={"Executive Director"} />
        <Avatar name={"Apar Gupta"} title={"Executive Director"} />
        <Avatar name={"Apar Gupta"} title={"Executive Director"} />
        <Avatar name={"Apar Gupta"} title={"Executive Director"} />
      </div>
    </div>
  );
}

function Alumni() {
  return (
    <div className="mt-12">
      <h1 className="text-subheading-2 pb-2 mb-6 border-b-2">Alumni</h1>
      <div className="flex flex-wrap flex-col sm:flex-row	">
        {[...Array(10)].map((x, i) => {
          return (
            <div key={i} className="">
              <h3 className="text-subheading-3 mr-4 mb-2">Anushree Verma</h3>
            </div>
          );
        })}
      </div>
      <p className="mt-6 text-base">Work alongside the best in the digital rights sector</p>

      <button className="btn-secondary mt-4">
        Jobs & Internship
      </button>
    </div>
  );
}

function Leadership() {
  return (
    <div className="mt-12">
      <h1 className="text-subheading-2 pb-2 mb-6 border-b-2"> Leadership at IFF</h1>

      <div className="grid md:grid-cols-2 gap-y-10 gap-x-20">
        <Avatar
          name={"Apar Gupta"}
          title={"Executive Director"}
          description={
            "He is a lawyer and is the Asia Policy Director at Access Now. Raman was also one of the founders of the SaveTheInternet movement and advises IFF towards fulfilling its mission and objectives."
          }
        />
        <Avatar
          name={"Apar Gupta"}
          title={"Executive Director"}
          description={
            "He is a lawyer and is the Asia Policy Director at Access Now. Raman was also one of the founders of the SaveTheInternet movement and advises IFF towards fulfilling its mission and objectives."
          }
        />{" "}
        <Avatar
          name={"Apar Gupta"}
          title={"Executive Director"}
          description={
            "He is a lawyer and is the Asia Policy Director at Access Now. Raman was also one of the founders of the SaveTheInternet movement and advises IFF towards fulfilling its mission and objectives."
          }
        />
        <Avatar
          name={"Apar Gupta"}
          title={"Executive Director"}
          description={
            "He is a lawyer and is the Asia Policy Director at Access Now. Raman was also one of the founders of the SaveTheInternet movement and advises IFF towards fulfilling its mission and objectives."
          }
        />
        <Avatar
          name={"Apar Gupta"}
          title={"Executive Director"}
          description={
            "He is a lawyer and is the Asia Policy Director at Access Now. Raman was also one of the founders of the SaveTheInternet movement and advises IFF towards fulfilling its mission and objectives."
          }
        />{" "}
      </div>
    </div>
  );
}

