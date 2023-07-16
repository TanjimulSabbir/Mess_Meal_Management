import React, { useState } from 'react'
import Bazar from '../Bazar/Bazar';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const TopBanner = () => {
  const [ShowBazar, setBazarShow] = useState(false);
  const UserData = JSON.parse(localStorage.getItem("UserLoginData"));
  const navigate=useNavigate();
  const handleLogout=()=>{
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      confirmButtonColor:"green",
      showCancelButton: true,
      confirmButtonText: 'Yes, Logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("UserLoginData")
        Swal.fire({ position: 'center', icon: 'success', text: 'Log out successful!', showConfirmButton: false, timer: 1500 });
        return navigate("/login");
      }
    })
   
  }
  return (
    <div className='pt-6 lg:pt-10 font-Bitter bg-sky-100'>
      <div className='text-center'>
        <h1 className='text-3xl lg:text-4xl'>Rangon House</h1> 
        <div className='flex gap-5 items-center justify-center mt-2'>  <p className=''>July, 2023</p>
          <p className="bg-transparent cursor-pointer text-green-600" onClick={() => setBazarShow(true)}>Show Details</p> 
          <p className="tooltip cursor-pointer tooltip-success" onClick={()=>handleLogout()} data-tip={`${UserData.name} (${UserData.room})`}>Log out</p>
          </div>
      </div>
      {/* Rules and Regulation */}
      <div className='md:w-1/2 mx-auto'>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title peer-checked:text-green-600 text-green-600 text-center">
            See Meal Selection Bylaws and Boundaries!
          </div>
          <div className="collapse-content rounded-2xl text-justify peer-checked:text-black">
            <p><strong>W</strong>elcome! You can now place your meal from here. Please make your selection from the available date and duration. Remember, the meal ordering service is available from <strong className='text-green-600'>12.00 AM to 10.30 PM</strong> every day. Enjoy your meal! <br />
            </p>
            <p>
              Kindly requested you to <strong className='text-green-600'>refrain from changing others meal</strong> without permission. Your meal selection is personal and should not be shared or modified by others. Appreciated your cooperation in adhering to these rules.
            </p>
            <p> If you wish to make a manual food selection or have any specific requests, please contact with manager at <strong className='text-green-600'>+8801780242695</strong>. Please note that, updated your meal <strong className='text-green-600'>daily between 12.00 AM to 10.30 PM</strong> to ensure accurate and variety. Thank you for choosing your meal needs!</p>
            <br />
            <p>Stay Inspired</p>
            <p>Manager, Rongon House</p>
          </div>
        </div>
      </div>
      {
        ShowBazar ? <Bazar setBazarShow={setBazarShow}></Bazar> : ""
      }
    </div>
  )
}

export default TopBanner;