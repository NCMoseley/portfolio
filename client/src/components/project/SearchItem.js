import React from 'react';
import { Link } from 'react-router-dom';

export const SearchItem = ({ name, category, username, description }) => (
  <li className="search-item">
    <Link to={`/projects/${name}`}>
      <h4>
        <strong>{name}</strong>
      </h4>
    </Link>
    <p>{description}</p>
    <p>
      Category: <strong>{category}</strong>
    </p>
    <p>
      Created by: <strong>{username}</strong>
    </p>
  </li>
);
