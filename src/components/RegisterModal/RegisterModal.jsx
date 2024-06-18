import "./RegisterModal.css";
import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  isOpen,
  onClose,
  activeModal,
  onSubmitButtonClick,
  onSecondButtonClick,
  isLoading,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setUsername("");
    }
  }, [isOpen]);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitButtonClick({ email, password, username });
  };
  return (
    <ModalWithForm
      onSubmit={handleSubmit}
      onClose={onClose}
      name="signup"
      title="Sign up"
      buttonText={isLoading ? "Signing Up..." : "Sign Up"}
      isOpen={isOpen}
      activeModal={activeModal}
      onSecondButtonClick={onSecondButtonClick}
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
        />
      </label>
      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          placeholder="Enter password"
          name="Password"
          value={password}
          onChange={handlePassword}
          minLength="1"
          maxLength="30"
        />
      </label>
      <label className="modal__label-bottom">
        Username
        <input
          className="modal__input"
          type="text"
          placeholder="Enter your username"
          name="username"
          value={username}
          onChange={handleUsername}
        />
      </label>
    </ModalWithForm>
  );
};
export default RegisterModal;
