import React from 'react';
import { UserInfo } from './UserInfo';
import { UserProjects } from './UserProjects';

export const Profile = ({ session }) => (
  <div className="App">
    <UserInfo session={session} />
    <UserProjects username={session.getCurrentUser.username} />
  </div>
);
