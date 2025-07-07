import UsersRepository from '../repositories/users.repository.js';
import { catchError } from '../helpers/catch.error.js';

class UsersService {
  async createUser(data) {
    const [result, error] = await catchError(
      UsersRepository.createUser(data)
    );
    if (error) throw error;
    return result;
  }

  async getUsers() {
    const [result, error] = await catchError(
      UsersRepository.getUsers()
    );
    if (error) throw error;
    return result;
  }

  async updateUser(data) {
    const [result, error] = await catchError(
      UsersRepository.updateUser(data)
    );
    if (error) throw error;
    return result;
  }

  async deleteUser(data) {
    const [result, error] = await catchError(
      UsersRepository.deleteUser(data)
    );
    if (error) throw error;
    return result;
  }

  async updateStatus(data){
    const [result, error] = await catchError(
        UsersRepository.updateStatus(data)
    );
    if (error) throw error;
    return result;
  }

  async updatePassword(data){
    const [result, error] = await catchError(
        UsersRepository.updatePassword(data)
    );
    if (error) throw error;
    return result;
  }
}

export default new UsersService();
