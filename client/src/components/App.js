import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import posed from 'react-pose';

import { GET_ALL_PROJECTS } from '../queries';
import './App.css';
import { ProjectItem } from './project/ProjectItem';

const ProjectList = posed.ul({
  shown: { x: '0%' },
  hidden: { x: '-100%' }
});

class App extends Component {
  state = {
    on: false
  };

  componentDidMount() {
    setTimeout(this.slideIn, 200);
  }

  slideIn = () => {
    this.setState({ on: !this.state.on });
  };
  render() {
    return (
      <div className="App">
        <h1 className="main-title">
          View Projects showcasing great technology you{' '}
          <strong>love....</strong>
        </h1>
        <h5 className="dark-text">
          <Link to={'/project/add'}>*Or share your own if you like</Link>
        </h5>
        <Query query={GET_ALL_PROJECTS}>
          {({ data, loading, error }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error...</div>;
            // console.log('App.js', data);
            const { on } = this.state;
            return (
              <ProjectList pose={on ? 'shown' : 'hidden'} className="cards">
                {data.getAllProjects.map(project => (
                  <ProjectItem key={project.name} {...project} />
                ))}
              </ProjectList>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;
