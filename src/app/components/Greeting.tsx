import React from 'react';

interface GreetingProps {
  name: string;
} // กำหนด interface สำหรับ props ของคอมโพเนนต์

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
}; // สร้างคอมโพเนนต์ Greeting ที่รับ props ตาม interface GreetingProps

export default Greeting;