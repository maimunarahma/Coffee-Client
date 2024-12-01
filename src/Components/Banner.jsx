import { Link } from 'react-router-dom';
import cover from '../assets/images/more/3.png'
import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'
import Popular from './Popular';
const Banner = () => {
    return (
        <div>

<div   style={{ backgroundImage: `url(${cover})` }}  className='bg-no-repeat bg-cover w-full lg:p-80'>
      <div className='grid grid-cols-2'>
        <div className='lg:col-span-1 col-span-2'>

        </div>
      <div className='text-white lg:col-span-1 col-span-2 p-16 lg:p-0'>
               <h1 className='font-medium eb-garamond-font text-4xl eb-garamond-font'>Would you like a Cup of Delicious Coffee?</h1>
             <p className='eb-garamond-font font-medium mt-4 text-lg'>Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
           <Link><button className='btn eb-garamond-font bg-[#E3B577] border-none mt-2 font-semibold'>Learn More</button></Link>
            </div>
          
      </div>
    
     
        </div>
        <div className='text-white bg-[#ECEAE3] flex flex-col md:flex-row justify-between gap-5 items-center p-3'>
              <div className='flex flex-col justify-between items-center text-black px-0'>
                <img src={icon1} alt="" />
                <h1 className='eb-garamond-font font-medium text-3xl'>Awesome Arome</h1>
                <p className='eb-garamond-font font-medium text-lg text-left px-16'>You will definitely be a fan of the design & aroma of your coffee</p>
              </div>
              <div className='flex flex-col justify-between items-center text-black px-0'>
                <img src={icon2} alt="" />
                <h1 className='eb-garamond-font font-medium text-3xl'>High QUality</h1>
                <p  className='eb-garamond-font font-medium text-lg text-left px-16'>We served the coffee to you maintaining the best quality</p>
              </div>
              <div className='flex flex-col justify-between items-center text-black px-0'>
                <img src={icon3} alt="" />
                <h1 className='eb-garamond-font font-medium text-3xl'>Pure Grades</h1>
                <p  className='eb-garamond-font font-medium text-lg text-left px-16'>The coffee is made of the green coffee beans which you will love</p>
              </div>
              <div className='flex flex-col justify-between items-center text-black px-0'>
                <img src={icon4} alt="" />
                <h1 className='eb-garamond-font font-medium text-3xl'>Proper Roasting</h1>
                <p  className='eb-garamond-font font-medium text-lg text-left px-16'>Your coffee is brewed by first roasting the green coffee beans</p>
              </div>
            </div>
            <Popular></Popular>
        </div>
      
    );
};

export default Banner;