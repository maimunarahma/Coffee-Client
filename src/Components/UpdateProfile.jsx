import { updateProfile } from "firebase/auth";
import { auth } from "./Firebase.init";
import { useNavigate } from "react-router-dom";


const UpdateProfile = () => {
    const navigate=useNavigate();
    const handleUpdate=e=>{
        e.preventDefault();
        const form=e.target;
        const img=form.photo.value;

        const name=form.name.value;
        updateProfile(auth.currentUser, {
            displayName:name,photoURL:img
          }).then(() => {
           alert('updated')
           navigate('/')

          }).catch((error) => {
            console.log(error.message)
            // An error occurred
            // ...
          });

    }
    return (
        <div>
           <form onSubmit={handleUpdate}>

           <div className='flex flex-col w-1/4 mx-auto p-3 border-2 rounded-xl'>
               <h1 className='font-bold text-5xl text-center mb-8'>Update Profile!!!</h1>
              
               <input type="text"  name='name' placeholder='your name' required className='my-2 p-5 rounded-xl border-2'/>
               <input type="" name="photo" placeholder='Photo URL' className='my-2 p-5 rounded-xl border-2'/>
               <button className='btn bg-[#E3B577]'>Update</button>
           
               </div>
              
           </form>
        </div>
    );
};

export default UpdateProfile;