export interface IUserRepository {
  getUsers(...args: any);

  getUserById(...args);

  createUser(...args);

  updateUser(...args);

  deleteUserById(...args);
}
