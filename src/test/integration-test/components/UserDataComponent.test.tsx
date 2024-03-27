import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserDataComponent from '../../../app/components/UserDataComponent';
import axios from 'axios';

// Mock การเรียกใช้ axios ด้วย jest.mock
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('UserDataComponent Integration Test', () => {
  // ทดสอบการแสดงข้อมูลผู้ใช้จาก API
  test('should display user data fetched from an API', async () => {
    // ตั้งค่า mock response สำหรับ axios
    mockedAxios.get.mockResolvedValue({
      data: { id: 1, name: 'John Doe' }
    });

    render(<UserDataComponent />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // รอและตรวจสอบว่าข้อความ Loading หายไป
    await waitFor(() => expect(screen.queryByText('Loading...')).toBeNull());

    // ตรวจสอบว่าข้อมูลผู้ใช้ถูกแสดงบนหน้าเว็บ
    expect(screen.getByText('User Data')).toBeInTheDocument();
    expect(screen.getByText('ID: 1')).toBeInTheDocument();
    expect(screen.getByText('Name: John Doe')).toBeInTheDocument();
  });
});