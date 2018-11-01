exports.resolvers = {
  Query: {
    getAllProjects: () => {}
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
