declare type UserType = {
  id: string;
  name: string;
  email: string;
  [key: string]: string | number;
};

declare type UserLocalStorageType = {
  user: UserType;
  token: string;
};
