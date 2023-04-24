import React from "react";
import Navbar from "./Navbar";
import Foot from "./Foot";
import { useState } from "react";
import axios from 'axios';

const signup = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGetOTP = () => {
    axios.post('http://localhost:5000/api/email/sendOtp', {
      email: email
    })
      .then(response => {
        console.log(response)
        if (response.data.status === true)
          setOtpSent(true);
        else
          setOtpSent(false);
      })
      .catch(error => {
        console.error('There was a problem with the axios operation:', error);
      });

  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  }

  const handleVerifyOTP = async () => {
    console.log("Email : " + email)
    console.log("OTP : " + otp)

    axios.post('http://localhost:5000/api/email/verifyOtp', {
      email: email.trim(),
      otp:otp.trim()
    })
      .then(response => {
        console.log(response)
      if(response.data.status === true){
        // return redirect("/Dashboard")
        window.location.href = '/Dashboard';
      }
      else{
        setOtpVerified(false);
        alert('Wrong OTP')
      }

      })
      .catch(error => {
        console.error('There was a problem with the axios operation:', error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="font-body h-[850px] w-[1300px] flex flex-col justify-center  items-center  ">
        <div className="font-l h-[300px] w-[700px] bg-gray-200  border-dashed  rounded-xl">

          <div className="bg-gray-200  px-32 py-8 rounded-md">

            <div className=" text-[34px]  font-bold mt-[20px]">Sign-Up</div>
            <div className="text-[18px]">
              <div className="font-bold flex flex-row gap-[90px] mt-[30px]">
                <label htmlFor="email">Email :</label>
                <input
                  className="pl-5 bg-black rounded-sm text-gray-200"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <button
                className={`bg-gray-400 hover:bg-gray-700 text-white font-bold  rounded-sm w-[140px] text-[13px] h-6 ml-[141px] mt-[10px] ${!email && "opacity-50 pointer-events-none"}`}
                onClick={handleGetOTP}
                disabled={!email}
              >Get OTP</button>
              <div className="font-bold flex flex-row mt-[30px] gap-[60px] ">
                <label htmlFor="email ">Enter Otp:</label>
                <input
                  className="pl-5 rounded-sm bg-black text-gray-200 filter invert-100"
                  type="text"
                  onChange={handleOtpChange} />
              </div>
            
            </div>
            <button
              className={`bg-gray-400 hover:bg-gray-700 text-white font-bold  rounded-sm  w-[140px] text-[13px] h-6 ml-[62px] mt-[10px] ${!otpSent && "opacity-50 pointer-events-none"}`}
              onClick={handleVerifyOTP}
            >Verify OTP</button>
          </div>

        </div>
      </div>
      <Foot></Foot>
    </div>

  );
};

export default signup;