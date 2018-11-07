import React from 'react';
import { Link } from 'react-router-dom';

import { readyDate } from '../helpers/readyDate';

export const UserInfo = ({ session }) => {
  return (
    <div className="profile-card">
      <h3 className="special-title-2">Your Info</h3>
      <p>
        Username: <strong>{session.getCurrentUser.username}</strong>
      </p>
      <p>
        Email: <strong>{session.getCurrentUser.email}</strong>
      </p>
      <p>
        Join Date: <strong>{readyDate(session.getCurrentUser.joinDate)}</strong>
      </p>
      <ul>
        <h3 className="special-title-2">Favorites</h3>
        {session &&
          session.getCurrentUser.favorites.map(favorite => (
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
