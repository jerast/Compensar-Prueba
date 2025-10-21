import api from '@services/axios.config';

type LoginPayload = {
  emailOrUser: string;
  password: string;
};

type RegisterPayload = {
  email: string;
  user: string;
  phone: string;
  password: string;
};

export const login = async (payload: LoginPayload) => {
  try {
    const { data } = await api.post('/login', payload);
    return data;
  } catch (err: any) {
    const message = err?.response?.data?.message || err?.message || 'Login failed';
    throw new Error(message);
  }
};

export const register = async (payload: RegisterPayload) => {
  try {
    const { data } = await api.post('/register', payload);
    return data;
  } catch (err: any) {
    const message = err?.response?.data?.message || err?.message || 'Register failed';
    throw new Error(message);
  }
};
