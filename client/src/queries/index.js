import { gql } from 'apollo-boost';

// TODO: Add _id field
// Project Queries
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
      username
    }
  }
`;

export const SEARCH_PROJECTS = gql`
  query($searchTerm: String) {
    searchProjects(searchTerm: $searchTerm) {
      name
      likes
      username
    }
  }
`;

// Project Mutations
export const ADD_PROJECT = gql`
  mutation(
    $name: String!
    $category: String!
    $description: String!
    $instructions: String!
    $username: String
  ) {
    addProject(
      name: $name
      category: $category
      description: $description
      instructions: $instructions
      username: $username
    ) {
      name
      category
      description
      instructions
      createdDate
      likes
    }
  }
`;

export const LIKE_PROJECT = gql`
  mutation($name: String!, $username: String!) {
    likeProject(name: $name, username: $username) {
      name
      likes
    }
  }
`;

export const DELETE_USER_PROJECT = gql`
  mutation($name: String!) {
    deleteUserProject(name: $name) {
      name
    }
  }
`;

// User Queries
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      username
      joinDate
      email
      favorites {
        name
        username
      }
    }
  }
`;

export const GET_USER_PROJECTS = gql`
  query($username: String!) {
    getUserProjects(username: $username) {
      name
      likes
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
