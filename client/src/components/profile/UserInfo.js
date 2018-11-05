import React from 'react';
import { Link } from 'react-router-dom';

import { readyDate } from '../helpers/readyDate';

export const UserInfo = ({ session }) => {
  return (
    <div className="App">
      <h3>User Info</h3>
      <p>Username: {session.getCurrentUser.username}</p>
      <p>Email: {session.getCurrentUser.email}</p>
      <p>Join Date: {readyDate(session.getCurrentUser.joinDate)}</p>
      <ul>
        <h3>
          {session.getCurrentUser.username}
          's Favorites
        </h3>
        {session.getCurrentUser.favorites.map(favorite => (
          <li key={favorite.name}>
            <Link to={`/projects/${favorite.name}`}>
              {<p>{favorite.name}</p>}
            </Link>
          </li>
        ))}
        {session.getCurrentUser.favorites.length < 1 && (
          <p>
            <strong>You haven't chosen any favorites. Go choose some!</strong>
          </p>
        )}
      </ul>
    </div>
  );
};
