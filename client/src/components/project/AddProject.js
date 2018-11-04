import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import { ADD_PROJECT } from '../../queries/';
import { Error } from '../../components/Error';
class AddProject extends Component {
  state = {
    name: '',
    instructions: '',
    category: 'Front End',
    description: '',
    username: ''
  };

  componentDidMount() {
    this.setState({ username: this.props.session.getCurrentUser.username });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event, addProject) => {
    event.preventDefault();
    addProject().then(({ data }) => {
      console.log(data);
    });
  };

  validateForm = () => {
    const { name, category, description, instructions } = this.state;
    const isInvalid = !name || !category || !description || !instructions;
    return isInvalid;
  };

  render() {
    const { name, category, description, instructions, username } = this.state;

    return (
      <Mutation
        mutation={ADD_PROJECT}
        variables={{ name, category, description, instructions, username }}
      >
        {(addProject, { data, loading, error }) => {
          return (
            <div className="App">
              <h2 className="App">Add Project</h2>
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
                <select
                  name="category"
                  onChange={this.handleChange}
                  value={category}
                >
                  <option value="Front End">Front End</option>
                  <option value="Wordpress">Wordpress</option>
                  <option value="React">React</option>
                  <option value="React-Native">React-Native</option>
                  <option value="Node.js">Node.js</option>
                  <option value="Serverless">Serverless</option>
                </select>
                <textarea
                  name="description"
                  placeholder="Add description"
                  onChange={this.handleChange}
                  value={description}
                />
                <textarea
                  name="instructions"
                  placeholder="Add instructions"
                  onChange={this.handleChange}
                  value={instructions}
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

export default AddProject;
