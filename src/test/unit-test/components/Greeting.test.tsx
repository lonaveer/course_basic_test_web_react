import { render, screen } from '@testing-library/react';
import Greeting from '../../../app/components/Greeting';

// ใช้ Jest framework สำหรับเขียน test case
test('renders a greeting message', () => {
  // render คอมโพเนนต์ Greeting พร้อมกับ prop name
  render(<Greeting name="World" />);

  // ใช้ screen.getByText เพื่อค้นหาข้อความ "Hello, World!" ในเอกสาร
  const greetingElement = screen.getByText('Hello, World!');

  // ตรวจสอบว่าข้อความ "Hello, World!" ปรากฏอยู่ในเอกสาร
  expect(greetingElement).toBeInTheDocument();
});