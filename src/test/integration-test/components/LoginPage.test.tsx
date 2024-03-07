import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../../../app/components/LoginPage';
import userEvent from '@testing-library/user-event';

describe('LoginPage Integration Test', () => {
  test('should allow a user to log in', async () => {
    // จำลองฟังก์ชัน onLogin
    const mockOnLogin = jest.fn();

    // แสดง LoginPage พร้อมกับ mock function
    render(<LoginPage onLogin={mockOnLogin} />);

    // จำลองการกรอกข้อมูลในฟอร์ม login
    await userEvent.type(screen.getByLabelText(/username/i), 'user1');
    await userEvent.type(screen.getByLabelText(/password/i), 'password');

    // จำลองการกดปุ่ม submit
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // ตรวจสอบว่าฟังก์ชัน onLogin ถูกเรียกด้วยข้อมูลที่ถูกต้อง
    expect(mockOnLogin).toHaveBeenCalledWith('user1', 'password');
  });
});