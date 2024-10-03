import "./SuccessModal.css";
const SuccessModal = ({ onClose, onSecondButtonClick, isOpen }) => {
  return (
    <div className={`success-modal ${isOpen ? "success-modal_open" : ""}`}>
      <div className="success-modal__container">
        <button
          className="success-modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <div className="success-modal__message">
          Registration successfully <br /> completed!
        </div>
        <button
          type="button"
          className="success-modal__signin-button"
          onClick={onSecondButtonClick}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
export default SuccessModal;
