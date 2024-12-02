import err from "../assets/images/404/404.gif"
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col justify-between items-start w-[80%] mx-auto">
            <img src={err} alt="" />
            <Link to='/'> <button className="btn bg-[#a3efa3]">Back to HomePage</button></Link>
        </div>
    );
};

export default Error;