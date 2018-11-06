import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import { LIKE_PROJECT, GET_PROJECT, UNLIKE_PROJECT } from '../../queries';
import { withSession } from '../withSession';

class LikeProject extends Component {
  state = {
    liked: false,
    username: ''
  };

  componentDidMount() {
    if (this.props.session.getCurrentUser) {
      const { username, favorites } = this.props.session.getCurrentUser;
      const { name } = this.props;
      const prevliked =
        favorites.findIndex(favorite => favorite.name === name) > -1;
      this.setState({
        liked: prevliked,
        username
      });
    }
  }

  handleClick = (likeProject, unlikeProject) => {
    this.setState(
      prevState => ({
        liked: !prevState.liked
      }),
      () => this.handleLike(likeProject, unlikeProject)
    );
  };

  handleLike = (likeProject, unlikeProject) => {
    if (this.state.liked) {
      likeProject().then(async ({ data }) => {
        // console.log(data);
        await this.props.refetch();
      });
    } else {
      unlikeProject().then(async ({ data }) => {
        // console.log(data);
        await this.props.refetch();
      });
    }
  };

  updateLike = (cache, { data: { likeProject } }) => {
    const { name } = this.props;
    const { getProject } = cache.readQuery({
      query: GET_PROJECT,
      variables: { name }
    });
    cache.writeQuery({
      query: GET_PROJECT,
      variables: { name },
      data: {
        getProject: { ...getProject, likes: likeProject.likes + 1 }
      }
    });
  };

  updateUnlike = (cache, { data: { unlikeProject } }) => {
    const { name } = this.props;
    const { getProject } = cache.readQuery({
      query: GET_PROJECT,
      variables: { name }
    });
    cache.writeQuery({
      query: GET_PROJECT,
      variables: { name },
      data: {
        getProject: { ...getProject, likes: unlikeProject.likes - 1 }
      }
    });
  };

  render() {
    const { liked, username } = this.state;
    const { name } = this.props;
    return (
      <Mutation
        mutation={UNLIKE_PROJECT}
        variables={{ name, username }}
        update={this.updateUnlike}
      >
        {unlikeProject => (
          <Mutation
            mutation={LIKE_PROJECT}
            variables={{ name, username }}
            update={this.updateLike}
          >
            {likeProject =>
              username && (
                <button
                  className="like-button"
                  onClick={() => this.handleClick(likeProject, unlikeProject)}
                >
                  {liked ? 'Unlike' : 'Like'}
                </button>
              )
            }
          </Mutation>
        )}
      </Mutation>
    );
  }
}

export default withSession(LikeProject);
