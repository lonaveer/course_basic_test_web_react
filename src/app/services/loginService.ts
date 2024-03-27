import { NavigateFunction } from "react-router-dom";

export const login = (username: string, password: string, navigate: NavigateFunction) => {
    // สมมุติในฐานข้อมูลมี username เท่ากับ 'user' และ password เท่ากับ 'password'
    if (username === 'user' && password === 'password') {
      navigate('/home');
    } else {
      alert('Login Failed');
    }
}