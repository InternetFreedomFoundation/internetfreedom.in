import * as React from "react";
import { Layout } from "../components/common";
import { SEO } from "../components/seo";
import EmailCampaignWidget from "../components/emailCampaignWidget";
import faqs from "../../content/MIB-faq.json";
import { Disclosure } from "@headlessui/react";

const email_content = 'mailto: jsb-moib@gov.in?cc=info@internetfreedom.in&subject=%20Letter%20to%20MIB%20to%20protect%20freedom%20of%20expression&body=Dear%20sir%2C%0D%0A%0D%0AWe%20would%20like%20to%20thank%20MIB%20for%20initiating%20this%20consultation%20process.%20We%20request%20MIB%20to%20NOT%20publish%20my%20email%20address%20or%20any%20other%20personal%20information.%0D%0A%0D%0AWe%20are%20writing%20to%20you%20to%20offer%20our%20inputs%20on%20the%20%E2%80%98Broadcasting%20Services%20(Regulation)%20Bill%2C%202023%E2%80%99.%20We%20would%20like%20to%20express%20our%20opposition%20against%20the%20proposed%20inclusion%20of%20online%20news%20publishers%20and%20%E2%80%9COTT%E2%80%9D%20broadcasters%20under%20the%20same%20regulatory%20framework%20as%20the%20other%20traditional%20broadcasters%20such%20as%20cable%20tv%20and%20radio.%20Although%20detailed%20reasoning%20for%20our%20concerns%2C%20as%20per%20the%20prescribed%20clause-by-clause%20format%20is%20here%20(%20https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F12jaB5MBmyczDq8MI6vMtv97DuFX1FY-l57RQ_vT9jc8%2F%20)%20%2C%20we%20have%20summarised%205%20broad%20key%20concerns%20in%20the%20following%20points%3A%0D%0A%0D%0A1.%20Frictions%20in%20the%20consultation%20process%3A%20The%20draft%20bill%20as%20well%20as%20the%20accompanying%20explanatory%20note%20were%20only%20published%20in%20English%2C%20creating%20barriers%20for%20widespread%20public%20participation.%20To%20ensure%20an%20informed%20and%20meaningful%20consultation%20on%20this%20bill%2C%20which%20may%20have%20far%20reaching%20consequences%20on%20constitutional%20freedoms%2C%20the%20Ministry%20must%20publish%20relevant%20material%20in%20multiple%20regional%20languages%20and%20modes%20of%20media%2C%20and%20also%20conduct%20open-door%2C%20in-person%20consultations%20in%20different%20parts%20of%20the%20country.%20We%20hope%20that%20the%20Ministry%20follows%20additional%20healthy%20precedents%20for%20public%20consultations%2C%20including%20making%20the%20comments%20publicly%20available%20and%20allowing%20for%20counter-comments.%0D%0A%0D%0A2.%20Definitional%20ambiguity%20and%20over%20reliance%20on%20delegated%20legislation%3A%20Presence%20of%20vaguely%20or%20inadequately%20defined%2F%20undefined%20terms%20and%20instances%20of%20excessive%20delegation%20of%20rule-making%20may%20lead%20to%20uncertainty%20for%20the%20stakeholders%20and%20may%20prevent%20them%20from%20being%20fully%20informed%20so%20as%20to%20meaningfully%20engage%20in%20the%20consultation%20process.%20Ambiguous%20definitions%2C%20uncertainty%20over%20scope%20of%20application%2C%20and%20reliance%20on%20future%20rulemaking%20by%20the%20executive%20makes%20the%20Broadcasting%20Bill%20vague%2C%20overbroad%2C%20and%20worrisome%2C%20that%20is%20open%20for%20misuse%20through%20subjective%20and%20selective%20application.%0D%0A%0D%0A3.%20Threats%20to%20democratic%20functioning%20of%20media%3A%20The%20bill%20extends%20the%20Ministry%E2%80%99s%20regulatory%20ambit%20to%20any%20person%20who%20broadcasts%20news%20and%20current%20affairs%20programs%20through%20a%20digital%20medium%20(such%20as%20online%20paper%2C%20news%20portal%2C%20website%2C%20social%20media%20intermediary%2C%20or%20other%20similar%20medium).%20This%20provision%20will%20apply%20to%20any%20individual%2C%20and%20not%20just%20media%20companies%20or%20journalists%2C%20who%20chooses%20to%20share%20news%20as%20part%20of%20a%20%E2%80%98systematic%20business%2C%20professional%2C%20or%20commercial%20activity%E2%80%99.%20Concerns%20over%20how%20%E2%80%9Cnews%20and%20current%20affairs%E2%80%9D%20is%20currently%20defined%20under%20the%20bill%20and%20uncertainty%20over%20the%20scope%20of%20application%20of%20this%20Clause%20augment%20concerns%20around%20erosion%20of%20democratic%20principles%20of%20online%20free%20speech.%20This%20will%20threaten%20journalistic%20expression%20as%20well%20as%20a%20users%E2%80%99%20right%20to%20access%20multiple%2C%20diverse%20points%20of%20view%2C%20especially%20in%20the%20environment%20of%20high%20penalties%20for%20non-compliance%20with%20prescribed%20ethical%20codes%20and%20government%20orders.%0D%0A%0D%0A4.%20Risks%20of%20regulating%20online%20curated%20content%3A%20The%20Ministry%20has%20proposed%20the%20expansion%20of%20the%20regulatory%20framework%20currently%20applied%20to%20traditional%20broadcasters%20to%20%E2%80%9COTT%E2%80%9D%20broadcasters%20%5BFor%20the%20purposes%20of%20these%20comments%2C%20the%20term%20%E2%80%9Cbroadcasters%E2%80%9D%20will%20be%20used%20to%20mean%20%E2%80%9Cbroadcasters%20and%20broadcasting%20network%20operators%E2%80%9D%5D%2C%20in%20the%20absence%20of%20an%20elaborate%20reasoning%20or%20justification.%20The%20risks%20associated%20with%20applying%20stringent%20rules%20and%20codes%20to%20%E2%80%9COTT%E2%80%9D%20broadcasters%20include%2C%20but%20are%20not%20limited%20to%2C%20increase%20in%20financial%20and%20compliance%20burden%3B%20negative%20impact%20on%20user%20experience%2C%20choice%2C%20and%20even%20costs%20borne%20by%20the%20users%3B%20entry%20barriers%3B%20stifled%20innovation%3B%20and%20potential%20censorship%2C%20both%20imposed%20and%20self-applied.%0D%0A%0D%0A5.%20Disproportionate%20control%20retained%20by%20the%20Executive%3A%20The%20powers%20of%20the%20Union%20government%20with%20respect%20to%20the%20third%20tier%20in%20the%20regulatory%20structure%2C%20unreasonable%20reliance%20on%20future%20rulemaking%20powers%2F%20delegated%20legislation%2C%20as%20well%20as%20the%20inspection%20and%20penalty%20provisions%20(such%20as%20to%20prohibit%20operation%20in%20public%20interest)%2C%20create%20a%20skewed%20power%20dynamic.%20In%20light%20of%20the%20several%20documented%20instances%20of%20the%20Union%20government%20imposing%20restrictions%20and%20exercising%20ultimate%20discretion%20with%20the%20content%20published%20by%20%E2%80%9COTT%E2%80%9D%20broadcasters%20as%20well%20as%20news%20publishers%2C%20the%20MIB%20must%20refrain%20from%20creating%20overbroad%20provisions%20which%20empower%20the%20former%20with%20unbridled%20censorship%20powers%20and%20may%20impose%20restrictions%20of%20constitutional%20freedoms.%0D%0A%0D%0AIn%20addition%20to%20our%20comments%20on%20the%20draft%20bill%2C%20our%20principal%20recommendation%20to%20the%20Ministry%20is%20to%20withdraw%20the%20Broadcasting%20Services%20(Regulation)%20Bill%2C%202023%20in%20its%20entirety.%20We%20urge%20the%20Ministry%20to%20refrain%20from%20acting%20as%20a%20%E2%80%98moral%20compass%E2%80%99%20and%20to%20steer%20away%20from%20dictating%20modifications%20and%20deletions.%0D%0A%0D%0AThank%20you.%0D%0A';

const Index = () => {
    return (
        <Layout>
            <TopSection />
            <Content />
        </Layout>
    );
};

export default Index;

export const Head = () => (
    <SEO
        title={"Ask MIB to kill the bill and #LetUsChill"}
        description={"Hey! There’s yet another bill in town, targeting your favourite Netflix shows, YouTubers, and online news channels. It’s about to clamp down on our right to free expression —censoring everything from satire to inconvenient truths."}
        url={"https://letuschill.in/"}
        image={"https://content.internetfreedom.in/api/files/divco3ywedt9rpe/hdlw6oi0euufpac/bb23_1_epAWk4NL2R.jpg"}
    />
)

function TopSection() {
    return (
        <div className="bg-bg-black">
            <div className="px-4 py-6 md:py-32 space-y-5 responsive-container prose prose-invert">
                <h1>
                    Ask MIB to kill the bill and #LetUsChill
                </h1>
                <div className="text-gray-300">
                    <p>
                        Hey! There’s yet another bill in town, targeting your favourite Netflix shows, YouTubers, and online news channels. It’s about to clamp down on our right to free expression —censoring everything from satire to inconvenient truths. The bill aims to bring “OTT” broadcasting services, such as Netflix, Disney Hotstar, Jio cinema under its regulatory ambit, which originally only governed the traditional broadcasters such as Cable TV and Radio. Time to act! Join us, push back against this bill. Tell the MIB: #LetUsChill
                    </p>
                </div>

            </div>
        </div>
    );
}

function Content() {
    return (

        <div className="px-4 py-6 md:py-16 prose md:prose-xl hover:prose-headings:underline underline-offset-4 hover:prose-a:text-iff-orange responsive-container">
            <h1>Time to act! Tell the MIB: #LetUsChill </h1>
            <EmailCampaignWidget
                title="Letter to MIB"
                campaign="MIB-LetUsChill-DEC-2023"
                campaignClosed={true}
                emailContent={email_content}
            />
            <p className="prose-sm">
                IFF will have a copy of the email you send. This will help us keep a track of how many of these emails are sent, which we wish to use for our broader advocacy. Our <a href="https://internetfreedom.in/privacy-policy/#:~:text=We%20do%20not%20rent%20or,government%20request%20to%20access%20it.">Privacy Policy </a> contains further information on how/ if we collect, store, and use your data. We are not storing your information in any other form.
            </p>

            <p>
                [When you click on the button above, an email compose box should open on your device. Relevant details, including the body of the email,  recipients, and subject line, will already be filled out. If you wish to add your name and affiliation at the bottom of the email body, please do so. <strong>If the above method doesn’t work for you, please find the details for sending the email <a href="https://docs.google.com/document/d/1s1oB2-3Wy0yzt6xiQPhxSSSzbY1q2pSs76ghgG5k2_w/edit?usp=sharing">here</a></strong>]
            </p>
            <FaqSection />
            <p>
                First they came for radios, then they came for television, then cinemas, and now they are coming for your favourite Netflix shows, YouTubers and independent news channels. The Ministry of Information and Broadcasting, in its recently released draft Broadcasting Bill, has proposed the inclusion of “OTT” broadcasting services, such as Netflix, Disney Hotstar, Jio cinema under its regulatory ambit, which originally only governed the traditional broadcasters such as Cable TV and Radio.In what seems to be an attempt to stifle journalistic speech and expression, the Bill extends regulatory compliance to individuals who broadcast news and current affairs programs through a digital medium, including a website or a social media platform.

                <p>
                    Every broadcaster covered under MIB’s regulatory ambit will be required to comply with a Code prescribed by the Union government, failure to do so which will lead to monetary penalties or even imprisonment. The application of such ethical codes on broadcasters, whether an OTT platform or a journalist, will have serious consequences for online free speech and artistic creativity. We may soon see speech expressing satire, irony, sarcasm, dissent, anger, even maybe portrayals of facts and hard-hitting truth, that may not be palatable to the Union or politically influential and powerful communities, being censored or prohibited. Given MIB’s historical baggage with paternalistic regulation, moral policing, and censorship of curated content as well as news media, this bill may very well alter the digital space, for creators and consumers alike.
                </p>
                <p>
                    Stop the government from moral policing your viewing choices online. Stop the government from censoring independent news analysis creators. We are asking MIB to kill the bill before it changes the course of expression of speech online. Write to MIB today and ask them to #LetUsChill!
                </p>
            </p>
            <div>
                <h2>Here's a quick resource list while you are at it:</h2>
                <ul>
                    <li>
                        <a href="https://internetfreedom.in/broadcast-services-bill-first-read/">
                            IFF's First Read of the Bill
                        </a>
                    </li>
                    <li>
                        <a href="https://www.thehindu.com/opinion/lead/old-censorship-on-a-new-medium/article67576676.ece">
                            Old censorship on a new medium by Apar Gupta
                        </a>
                    </li>
                    <li>
                        <a href="https://indianexpress.com/article/opinion/columns/ease-of-control-9028225/">
                            Regulating OTT: Draft Broadcasting Regulation Bill may be an attempt to control digital infrastructure by Smith Mehta
                        </a>
                    </li>
                    <li>
                        <a href="https://www.medianama.com/2023/11/223-broadcasting-services-regulation-bill-2023-streaming-services/">
                            Here's How The Broadcasting Services Regulation Bill, 2023, Impacts Streaming Services by Kamya Pandey
                        </a>
                    </li>
                    <li>
                        <a href="https://theprint.in/opinion/indias-digital-economy-isnt-broken-what-is-ib-ministry-fixing-by-bringing-ott-under-it/1855448/">
                            India's digital economy isn't broken. What is I&B ministry fixing by bringing OTT under it? by Varun Ramdas and Srishti Joshi
                        </a>
                    </li>
                    <li>
                        <a href="https://thewire.in/government/control-all-or-delete-the-draft-broadcast-bill-is-a-blueprint-for-censorship">
                            Control + All or Delete: The Draft Broadcast Bill Is a Blueprint for Censorship by Seema Chishti
                        </a>
                    </li>
                    <li>
                        <a href="https://scroll.in/article/1059881/why-indias-new-draft-broadcast-bill-has-raised-fears-of-censorship-and-press-suppression">
                            Why India's new draft broadcast bill has raised fears of censorship and press suppression by Vineet Bhalla
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=xcrbfkv--io">
                            Video | this new law can shut down youtube journalists by meghnerd
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=_OttnH7r-Xw">
                            Video | Implications of the Broadcasting Services (Regulation) Bill, 2023 by IFF
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function FaqSection() {
    return (
        <div className="bg-white">
            <div className="mx-auto responsive-container px-6 py-20">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                        How does the Broadcasting Bill, 2023 affect you?
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