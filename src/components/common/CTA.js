import React from "react"
import { navigate } from "gatsby";

const CtaData = {
  title: `Donate to IFF`,
  description: `Help IFF scale up by making a donation for digital rights. Really, when it comes to free speech online, digital privacy, net neutrality and innovation — we got your back!`,
  plea: `You can also support us in many non monetary ways`
}

const CTA = () => {
  return (
    <div class="bg-gray-50 rounded-xl border border-gray-200 m-4">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h2 class="mb-4 text-2xl tracking-tight font-bold underline underline-offset-8 leading-tight text-gray-600">{CtaData.title}</h2>
          <p class="mb-6 text-gray-500 md:text-xl">{CtaData.description}</p>
          <button
            onClick={() => { navigate("/donate/") }}
            aria-label="Donate"
            class="bg-iff-orange hover:bg-iff-orange-700 text-white font-normal text-xl leading-6 not-italic py-2 px-4 rounded w-36 h-14"
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default CTA;
