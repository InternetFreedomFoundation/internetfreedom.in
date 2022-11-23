import * as React from "react";
import PropTypes from "prop-types";
import { Layout } from "../components/common";

const Index = () => {
  return (
    <Layout>
      <TopSection />
      <ImpactsAndProgress />
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
    <div className="px-4 py-6 md:py-16 md:text-lg text-gray-500 flex-col lg:flex-row gap-8 responsive-container flex">
      <div className="">
        <h2 className=" text-gray-900 text-xl md:text-2xl font-semibold mb-2">
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
        <h2 className="text-gray-900 text-xl md:text-2xl font-semibold mb-2">
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

