import React from 'react';
import { UserInfo } from './UserInfo';

export const Profile = ({ session }) => (
  <div>
    <UserInfo session={session} />
  </div>
);
