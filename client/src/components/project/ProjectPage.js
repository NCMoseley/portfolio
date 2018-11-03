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
        return <div>Project page</div>;
      }}
    </Query>
  );
};

export default withRouter(ProjectPage);
