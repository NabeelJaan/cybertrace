import Layout from "../components/layout";
import GenHero from "../components/genHero";


export default function Disclaimer(){
    return(
        <Layout title="Disclaimer">

            <GenHero title="Disclaimer"/>

            <section className="disclaimer py-85px px-15px xl:px-0">
                <div className="max-w-1140px mx-auto">
                    <div className="disclaimer-inner max-w-4xl mx-auto">
                        <h2 className="text-2xl font-roboto font-medium text-black mb-4">WEBSITE DISCLAIMER</h2>
                        <p className="text-lg font-roboto text-black">The information provided by Cybertrace Pty Ltd. (“we,” “us”, or “our”) on https://www.www.cybertrace.com.au (the “Site”) and our mobile application is for general informational purposes only. All information on the Site and our mobile application is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site or our mobile application . 
                           <span className="text-lg font-roboto"> UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR OUR MOBILE APPLICATION OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE AND OUR MOBILE APPLICATION . YOUR USE OF THE SITE AND OUR MOBILE APPLICATION AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE AND OUR MOBILE APPLICATION IS SOLELY AT YOUR OWN RISK.</span></p>
                        
                        <h3 className="text-xl font-roboto font-medium text-black my-4">EXTERNAL LINKS DISCLAIMER</h3>
                        <p className="text-lg font-roboto text-black">The Site and our mobile application may contain (or you may be sent through the Site or our mobile application ) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
                        <span className="text-lg font-roboto">WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</span></p>

                        <h3 className="text-xl font-roboto font-medium text-black my-4">PROFESSIONAL DISCLAIMER</h3>
                        <p className="text-lg font-roboto text-black">The Site cannot and does not contain investigation and intelligence advice. The investigation and intelligence information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of investigation and intelligence advice. 
                        <span className="text-lg font-roboto">THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE OR OUR MOBILE APPLICATION IS SOLELY AT YOUR OWN RISK.</span></p>
                        
                        <h3 className="text-xl font-roboto font-medium text-black my-4">AFFILIATES DISCLAIMER</h3>
                        <p className="text-lg font-roboto text-black">The Site and our mobile application may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include the following:</p>
                        <li className="text-lg font-roboto text-black">ScamAdviser</li>
                        <li className="text-lg font-roboto text-black">Google AdWords</li>
                    </div>
                </div>
            </section>

        </Layout>
    )
}