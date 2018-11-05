import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import { GET_USER_PROJECTS } from '../../queries';

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
              <p>Likes: {project.likes}</p>
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);
