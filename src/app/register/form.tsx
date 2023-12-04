"use client";

import { FormInput } from "@/components/Form";
import { LoginMutationVariables } from "@/gql/graphql";
import { FormProvider, useForm } from "react-hook-form";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import KeyIcon from '@mui/icons-material/Key';


export default function SignUpForm() {
  const methods = useForm<LoginMutationVariables>();

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  return (
    <div>
      <h1 className="text-xl text-center lg:text-4xl text-ct-yellow-600">Sign Up</h1>
    <FormProvider {...methods}>
      <form
        className="w-full max-w-md w-full mx-auto overflow-hidden bg-ct-dark-200 space-y-5 flex flex-col justify-center align-center mt-5"
        // onSubmit={}
      >
        <div className="relative">
          <PersonOutlineIcon className="absolute left-1 top-[25px] pr-2"/>
          <FormInput placeholder="Full Name" label="Text" name="text" type="text"/>
        </div>
        <div className="relative">
          <AlternateEmailIcon className="absolute left-1 top-[25px] pr-2"/>
          <FormInput placeholder="Email" label="Email" name="email" type="email" />
        </div>
        <div className="relative">
          <KeyIcon className="absolute left-1 top-[25px] pr-2"/>
          <FormInput placeholder="Password" label="Password" name="password" type="password" />
        </div>
        <button className="bg-green-600 w-[100px] h-10 rounded-2xl self-center">Submit</button>
      </form>
    </FormProvider>
    </div>
  );
}

