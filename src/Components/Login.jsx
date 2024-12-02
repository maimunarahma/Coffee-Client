import  { useContext } from 'react';
import { AuthContext } from '../Provider/Authentication';
import { auth } from './Firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
    const { login} =useContext(AuthContext);
    const navigate=useNavigate();
    const LoginFrom=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;

        const password=form.password.value;

        login(auth,email,password)

    }
   const handleGoogleSignIn=()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
   
    const user = result.user;
    console.log(user);
    
    navigate('/');
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    
    const errorMessage = error.message;
    console.log(errorMessage)
   
  });

   }
    return (
        <div className='mt-5'>
              <Link to='/'> <button className="btn">Back to Home</button></Link>
            <form onSubmit={LoginFrom}>
              
               <div className='flex flex-col w-1/4 mx-auto p-3 border-2 rounded-xl'>
               <h1 className='font-bold text-5xl text-center mb-8'>Login Now!!!</h1>
               <input type="text" name="email" placeholder='Your email' className='my-2 p-5 rounded-xl border-2'/>
               <input type="text"  name='password' placeholder='your password' required className='my-2 p-5 rounded-xl border-2'/>
               <button className='btn bg-[#E3B577]'>Login</button>
               <p className='mt-5'><span className='font-bold text-red-500'>Not Registered?</span> <Link to='/register'> <span className='font-bold'> Register</span></Link></p>
               <h1>Or</h1>
               <button className='btn' onClick={handleGoogleSignIn}>Sign in With Google</button>
               </div>
              
             

            </form>
          
            
        </div>
    );
};

export default Login;