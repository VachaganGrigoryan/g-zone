"use client";

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useEffect } from "react";
import Link from "next/link";
// import { handleApiError } from "@/lib/helpers";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Exact, LoginMutationVariables, useLoginMutation } from "@/gql/graphql";
import { useStoreContext } from "@/store";
import { FormInput, LoadingButton } from "@/components/Form";

export default function LoginForm() {
  const store = useStoreContext((store) => ({
    user: store.user,
    loading: store.loading,
    setLoading: store.setLoading,
    setTokens: store.setTokens,
    reset: store.reset,
  }));
  const router = useRouter();

  const [result, loginForm] = useLoginMutation();

  const methods = useForm<LoginMutationVariables>();

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  useEffect(() => {
    store.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function LoginUserFunction(credentials: LoginMutationVariables) {
    store.setLoading(true);
    try {
      const result = await loginForm(credentials);

      console.log(result);

      const { data, error } = result;

      if (error) {
        toast.error(error.message);
        console.log("Error message:", error.message);
        return;
      }

      if (data?.account.login.__typename == "JwtTokenType") {
        localStorage.setItem("AUTH_KEY", JSON.stringify(data?.account.login));
        store.setTokens(data?.account.login);

        toast.success("Logged in successfully");
      }
      return router.push("/games");
    } catch (error: any) {
      console.log(error);
      if (error instanceof Error) {
        // handleApiError(error);
        console.log(error);
      } else {
        toast.error(error.message);
        console.log("Error message:", error.message);
      }
    } finally {
      store.setLoading(false);
    }
  }

  const onSubmitHandler: SubmitHandler<LoginMutationVariables> = (
    values: Exact<{ email: string; password: string }>,
  ) => {
    LoginUserFunction(values);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="w-full max-w-md w-full mx-auto overflow-hidden bg-ct-dark-200 space-y-5 flex flex-col justify-center align-center mt-5"
      >
        <FormInput placeholder="Email" label="Email" name="email" type="email" />
        <FormInput placeholder="Password" label="Password" name="password" type="password" />

        {/* <div className="text-right">
          <Link href="#" className="">
            Forgot Password?
          </Link>
        </div> */}
        <LoadingButton loading={store.loading} textColor="text-ct-blue-600">
          Sign in
        </LoadingButton>
        <span className="block pl-5">
          Need an account?{" "}
          <Link href="/register" className="text-ct-blue-600 hover:text-green-600">
            Sign Up Here
          </Link>
        </span>
      </form>
    </FormProvider>
  );
}
