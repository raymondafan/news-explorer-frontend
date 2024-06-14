import "./ModalWithForm.css";
const ModalWithForm = ({
  children,
  title,
  onSubmit,
  isLoading,
  buttonText,
  secondButtonText,
  onSecondButtonClick,
  onClose,
  isOpen,
}) => {
  console.log(`Modal open state: ${isOpen}`);
  return (
    <div className={`modal ${isOpen ? "modal_open" : ""}`}>
      <div className="modal__form-container">
        {" "}
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={onSubmit}>
          {children}
          <div className="modal__button-container">
            <button
              className="modal__button"
              type="submit"
              disabled={isLoading}
            >
              {buttonText}
            </button>
            {secondButtonText && (
              <button
                type="button"
                className="modal__button-register"
                onClick={onSecondButtonClick}
                disabled={isLoading}
              >
                {secondButtonText}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default ModalWithForm;
