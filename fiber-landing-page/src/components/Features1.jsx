import React from "react";
import pageImage from '../assets/pageImage.png'
const Features1=()=>{
    return(
        <div className="grid bg-violet-800 justify-center mx-auto w-[90%] h-[50%] grid-cols-2 gap-4 mb-40">
            <div>
                <p className="text-4xl font-black mt-20 ml-20 text-white"> Diversify your portfolio</p>
                <p className="mt-2 ml-20 text-2xl mr-20 text-white">Create an even more impressive portfolio by creating case studies for your projects. Simply follow our
                    step-by-step guide.
                </p>
                <button className="text-lg p-5 bg-white text-violet-800 rounded-xl ml-20 mt-10 font-bold">Start Free Trial</button>
            </div>
            <div> <img src={pageImage} className="h-50 w-[90%] mt-20 rounded"/></div>
        </div>
    )
}

export default Features1