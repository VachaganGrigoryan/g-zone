import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Void: { input: any; output: any; }
};

export type AccountMutation = {
  __typename?: 'AccountMutation';
  login: JwtAuthResponse;
  logout: Scalars['Boolean']['output'];
};


export type AccountMutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AccountQuery = {
  __typename?: 'AccountQuery';
  me: UserType;
};

export type BazarblotMutation = {
  __typename?: 'BazarblotMutation';
  createTable: Table;
  joinToTable: Scalars['String']['output'];
};


export type BazarblotMutationJoinToTableArgs = {
  guid: Scalars['ID']['input'];
};

export type BazarblotQuery = {
  __typename?: 'BazarblotQuery';
  tables: Array<Table>;
};

export type CheckersBoardType = {
  __typename?: 'CheckersBoardType';
  createdAt: Scalars['String']['output'];
  grid: Array<Array<Scalars['Int']['output']>>;
  guid: Scalars['ID']['output'];
  isEnded: Scalars['Boolean']['output'];
  length: Scalars['Int']['output'];
  players: Array<UserType>;
  queue: UserType;
  updatedAt: Scalars['String']['output'];
  winner: UserType;
};

export type CheckersMutation = {
  __typename?: 'CheckersMutation';
  createBoard: Scalars['JSON']['output'];
  updateBoardInGame: Scalars['JSON']['output'];
};


export type CheckersMutationCreateBoardArgs = {
  color: Scalars['String']['input'];
  length: Scalars['Int']['input'];
  owner: Scalars['String']['input'];
};


export type CheckersMutationUpdateBoardInGameArgs = {
  gridChanges: Array<Array<Scalars['Int']['input']>>;
  guid: Scalars['ID']['input'];
};

export type CheckersQuery = {
  __typename?: 'CheckersQuery';
  checkers: Array<CheckersBoardType>;
  resolveBoardState: Scalars['JSON']['output'];
};


export type CheckersQueryResolveBoardStateArgs = {
  guid: Scalars['String']['input'];
};

export type GameType = {
  __typename?: 'GameType';
  configs?: Maybe<Scalars['JSON']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  guid: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type JwtAuthError = {
  __typename?: 'JwtAuthError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type JwtAuthResponse = JwtAuthError | JwtTokenType;

export type JwtTokenType = {
  __typename?: 'JwtTokenType';
  access: Scalars['String']['output'];
  refresh: Scalars['String']['output'];
};

export type MillionaireMutation = {
  __typename?: 'MillionaireMutation';
  close?: Maybe<Scalars['Void']['output']>;
  start: Quiz;
};


export type MillionaireMutationCloseArgs = {
  guid: Scalars['ID']['input'];
};

export type MillionaireQuery = {
  __typename?: 'MillionaireQuery';
  game: Quiz;
  histories: Array<Quiz>;
};


export type MillionaireQueryGameArgs = {
  guid: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  account: AccountMutation;
  bazarblot: BazarblotMutation;
  checkers: CheckersMutation;
  millionaire: MillionaireMutation;
};

export type ProfileType = {
  __typename?: 'ProfileType';
  address: Scalars['String']['output'];
  avatar: Scalars['String']['output'];
  banner: Scalars['String']['output'];
  bio: Scalars['String']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  region: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  zipCode: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  account: AccountQuery;
  bazarblot: BazarblotQuery;
  checkers: CheckersQuery;
  millionaire: MillionaireQuery;
  zone: ZoneQuery;
};

export type Question = {
  __typename?: 'Question';
  coin: Scalars['Int']['output'];
  complexity: Scalars['String']['output'];
  content: Scalars['String']['output'];
  guid: Scalars['ID']['output'];
};

export type Quiz = {
  __typename?: 'Quiz';
  createdAt: Scalars['DateTime']['output'];
  guid: Scalars['ID']['output'];
  question?: Maybe<Question>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  total: Scalars['Int']['output'];
};

export type Table = {
  __typename?: 'Table';
  createdAt: Scalars['DateTime']['output'];
  guid: Scalars['ID']['output'];
  isEnded: Scalars['Boolean']['output'];
  maxPoints: Scalars['Int']['output'];
  playersOrder?: Maybe<Scalars['JSON']['output']>;
  teams: Array<Team>;
  updatedAt: Scalars['DateTime']['output'];
  winner?: Maybe<UserType>;
};

export type Team = {
  __typename?: 'Team';
  players: Array<UserType>;
  score: Scalars['Int']['output'];
};

export type UserType = {
  __typename?: 'UserType';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  guid: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  profile: ProfileType;
};

export type ZoneQuery = {
  __typename?: 'ZoneQuery';
  games: Array<GameType>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', account: { __typename?: 'AccountMutation', login: { __typename: 'JwtAuthError', code: string, message: string } | { __typename: 'JwtTokenType', access: string, refresh: string } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', account: { __typename?: 'AccountMutation', logout: boolean } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', account: { __typename?: 'AccountQuery', me: { __typename?: 'UserType', lastName: string, guid: string, email: string, firstName: string, profile: { __typename?: 'ProfileType', avatar: string } } } };

export type GamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GamesQuery = { __typename?: 'Query', zone: { __typename?: 'ZoneQuery', games: Array<{ __typename?: 'GameType', guid: string, title: string, description: string, image?: string | null, configs?: any | null, createdAt: any, updatedAt: any }> } };

export type GameTypeFragmentFragment = { __typename?: 'GameType', guid: string, title: string, description: string, image?: string | null, configs?: any | null, createdAt: any, updatedAt: any };

export const GameTypeFragmentFragmentDoc = gql`
    fragment GameTypeFragment on GameType {
  guid
  title
  description
  image
  configs
  createdAt
  updatedAt
}
    `;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  account {
    login(email: $email, password: $password) {
      ... on JwtTokenType {
        __typename
        access
        refresh
      }
      ... on JwtAuthError {
        __typename
        code
        message
      }
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  account {
    logout
  }
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const MeDocument = gql`
    query Me {
  account {
    me {
      lastName
      guid
      email
      firstName
      profile {
        avatar
      }
    }
  }
}
    `;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery, MeQueryVariables>({ query: MeDocument, ...options });
};
export const GamesDocument = gql`
    query Games {
  zone {
    games {
      ...GameTypeFragment
    }
  }
}
    ${GameTypeFragmentFragmentDoc}`;

export function useGamesQuery(options?: Omit<Urql.UseQueryArgs<GamesQueryVariables>, 'query'>) {
  return Urql.useQuery<GamesQuery, GamesQueryVariables>({ query: GamesDocument, ...options });
};