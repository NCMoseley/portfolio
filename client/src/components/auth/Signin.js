import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { SIGNIN_USER } from '../../queries/';
import { Error } from '../Error';

const initialState = {
  username: '',
  password: ''
};
class Signin extends Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event, signinUser) => {
    event.preventDefault();
    signinUser().then(data => {
      console.log(data);
    });
    this.clearState();
  };

  validateForm = () => {
    const { username, password } = this.state;
    const isInvalid = !username || !password;
    return isInvalid;
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="App">
        <h2 className="App">Signin</h2>
        <Mutation mutation={SIGNIN_USER} variables={{ username, password }}>
          {(signinUser, { data, loading, error }) => {
            return (
              <form
                className="form"
                onSubmit={event => this.handleSubmit(event, signinUser)}
              >
                <input
                  value={username}
                  onChange={this.handleChange}
                  type="text"
                  name="username"
                  placeholder="Username"
                />
                <input
                  value={password}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <button
                  type="submit"
                  disabled={loading || this.validateForm()}
                  className="button-primary"
                >
                  Login
                </button>
                {error && <Error error={error} />}
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default Signin;
