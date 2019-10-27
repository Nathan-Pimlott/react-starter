import { 
  createContext 
} from 'react';
import { 
  decorate, 
  observable
} from 'mobx';

export class Auth {
  loading = false;
  error = null;
  user = {};

  login = async (email, password) => {
    try {
      if (
        email === 'test@email.com' &&
        password === 'password'
      ) {
        this.user = {
          firstName: 'Dave',
          lastName: 'Test',
          email: 'test@email.com',
        }
      } else {
        throw Error('Incorrect Login Details');
      }
    } catch (err) {
      this.error = err;
      this.loading = false;
    }
  }

  logout = () => {
    this.user = {};
  }
}

decorate(Auth, {
  loading: observable,
  error: observable,
  user: observable,
})

export default createContext(
  new Auth()
);
