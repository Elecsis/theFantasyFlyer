import Link from "next/link";


export default async function Terms() {
  

    return (
        <main className="flex w-full h-full bg-lime-500 border border-white border-t-2 border-b-2  text-black justify-center p-20">
       
            <div className="flex h-auto w-[50%] rounded-lg bg-white   items-center flex-col justify-evenly p-8">
                <h1 className="pb-[8%] text-2xl text-center">Terms</h1>
                <p className="text-left pb-8"> 
                    **Terms and Conditions**<br/><br/>

                    **1. Acceptance of Terms**<br/>
                    By accessing and using thefantasyflyer.com(&quot;the Website&quot;), you accept and agree to be bound by the terms and provisions of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.<br/><br/>

                    **2. Disclaimer of Liability**<br/>
                    The content on the Website is for informational and entertainment purposes only. The opinions expressed here are those of the authors and do not necessarily reflect the views of thefantasyflyer.com. We are not responsible for any errors or omissions, or for the results obtained from the use of this information. All information on the Website is provided &quot;as is,&quot; with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose.<br/><br/>

                    **3. Betting and Winnings Disclaimer**<br/>
                    The content on this Website is provided for entertainment purposes only and does not constitute financial, betting, or gambling advice. thefantasyflyer.com makes no representations or warranties as to the accuracy, completeness, or reliability of any content. Any action you take upon the information you find on this Website is strictly at your own risk, and thefantasyflyer.com  will not be liable for any losses and/or damages in connection with the use of our Website or reliance on any information provided.<br/><br/>

                    **4. User Contributions**<br/>
                    The Website may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards, and other interactive features (collectively, &quot;Interactive Services&quot;) that allow users to post, submit, publish, display, or transmit to other users or other persons (hereinafter, &quot;post&quot;) content or materials (collectively, &quot;User Contributions&quot;) on or through the Website. All User Contributions must comply with the Content Standards set out in these Terms and Conditions.<br/><br/>

                    By posting any User Contribution on the Website, you grant thefantasyflyer.com and its affiliates a non-exclusive, royalty-free, perpetual.
                </p>
                <Link href={'/'} className=" w-auto text-center  border bg-lime-500 text-white rounded-full p-2 lg:p-3 ">Back to Site</Link>
            </div> 
        </main>
    )
}