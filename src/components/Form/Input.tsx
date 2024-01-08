import React from "react";
import { useFormContext } from "react-hook-form";

type FormInputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
};

export const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex justify-center pt-4">
      {/* <label htmlFor={name} className="block text-ct-blue-600 mb-3">
        {label}
      </label> */}
      <input
        type={type}
        placeholder={placeholder}
        className="block rounded-xl bg-gray-200 appearance-none focus:outline-none py-2 px-4 border-2 border-stone-600 placeholder:text-gray-400"
        {...register(name)}
      />
      {errors[name] && (
        <span className="text-red-500 text-xs pt-1 block">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default FormInput;
