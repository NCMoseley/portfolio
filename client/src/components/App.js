import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import { GET_ALL_PROJECTS } from '../queries';
import './App.css';
import { ProjectItem } from './project/ProjectItem';

const App = () => (
  <div className="App">
    <h1 className="main-title">
      View Projects showcasing great technology you <strong>love....</strong>
    </h1>
    <h5 className="dark-text">
      <Link to={'/project/add'}>*Or share your own if you like</Link>
    </h5>
    <Query query={GET_ALL_PROJECTS}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error...</div>;
        console.log('App.js', data);
        return (
          <ul className="cards">
            {data.getAllProjects.map(project => (
              <ProjectItem key={project.name} {...project} />
            ))}
          </ul>
        );
      }}
    </Query>
  </div>
);

export default App;
