import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SigninModal from "../SigninModal/SigninModal";

import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const handleSigninModal = () => {
    setActiveModal("signin");
  };
  const handleRegisterModal = () => {
    setActiveModal("signup");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleEscKey = (e) => {
    if (e.key === "Escape") {
      return handleCloseModal();
    }
  };
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("modal")) {
        return handleCloseModal();
      }
    };
    if (!activeModal) {
      return;
    }
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  });

  console.log(`Active modal: ${activeModal}`);
  return (
    <div className="page">
      <Header onSigninModal={handleSigninModal} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Main isLoading={isLoading} />} />
      </Routes>

      <Footer />
      {activeModal === "signin" && (
        <SigninModal
          isOpen={true}
          handleSigninModal={handleSigninModal}
          onClose={handleCloseModal}
          onSecondButtonClick={handleRegisterModal}
          activeModal={activeModal}
        />
      )}
      {activeModal === "signup" && (
        <RegisterModal
          isOpen={true}
          handleRegisterModal={handleRegisterModal}
          onClose={handleCloseModal}
          onSecondButtonClick={handleSigninModal}
          activeModal={activeModal}
        />
      )}
    </div>
  );
}

export default App;
