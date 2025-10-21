import api from '@config/axios.config';

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
    if (!data.data) {
      return { ok: false, message: data.message };
    }
    return { ok: true, data: data.data };
  } catch (err: any) {
    const message = err?.response?.data?.message || err?.message || 'Login failed';
    return { ok: false, message };
  }
};

export const register = async (payload: RegisterPayload) => {
  try {
    const { data } = await api.post('/register', payload);
    if (!data.data) {
      return { ok: false, message: data.message };
    }
    return { ok: true, data: data.data };
  } catch (err: any) {
    const message = err?.response?.data?.message || err?.message || 'Register failed';
    return { ok: false, message };
  }
};
