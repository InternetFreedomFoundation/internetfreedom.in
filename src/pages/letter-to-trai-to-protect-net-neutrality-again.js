import * as React from "react";
import { Layout } from "../components/common";
import { SEO } from "../components/seo";
import EmailCampaignWidget from "../components/emailCampaignWidget";

const email_content = "mailto:advmn@trai.gov.in?cc=savetheinternet@internetfreedom.in&subject=Letter%20to%20TRAI%20to%20protect%20Net%20Neutrality&body=Dear%20sir%2C%0D%0A%0D%0AWe%20would%20like%20to%20thank%20TRAI%20for%20initiating%20this%20consultation%20process.%20We%20request%20TRAI%20to%20NOT%20publish%20my%20email%20address%20or%20any%20other%20personal%20information.%0D%0A%0D%0ADisclaimer%3A%20While%20we%20believe%20that%20the%20term%20%E2%80%9COTT%E2%80%9D%20is%20a%20reductive%20and%20over-simplified%20understanding%20of%20the%20vibrant%20internet%20application%20and%20service%20ecosystem%2C%20for%20the%20purpose%20of%20this%20consultation%20and%20in%20the%20interest%20of%20ease%2C%20we%20will%20use%20the%20term%20%E2%80%9COTT%E2%80%9D.%0D%0A%0D%0AWe%20vehemently%20oppose%20any%20demand%20to%20regulate%2C%20licence%2C%20and%20selectively%20ban%20Over-The-Top%20(%E2%80%9COTT%E2%80%9D)%20Services.%20We%20also%20believe%20that%20in%20addition%20to%20a%20lack%20of%20adequate%20evidence%20indicating%20a%20need%20for%20regulatory%20intervention%2C%20there%20is%20no%20clear%20statutory%20basis%20or%20reasoning%20for%20TRAI%20to%20take%20this%20matter%20up%20for%20consultation.%20Any%20move%20toward%20regulating%20OTT%20players%20will%20lead%20to%20severe%20consequences%20on%20user%20choice%2C%20autonomy%2C%20freedom%2C%20net%20neutrality%2C%20as%20well%20as%20the%20innovation%20ecosystem.%20We%20urge%20TRAI%20to%20not%20deviate%20from%20its%20earlier%20approach%20that%20was%20in%20favour%20of%20Net%20Neutrality%20principles%20and%20take%20inspiration%20from%20its%202016%20order%20on%20%E2%80%9CDifferential%20Pricing%20for%20Data%20Services%E2%80%9D%2C%20and%20continue%20to%20prevent%20telecommunications%20service%20providers%20(%E2%80%9CTSPs%E2%80%9D)%20from%20engaging%20in%20such%20rent-seeking%20behaviour.%0D%0A%0D%0AOn%20Net%20Neutrality%3A%20TSPs%20have%20been%20demanding%20their%20%E2%80%9Cfair%20share%E2%80%9D%20from%20OTT%20content%20providers%20(such%20as%20Netflix%20and%20Hotstar)%2C%20on%20the%20grounds%20that%20their%20capital%20investment%20in%20developing%20infrastructure%20and%20technology%20for%20telecommunication%20services%20help%20generate%20traffic%20to%20OTT%20content%20providers.%20Their%20demand%3A%20OTTs%20generating%20large%20traffic%20should%20be%20liable%20to%20contribute%20to%20infrastructural%20costs.%20Notably%2C%20the%20TSPs%20fail%20to%20specify%20parameters%20for%20defining%20a%20large%20traffic%20generator%20or%20suggest%20a%20fee%20structure%2C%20leaving%20it%20to%20be%20decided%20under%20the%20regulatory%20framework.%20Some%20suggested%20parameters%20include%20a%20particular%20percentage%20threshold%20of%20the%20overall%20peak%20hour%20traffic%20or%20certain%20minimum%20number%20of%20active%20subscribers.%20Most%20TSPs%20refute%20claims%20that%20fair%20share%20will%20violate%20net%20neutrality%20principles%20and%20lead%20to%20increased%20cost%20for%20users.%0D%0A%0D%0AIn%20our%20view%2C%20implementing%20regulations%20that%20impose%20financial%20burdens%20on%20OTTs%20is%20an%20unfounded%20and%20detrimental%20public%20policy%20approach.%20Rather%20than%20acting%20in%20the%20corporate%20interests%20of%20telcos%20and%20OTT%20service%20providers%2C%20TRAI%E2%80%99s%20goal%20should%20be%20to%20protect%20user%20rights%20and%20serve%20our%20best%20interests.%20Unfortunately%2C%20this%20consultation%20paper%20seems%20to%20be%20motivated%20by%20the%20former.%20Added%20operational%20costs%20for%20OTT%20service%20providers%20may%20have%20a%20twofold%20effect%3A%20the%20OTTs%20may%20recover%20the%20lost%20revenue%20from%20the%20user%20through%20increased%20subscription%20fees%20or%20in-app%20purchases%3B%20or%20it%20may%20drive%20smaller%20services%20out%20of%20the%20market%20altogether%2C%20killing%20innovation%20in%20this%20dynamic%20space%20and%20creating%20unfounded%20entry%20barriers.%20Either%20way%2C%20user%20autonomy%2C%20privacy%2C%20and%20comfort%20may%20be%20jeopardised%20to%20protect%20the%20profit%20margins%20of%20a%20few.%0D%0A%0D%0AIn%202016%2C%20TRAI%20released%20a%20watershed%20regulation%20on%20Differential%20Pricing%20for%20Data%20Services%2C%20barring%20TSPs%20from%20giving%20competitive%20advantages%20to%20certain%20websites%20or%20entities%20over%20others%20based%20on%20network%20fees%20and%20other%20favourable%20factors%2C%20thus%20safeguarding%20net%20neutrality.%20The%20fair%20share%20argument%20made%20by%20telcos%20is%20merely%20a%20repackaged%20and%20renewed%20attempt%20to%20levy%20network%20fees%20and%20break%20net%20neutrality.%20TRAI%20is%20encouraged%20to%20uphold%20and%20strengthen%20the%20spirit%20of%20the%20Regulation.%0D%0A%0D%0AOn%20Licensing%3A%20Demands%20for%20the%20regulation%20and%20licensing%20of%20OTT%20communication%20services%20(%E2%80%9COTT-CS%E2%80%9D)%20(such%20as%20WhatsApp%20and%20Telegram)%20amongst%20TSPs%20have%20been%20justified%20by%20arguing%20that%20similar%20rules%20must%20be%20applied%20for%20offering%20similar%20services%20(for%20eg.%20voice%20calling%20or%20messaging)%20by%20different%20service%20providers.%20This%20%E2%80%9Csame%20service%2C%20same%20rules%E2%80%9D%20argument%20is%20raised%20by%20traditional%20TSPs%20on%20the%20grounds%20of%20ensuring%20a%20level%20playing%20field%20and%20accountability%20of%20OTT%20players%20to%20balance%20national%20security%2C%20consumer%20interest%2C%20and%20privacy%20needs.%0D%0A%0D%0AThis%20argument%20seems%20to%20be%20driven%20by%20an%20instinct%20to%20regulate%20the%20internet%20per%20se%20from%20the%20lens%20of%20TSPs%20rather%20than%20to%20satisfy%20any%20regulatory%20need.%20We%20are%20also%20principally%20against%20using%20the%20term%20%E2%80%9COTT%E2%80%9D%2C%20which%20is%20an%20over-simplified%20term%20limiting%20the%20vibrant%2C%20innovative%20pace%20of%20applications%20and%20services.%20Because%20of%20this%20reductive%20and%20improper%20understanding%2C%20any%20classification%20of%20such%20services%20(by%20type%20of%20service%20offered%2C%20mode%20of%20offering%20service%2C%20number%20of%20subscribers%2C%20etc.)%20will%20be%20unable%20to%20reflect%20the%20complexities%20of%20services%20performing%20multiple%20functions.%0D%0A%0D%0AWorryingly%2C%20the%20extension%20of%20regulatory%20guidelines%20to%20OTT%20services%20may%20require%20them%20to%20comply%20with%20lawful%20interception%20obligations%2C%20security%20obligations%2C%20customer%20verification%2C%20entry%20%2F%20exit%20obligations%2C%20among%20many%20others.%20It%20is%20worth%20noting%20that%20these%20obligations%20may%20have%20consequences%20in%20the%20form%20of%20weakening%20end-to-end-encryption%2C%20interception%20of%20messages%2C%20ability%20to%20remain%20anonymous%2C%20increased%20compliance%20burden%2C%20and%20so%20on.%20This%20becomes%20even%20more%20concerning%20given%20that%20India%E2%80%99s%20recently%20enacted%20data%20protection%20law%20does%20not%20put%20into%20place%20any%20meaningful%20safeguards%20against%20overbroad%20surveillance.%20We%20thus%20urge%20TRAI%20to%20interrogate%20the%20premise%2C%20i.e.%20%E2%80%9COTTs%E2%80%9D%20are%20direct%20technical%2F%20functional%20substitutes%20of%20TSPs.%0D%0A%0D%0AOn%20Selective%20Banning%3A%20While%20the%20TSPs%20largely%20pointed%20out%20the%20technical%20challenges%20in%20selectively%20banning%20OTT%20services%2C%20they%20disappointingly%20failed%20to%20oppose%20the%20idea%20as%20a%20whole.%20Instead%2C%20the%20TSPs%20asked%20for%20support%20from%20OTT%20service%20providers%20%2F%20websites%2C%20particularly%20in%20sharing%20a%20full%20range%20of%20URLs%20and%20IPs%20with%20the%20former.%20Some%20TSPs%20even%20went%20so%20far%20as%20to%20suggest%20that%20all%20classes%20of%20OTT%20services%2C%20whether%20communication%2C%20content%2C%20or%20otherwise%2C%20must%20be%20brought%20under%20the%20regulatory%20framework%20for%20selective%20banning%20of%20OTT%20services%20in%20the%20country%2C%20in%20the%20interest%20of%20national%20security.%20While%20washing%20its%20hands%20of%20any%20responsibility%2C%20the%20TSPs%20suggested%20that%20selective%20banning%20of%20apps%20should%20be%20implemented%20at%20the%20application%20level%2F%20OTT%20service%20provider%20end%2C%20instead%20of%20the%20network%20layer.%0D%0A%0D%0AWhat%20continues%20to%20remain%20unclear%2C%20despite%20these%20suggestions%2C%20is%20the%20method%20of%20implementation%20(limited%20according%20to%20duration%20or%20geographical%20area)%2C%20process%2C%20and%20feasibility%20of%20implementation%20at%20scale%20of%20such%20bans.%20Any%20such%20bans%20may%20lead%20to%20increased%20burden%2C%20cost%2C%20and%20worrying%20consequences%20for%20small-scale%20businesses%20and%20users.%20It%20is%20worth%20considering%20that%20while%20malicious%20actors%20may%20find%20workarounds%2C%20citizens%20that%20rely%20on%20a%20daily%20basis%20on%20services%20using%20the%20internet%20at%20scale%20may%20not%2C%20and%20thus%20will%20be%20impacted.%20Alternatively%2C%20those%20seeking%20workarounds%20without%20any%20malintent%20may%20also%20be%20criminalised.%20Workarounds%20may%20include%20the%20use%20of%20alternate%20applications%20which%20are%20not%20banned%20or%20other%20means%20such%20as%20VPNs%2C%20which%20may%20prompt%20the%20government%20to%20continuously%20expand%20the%20list%20of%20banned%2F%20blocked%20applications.%20Such%20overbroad%20restrictions%20would%20be%20disproportionate%20and%20its%20implementation%20would%20be%20challenging%2C%20requiring%20burdensome%2C%20unimplementable%20orders.%0D%0A%0D%0AThank%20you%20and%20kind%20regards."
const title = "Write to TRAI to #SaveTheInternet";

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
        image={"https://content.internetfreedom.in/api/files/divco3ywedt9rpe/71g4inydhwetffh/trai_net_neutrality_campaign_p71FirUNDI.png?token="}
    />
)

function TopSection() {
    return (
        <div className="bg-bg-black">
            <div className="px-4 py-6 md:py-32 space-y-5 responsive-container prose prose-invert">
                <h1>
                    #SaveTheInternet, again.
                </h1>
                <div className="text-gray-300">
                    <p className="italic">
                        Minor updates to the copy of this page were made on September 11, and September 13 based on suggestions from our community. Archived versions of the page can be found <a className="underline" href="https://web.archive.org/web/20230911105904/https://internetfreedom.in/letter-to-trai-to-protect-net-neutrality-again/">here</a>.
                    </p>
                    <p>
                        Telecom operators are lobbying the Indian telecom regulator TRAI to force online services to pay them network usage fees, and bring some online services under a telecom licence.
                    </p>
                    <p>
                        Net neutrality is under threat.
                    </p>
                    <p>
                        Last month, TRAI released a consultation paper proposing the regulation, licensing, and banning of online communication services, and some of the comments it received on the paper are alarming. The likes of Reliance Jio, Airtel, Vodafone Idea and BSNL are pushing for a “same service, same rules” argument to levy the same obligations as telecom operators face in India on online services — simply because these services are delivered “on top” of their infrastructure. Additionally, telcos want to charge them a network fee, just like they did in 2015.
                    </p>
                    <p>
                        This would violate net neutrality.
                    </p>
                    <p>
                        There is no other way to put it: our internet is in crisis, and we need to save it again. #SaveTheInternet
                    </p>
                </div>

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

            <EmailCampaignWidget
                title={title}
                campaign="TRAI-CENSORSHIP-OCT-2023"
                emailContent= {email_content}
            />
            
            <p className="prose-sm">
                IFF will have a copy of the email you send to TRAI. This will help us keep a track of how many of these emails are sent to TRAI, which we wish to use for our broader advocacy. Our <a href="https://internetfreedom.in/privacy-policy/#:~:text=We%20do%20not%20rent%20or,government%20request%20to%20access%20it.">Privacy Policy </a> contains further information on how/ if we collect, store, and use your data. We are not storing your information in any other form.
            </p>

            <p>
                [If the above method doesn’t work for you, please find the relevant details for sending the email, including the draft text for counter-comments <a href="https://docs.google.com/document/d/1VUBpje6_dVceqkHkMir2vBZfE6hDafYEVVQd7jcgi44/edit?usp=sharing">here</a>]
            </p>

            <p>
                The recommendation given by TSPs would imply imposing service licences on everything OTT — communication apps like WhatsApp or Signal at the least, payment apps such as PayTM, broadcasting platforms like Netflix or Mubi, and a range of other services — for them to be able to operate in India. The telcos are in agreement that OTT services, apps and websites may be selectively banned at source and without implicating the underlying telecom service provider in the process. At the outset, the consultation paper  fails to capture the vast and vibrant world of internet-based apps and services by condensing it to “OTT”, and is further misguided in suggesting regulation and licences. In 2016, TRAI took measures to safeguard online service and content providers from differential pricing and    unfair competition, which continues to ensure an open, free and neutral internet.  But now, TRAI’s policy objective seems to align with telcos’ interests. Submissions made by telcos further confirm that imposing licences on OTTs  will only profit a chosen few. Us users, on the other hand, only stand to lose.
            </p>
            <p>
                Bringing OTT apps under licences and imposing high operation costs upon them may drive smaller players out of the market, limiting user choice and preference, or leading to a spike in usage or subscription fees. And that fundamentally threatens net neutrality. What’s more, data-secure apps like Signal may find themselves on thin ice with authorities who may require them to break end-to-end encryption or implement customer verification. In summary: this policy move may jeopardise user privacy and autonomy, restrict innovation, and concentrate power in the hands of a few.
            </p>
        </div>
    );
}
