import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import { SEARCH_PROJECTS } from '../../queries';

export const Search = () => (
  <Query query={SEARCH_PROJECTS} variables={{ searchTerm: '' }}>
    {({ data, loading, error }) => {
      if (loading) return <div className="App">Loading...</div>;
      if (error)
        return (
          <div className="App">
            Error
            {console.error(error)}
          </div>
        );
      console.log(data);
      return (
        <div className="App">
          <input type="search" />
          <ul>
            {data.searchProjects.map(project => (
              <li key={project.name}>
                <Link to={`/projects/${project.name}`}>
                  <h4>{project.name}</h4>
                </Link>
                <p>{project.likes}</p>
                <p>{project.username}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }}
  </Query>
);
