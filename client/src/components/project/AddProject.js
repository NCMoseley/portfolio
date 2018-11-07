import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';

import {
  ADD_PROJECT,
  GET_ALL_PROJECTS,
  GET_USER_PROJECTS
} from '../../queries/';
import { Error } from '../../components/Error';
import { withAuth } from '../withAuth';

const initialState = {
  name: '',
  imageUrl: '',
  link: '',
  category: 'Front-End',
  description: '',
  username: ''
};
class AddProject extends Component {
  state = { ...initialState };

  componentDidMount() {
    this.setState({ username: this.props.session.getCurrentUser.username });
  }

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event, addProject) => {
    event.preventDefault();
    addProject().then(({ data }) => {
      // console.log(data);
      this.clearState();
      this.props.history.push('/');
    });
  };
  // Update data on home page after new Project is added.
  updateCache = (cache, { data: { addProject } }) => {
    const { getAllProjects } = cache.readQuery({ query: GET_ALL_PROJECTS });
    cache.writeQuery({
      query: GET_ALL_PROJECTS,
      data: {
        getAllProjects: [addProject, ...getAllProjects]
      }
    });
  };

  validateForm = () => {
    const { name, imageUrl, category, description, link } = this.state;
    const isInvalid = !name || !imageUrl || !category || !description || !link;
    return isInvalid;
  };

  render() {
    const {
      name,
      imageUrl,
      category,
      description,
      link,
      username
    } = this.state;

    return (
      <Mutation
        mutation={ADD_PROJECT}
        refetchQueries={() => [
          { query: GET_USER_PROJECTS, variables: { username } }
        ]}
        variables={{
          name,
          imageUrl,
          category,
          description,
          link,
          username
        }}
        update={this.updateCache}
      >
        {(addProject, { data, loading, error }) => {
          return (
            <div className="App">
              <h2 className="special-title">Add Project</h2>
              <form
                className="form"
                onSubmit={event => this.handleSubmit(event, addProject)}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Project Name"
                  onChange={this.handleChange}
                  value={name}
                />
                <input
                  type="text"
                  name="imageUrl"
                  placeholder="Add photo"
                  onChange={this.handleChange}
                  value={imageUrl}
                />
                <select
                  name="category"
                  onChange={this.handleChange}
                  value={category}
                >
                  <option value="Front-End">Front-End</option>
                  <option value="Wordpress">Wordpress</option>
                  <option value="React">React</option>
                  <option value="React-Native">React-Native</option>
                  <option value="Node.js">NodeJS</option>
                  <option value="Serverless">Serverless</option>
                </select>
                <textarea
                  name="description"
                  placeholder="Add description"
                  onChange={this.handleChange}
                  value={description}
                />
                <input
                  type="text"
                  name="link"
                  placeholder="Add link to project"
                  onChange={this.handleChange}
                  value={link}
                />
                <button
                  disabled={loading || this.validateForm()}
                  className="button-primary"
                >
                  Submit
                </button>
                {error && <Error error={error} />}
              </form>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default withAuth(session => session && session.getCurrentUser)(
  withRouter(AddProject)
);
