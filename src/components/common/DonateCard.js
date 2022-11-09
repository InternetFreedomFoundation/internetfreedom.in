import React from "react"

const localData = {
  title: `Donate`,
  description: `Help IFF scale up by making a donation for digital rights. Really, when it comes to free speech online, digital privacy, net neutrality and innovation — we got your back!`,
  plea: `You can also support us in many non monetary ways`
}
const DonateCard = () => {
    return (
        <div className="bg-bg-black min-w-full">
          <div id="header-card" className="mt-16 ml-96 mb-24">
            <h1 className="text-white text-3xl leading-7 not-italic max-w-lg">{localData.title}</h1>
            <p id="site-banner-desc" className="my-4 max-w-lg text-white text-xl leading-6 not-italic">{localData.description}</p>
            <p id="site-banner-desc" className="my-4 max-w-lg text-body-grey leading-6 not-italic mt-3.5 mb-14">{localData.plea}</p>
            <button class="border border-iff-orange hover:text-white text-iff-orange font-normal text-xl leading-6 not-italic py-2 rounded w-36 h-14">Know more</button>
          </div>
          <div id="donate-widget" className="ml-72 bg-bg-dark-grey w-[530px] h-[438px]">
            <div class="text-sm font-medium text-center text-gray-500">
                <ul class="flex flex-wrap -mb-px bg-bg-light-grey">
                    <li class="ml-16 mr-2">
                        <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-body-grey hover:border-gray-300">One time</a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="inline-block p-4 text-iff-orange rounded-t-lg border-b-2 border-iff-orange active dark:iff-orange" aria-current="page">Monthly</a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-body-grey hover:border-gray-300">Annual</a>
                    </li>
                   
                </ul>
            </div>
            <p className="text-white">siteConfig</p>
          </div>
            
        </div>
    );
};

export default DonateCard;