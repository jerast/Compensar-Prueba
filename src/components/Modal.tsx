import CheckIcon from '@assets/icons/check.svg?react';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <CheckIcon />
        <span className="modal__text">Tus respuestas se han guardado de manera correcta</span>
        <button className="modal__button" onClick={() => setIsOpen(false)}>
          Terminar
        </button>
      </div>
    </div>
  );
};
