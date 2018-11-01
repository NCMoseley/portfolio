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
    }
  }
};
