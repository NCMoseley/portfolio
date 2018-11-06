import React from 'react';
import { Link } from 'react-router-dom';
import posed from 'react-pose';

const ProjectItem = posed.li({
  shown: { opacity: 1 },
  hidden: { opacity: 0 }
});

export default ({ name, imageUrl, category }) => (
  <ProjectItem
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
  </ProjectItem>
);
