import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import { LIKE_PROJECT } from '../../queries';
import { withSession } from '../withSession';

class LikeProject extends Component {
  state = {
    username: ''
  };

  componentDidMount() {
    if (this.props.session.getCurrentUser) {
      const { username } = this.props.session.getCurrentUser;
      console.log(username);
      this.setState({
        username
      });
    }
  }

  handleLike = likeProject => {
    likeProject().then(({ data }) => {
      console.log(data);
    });
  };

  render() {
    const { username } = this.state;
    const { name } = this.props;
    return (
      <Mutation mutation={LIKE_PROJECT} variables={{ name, username }}>
        {likeProject =>
          username && (
            <button onClick={() => this.handleLike(likeProject)}>Like</button>
          )
        }
      </Mutation>
    );
  }
}

export default withSession(LikeProject);
