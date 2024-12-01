
import { Link } from "react-router-dom";
const AddCoffee = () => {

    const handleFrom=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const chef=form.chef.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const pic=form.picture.value;
        const coffee={ name, chef,supplier, taste,pic};
        console.log(coffee);
        fetch('http://localhost:4000/addCoffee',{
            method:'POST',
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(coffee)
        })
        .then(res=> res.json())
        .then(data=> 
           { console.log(data);
            if(data.insertedId){
                alert('coffee added successfully');
//  form.reset();
            }
    })
    }
    return (
        <div className="mx-auto px-20">
            <Link to='/'>      <button className="btn">Back to Home</button></Link>
      
               <div className="bg-[#ECEAE3]  p-8 eb-garamond-font border-2 rounded">
            <div className="flex flex-col justify-center w-[60%] mx-auto gap-6 items-center text-center">
            <h1 className="text-5xl font-bold">Add New Coffee</h1>
            <p className="text-lg px-48 ">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
          
       <form onSubmit={handleFrom} className="w-[60%] mx-auto">
        <div className="flex justify-between gap-6 mb-3">
        <input type="text" name='name' placeholder="Enter your name" required className="rounded-xl w-1/2 p-5 border-2" />
        <input type="text"  name="chef" placeholder="Enter Coffee Chef" required  className="rounded-xl w-1/2 p-5 border-2" />
        </div>
        <div className="flex justify-between gap-6 mb-3">
        <input type="text" name='supplier' placeholder="Enter coffee supplier" required   className="rounded-xl w-1/2 p-5 border-2" />
        <input type="text"  name="taste" placeholder="Enter Coffee taste" required  className="rounded-xl w-1/2 p-5 border-2" />
        </div>
        <div className="flex justify-between my-3 gap-6 mb-3">
        <input type="text" name='category' placeholder="Enter coffee Category" required  className="rounded-xl w-1/2 p-5 border-2"  />
        <input type="text"  name="details" placeholder="Enter Coffee Details" required  className="rounded-xl w-1/2 p-5 border-2" />
        </div>
        <input type="" name='picture' placeholder="Enter Photo URL" required  className="rounded-xl w-full p-5 border-2"  />
       <button className="bg-[#D2B48C] border-[#30241451] font-bold  border-2 w-full p-3 rounded-lg mt-4">Add Coffee</button>
       </form>
       
        </div>
        </div>
     
    );
};

export default AddCoffee;