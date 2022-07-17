import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { User } from '../../api/users';
import { UserCard } from './UserCard';

const normalUser: User = {
  id: 1,
  email: 'carlos@test.com',
  image: 'https://randomuser.me/api/portraits/women/86.jpg',
  username: 'Carlos',
  isGmailUser: false,
};

const vipUser: User = {
  id: 2,
  email: 'carlos@gmail.com',
  image: 'https://randomuser.me/api/portraits/women/90.jpg',
  username: 'Carlos',
  isGmailUser: true,
};

const renderUserCard = (user: User): void => {
  render(
    <BrowserRouter>
      <UserCard id={user.id} email={user.email} image={user.image} username={user.username} isVIP={user.isGmailUser} />
    </BrowserRouter>
  );
};

describe('UserCard tests', () => {
  it('Should render correctly a non-vip user', () => {
    renderUserCard(normalUser);

    const vipTag = screen.queryByText(/VIP User/i);
    const username = screen.getByText(`Username: ${normalUser.username}`);
    const email = screen.getByText(`Email: ${normalUser.email}`);

    expect(vipTag).not.toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  it('Should render correctly a vip user', () => {
    renderUserCard(vipUser);

    const vipTag = screen.getByText(/VIP User/i);
    const username = screen.getByText(`Username: ${vipUser.username}`);
    const email = screen.getByText(`Email: ${vipUser.email}`);

    expect(vipTag).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
