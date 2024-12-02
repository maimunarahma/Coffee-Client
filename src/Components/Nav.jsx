import { useContext } from 'react';
import nav from '../assets/images/more/15.jpg'
import logo from '../assets/images/more/logo1.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/Authentication';
const Nav = () => {
    const {user, signOutUser}=useContext(AuthContext)
    console.log(user)
    return (
        <div 
            style={{ backgroundImage: `url(${nav})` }} 
            className="bg-cover bg-center flex justify-center items-center  p-5">
          
             
                <div className='flex text-white  justify-start items-center navbar-start '>
                <img src={logo} alt=""  className='w-10 h-15'/>

<h1 className='eb-garamond-font italic font-bold text-xl'>Espresso Emporium</h1>
                </div>
                {user && 
                <Link to='/myProfile'><button className='btn bg-[#E3B577] border-black'>My Profile</button></Link>
                }
                <div className='flex justify-end navbar-end'>
                    {
                        user?<>
                        <img src={user.photoURL} alt="" className='w-10 h-10 border-2 border-[#b0885271] rounded-full' />
                        {/* <h1 className='text-white'>{user.email}</h1> */}
                        <button className='btn bg-[#E3B577] border-2 border-black' onClick={ signOutUser}>Sign Out</button></>:
                        <Link to='/login'><button className='btn bg-[#E3B577] border-black'>Login</button></Link>
                    }
                    
                </div>
             

</div>


       
      
    );
};

export default Nav;