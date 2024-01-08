import React from 'react';
import SignUpForm from './form';
import SignUpBg from "@/assets/login/images/Vector 1.svg"

const SignUpPage = () => {
  return (
    <div 
    className='w-full h-screen flex justify-center items-center bg-cover bg-center'
    >
      <div className='bg-gray-200 pl-32 pr-32 pt-10 pb-24 rounded-2xl'>
        <SignUpForm/>
      </div>
    </div>
  );
};

export default SignUpPage;
