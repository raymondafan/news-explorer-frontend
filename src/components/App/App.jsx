import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SigninModal from "../SigninModal/SigninModal";
import { useEffect, useState } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleSigninModal = () => {
    setActiveModal("signin");
  };
  const handleCloseModal = () => {
    setActiveModal(""); //empty string bc we wanna go back to initial state (useState("")) so nothing appears after clicked
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
      <Header onSigninModal={handleSigninModal} />
      <Main />
      <Footer />
      {activeModal === "signin" && (
        <SigninModal
          isOpen={true}
          handleSigninModal={handleSigninModal}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
