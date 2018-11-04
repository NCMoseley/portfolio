import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';

import { GET_PROJECT } from '../../queries';

// TODO: _id in place of name
const ProjectPage = ({ match }) => {
  const { name } = match.params;
  return (
    <Query query={GET_PROJECT} variables={{ name }}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error</div>;
        console.log(data);
        return (
          <div className="App">
            <h2>{data.getProject.name}</h2>
            <p>Category: {data.getProject.category}</p>
            <p>Description: {data.getProject.description}</p>
            <p>Instructions: {data.getProject.instructions}</p>
            <p>Likes: {data.getProject.likes}</p>
            <p>Created By: {data.getProject.username}</p>
          </div>
        );
      }}
    </Query>
  );
};

export default withRouter(ProjectPage);
