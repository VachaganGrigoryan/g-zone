"use client";

import Link from "next/link";
import {
  Board,
  Exact,
  JoinToGameMutationVariables,
  useJoinToGameMutation,
} from "@/gql/graphql";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default ({ boards }: { boards: Board[] | undefined }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [result, joinForm] = useJoinToGameMutation();

  const methods = useForm<JoinToGameMutationVariables>();

  const {
    reset,
    handleSubmit,
    register,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  async function JoinToGame(guid: string) {
    setLoading(true);
    try {
      const result = await joinForm({ guid });

      console.log(result);

      const { data, error } = result;

      if (error) {
        toast.error(error.message);
        console.log("Error message:", error.message);
        return;
      }

      return router.push(`/games/checkers/${guid}`);
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
      setLoading(false);
    }
  }
  const onSubmitHandler: SubmitHandler<JoinToGameMutationVariables> = (
    values: Exact<{ guid: string }>,
  ) => {
    console.log(values);
    JoinToGame(values);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-orange-600 text-xl font-bold sm:text-2xl">
            Active Boards
          </h3>
          <p className="text-orange-300 mt-2">You can join or create board.</p>
        </div>
        <div className="mt-3 md:mt-0">
          <a
            href="#"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Create
          </a>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">GUID</th>
              {/*<th className="py-3 px-6">Created At</th>*/}
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {boards?.map((board, idx) => (
              <tr key={idx}>
                {/*<td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">*/}
                {/*  <img src={board.owner.avatar} className="w-10 h-10 rounded-full" />*/}
                {/*  <div>*/}
                {/*    <span className="block text-gray-700 text-sm font-medium">*/}
                {/*      {item.name}*/}
                {/*    </span>*/}
                {/*    <span className="block text-gray-700 text-xs">*/}
                {/*      {item.email}*/}
                {/*    </span>*/}
                {/*  </div>*/}
                {/*</td>*/}
                <td className="px-6 py-4 whitespace-nowrap">
                  {" "}
                  <Link
                    className="text-amber-600 no-underline"
                    href={`/games/checkers/${board.guid}`}
                  >
                    {board.guid}
                  </Link>
                </td>
                <td className="text-right px-6 whitespace-nowrap">
                  {/*<FormProvider {...methods} key={idx}>*/}
                  {/*  <form onSubmit={handleSubmit(onSubmitHandler)}>*/}
                  {/*    <input*/}
                  {/*      hidden={true}*/}
                  {/*      type="text"*/}
                  {/*      value={board.guid}*/}
                  {/*      {...register("guid")}*/}
                  {/*    />*/}
                  <input
                    type="button"
                    name={board.guid}
                    value={"Join"}
                    onClick={(e) => JoinToGame(e.target.name)}
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  />
                  {/*  </form>*/}
                  {/*</FormProvider>*/}
                  {/*<button*/}
                  {/*  href="javascript:void()"*/}
                  {/*  className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"*/}
                  {/*>*/}
                  {/*  Delete*/}
                  {/*</button>*/}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
