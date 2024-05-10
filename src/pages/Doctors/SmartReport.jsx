import React from 'react'


const SmartReport = () => {
    return (
        <section className='my-10'>
            <div className="px-4 mx-auto max-w-screen-md">
                {/* <h2 className="heading text-center">
          Smart Report
        </h2> */}
                <h2 className="mb-8 lg:mb-16 font-light text-center text__para">
                    Finding it difficult to decode your health test report?
                </h2>

                <h1 className="heading text-center">
                    Introducing Smart Health Report
                </h1>

                <p className="mb-8 lg:mb-16 font-light text-center text__para">
                    Personalised health report with actionable insights explained in language you understand!
                </p>
                <div className='flex gap-x-16  justify-center items-center'>
                <div className='aspect-[4/3] hover:aspect-square '>
                    <iframe src="https://www.youtube.com/embed/iXXXqY0kIjU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    
                </div>
                <img src='https://myhealthvectors.com/assets/portal/combined_devices.svg' className='w-80  '></img>
                </div>
                 

                <h1 className="bold text-xl">
                    1. Color coded as simply as traffic signals
                </h1>
                <img src='https://myhealthvectors.com/assets/portal/reportFeature/Tablet%201.svg'></img>

                <h1 className="bold text-xl">
                    2. So easy to understand your health, no need to google
                </h1>
                <img src='https://myhealthvectors.com/assets/portal/reportFeature/Tablet%202.svg'></img>

                <h1 className="bold text-xl">
                    3. Now you know what to eat and what to avoid based on your specific health condition
                </h1>
                <img src='https://myhealthvectors.com/assets/portal/reportFeature/Tablet%203.svg'></img>
                <h1 className="bold text-xl">
                    4. Take control of your health through consolidated guidance
                </h1>
                <img src='https://myhealthvectors.com/assets/portal/reportFeature/Tablet%204.svg'></img>

                {/* <div class="ytp-cued-thumbnail-overlay-image" style="background-image: url(&quot;https://i.ytimg.com/vi_webp/iXXXqY0kIjU/maxresdefault.webp&quot;);"></div> */}





            </div>
        </section>
    )
}
export default SmartReport
// https://www.youtube.com/watch?v=iXXXqY0kIjU