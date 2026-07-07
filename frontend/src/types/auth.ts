export type AuthUser = {
  email: string;
  role?: string;
};

export type AuthResponse = {
  token: string;
  user: AuthUser;
};
