import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../../../App';

describe('LoginPage Integration Test', () => {
  test('login failed', async () => {
    // ทำการสอดแนม window.alert เมื่อมีการเรียกใช้งาน
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Render App เพื่อเรียกหน้า LoginPage (Default Page) ขึ้นมา
    render(<App />);

    // จำลองการกรอกข้อมูล username และ password ที่ไม่ถูกต้อง
    fireEvent.change(screen.getByLabelText(/username:/i), { target: { value: 'wronguser' } });
    fireEvent.change(screen.getByLabelText(/password:/i), { target: { value: 'wrongpass' } });

    // จำลองการกดปุ่ม Login
    fireEvent.click(screen.getByText(/login/i));

    // ตรวจสอบว่ามีการแสดง alert ว่า 'Login Failed'
    expect(window.alert).toHaveBeenCalledWith('Login Failed');
  });

  test('login successful', async () => {
    // Render App เพื่อเรียกหน้า LoginPage (Default Page) ขึ้นมา
    render(<App />);

    // จำลองการกรอกข้อมูล username และ password ที่ถูกต้อง
    fireEvent.change(screen.getByLabelText(/username:/i), { target: { value: 'user' } });
    fireEvent.change(screen.getByLabelText(/password:/i), { target: { value: 'password' } });

    // จำลองการกดปุ่ม Login
    fireEvent.click(screen.getByText(/login/i));

    // หลังจาก login สำเร็จ , ให้ตรวจสอบว่า หน้าถูกเปลี่ยนเป็น HomePage แล้วหรือยัง
    await waitFor(() => {
      expect(screen.getByText(/welcome to home/i)).toBeInTheDocument();
    });
  });
});