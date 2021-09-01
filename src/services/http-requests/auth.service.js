import { post } from "./axios.instance";

class AuthService {
  login(user) {
    return post('users/auth/login', user);
  }

  signUp(user) {
    return post('users/auth/register', user);
  }

  async getCurrentUser() {}
}

export default new AuthService();