export declare namespace ServerUsers {
  interface ServerResponse {
    users: Array<{
      id: number;
      username: string;
      email: string;
      avatar: string;
    }>;
  }
}

export interface User {
  id: number;
  username: string;
  email: string;
  image: string;
  isGmailUser: boolean;
}

export enum QueryTypes {
  USERS = 'users',
}
