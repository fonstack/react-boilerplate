import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TopBar } from './TopBar';

const renderTopBar = (): void => {
  render(
    <BrowserRouter>
      <TopBar />
    </BrowserRouter>
  );
};

describe('TopBar tests', () => {
  it('Should render correctly TopBar component', () => {
    renderTopBar();

    const welcomeText = screen.getByText(/welcome/i);

    expect(welcomeText).toBeInTheDocument();
  });
});
