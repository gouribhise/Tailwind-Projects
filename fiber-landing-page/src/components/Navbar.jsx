export const links = [
    { id:1, href: '#community', text: 'Community' },
    { id:2, href: '#pricing', text: 'Pricing' },
    { id: 3, href: '#features', text: 'Features' },
 
  ];

const Navbar = () => {
  return (
  
    <nav className='bg-primary'>
    <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
      <h2 className='text-3xl font-bold'>
 Fiber
       </h2>
      <div className='flex gap-x-3'>
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <a
              key={id}
              href={href}
              className='capitalize text-lg tracking-wide hover:text-blue-600 duration-300'
            >
              {text}
            </a>
          );
        })}
      </div>
      <div className="absolute right-10 justify-items-end">
        <a href="#login" className="mr-10 capitalize text-lg tracking-wide hover:text-blue-600 duration-300">Sign In</a>
        
 <button className="btn bg-blue-950 p-5 text-white font-bold rounded-lg">Sign Up</button>
      </div>
    </div>
  
  </nav>
 
  );
};
export default Navbar;
