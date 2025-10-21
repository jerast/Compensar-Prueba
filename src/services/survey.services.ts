import api from '@config/axios.config';

type SurveyPayload = {
  user?: string;
  survey: {
    fecha: string;
    'Pregunta 1': string;
    'Pregunta 2': string;
    'Pregunta 3': string;
    'Pregunta 4': string;
  };
};

const submitSurvey = async (payload: SurveyPayload) => {
  try {
    const { data } = await api.post('/survey', payload);
    return { ok: true, data };
  } catch (err: any) {
    const message = err?.response?.data?.message || err?.message || 'Submit survey failed';
    return { ok: false, message };
  }
};

export default submitSurvey;
