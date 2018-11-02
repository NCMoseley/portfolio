const jwt = require('jsonwebtoken');

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

exports.resolvers = {
  Query: {
    getAllProjects: async (root, args, { Project }) => {
      const allProjects = await Project.find();
      return allProjects;
    }
  },
  Mutation: {
    addProject: async (
      root,
      { name, category, description, instructions, username },
      { Project }
    ) => {
      const newProject = await new Project({
        name,
        category,
        description,
        instructions,
        username
      }).save();
      return newProject;
    },

    signupUser: async (root, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error('User already exists');
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return { token: createToken(newUser, process.env.SECRET, '1hr') };
    }
  }
};
