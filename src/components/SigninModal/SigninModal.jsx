import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SigninModal.css";
const SigninModal = ({
  isOpen,
  onClose,
  activeModal,
  onSecondButtonClick,
  onSubmitButtonClick,
  onSubmitButtonClickMobile,
  isLoading,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("SigninModal Props:", { isLoading });
  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitButtonClick({ email, password });
  };
  console.log("SigninModal Props:", {
    isOpen,
    onClose,
    activeModal,
    onSecondButtonClick,
    onSubmitButtonClick,
    isLoading,
  });
  return (
    <ModalWithForm
      onSubmit={handleSubmit}
      onSubmitMobile={onSubmitButtonClickMobile}
      onClose={onClose}
      name="signin"
      title="Sign In"
      buttonText={isLoading ? "Signing In..." : "Sign In"}
      isOpen={isOpen}
      onSubmitButtonClick={onSubmitButtonClick}
      onSecondButtonClick={onSecondButtonClick}
      onSubmitButtonClickMobile={onSubmitButtonClickMobile}
      activeModal={activeModal}
      secondButtonText={activeModal === "signup" ? "  Sign In" : "  Sign Up"}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleEmail}
          required
        />
      </label>
      <label className="modal__label-bottom">
        Password
        <input
          className="modal__input"
          type="password"
          placeholder="Enter password"
          name="Password"
          value={password}
          onChange={handlePassword}
          required
        />
      </label>
    </ModalWithForm>
  );
};
export default SigninModal;
