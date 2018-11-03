import React from 'react';
import { Link } from 'react-router-dom';

export const ProjectItem = ({ _id, name, category }) => (
  <li>
    <Link to={`/projects/${name}`}>
      <h4>{name}</h4>
    </Link>
    <p>
      <strong>{category}</strong>
    </p>
  </li>
);
