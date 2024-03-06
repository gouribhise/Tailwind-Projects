import React  from "react";
import heroImage from '../assets/heroImage.png'
import CheckMark from '../assets/Checkmark.svg'
const Hero=()=>{
    return (
        <div className="grid grid-cols-2 justify-items-center">
            <div className="ml-10 my-10">
                <div>
                {[...Array(5)].map((star) => {        
        return (         
          <span className="text-2xl text-amber-400">&#9733;</span>        
        );
      })}
                   &nbsp; Rated 4.8/5 (243 reviews)</div>
                <div className="text-6xl font-black">Create your portfolio in minutes</div>
                <p className="text-xl text-slate-400">With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates</p>
                <button className="text-lg p-5 bg-violet-700 text-white rounded-xl mr-5 mt-10 font-bold">Start Free Trial</button>
                <a href="" className="text-xl text-violet-700 underline font-bold">View Examples</a>
                <div className="grid grid-cols-2">
                    <div className="flex pt-3"> 
                    <img src={CheckMark} className="mr-3 "/> 
                    No Credit Card Required
                    </div>
                    <div className="flex pt-3"> 
                    <img src={CheckMark} className="mr-3 "/> 
                    10 Free Templates                    </div>
    
                </div>
                
            </div>
            <div>
                <img src={heroImage}/>
            </div>
        </div>
    )
}

export default Hero