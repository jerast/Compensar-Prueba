import api from '@services/axios.config';

type SurveyPayload = {
  user: string;
  survey: string;
};

const submitSurvey = async (payload: SurveyPayload) => {
  try {
    const { data } = await api.post('/survey', payload);
    return data;
  } catch (err: any) {
    const message = err?.response?.data?.message || err?.message || 'Submit survey failed';
    throw new Error(message);
  }
};

export default submitSurvey;
