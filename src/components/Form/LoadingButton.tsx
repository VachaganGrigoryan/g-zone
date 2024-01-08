import React from "react";
import Spinner from "./Spinner";
import clsx from "clsx";

type LoadingButtonProps = {
  loading: boolean;
  btnColor?: string;
  textColor?: string;
  children: React.ReactNode;
};

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  textColor = "text-white",
  btnColor = "bg-ct-yellow-600",
  children,
  loading = false,
}) => {
  return (
    <button
      type="submit"
      className={clsx(
        `rounded-3xl outline-none border-none w-[100px] h-[25px] self-center pt-2 pb-8`,
        `${btnColor} ${loading && "bg-[#ccc]"}`,
      )}
    >
      {loading ? (
        <div className="flex items-center gap-3">
          <Spinner />
          <span className="text-slate-500 inline-block">Loading...</span>
        </div>
      ) : (
        <span className={`${textColor}`}>{children}</span>
      )}
    </button>
  );
};
