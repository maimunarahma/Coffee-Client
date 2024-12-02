import { useContext } from "react";
import { AuthContext } from "../Provider/Authentication";
import { Link } from "react-router-dom";

const MyProfile = () => {
    const {user, signOutUser}=useContext(AuthContext);
    console.log(user)

    return (

        <div>
            <Link to='/'>   <button className="btn">Back to Home</button></Link>
 
<div className="flex flex-col justify-center items-center w-[50%] mx-auto border-2 rounded-xl p-5">
           <h1 className="text-5xl font-bold text-center mb-5">Welcome!!!</h1>
           <img src={user.photoURL} alt="" className='w-14 h-14 border-2 border-[#b0885271] rounded-full' />
            <h1 className="text-xl font-semibold">{user.displayName}</h1>
            <h1 className="text-lg font-semibold my-3">{user.email}</h1>
          <Link to='/update'><button className="btn">Update Profile Info</button></Link>
            
        </div>
        </div>
    
    );
};

export default MyProfile;