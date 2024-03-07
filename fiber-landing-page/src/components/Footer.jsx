import React from 'react'

const Footer=()=>{
    return(
        <div className='mx-auto'>
<div className='grid grid-cols-5 gap-2 justify-items-center ml-10 mt-50 bg-primary'>
    <div>
        <h1 className='text-2xl font-bold'>Fiber</h1>
        <p>With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates</p>
        <p>Made with Love!</p>
    </div>
    <div>
        <h1 className='text-2xl font-bold'>Sitemap</h1>
        <ul>
            <li>  <a>Homepage</a></li>
            <li> <a>Pricing</a></li>
            <li>
        <a>Testimonials</a>
    </li>
    <li>  <a>Features</a></li>
        </ul>
      
         
    </div>
    <div>
        <h1 className='text-2xl font-bold'>Resources</h1>
        <ul>
            <li>  <a>Support</a></li>
            <li> <a>Contact</a></li>
            <li>
        <a>FAQ</a>
    </li> 
        </ul>
      
    </div>
    <div>
        <h1 className='text-2xl font-bold'>Company</h1>
        <ul>
            <li>  <a>About</a></li>
            <li> <a>Customers</a></li>
            <li>
        <a>Blog</a>
    </li> 
        </ul>
    </div>
    <div>
        <h1 className='text-2xl font-bold'>Portfolios</h1>
        <ul>
            <li>  <a>Sarah Andrews</a></li>
            <li> <a>Mathew Higgins</a></li>
     
        </ul>
    </div>
 </div>
        </div>
 
        )
}

export default Footer