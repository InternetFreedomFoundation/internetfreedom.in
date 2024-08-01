import * as React from "react";
import { Layout } from "../components/common";
import { SEO } from "../components/seo";
import faqs from "../../content/MIB-faq.json";
import { Disclosure } from "@headlessui/react";


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
        image={"https://content.internetfreedom.in/api/files/divco3ywedt9rpe/w5ptvc31qdmz4fw/how_does_this_affect_your_favourite_creators_3Z4jRlE8rS.png?token="}
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
                        Hey, remember the Broadcasting Bill, 2023 - it has made a comeback except it is now worse! MIB has been (secretly) revising the Bill - what has been consistent is that the Bill will target your favourite online curated (Netflix and Hotstar) shows and your most reliable content creators, including those sharing news(!) on online platforms (YouTube, Instagram, & such others). The Bill will clamp down on our right to free expression—giving the Union government powers to censor content they find unpalatable. The revised, 2024 version of the Bill (which MIB has shared with only a few industry members) will impose a Code of Conduct similar to one applicable to Cable TV broadcasters on any news content creators who monetise their content as well as creators who use skill/expertise (Ambiguity Alert).
                        <br />
                        <br />
                        It is time AGAIN to act! Join us, push back against this bill. Tell the MIB: #KillTheBill & #LetUsChill
                    </p>
                </div>

            </div>
        </div>
    );
}

function Content() {
    return (

        <div className="px-4 py-6 md:py-16 prose md:prose-xl hover:prose-headings:underline underline-offset-4 hover:prose-a:text-iff-orange responsive-container">
            <h2>A quick update from 2024: Plot twist, but the rights-infringing kind</h2>
            <p>
                If you think the Broadcasting Bill, 2023 shared for public consultation is bad, wait till you hear what the Ministry has been up to. The MIB has conducted 4(!!) <a href="https://www.hindustantimes.com/india-news/confusion-persists-over-digital-news-content-in-proposed-broadcasting-bill-101720725258677.html">closed door meetings</a> (that has been reported upon so far) with selective industry representatives, without representation from civil society, journalists, or other key stakeholders. Further, each shared copy of the revised bill bears a watermark across every page that is unique to the stakeholder so that the MIB can trace leaks. Stakeholders were also asked to give an undertaking that they would not share the Bill further (a minute please… we’re left speechless).
            </p>
            <h3>Consultations cannot be exclusive!</h3>


            <p>
                Ministerial deliberations serve to inform the government about the key regulatory and policy issues, and thus should be attended by stakeholders representing diverse citizen interests and perspectives. We <a href="https://content.internetfreedom.in/api/files/divco3ywedt9rpe/pmm8vyid1gq2mos/iff_2024_052_letter_requesting_public_consultation_for_revised_broadcasting_bill_12_07_6w8mCPP6S8.2024.pdf">wrote</a> to them demanding a broad-based, public consultation on the revised Bill given its grave implications.
            </p>
            <h3>Revised Bill, Renewed Threats</h3>


            <p>
                As per the revisions, individuals posting ‘news and current affairs’ may now be considered as ‘Digital News Broadcasters’ and may become subject to a ‘Code of Conduct’ (read Code of Content Policing) similar to the one applicable to cable TV broadcasters (that’s great because news journalism on TV is thriving).
            </p>
            <p>
                The revised bill reportedly introduces definitions for “professional” & “systematic activity”. However, they are so ambiguous & vague that they don’t alleviate our concerns & instead amplify them - prompting us to ask if we (IFF) & YOU, as a commentator on current affairs, will end up getting covered under the Bill.
            </p>
            <p>
                The revised definition of “news and current affairs programmes” will reportedly now also include ‘texts’! Oh and lets not forget - the Bill lays down extensive penalties for platforms for failing to take down offending content, including potential loss of safe harbour privileges – this would mean direct liability for third-party content for platforms like Twitter, Instagram, Reddit, etc.
            </p>
            <p>
                You can see why we’re worried. However, there’s still time!! The Bill, with all of its changes, is yet to go through the Union Cabinet in order to be tabled in Parliament. Amplify & engage - ask MIB to #KillTheBill.
            </p>
            <div>
                <h2>How can you help?</h2>


                <ol>
                    <li><strong>Participate in the social media storm, voice your concerns against this bill,</strong></li>
                    <ol>
                        <li>Using <strong>#KillTheBill #ContentBachao</strong></li>
                        <li>Tag the ministry’s handle  </li>
                        <ul>

                            <li>Twitter: @MIB_India</li>

                            <li>Instagram: @mib_india</li>
                            <li>Refer to the template tweets/graphics below:
                                <p>
                                    <em>Folder: <a href="https://drive.google.com/drive/folders/1MzLBtR8ibCdVAvQuqdCrV4hyHGEBB-FA">Broadcasting Bill | Social media storm</a></em>
                                </p>
                            </li>
                        </ul>
                        <li>Tag your MPs </li>
                    </ol>
                    <li><strong>Write to your MPs and DEMAND that they speak out. </strong></li>
                    <ul>

                        <li>IFF has put together a brief explainer on the developments and possible interventions your MPs can do, both inside and outside the parliament.</li>
                        <p>

                            <em>PDF:</em> <strong><a href="https://drive.google.com/file/d/1H1jM_b8Cljxt-JgjDnADDkKdjeRXrBq0/view?usp=sharing">Explainer for MPs</a></strong>
                        </p>

                        <li>Use this link to find your MPs email address.</li>
                        <ul>

                            <li><a href="https://sansad.in/ls/members">https://sansad.in/ls/members</a></li>

                            <li><a href="https://sansad.in/rs/members">https://sansad.in/rs/members</a></li>
                        </ul>
                    </ul>

                    <li><strong>Help us sustain the work we do! </strong>
                        <p>

                            Become an IFF member today and stand up for your digital rights.
                        </p></li>
                    <li><strong>Sign the open letter led by creators</strong>
                        <p>

                            As a creator, if you want to make your voice heard and engage with MIB, join other creators in signing <a href="https://docs.google.com/forms/d/e/1FAIpQLSecW_bDTbiSHe9upQZbNJnzTsVX8Ab7T_SZL532ccGR2ce6OQ/viewform">this open letter</a> addressed to the Ministry.
                        </p></li>

                </ol>
            </div>

            <h2>What are we doing about this?</h2>
            <ol>
                <li>Our public advocacy efforts on the Bill, since the day it was released to
                    the public, have been incessant. We kickstarted the #LetUsChill campaign
                    prompting thousands of you to write to MIB urging them to ‘kill the bill’, which
                    included launching this website. As the list of who can be regulated under the
                    Bill keeps ominously expanding, we have been identifying affected communities
                    and reaching out to them with advocacy strategies. We have been joining forces
                    with content creators to aggressively push back against the revised Bill and the
                    secrecies around it. We will be organising a social media storm on Thursday,
                    August 1, 2024 to increase awareness and pressure using the tags #KillTheBill
                    #ContentBachao. Alongside MIB, participants are urged to publicly tag and invite
                    Members of Parliament to the discussion too.
                </li>
                <li><strong>Letters to MIB</strong>   </li>
                <ol>
                    <li>In February 2024, we <a
                        href="https://drive.google.com/file/d/1UBiA0S2uzKbtAU5BGTyEqxJPhCxiA1kF/view?usp=sharing">wrote </a>
                        to MIB requesting them to make all responses received during the public
                        consultation process on the draft 2023 Bill publicly available on their website
                        (with personal information of responders redacted), and allow stakeholders to
                        send counter comments.</li>
                    <li>In March 2024, we <a
                        href="https://drive.google.com/file/d/18Bp0K_eC5Z_2_fCz7t4ca_CVIW0Vanrg/view?usp=sharing">engaged </a>
                        with the Standing Committee on Communications and Information Technology (IT) on
                        their 56th report ‘Regulation of Cable Television in India’ relating to action
                        taken by MIB, expressing our opposition to the Bill.   </li>
                    <li>In April 2024, upon being asked by MIB if our comments on the Bill can be
                        made public under the Right to Information (“RTI”) Act, we <a
                            href="https://drive.google.com/file/d/1J25QPGV07B_7TgQQjBo4ZtFwo0lrPVNr/view?usp=sharing">provided </a>
                        our consent.   </li>
                    <li>Simultaneously, we <a
                        href="https://drive.google.com/file/d/1gZ8xaLCgo81vteW8jFdVNLAUn2Zu9CJz/view?usp=sharing">wrote </a>
                        to MIB noting that while seeking consent of stakeholders before sharing their
                        response under the RTI Act is appreciated, best practice dictates that MIB must
                        proactively publish comments publicly on their website.   </li>
                    <li>In July 2024, noting the circulation of a new revised draft Bill, we <a
                        href="https://drive.google.com/file/d/1SaVT-3eOGY3wsykWhmvK5VxXVXcIf91L/view?usp=sharing">wrote </a>
                        to MIB urging them to make this version publicly available and open it for
                        meaningful public consultation.</li>
                </ol>
                <li>Alongside advocacy and engagement, we have been relying on the RTI Act to
                    glean information about stakeholders and their comments to the Bill. In February
                    2024, we filed an <a
                        href="https://drive.google.com/file/d/1LTvYQ8qu9ppBGRAbbyX-Wy3Z_O3_CzM2/view?ref=static.internetfreedom.in">RTI
                        request</a> with MIB, seeking copies of responses received during the public
                    consultation period (with personal information of responders redacted). After
                    some friction and resistance from MIB, we received a limited set of responses in
                    April 2024 (we will be publishing an analysis soon). More recently, on July 29,
                    2024, we filed an <a
                        href="https://docs.google.com/document/d/1YHYXhR1akx2CAiyDMiW422M2tCnFqewPZYx6vWwaee8/edit?usp=sharing">RTI
                        request</a> seeking information on the private meetings convened by MIB on the
                    revised draft, including the number, dates, participants, agendas, submissions,
                    and outcome documents related to each meeting. We also asked MIB why the 2024
                    version has not been made public, and if there are plans to open it up for
                    public consultation.<strong> </strong>   </li>
                <li>We have been engaging with Members of Parliament and urging them to express
                    their opposition against the Bill in all its forms. To this effect, we have
                    compiled a <a
                        href="https://drive.google.com/file/d/1H1jM_b8Cljxt-JgjDnADDkKdjeRXrBq0/view?usp=sharing">comprehensive
                        explainer</a> for MPs decoding the harms of the Bill and the threats such a
                    regime will pose to Constitutional free speech.</li>
            </ol>

            <div>
                <h2>Reading lists and resources </h2>
                <ol>
                    <li>Draft Broadcasting Services (Regulation) Bill, 2023 (<a
                        href="https://mib.gov.in/sites/default/files/Public%20Notice_0.pdf?ref=static.internetfreedom.in">link</a>)
                    </li>
                    <li>IFF’s First Read on the Broadcasting Bill, 2023 (<a
                        href="https://internetfreedom.in/broadcast-services-bill-first-read/?ref=static.internetfreedom.in">link</a>)
                    </li>
                    <li>IFF’s Comments on the Broadcasting Bill, 2023 (<a
                        href="https://content.internetfreedom.in/api/files/divco3ywedt9rpe/j1qbgrb1z4092pd/iff_s_comments_on_broadcasting_bill_2023_gTIK6GVbjP.pdf?ref=static.internetfreedom.in">link</a>)
                    </li>
                    <li>IFF’s letter to MIB requesting publication of comments received (<a
                        href="https://drive.google.com/file/d/1UBiA0S2uzKbtAU5BGTyEqxJPhCxiA1kF/view">link </a>
                        and <a
                            href="https://drive.google.com/file/d/1gZ8xaLCgo81vteW8jFdVNLAUn2Zu9CJz/view?usp=sharing">link</a>)
                    </li>
                    <li>Article about closed-door meetings with industry stakeholders (<a
                        href="https://www.hindustantimes.com/india-news/confusion-persists-over-digital-news-content-in-proposed-broadcasting-bill-101720725258677.html">link </a>
                        and <a
                            href="https://www.hindustantimes.com/india-news/new-draft-of-broadcasting-bill-news-influencers-may-be-classified-as-broadcasters-101721961764666.html">link</a>)
                    </li>
                    <li>IFF’s letter to MIB requesting public consultation on the revised
                        Broadcasting Bill, 2023 (<a
                            href="https://drive.google.com/file/d/1SaVT-3eOGY3wsykWhmvK5VxXVXcIf91L/view?usp=sharing">link</a>)
                    </li>
                    <li>Article about the various revisions in the Broadcasting Bill, 2023 (<a
                        href="https://www.medianama.com/2024/07/223-india-broadcast-bill-online-creators/">link</a>)
                    </li>
                    <li>IFF’s post citing concerns regarding reported revisions and opacity in the
                        consultation process (<a
                            href="https://x.com/internetfreedom/status/1816827163703701945">link</a> and <a
                                href="https://x.com/internetfreedom/status/1817092818923409760">link</a>)
                    </li>
                    <li>MIB’s response to IFF’s post about opacity in the consultation process (<a
                        href="https://x.com/MIB_India/status/1817452318553489636">link</a>)
                    </li>
                    <li>IFF’s letter to MIB seeking clarification on MIB’s response to IFF’s post
                        (<a
                            href="https://drive.google.com/file/d/1aFL0TdnXhtmseEQIGGz9ISlUxUgznrS0/view?usp=drive_link">link</a>)
                    </li>
                    <li>IFF’s RTI on the reported revisions and closed-door meetings (<a
                        href="https://drive.google.com/file/d/1P15dYFaXbSBEE2GTpCMmEa8gXZmz04Eu/view?usp=sharing">link</a>)
                    </li>
                    <li>Open letter to MIB signed by creators (<a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSecW_bDTbiSHe9upQZbNJnzTsVX8Ab7T_SZL532ccGR2ce6OQ/viewform?usp=send_form">link</a>)
                    </li>
                </ol>
            </div>
            <FaqSection />
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