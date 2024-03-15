declare type UserType = {
  id: string;
  name: string;
  email: string;
  [key: string]: string | number;
};

declare type UserRequestBody = {
  [key: string]: string | number;
} & UserType;

declare type UserLocalStorageType = {
  user: UserType;
  token: string;
};
