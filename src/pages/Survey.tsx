import Header from '@/components/Header';
import { Modal } from '@/components/Modal';
import { useState } from 'react';
import { toast } from 'sonner';

const Survey = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [surveyForm, setSurveyForm] = useState({
    fecha: '',
    'Pregunta 1': '',
    'Pregunta 2': '',
    'Pregunta 3': '',
    'Pregunta 4': ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSurveyForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !surveyForm['Pregunta 1'] ||
      !surveyForm['Pregunta 2'] ||
      !surveyForm['Pregunta 3'] ||
      !surveyForm['Pregunta 4']
    ) {
      toast.error('Por favor, responde todas las preguntas.');
      return;
    }

    setIsLoading(true);
    setIsLoading(false);
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
