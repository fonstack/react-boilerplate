import { isGmail } from './../../utils/isGmail';
import { ServerUsers, ServerUser, User } from './types';

export const usersTransform = (data: ServerUsers.ServerResponse): User[] => {
  const users: User[] = data.users.map((user) => ({
    id: user.id,
    email: user.email,
    username: user.username,
    image: user.avatar,
    isGmailUser: isGmail(user.email),
  }));

  return users;
};

export const userTransform = (data: ServerUser.ServerResponse): User | null => {
  if (!data.user) return null;

  const user: User = {
    id: data.user.id,
    email: data.user.email,
    username: data.user.username,
    image: data.user.avatar,
    isGmailUser: isGmail(data.user.email),
    phone: data.user.phone,
    website: data.user.website,
  };

  return user;
};
