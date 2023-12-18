import React from 'react';
import SignUpForm from './form';
import SignUpBg from "@/assets/login/images/background.svg"

const SignUpPage = () => {
  return (
    <div 
    className='w-full h-screen flex justify-center items-center bg-red-500 bg-cover bg-center'
    // style={{backgroundImage: `url(${SignUpBg})`}}
    >
      <div className='bg-opacity-40 bg-white pl-32 pr-32 pt-10 pb-24 rounded-md'>
        <SignUpForm/>
      </div>
    </div>
  );
};

export default SignUpPage;
