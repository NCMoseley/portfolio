import React from 'react';
import { Link } from 'react-router-dom';

export const ProjectItem = ({ name, imageUrl, category }) => (
  <li
    className="card"
    // style={{ background: `url(${imageUrl}) center center / cover no-repeat` }}
    style={{ background: `url(${imageUrl}) top no-repeat` }}
  >
    <span className={category}>{category}</span>
    <div className="card-text">
      <Link to={`/projects/${name}`}>
        <h4>{name}</h4>
      </Link>
    </div>
  </li>
);
