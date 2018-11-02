import { gql } from 'apollo-boost';

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
