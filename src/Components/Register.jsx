import { useContext } from "react";
import { AuthContext } from "../Provider/Authentication";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
const Register = () => {
    const {SignUp,setUser,user}=useContext(AuthContext);
 const navigate=useNavigate()
    const handleRegister=e=>{
        e.preventDefault();
        // const form=e.target;
        const email=e.target.email.value;
        const img=e.target.photo.value;


        const password=e.target.password.value;
console.log(email,password)
SignUp(email,password)
        .then(result=>{
            updateProfile(result.user, {
                photoURL: img,
            })
                .then(() => {
                    console.log("Photo URL updated successfully!");
                    setUser({ ...result.user, photoURL: img,   });
                         // Explicitly set the updated photoURL
                 

                    navigate('/')
                    console.log('registered success')
                    console.log(user)
                })
                .catch((error) => {
                    console.error("Error updating photo URL:", error.message);
                });
        })
        .catch((err) => {
            console.log(err.message);
        });
};
            
      
//  console.log(user)

    
    return (
        <div>
            <Link to='/'> <button className="btn">Back to Home</button></Link>
           
            <form onSubmit={handleRegister} className="flex flex-col justify-between" >
           <div className='flex flex-col w-1/4 mx-auto p-3 border-2 rounded-xl'>
           <h1 className='font-bold text-5xl text-center mb-8'>Register Now!!!</h1>
               <input type="text" name="email" placeholder='Your email' className='my-2 p-5 rounded-xl border-2'/>
               <input type="text"  name='password' placeholder='your password' required className='my-2 p-5 rounded-xl border-2'/>
               <input type="" name="photo" placeholder='Photo URL' className='my-2 p-5 rounded-xl border-2'/>
               <button className='btn bg-[#E3B577]'>Register</button>

           </div>
          
                </form>
        </div>
    );
};

export default Register;