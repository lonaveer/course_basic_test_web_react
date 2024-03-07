import React from 'react';

interface UserProfileProps {
  username: string;
  email: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ username, email }) => {
  return (
    <div>
      <h1>{username}</h1>
      <p>{email}</p>
    </div>
  );
};

export default UserProfile;