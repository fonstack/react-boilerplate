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

export declare namespace ServerUser {
  interface ServerResponse {
    user: {
      id: number;
      username: string;
      email: string;
      avatar: string;
      phone: string;
      website: string;
    };
  }
}

export interface User {
  id: number;
  username: string;
  email: string;
  image: string;
  isGmailUser: boolean;
  phone?: string;
  website?: string;
}

export enum QueryTypes {
  USERS = 'users',
  USER = 'user',
}
