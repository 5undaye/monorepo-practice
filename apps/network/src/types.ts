import { type User } from "@auth0/auth0-spa-js";

export interface MyNetworkType {
  connectionCount: number;
  contactCount: number;
  eventCount: number;
  pageCount: number;

  user: User;
}

export interface ConnectionType {
  name: string;
  picture: string;
  role: string;
  networkCount: number;
}
