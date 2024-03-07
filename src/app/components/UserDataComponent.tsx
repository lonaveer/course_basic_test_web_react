import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
}

// คอมโพเนนต์สำหรับแสดงข้อมูลผู้ใช้
const UserDataComponent: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // สมมติว่าเราดึงข้อมูลผู้ใช้จาก API นี้
    axios.get<User>('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        setUser(response.data);
      });
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Data</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default UserDataComponent;