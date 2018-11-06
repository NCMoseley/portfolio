import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';

import { GET_PROJECT } from '../../queries';
import LikeProject from './LikeProject';

// TODO: _id in place of name
const ProjectPage = ({ match }) => {
  const { name } = match.params;
  return (
    <Query query={GET_PROJECT} variables={{ name }}>
      {({ data, loading, error }) => {
        if (loading) return <div className="App">Loading...</div>;
        if (error)
          return (
            <div className="App">
              Error
              {console.error(error)}
            </div>
          );
        // console.log(data);
        return (
          <div className="App">
            <div className="project">
              <div className="project-header">
                <h2 className="project-name">
                  <strong>{data.getProject.name}</strong>
                </h2>
                <div
                  className="project-image"
                  style={{
                    background: `url(${
                      data.getProject.imageUrl
                    }) top center / cover no-repeat`
                  }}
                />
                <div className="row">
                  <h5>
                    Technology: <strong>{data.getProject.category}</strong>
                  </h5>
                  <p>Likes: {data.getProject.likes}</p>
                </div>
                <blockquote className="project-description">
                  {data.getProject.description}
                </blockquote>
                <p>
                  Created by: <strong>{data.getProject.username}</strong>
                </p>
              </div>
              <div>
                View project:
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${data.getProject.link}`}
                >
                  <p>{data.getProject.link}</p>
                </a>
              </div>
              <LikeProject name={name} />
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default withRouter(ProjectPage);
