// TODO: Add _id to getProject
exports.typeDefs = `

type Project {
  _id: ID
  name: String!
  category: String!
  description: String!
  instructions: String!
  createdDate: String
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
  
  getProject(name: String!): Project

  searchProjects(searchTerm: String): [Project]




  getCurrentUser: User

  getUserProjects(username: String!): [Project]
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

  likeProject(name: String!, username: String!): Project

  deleteUserProject(name: String!): Project

  signinUser( username: String! password: String!): Token

  signupUser( username: String! password: String! email: String!): Token

}

`;
