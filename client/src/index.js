import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import './index.css';
import App from './components/App';
import { Navbar } from './components/Navbar';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Search from './components/project/Search.js';
import AddProject from './components/project/AddProject';
import Profile from './components/profile/Profile';
import { withSession } from './components/withSession';
import ProjectPage from './components/project/ProjectPage';

const client = new ApolloClient({
  uri: 'https://portfolio-home.herokuapp.com/graphql',
  fetchOptions: {
    credentials: 'include'
  },
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  },
  onError: ({ networkError }) => {
    if (networkError) console.log('Network Error', networkError);
    // if (networkError.statusCode === 401) localStorage.setItem('token');
  }
});

const Root = ({ refetch, session }) => (
  <Router>
    <Fragment>
      <Navbar session={session} />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/signin" render={() => <Signin refetch={refetch} />} />
        <Route path="/signup" render={() => <Signup refetch={refetch} />} />
        <Route path="/search" component={Search} />
        <Route
          path="/project/add"
          render={() => <AddProject session={session} />}
        />
        <Route path="/projects/:name" component={ProjectPage} />
        <Route path="/profile" render={() => <Profile session={session} />} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  </Router>
);

const RootWithSession = withSession(Root);

ReactDOM.render(
  <ApolloProvider client={client}>
    <RootWithSession />
  </ApolloProvider>,
  document.getElementById('root')
);
