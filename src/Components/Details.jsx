import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Details = () => {
    const data=useLoaderData();
    console.log(data)

    return (
        <div className="bg-[#F4F3F0] w-[60%] mx-auto p-16">
            <Link to='/'><button className="btn">Back to Home Page</button></Link>
 
<div className="flex justify-center gap-8 items-center ">
            <img src={data.pic} alt="" />
            <div className="flex flex-col justify-between items-start">
                <h2 className="text-[#331A15]">NiceTIce</h2>
            <h1 className="font-bold text-3xl">Name: {data.name}</h1>
            <p className="mt-3"> <span className="font-bold text-lg">Chef:</span>{data.chef}</p>
            <p className="my-1"><span className="font-bold text-lg">Taste:</span>{data.taste}</p>
            <p ><span className="font-bold text-lg">Supplier:</span>{data.supplier}</p>
            <p><span className="font-bold text-lg">Category:</span>{data.category}</p>
            <p><span className="font-bold text-lg">Details:</span>{data.category}</p>
           
            </div>
          
        </div>
        </div>
      
    );
};

export default Details;