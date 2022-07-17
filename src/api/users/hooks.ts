import { useQuery, UseQueryResult } from 'react-query';
import { getUserById, getUsers } from './api';
import { usersTransform, userTransform } from './selectors';
import { QueryTypes, User } from './types';

export const useUsers = (options = {}): UseQueryResult<User[]> => {
  return useQuery(QueryTypes.USERS, getUsers, { select: usersTransform, ...options });
};

export const useUser = (userId: number, options = {}): UseQueryResult<User | null> => {
  return useQuery([QueryTypes.USER, userId], () => getUserById(userId), { select: userTransform, ...options });
};
