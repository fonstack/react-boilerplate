import { useQuery, UseQueryResult } from 'react-query';
import { getUsers } from './api';
import { usersTransform } from './selectors';
import { QueryTypes, User } from './types';

export const useUsers = (options = {}): UseQueryResult<User[]> => {
  return useQuery(QueryTypes.USERS, getUsers, { select: usersTransform, ...options });
};
