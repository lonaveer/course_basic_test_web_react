import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

const useUserFetch = (userId: number): User | null => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => { // จำลอง API call
      setTimeout(() => {
        setUser({ id: userId, name: `User ${userId}` });
      }, 500); // จำลองเวลาในการรับข้อมูล
    };
    fetchUser();
  }, [userId]);

  return user;
};

export default useUserFetch;