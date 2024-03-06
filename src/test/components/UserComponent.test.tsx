import { render, screen, waitFor } from '@testing-library/react';
import UserComponent from '../../app/components/UserComponent';

describe('UserComponent', () => {
  it('fetches and displays user data', async () => {
    render(<UserComponent userId={1} />);

    // ใช้ waitFor เพื่อรอจนกว่าข้อความที่คาดหวังจะปรากฏขึ้น
    await waitFor(() => {
      expect(screen.getByText(/User ID: 1, Name: User 1/)).toBeInTheDocument();
    });
  });
});