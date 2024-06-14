import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SigninModal.css";
const SigninModal = ({
  isOpen,
  onClose,
  activeModal,
  onSecondButtonClick,
  onSubmitButtonClick,
  isLoading,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  return (
    <ModalWithForm
      onSubmit={handleSubmit}
      onClose={onClose}
      name="signin"
      title="Sign In"
      buttonText={isLoading ? "Signing In..." : "Sign In"}
      isOpen={isOpen}
      onSubmitButtonClick={onSubmitButtonClick}
      onSecondButtonClick={onSecondButtonClick}
      activeModal={activeModal}
      secondButtonText={activeModal === "signup" ? "or Sign In" : "or Sign Up"}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
      </label>
      <label className="modal__bottomlabel">
        Password
        <input
          className="modal__input"
          type="password"
          placeholder="Password"
          name="Password"
          value={password}
          onChange={handlePassword}
        />
      </label>
    </ModalWithForm>
  );
};
export default SigninModal;
