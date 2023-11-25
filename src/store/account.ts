"use client";

import type { StateCreator } from "zustand";
import { UserType } from "@/gql/graphql";

type Tokens = {
  access: string;
  refresh: string;
};
type AccountState = {
  tokens: Tokens | null;
  user: UserType | null;
  loading: boolean;
};
type AccountAction = {
  setUser: (user: UserType | null) => void;
  setTokens: (tokens: Tokens | null) => void;
  setLoading: (isLoading: boolean) => void;
  reset: () => void;
};

// define the initial state
const initialState: AccountState = {
  tokens: null,
  user: null,
  loading: false,
};

export type AccountSlice = AccountState & AccountAction;

export const createAccountSlice: StateCreator<AccountSlice> = (set) => ({
  ...initialState,
  setUser: (user) => set((state) => ({ ...state, user: user })),
  setTokens: (tokens) => set((state) => ({ ...state, tokens: tokens })),
  setLoading: (isLoading) => set((state) => ({ ...state, loading: isLoading })),
  reset: () => set(initialState),
});
