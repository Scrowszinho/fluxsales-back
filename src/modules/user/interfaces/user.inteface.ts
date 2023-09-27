export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  document: string;
  phoneNumber: string;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
