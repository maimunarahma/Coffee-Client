import cup1 from "../assets/images/cups/Rectangle 10.png"
import cup2 from "../assets/images/cups/Rectangle 9.png"
import cup3 from "../assets/images/cups/Rectangle 11.png"
import cup4 from "../assets/images/cups/Rectangle 12.png"
import cup5 from "../assets/images/cups/Rectangle 13.png"
import cup6 from "../assets/images/cups/Rectangle 14.png"
import cup7 from "../assets/images/cups/Rectangle 16.png"
import cup8 from "../assets/images/cups/Rectangle 15.png"

const Follow = () => {
    return (
        <div className="mt-5 ">
        <div className="text-center flex flex-col justify-between items-center">
            <h1 className="text-lg">Follow Us Now</h1>
            <h1 className="font-bold text-5xl mb-5">Follow Us In Instagram</h1>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 w-[80%] mx-auto gap-3">
                <img src={cup1} alt="" className="col-span-1"/>
                <img src={cup2} alt="" className="col-span-1"/>
                <img src={cup3} alt="" className="col-span-1"/>
                <img src={cup4} alt="" className="col-span-1"/>
                <img src={cup5} alt="" className="col-span-1"/>
                <img src={cup6} alt="" className="col-span-1"/>
                <img src={cup7} alt="" className="col-span-1"/>
                <img src={cup8} alt="" className="col-span-1"/>

                </div>    
        </div>
    );
};

export default Follow;