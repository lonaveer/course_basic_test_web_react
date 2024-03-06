import React from 'react';
import useUserFetch from '../hooks/useUserFetch';

interface UserComponentProps {
  userId: number;
}

const UserComponent: React.FC<UserComponentProps> = ({ userId }) => {
  const user = useUserFetch(userId);

  if (!user) return <div>Loading...</div>;
  return <div>{`User ID: ${user.id}, Name: ${user.name}`}</div>;
};

export default UserComponent;