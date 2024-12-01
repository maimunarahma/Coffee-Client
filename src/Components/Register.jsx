import { useContext } from "react";
import { AuthContext } from "../Provider/Authentication";
import { auth } from "./Firebase.init";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
const Register = () => {
    const {SignUp,setUser,user}=useContext(AuthContext);
 const navigate=useNavigate()
    const handleRegister=e=>{
        e.preventDefault();
        // const form=e.target;
        const email=e.target.email.value;

        const password=e.target.password.value;
console.log(email,password)
SignUp(email,password)
        .then(result=>{
            setUser(result.user)
            navigate('/')
            console.log('registered success')
            console.log(user)
        })
        .catch(err=>{
            console.log(err.message)
        })
//  console.log(user)

    }
    return (
        <div>
            <Link to='/'> <button className="btn">Back to Home</button></Link>
           
            <form onSubmit={handleRegister} className="flex flex-col justify-between" >
           <div className='flex flex-col w-1/4 mx-auto p-3 border-2 rounded-xl'>
           <h1 className='font-bold text-5xl text-center mb-8'>Login Now!!!</h1>
               <input type="text" name="email" placeholder='Your email' className='my-2 p-5 rounded-xl border-2'/>
               <input type="text"  name='password' placeholder='your password' required className='my-2 p-5 rounded-xl border-2'/>
               <button className='btn bg-[#E3B577]'>Register</button>

           </div>
          
                </form>
        </div>
    );
};

export default Register;