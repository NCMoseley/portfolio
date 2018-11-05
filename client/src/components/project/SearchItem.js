import React from 'react';
import { Link } from 'react-router-dom';

export const SearchItem = ({ name, likes, username }) => (
  <li>
    <Link to={`/projects/${name}`}>
      <h4>{name}</h4>
    </Link>
    <p>Likes: {likes}</p>
    <p>Created by: {username}</p>
  </li>
);
