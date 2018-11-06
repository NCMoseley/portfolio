import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';

import { SEARCH_PROJECTS } from '../../queries';
import { SearchItem } from './SearchItem';

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
                <SearchItem key={project.name} {...project} />
              ))}
            </ul>
          </div>
        )}
      </ApolloConsumer>
    );
  }
}
export default Search;
