const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

exports.resolvers = {
  Query: {
    getAllProjects: async (root, args, { Project }) => {
      const allProjects = await Project.find().sort({ createdDate: 'desc' });
      return allProjects;
    },
    // TODO: _id
    getProject: async (root, { name }, { Project }) => {
      const project = await Project.findOne({ name });
      return project;
    },
    searchProjects: async (root, { searchTerm }, { Project }) => {
      if (searchTerm) {
        const searchResults = await Project.find(
          {
            $text: { $search: searchTerm }
          },
          {
            score: { $meta: 'textScore' }
          }
        ).sort({
          score: { $meta: 'textScore' }
        });
        return searchResults;
      } else {
        const projects = await Project.find().sort({
          likes: 'desc',
          createdDate: 'desc'
        });
        return projects;
      }
    },
    getUserProjects: async (root, { username }, { Project }) => {
      const userProjects = await Project.find({ username }).sort({
        createdDate: 'desc'
      });
      return userProjects;
    },
    getCurrentUser: async (root, args, { currentUser, User }) => {
      if (!currentUser) return null;
      const user = await User.findOne({
        username: currentUser.username
      }).populate({
        path: 'favorites',
        model: 'Project'
      });
      return user;
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
    likeProject: async (root, { name, username }, { Project, User }) => {
      const project = await Project.findOneAndUpdate(
        { name },
        { $inc: { likes: 1 } }
      );
      //  TODO: fix that ol _id bug
      // const user = await User.findOneAndUpdate(
      //   { username },
      //   {
      //     $addToSet: {
      //       favorites: name
      //     }
      //   }
      // );
      return project;
    },
    unlikeProject: async (root, { name, username }, { Project, User }) => {
      const project = await Project.findOneAndUpdate(
        { name },
        { $inc: { likes: -1 } }
      );
      //  TODO: fix that ol _id bug
      // const user = await User.findOneAndUpdate(
      //   { username },
      //   {
      //     $pull: {
      //       favorites: name
      //     }
      //   }
      // );
      return project;
    },
    deleteUserProject: async (root, { name }, { Project }) => {
      const project = await Project.findOneAndRemove({ name });
      return project;
    },
    signinUser: async (root, { username, password }, { User }) => {
      const user = await User.findOne({ username });
      if (!user) throw new Error('User not found');
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) throw new Error('Invalid password');
      return { token: createToken(user, process.env.SECRET, '1hr') };
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
