import * as React from "react";
import { Layout } from "../components/common";
import { SEO } from "../components/seo";
import EmailCampaignWidget from "../components/emailCampaignWidget";

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
        title={"Letter to TRAI to protect Net Neutrality"}
        description={"TRAI is wondering whether the “OTT” space should be policed — and your telecom service providers believe IT SHOULD."}
        url={"https://www.internetfreedom.in/letter-to-trai-to-protect-net-neutrality-again/"}
    />
)

function TopSection() {
    return (
        <div className="bg-bg-black">
            <div className="px-4 py-6 md:py-32 md:text-lg space-y-5 responsive-container">
                <h1 className="text-white text-2xl font-semibold md:text-3xl">
                    TRAI is wondering whether the “OTT” space should be policed — and your telecom service providers believe IT SHOULD.
                </h1>
                <p className=" text-gray-400 mt-3">
                    Last month, TRAI released a consultation paper proposing the regulation, licensing, and banning of OTT communication services, and  some of the comments it received on the paper are alarming. The likes of Reliance Jio, Airtel, Vodafone Idea and BSNL are pushing for a “same service, same rules” argument to levy the same obligations and encumbrances as TSPs face in India on OTT services — simply because OTTs are delivered “on top” of their infrastructure. Additionally, telcos want OTTs to pay them for using their infrastructure, while claiming  that this will not threaten net neutrality. We, at IFF, strongly oppose these stances as they will have consequences for user autonomy, rights, safety, and net neutrality. This may also lead to obligations to weaken end-to-end encryption, to intercept personal communication: calls, messages, voicenotes, and so on.
                </p>
                <p className=" text-gray-400 mt-2">
                    There is no other way to put it: our internet is in crisis, and we need to save it again. #SaveTheInternet
                </p>
            </div>
        </div>
    );
}

function Content() {
    return (

        <div className="px-4 py-6 md:py-16 prose md:prose-xl hover:prose-headings:underline underline-offset-4 hover:prose-a:text-iff-orange responsive-container">
            <h1>A few clicks to #SaveTheInternet</h1>
            <h2>Write to TRAI</h2>
            <p>
                <strong>Click the button below and hit send:</strong> When you click on the button below, an email compose box will open on your device. Relevant details, including the body of the email (counter-comments), recipients (to: Advisor, TRAI; cc: IFF), and subject line, will already be filled out. If you wish to add your name and affiliation at the bottom of the email body, please do so. Or you can send the email as it is.
            </p>

            <EmailCampaignWidget />
            <p className="prose-sm">
                    IFF will have a copy of the email you send to TRAI. This will help us keep a track of how many of these emails are sent to TRAI, which we wish to use for our broader advocacy. Our <a href="https://internetfreedom.in/privacy-policy/#:~:text=We%20do%20not%20rent%20or,government%20request%20to%20access%20it.">Privacy Policy
                    </a> contains further information on how/ if we collect, store, and use your data. We are not storing your information in any other form.

            </p>

            <p>
                [If the above method doesn’t work for you, please find the relevant details for sending the email, including the draft text for counter-comments <a href="https://docs.google.com/document/d/1VUBpje6_dVceqkHkMir2vBZfE6hDafYEVVQd7jcgi44/edit?usp=sharing">here</a>]
            </p>

            <p>
                The recommendation given by TSPs would imply imposing service licences on everything OTT — communication apps like WhatsApp or Signal at the least, payment apps such as PayTM, broadcasting platforms like Netflix or Mubi, and a range of other services — for them to be able to operate in India. The telcos are in agreement that OTT services, apps and websites may be selectively banned at source and without implicating the underlying telecom service provider in the process. At the outset, the consultation paper  fails to capture the vast and vibrant world of internet-based apps and services by condensing it to “OTT”, and is further misguided in suggesting regulation and licences. In 2016, TRAI took measures to safeguard online service and content providers from differential pricing and    unfair competition, which continues to ensure an open, free and neutral internet.  But now, TRAI’s policy objective seems to align with telcos’ interests. Submissions made by telcos further confirm that imposing licences on OTTs  will only profit a chosen few. Us users, on the other hand, only stand to lose. Bringing OTT apps under licences and imposing high operation costs upon them may drive smaller players out of the market, limiting user choice and preference, or leading to a spike in usage or subscription fees. And that fundamentally threatens net neutrality. What’s more, data-secure apps like Signal may find themselves on thin ice with authorities who may require them to break end-to-end encryption or implement customer verification. In summary: this policy move may jeopardise user privacy and autonomy, restrict innovation, and concentrate power in the hands of a few.
            </p>
        </div>
    );
}
