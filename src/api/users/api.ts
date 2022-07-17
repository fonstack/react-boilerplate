import graphQlClient from '../client';
import { getUsersQuery, getUserByIdQuery } from './queries';
import { ServerUsers, ServerUser } from './types';

export const getUsers = async (): Promise<ServerUsers.ServerResponse> => {
  try {
    const data = await graphQlClient.request(getUsersQuery);
    return data as ServerUsers.ServerResponse;
  } catch (error) {
    throw new Error(`Unknown error: ${error}`);
  }
};

export const getUserById = async (userId: number): Promise<ServerUser.ServerResponse> => {
  try {
    const data = await graphQlClient.request(getUserByIdQuery, { userId });
    return data as ServerUser.ServerResponse;
  } catch (error) {
    throw new Error(`Unknown error: ${error}`);
  }
};
