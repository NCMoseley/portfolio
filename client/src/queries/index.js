import { gql } from 'apollo-boost';

// Project Queries
// TODO: Add _id field
export const GET_ALL_PROJECTS = gql`
  query {
    getAllProjects {
      name
      category
    }
  }
`;
// TODO: Add _id field
export const GET_PROJECT = gql`
  query($name: String!) {
    getProject(name: $name) {
      name
      category
      description
      instructions
      createdDate
      likes
    }
  }
`;
// Project Mutations

// User Queries
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      username
      joinDate
      email
    }
  }
`;

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
