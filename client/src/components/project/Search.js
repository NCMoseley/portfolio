import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import { Link } from 'react-router-dom';

import { SEARCH_PROJECTS } from '../../queries';

//  {({ data, loading, error }) => {
//       if (loading) return <div className="App">Loading...</div>;
//       if (error)
//         return (
//           <div className="App">
//             Error
//             {console.error(error)}
//           </div>
// console.log(data);
//         );
//           }}

class Search extends Component {
  state = {
    searchResults: []
  };
  handleChange = ({ searchProjects }) => {
    this.setState({
      searchResults: searchProjects
    });
  };

  render() {
    const { searchResults } = this.state;

    return (
      <ApolloConsumer query={SEARCH_PROJECTS} variables={{ searchTerm: '' }}>
        {client => (
          <div className="App">
            <input
              type="search"
              placeholder="Search for Projects by keyword"
              onChange={async event => {
                event.persist();
                const { data } = await client.query({
                  query: SEARCH_PROJECTS,
                  variables: { searchTerm: event.target.value }
                });
                this.handleChange(data);
              }}
            />
            <ul>
              {searchResults.map(project => (
                <li key={project.name}>
                  <Link to={`/projects/${project.name}`}>
                    <h4>{project.name}</h4>
                  </Link>
                  <p>{project.likes}</p>
                  <p>{project.username}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </ApolloConsumer>
    );
  }
}
export default Search;
