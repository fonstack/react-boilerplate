import { isGmail } from './../../utils/isGmail';
import { ServerUsers, User } from './types';

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
