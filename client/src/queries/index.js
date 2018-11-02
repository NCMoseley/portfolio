import { gql } from 'apollo-boost';

// Project Queries

export const GET_ALL_PROJECTS = gql`
  query {
    getAllProjects {
      name
      description
      instructions
      category
      likes
      createDate
    }
  }
`;

// Project Mutations

// User Queries

// User Mutations
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
