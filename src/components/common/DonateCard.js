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
            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px">
                    <li class="mr-2">
                        <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Profile</a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500" aria-current="page">Dashboard</a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Settings</a>
                    </li>
                   
                </ul>
            </div>
            <p className="text-white">siteConfig</p>
          </div>
            
        </div>
    );
};

export default DonateCard;