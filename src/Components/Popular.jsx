import { useLoaderData } from "react-router-dom";
// import bg1 from '../assets/images/more/4.png'
// import bg2 from '../assets/images/more/5.png'
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPen } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { PiCoffeeDuotone } from "react-icons/pi";
import Follow from "./Follow";
import { useState } from "react";
import Swal from "sweetalert2";
const Popular = () => {
    const data=useLoaderData();
 const [isDelete , setDelete]=useState(false);
   const [datas, setDatas] =useState(data);
   

    const handleDelete=id=>{
        console.log(id);
       
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
        fetch(`http://localhost:4000/addCoffee/${id}`,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
          
            if(data.deletedCount>0){
                setDatas(datas.filter(data=> data._id!==id))

                Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
            }
        })
            //   

            }
          });
    }

    return (
        <div className="mt-5 mx-auto px-0 w-[80%]">

<div className="flex flex-col text-center justify-between items-center">
    <h4 className="text-lg">--- Sip & Savor ---</h4>
    <h1 className="eb-garamond-font text-[#331A15] font-bold text-4xl my-2">Our Popular Products</h1>
    <Link to='/addCoffee'><button className="btn eb-garamond-font bg-[#E3B577] text-2xl  border-[#331A15]"><PiCoffeeDuotone /><h1 className="text-white">Add Coffee</h1></button></Link>
</div>
<div className="grid md:grid-cols-2 grid-cols-1 mx-auto mt-4 gap-6">
           
           {datas.map(data=> <div key={data._id} >
            <div className="flex justify-between items-center bg-[#F5F4F1]  lg:w-[650px] w-auto h-[300px] col-span-1  lg:p-8 p-3 rounded">
               <img src={data.pic} alt="" className="lg:w-[190px] w-[120px] h-[240px]" />
               <div className="flex  justify-start items-center text-lg ">
                   <div className="flex flex-col ">
                   <span className="font-bold">Name: </span>
                   <span className="font-bold">Chef:</span> 
                   <span className="font-bold">Supplier:</span>
                   </div>
                   <div className="flex flex-col">
                   <h1 > {data.name}</h1>
                   <p>  {data.chef}</p>
                   <p>  {data.supplier}</p>
                   </div>
                 
               </div>
      
               <div className="flex flex-col justify-between items-center gap-3 ">
               {( isDelete===true) ?
                <Link ><button className="btn bg-red-500 text-white" onClick={()=>handleDelete(data._id)} ><RiDeleteBin5Line /></button></Link>:
                <Link ><button className="btn bg-red-500 text-white" onClick={setDelete(!isDelete)}><RiDeleteBin5Line /></button></Link>

// document.getElementById('my_modal_5').showModal()
}
                   {/* <Link ><button className="btn bg-red-500 text-white" onClick={()=> handleDelete(data._id)}><RiDeleteBin5Line /></button></Link> */}
                   <Link to={`update/${data._id}`}><button className="btn bg-black text-white"><FaPen /></button></Link>
               <Link to={`/details/${data._id}`}><button className="btn bg-[#D2B48C]"><FaEye /></button></Link>
               </div>
            </div>
              </div>)}
       </div>
       <Follow></Follow>
        </div>
     
    );
};

export default Popular;