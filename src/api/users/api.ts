import graphQlClient from '../graphql';
import { getUsersQuery } from './queries';
import { ServerUsers } from './types';

export const getUsers = async (): Promise<ServerUsers.ServerResponse> => {
  try {
    const data = await graphQlClient.request(getUsersQuery);
    return data as ServerUsers.ServerResponse;
  } catch (error) {
    throw new Error(`Unknown error: ${error}`);
  }
};
