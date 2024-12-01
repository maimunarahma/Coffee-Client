import bg from "../assets/images/more/13.jpg"
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";
import { VscTwitter } from "react-icons/vsc";
import { FaPhoneVolume } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import logo from '../assets/images/more/logo1.png'
const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mt-8"  style={{ backgroundImage: `url(${bg})` }} >

            <div>
           <div className="flex flex-col justify-start items-start lg:p-16 p-10 w-full lg:w-1/2">
        <img src={logo} alt=""  className="w-10 "/>
            <h1 className="font-bold text-4xl mb-2 eb-garamond-font">Espresso Emporium</h1>
            <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
        <div className="flex justify-start items-center gap-3 my-3">
            <Link ><FaFacebook /></Link>
            <button><GrInstagram /></button>
            <button><VscTwitter /></button>
        </div>
          <h3 className="font-bold text-3xl eb-garamond-font">Get in Touch</h3>
          <li className="list-none">
            <ul className="flex justify-start items-center gap-3"><FaPhoneVolume /> +880-12345678</ul>
            <ul className="flex justify-start items-center gap-3"><IoMailOpenSharp /> maimunarahman30@gmail.com</ul>
            <ul className="flex justify-start items-center gap-3"><FaLocationDot /> Jashore</ul>
          </li>
           </div>
            </div>
            <div className="lg:w-1/2 w-full p-16">
                <form >
                    <div className="flex flex-col justify-start items-start">
                        <h1 className="text-left font-bold eb-garamond-font text-3xl my-4">Contact With Us</h1>
                        <h1 className="text-left font-semibold eb-garamond-font text-lg">Your Name:</h1>
                    <input type="text" placeholder="Your name" className="rounded-xl border-2 p-3 lg:w-1/2 w-full"/>
                    <h1 className="text-left font-semibold eb-garamond-font text-lg">Your Email:</h1>
                    <input type="email" placeholder="Your email" className="rounded-xl border-2 p-3 lg:w-1/2 w-full"/>
                    <h1 className="text-left font-semibold eb-garamond-font text-lg">Your Message:</h1>
                    <textarea name="Enter Your MEssage" className="lg:w-1/2 w-full" id="" rows={5} cols={56}></textarea>
                 <button className='btn eb-garamond-font bg-[#E3B577] border-none mt-2 font-semibold lg:w-1/2 w-full'>Message Us</button>
                    </div>
                  

                </form>
            </div>
        </div>
    );
};

export default Footer;