exports.typeDefs = `

type Project {
  _id: ID 
  name: String!
  category: String!
  description: String!
  instructions: String!
  createDate: String
  likes: Int
  username: String
}

type User {
  _id: ID 
  username: String! 
  password: String! 
  email: String!
  joinDate: String
  favorites: [Project]
}

type Query {
  getAllProjects:  [Project]
}

type Token {
  token: String!
}

type Mutation {
  addProject( 
  name: String!
  category: String!
  description: String!
  instructions: String!
  username: String
   ): Project

  signupUser( username: String! password: String! email: String!): Token

}

`;
