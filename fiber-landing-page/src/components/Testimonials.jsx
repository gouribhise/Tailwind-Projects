import React from "react";
import user1 from '../assets/user1.svg'
import user2 from '../assets/user2.svg'
import user3 from '../assets/user3.svg'
const Testimonials=()=>{
    return(
        <div className="grid grid-cols-3 gap-20  ml-10  mr-10 p-10 pb-40 justify-items-center">
      <div className="flex-column w-[100%] border-gray-300 p-5 border-2 rounded">
         <div className="flex">
         <img src={user1} className="mr-3 w-[20%]"/>
        <div>
        <p className="text-2xl text-violet-800 font-bold">Sarah Andrews<br/>
         <span className="text-black">$100k in revenue</span></p>
        </div>
         </div>
   
        <div>
            <p className="p-7">Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted  a lot of clients and made
                me more than $100k.
            </p>
        </div>
        <div>
            <button className="bg-white text-violet-800 font-bold border-2 border-gray-300 rounded p-3 ml-10">View Sarah's Portfolio</button>
        </div>
   
      </div>
      <div className="flex-column w-[100%]  border-gray-300 p-5 border-2 rounded">
         <div className="flex">
         <img src={user1} className="mr-3 w-[20%]"/>
        <div>
        <p className="text-2xl text-violet-800 font-bold">Sarah Andrews<br/>
         <span className="text-black">$100k in revenue</span></p>
        </div>
         </div>
   
        <div>
            <p className="p-7">Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted  a lot of clients and made
                me more than $100k.
            </p>
        </div>
        <div>
            <button className="bg-white text-violet-800 font-bold border-2 border-gray-300 rounded p-3 ml-10">View Sarah's Portfolio</button>
        </div>
   
      </div>
      <div className="flex-column w-[100%]  border-gray-300 p-5 border-2 rounded">
         <div className="flex">
         <img src={user1} className="mr-3 w-[20%]"/>
        <div>
        <p className="text-2xl text-violet-800 font-bold">Sarah Andrews<br/>
         <span className="text-black">$100k in revenue</span></p>
        </div>
         </div>
   
        <div>
            <p className="p-7">Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted  a lot of clients and made
                me more than $100k.
            </p>
        </div>
        <div>
            <button className="bg-white text-violet-800 font-bold border-2 border-gray-300 rounded p-3 ml-10">View Sarah's Portfolio</button>
        </div>
   
      </div>

      
        </div>
    )
}

export default Testimonials