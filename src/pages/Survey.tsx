import { useState } from 'react';
import { toast } from 'sonner';
import { Modal } from '@/components/Modal';
import Header from '@/components/Header';
import submitSurvey from '@/services/survey.services';
import useAppStore from '@/store/app.store';

const Survey = () => {
  const user = useAppStore((state) => state.user);
  const survey = useAppStore((state) => state.survey);
  const setSurvey = useAppStore((state) => state.setSurvey);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [surveyForm, setSurveyForm] = useState(survey);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSurveyForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if all questions are answered
    const isFormFilled = Object.values(surveyForm).every((value) => !!value);
    if (!isFormFilled) {
      toast.error('Por favor, responde todas las preguntas.');
      return;
    }

    // Prevent multiple submits
    if (isLoading) return;

    // Submit survey
    setIsLoading(true);
    const response = await submitSurvey({
      user: user?.user,
      survey: surveyForm
    });
    setIsLoading(false);

    // Handle error response
    if (!response.ok) {
      toast.error(response.message || 'Error al enviar la encuesta');
      return;
    }

    // Set survey in store
    setSurvey(surveyForm);
    setIsModalOpen(true);
  };

  return (
    <>
      <Header />
      <main className="survey">
        <form className="survey-form" onSubmit={handleSubmit}>
          <h1 className="survey-form__title">Encuesta</h1>

          {/* Form fields */}
          <label className="survey-form__date">
            <span className="survey-form__label">Fecha</span>
            <input
              type="date"
              name="fecha"
              onChange={handleChange}
              value={surveyForm.fecha}
              required
            />
          </label>

          <div className="survey-form__input">
            <span className="survey-form__label">Pregunta 1</span>
            <div className="survey-form__radio-group">
              <label className="survey-form__radio">
                <span>A</span>
                <input
                  type="radio"
                  name="Pregunta 1"
                  value="A"
                  onChange={handleChange}
                  checked={surveyForm['Pregunta 1'] === 'A'}
                />
              </label>
              <label className="survey-form__radio">
                <span>B</span>
                <input
                  type="radio"
                  name="Pregunta 1"
                  value="B"
                  onChange={handleChange}
                  checked={surveyForm['Pregunta 1'] === 'B'}
                />
              </label>
              <label className="survey-form__radio">
                <span>C</span>
                <input
                  type="radio"
                  name="Pregunta 1"
                  value="C"
                  onChange={handleChange}
                  checked={surveyForm['Pregunta 1'] === 'C'}
                />
              </label>
              <label className="survey-form__radio">
                <span>D</span>
                <input
                  type="radio"
                  name="Pregunta 1"
                  value="D"
                  onChange={handleChange}
                  checked={surveyForm['Pregunta 1'] === 'D'}
                />
              </label>
            </div>
          </div>

          <div className="survey-form__input">
            <span className="survey-form__label">Pregunta 2</span>
            <div className="survey-form__radio-group">
              <label className="survey-form__radio">
                <span>A</span>
                <input
                  type="radio"
                  name="Pregunta 2"
                  value="A"
                  onChange={handleChange}
                  checked={surveyForm['Pregunta 2'] === 'A'}
                />
              </label>
              <label className="survey-form__radio">
                <span>B</span>
                <input
                  type="radio"
                  name="Pregunta 2"
                  value="B"
                  onChange={handleChange}
                  checked={surveyForm['Pregunta 2'] === 'B'}
                />
              </label>
              <label className="survey-form__radio">
                <span>C</span>
                <input
                  type="radio"
                  name="Pregunta 2"
                  value="C"
                  onChange={handleChange}
                  checked={surveyForm['Pregunta 2'] === 'C'}
                />
              </label>
              <label className="survey-form__radio">
                <span>D</span>
                <input
                  type="radio"
                  name="Pregunta 2"
                  value="D"
                  onChange={handleChange}
                  checked={surveyForm['Pregunta 2'] === 'D'}
                />
              </label>
            </div>
          </div>

          <div className="survey-form__input">
            <span className="survey-form__label">Pregunta 3</span>
            <div className="survey-form__radio-group">
              <label className="survey-form__radio">
                <span>A</span>
                <input
                  type="radio"
                  name="Pregunta 3"
                  value="A"
                  onChange={handleChange}
                  checked={surveyForm['Pregunta 3'] === 'A'}
                />
              </label>
              <label className="survey-form__radio">
                <span>B</span>
                <input
                  type="radio"
                  name="Pregunta 3"
                  value="B"
                  onChange={handleChange}
                  checked={surveyForm['Pregunta 3'] === 'B'}
                />
              </label>
              <label className="survey-form__radio">
                <span>C</span>
                <input
                  type="radio"
                  name="Pregunta 3"
                  value="C"
                  onChange={handleChange}
                  checked={surveyForm['Pregunta 3'] === 'C'}
                />
              </label>
              <label className="survey-form__radio">
                <span>D</span>
                <input
                  type="radio"
                  name="Pregunta 3"
                  value="D"
                  onChange={handleChange}
                  checked={surveyForm['Pregunta 3'] === 'D'}
                />
              </label>
            </div>
          </div>

          <div className="survey-form__input">
            <span className="survey-form__label">Pregunta 4</span>
            <div className="survey-form__radio-group">
              <label className="survey-form__radio">
                <span>A</span>
                <input
                  type="radio"
                  name="Pregunta 4"
                  value="A"
                  onChange={handleChange}
                  checked={surveyForm['Pregunta 4'] === 'A'}
                />
              </label>
              <label className="survey-form__radio">
                <span>B</span>
                <input
                  type="radio"
                  name="Pregunta 4"
                  value="B"
                  onChange={handleChange}
                  checked={surveyForm['Pregunta 4'] === 'B'}
                />
              </label>
              <label className="survey-form__radio">
                <span>C</span>
                <input
                  type="radio"
                  name="Pregunta 4"
                  value="C"
                  onChange={handleChange}
                  checked={surveyForm['Pregunta 4'] === 'C'}
                />
              </label>
              <label className="survey-form__radio">
                <span>D</span>
                <input
                  type="radio"
                  name="Pregunta 4"
                  value="D"
                  onChange={handleChange}
                  checked={surveyForm['Pregunta 4'] === 'D'}
                />
              </label>
            </div>
          </div>

          <button className="survey-form__submit" type="submit" disabled={isLoading}>
            Enviar
          </button>
        </form>
      </main>
      {isModalOpen && <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
    </>
  );
};

export default Survey;
