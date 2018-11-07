import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { SIGNIN_USER } from '../../queries/';
import { Error } from '../Error';

const initialState = {
  email: '',
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
    signinUser().then(async ({ data }) => {
      // console.log(data);
      localStorage.setItem('token', data.signinUser.token);
      await this.props.refetch();
      this.clearState();
      this.props.history.push('/');
    });
  };

  validateForm = () => {
    const { email, password } = this.state;
    const isInvalid = !email || !password;
    return isInvalid;
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="App">
        <h2 className="special-title">Signin</h2>
        <Mutation mutation={SIGNIN_USER} variables={{ email, password }}>
          {(signinUser, { data, loading, error }) => {
            return (
              <form
                className="form"
                onSubmit={event => this.handleSubmit(event, signinUser)}
              >
                <input
                  value={email}
                  onChange={this.handleChange}
                  type="text"
                  name="email"
                  placeholder="email"
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

export default withRouter(Signin);
