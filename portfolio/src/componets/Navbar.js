const Navbar=()=>{
    return(
        <nav className='bg-emerald-100'>
      <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
      <h2 className='text-3xl font-bold'>
          Web<span className='text-emerald-600'>Dev</span>
        </h2>
     <div className='flex gap-x-3 sm:columns-1'>
                
                    <a href="#" className='sm:columns-1 capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'>
                        Home
                    </a>
                 
           
                    <a href="#" className='sm:columns-1 capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'>
                        Skills
                    </a>
       
         
                    <a href="#" className='sm:columns-1 capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'>
                        About
                    </a>
        
           
                    <a href="#" className='sm:columns-1 capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'>
                        Projects
                    </a>
             </div>
            </div>
           
        </nav>
    )
}

export default Navbar