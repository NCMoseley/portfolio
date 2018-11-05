import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';

import { GET_USER_PROJECTS, DELETE_USER_PROJECT } from '../../queries';

const handleDelete = deleteUserProject => {
  const confirmDelete = window.confirm(
    'Are you sure you want tot delete this project?'
  );
  if (confirmDelete) {
    deleteUserProject().then(({ data }) => {
      console.log(data);
    });
  }
};

export const UserProjects = ({ username }) => (
  <Query query={GET_USER_PROJECTS} variables={{ username }}>
    {({ data, loading, error }) => {
      if (loading) return <div>Loading...</div>;
      if (error)
        return (
          <div>
            Error...
            {console.error(error)}
          </div>
        );
      console.log(data);
      return (
        <ul>
          <h3>Your Projects</h3>
          {data.getUserProjects.map(project => (
            <li key={project.name}>
              <Link to={`/projects/${project.name}`}>
                {<p>{project.name}</p>}
              </Link>
              <p style={{ marginBottom: '0' }}>Likes: {project.likes}</p>
              <Mutation
                mutation={DELETE_USER_PROJECT}
                variables={{ name: project.name }}
              >
                {deleteUserProject => {
                  return (
                    <p
                      onClick={() => handleDelete(deleteUserProject)}
                      className="delete-button"
                    >
                      X
                    </p>
                  );
                }}
              </Mutation>
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);
