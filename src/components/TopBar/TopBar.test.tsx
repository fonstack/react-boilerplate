import { render, screen } from '@testing-library/react';
import { TopBar } from './TopBar';

describe('TopBar tests', () => {
  it('Should render correctly TopBar component', () => {
    render(<TopBar />);

    const welcomeText = screen.getByText(/welcome/i);

    expect(welcomeText).toBeInTheDocument();
  });
});
