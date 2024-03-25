import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import heroImg from '../images/Hero Image (Model).png'
const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function Main() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hosterr</p>
              <h1 className="text-base font-semibold leading-7 text-indigo-600">Host Your Website In Less Than 5 Minutes</h1>
        
              <p className="mt-6 text-lg leading-8 text-gray-600">
                With hosterr get your website up and running in no less than 5 minutes with the most competitive pricing 
                packages available online. 
              </p>
              
            </div>
          </div>
          <div  className='hero-img'> 
          <img
            src={heroImg}
            alt="hero image"
          
          />
          </div>
         
        </div>
      </div>
    </div>
  )
}
