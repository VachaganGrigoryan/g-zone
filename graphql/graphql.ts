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

export type Board = {
  __typename?: 'Board';
  createdAt: Scalars['String']['output'];
  grid: Array<Array<Scalars['Int']['output']>>;
  guid: Scalars['ID']['output'];
  isEnded: Scalars['Boolean']['output'];
  length: Scalars['Int']['output'];
  players: Array<BoardPlayers>;
  queue?: Maybe<UserType>;
  updatedAt: Scalars['String']['output'];
  winner?: Maybe<UserType>;
};

export enum BoardLength {
  Eight = 'EIGHT',
  Ten = 'TEN'
}

export type BoardPlayers = {
  __typename?: 'BoardPlayers';
  player: UserType;
  stoneType: Scalars['Int']['output'];
};

export enum Cc {
  Black = 'Black',
  White = 'White'
}

export type CheckersMutation = {
  __typename?: 'CheckersMutation';
  join: Board;
  move: Board;
  start: Board;
  updateBoardInGame: Scalars['JSON']['output'];
};


export type CheckersMutationJoinArgs = {
  guid: Scalars['ID']['input'];
};


export type CheckersMutationMoveArgs = {
  guid: Scalars['ID']['input'];
  moves: Array<Array<Scalars['Int']['input']>>;
};


export type CheckersMutationStartArgs = {
  color?: Cc;
  length?: BoardLength;
};


export type CheckersMutationUpdateBoardInGameArgs = {
  gridChanges: Array<Array<Scalars['Int']['input']>>;
  guid: Scalars['ID']['input'];
};

export type CheckersQuery = {
  __typename?: 'CheckersQuery';
  boards: Array<Board>;
  game: Board;
};


export type CheckersQueryGameArgs = {
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
  fullName: Scalars['String']['output'];
  guid: Scalars['ID']['output'];
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


export type MeQuery = { __typename?: 'Query', account: { __typename?: 'AccountQuery', me: { __typename?: 'UserType', guid: string, email: string, fullName: string, profile: { __typename?: 'ProfileType', avatar: string } } } };

export type CheckersBoardsQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckersBoardsQuery = { __typename?: 'Query', checkers: { __typename?: 'CheckersQuery', boards: Array<{ __typename?: 'Board', guid: string, createdAt: string, players: Array<{ __typename?: 'BoardPlayers', player: { __typename?: 'UserType', fullName: string, profile: { __typename?: 'ProfileType', avatar: string } } }> }> } };

export type BoardListFragmentFragment = { __typename?: 'Board', guid: string, createdAt: string, players: Array<{ __typename?: 'BoardPlayers', player: { __typename?: 'UserType', fullName: string, profile: { __typename?: 'ProfileType', avatar: string } } }> };

export type CheckersByGuidQueryVariables = Exact<{
  guid: Scalars['String']['input'];
}>;


export type CheckersByGuidQuery = { __typename?: 'Query', checkers: { __typename?: 'CheckersQuery', game: { __typename?: 'Board', guid: string, length: number, grid: Array<Array<number>>, isEnded: boolean, createdAt: string, updatedAt: string, players: Array<{ __typename?: 'BoardPlayers', stoneType: number, player: { __typename?: 'UserType', guid: string, email: string, fullName: string, profile: { __typename?: 'ProfileType', avatar: string } } }>, queue?: { __typename?: 'UserType', guid: string } | null, winner?: { __typename?: 'UserType', guid: string } | null } } };

export type UpdateBoardInGameMutationVariables = Exact<{
  guid: Scalars['ID']['input'];
  gridChanges: Array<Array<Scalars['Int']['input']> | Scalars['Int']['input']> | Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type UpdateBoardInGameMutation = { __typename?: 'Mutation', checkers: { __typename?: 'CheckersMutation', updateBoardInGame: any } };

export type JoinToGameMutationVariables = Exact<{
  guid: Scalars['ID']['input'];
}>;


export type JoinToGameMutation = { __typename?: 'Mutation', checkers: { __typename?: 'CheckersMutation', join: { __typename?: 'Board', guid: string, length: number, grid: Array<Array<number>>, isEnded: boolean, createdAt: string, updatedAt: string, players: Array<{ __typename?: 'BoardPlayers', stoneType: number, player: { __typename?: 'UserType', guid: string, email: string, fullName: string, profile: { __typename?: 'ProfileType', avatar: string } } }>, queue?: { __typename?: 'UserType', guid: string } | null, winner?: { __typename?: 'UserType', guid: string } | null } } };

export type StartGameMutationVariables = Exact<{
  color?: InputMaybe<Cc>;
  length?: InputMaybe<BoardLength>;
}>;


export type StartGameMutation = { __typename?: 'Mutation', checkers: { __typename?: 'CheckersMutation', start: { __typename?: 'Board', guid: string, length: number, grid: Array<Array<number>>, isEnded: boolean, createdAt: string, updatedAt: string, players: Array<{ __typename?: 'BoardPlayers', stoneType: number, player: { __typename?: 'UserType', guid: string, email: string, fullName: string, profile: { __typename?: 'ProfileType', avatar: string } } }>, queue?: { __typename?: 'UserType', guid: string } | null, winner?: { __typename?: 'UserType', guid: string } | null } } };

export type UserTypeFragmentFragment = { __typename?: 'UserType', guid: string, email: string, fullName: string, profile: { __typename?: 'ProfileType', avatar: string } };

export type BoardFragmentFragment = { __typename?: 'Board', guid: string, length: number, grid: Array<Array<number>>, isEnded: boolean, createdAt: string, updatedAt: string, players: Array<{ __typename?: 'BoardPlayers', stoneType: number, player: { __typename?: 'UserType', guid: string, email: string, fullName: string, profile: { __typename?: 'ProfileType', avatar: string } } }>, queue?: { __typename?: 'UserType', guid: string } | null, winner?: { __typename?: 'UserType', guid: string } | null };

export type GamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GamesQuery = { __typename?: 'Query', zone: { __typename?: 'ZoneQuery', games: Array<{ __typename?: 'GameType', guid: string, title: string, description: string, image?: string | null, configs?: any | null, createdAt: any, updatedAt: any }> } };

export type GameTypeFragmentFragment = { __typename?: 'GameType', guid: string, title: string, description: string, image?: string | null, configs?: any | null, createdAt: any, updatedAt: any };

export const BoardListFragmentFragmentDoc = gql`
    fragment BoardListFragment on Board {
  guid
  createdAt
  players {
    player {
      fullName
      profile {
        avatar
      }
    }
  }
}
    `;
export const UserTypeFragmentFragmentDoc = gql`
    fragment UserTypeFragment on UserType {
  guid
  email
  fullName
  profile {
    avatar
  }
}
    `;
export const BoardFragmentFragmentDoc = gql`
    fragment BoardFragment on Board {
  guid
  length
  players {
    player {
      ...UserTypeFragment
    }
    stoneType
  }
  grid
  queue {
    guid
  }
  winner {
    guid
  }
  isEnded
  createdAt
  updatedAt
}
    ${UserTypeFragmentFragmentDoc}`;
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
      guid
      email
      fullName
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
export const CheckersBoardsDocument = gql`
    query CheckersBoards {
  checkers {
    boards {
      ...BoardListFragment
    }
  }
}
    ${BoardListFragmentFragmentDoc}`;

export function useCheckersBoardsQuery(options?: Omit<Urql.UseQueryArgs<CheckersBoardsQueryVariables>, 'query'>) {
  return Urql.useQuery<CheckersBoardsQuery, CheckersBoardsQueryVariables>({ query: CheckersBoardsDocument, ...options });
};
export const CheckersByGuidDocument = gql`
    query CheckersByGUID($guid: String!) {
  checkers {
    game(guid: $guid) {
      ...BoardFragment
    }
  }
}
    ${BoardFragmentFragmentDoc}`;

export function useCheckersByGuidQuery(options: Omit<Urql.UseQueryArgs<CheckersByGuidQueryVariables>, 'query'>) {
  return Urql.useQuery<CheckersByGuidQuery, CheckersByGuidQueryVariables>({ query: CheckersByGuidDocument, ...options });
};
export const UpdateBoardInGameDocument = gql`
    mutation UpdateBoardInGame($guid: ID!, $gridChanges: [[Int!]!]!) {
  checkers {
    updateBoardInGame(gridChanges: $gridChanges, guid: $guid)
  }
}
    `;

export function useUpdateBoardInGameMutation() {
  return Urql.useMutation<UpdateBoardInGameMutation, UpdateBoardInGameMutationVariables>(UpdateBoardInGameDocument);
};
export const JoinToGameDocument = gql`
    mutation JoinToGame($guid: ID!) {
  checkers {
    join(guid: $guid) {
      ...BoardFragment
    }
  }
}
    ${BoardFragmentFragmentDoc}`;

export function useJoinToGameMutation() {
  return Urql.useMutation<JoinToGameMutation, JoinToGameMutationVariables>(JoinToGameDocument);
};
export const StartGameDocument = gql`
    mutation StartGame($color: CC = Black, $length: BoardLength = EIGHT) {
  checkers {
    start(color: $color, length: $length) {
      ...BoardFragment
    }
  }
}
    ${BoardFragmentFragmentDoc}`;

export function useStartGameMutation() {
  return Urql.useMutation<StartGameMutation, StartGameMutationVariables>(StartGameDocument);
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