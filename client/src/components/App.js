import React from 'react';
import './App.css';

import { Query } from 'react-apollo';
import { GET_ALL_PROJECTS } from '../queries';
import { ProjectItem } from './project/ProjectItem';

const App = () => (
  <div className="App">
    <h1>Home</h1>
    <Query query={GET_ALL_PROJECTS}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error...</div>;
        // console.log(data);
        return (
          <ul>
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
