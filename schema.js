exports.typeDefs = `

type Project {
  name: String!
  category: String!
  description: String!
  instructions: String!
  createDate: String
  likes: Int
  username: String
}

type User {
  username: String! @unique
  password: String! 
  email: String!
  joinDate: String
  favorites: [Project]
}

type Query {
  getAllProjects:  [Project]
}

type Mutation {
  addProject( 
  name: String!
  category: String!
  description: String!
  instructions: String!
  username: String
   ): Project
}

`;
