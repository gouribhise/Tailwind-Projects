import React from 'react'
import code from '../assets/code.svg'
import time from '../assets/time.svg'
import allSizes from '../assets/allSizes.svg'
const Features=()=>{
    return (
        <div className='mt-36 mb-36'>
            <div className='text-violet-700 font-black text-2xl ml-20'>Why Fiber?</div>
            <div  className='  font-black text-2xl ml-20 p-2'>A good portfolio means good employability</div>
            <div className='grid grid-cols-3 gap-20  ml-10  mr-10 p-10 justify-items-center'>
                <div>
                    <img src={time} className='h-20 w-20'/>
                    <p className='font-bold p-2'>Build In Minutes</p>
                    <p className='text-slate-700 text-xl'>With a selection of premade templates, you can build out a portfolio in less than 10 minutes.</p>
                </div>
                <div> 
                <img src={code} className='h-20 w-20'/>

                    <p className='font-bold p-2'>Add Custom CSS</p>
                    <p className='text-slate-700 text-xl'>Customize your personal portfolio even more with the ability to add your own custom CSS styles.</p>
                </div>
                <div>
                <img src={allSizes} className='h-20 w-20'/>

                    <p className='font-bold p-2'>Responsive</p>
                    <p className='text-slate-700 text-xl'>All Fiber templates are fully responsive to ensure the experience is seemless across all devices.</p>
                </div>

            </div>
        </div>
    )
}

export default Features