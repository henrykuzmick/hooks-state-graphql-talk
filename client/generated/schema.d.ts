

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateColor
// ====================================================

export interface CreateColor_createColor {
  __typename: "Color";
  id: string;
  value: string;
}

export interface CreateColor {
  createColor: CreateColor_createColor | null;
}

export interface CreateColorVariables {
  value: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateUser
// ====================================================

export interface CreateUser_createUser_color {
  __typename: "Color";
  id: string;
  value: string;
}

export interface CreateUser_createUser {
  __typename: "User";
  id: string;
  name: string;
  color: CreateUser_createUser_color;
}

export interface CreateUser {
  createUser: CreateUser_createUser | null;
}

export interface CreateUserVariables {
  name: string;
  color?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Colors
// ====================================================

export interface Colors_colors {
  __typename: "Color";
  id: string;
  value: string;
}

export interface Colors {
  colors: Colors_colors[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Users
// ====================================================

export interface Users_users_color {
  __typename: "Color";
  id: string;
  value: string;
}

export interface Users_users {
  __typename: "User";
  id: string;
  name: string;
  color: Users_users_color;
}

export interface Users {
  users: Users_users[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================