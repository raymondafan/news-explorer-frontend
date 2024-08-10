import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SigninModal from "../SigninModal/SigninModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import { getToken } from "../../utils/token";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import auth from "../../utils/auth";
import { handleToken, removeToken } from "../../utils/token";

import newsApi from "../../utils/newsApi";
import api from "../../utils/api";
import SuccessModal from "../SuccessModal/SuccessModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [newsCardItems, setNewsCardItems] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [userData, setUserData] = useState({ email: "" });
  const [isSearchInitiated, setIsSearchInitiated] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldResetVisibleCount, setShouldResetVisibleCount] = useState(false);

  const navigate = useNavigate();

  const handleSigninModal = () => {
    setActiveModal("signin");
    setIsMenuOpen(false);
    setIsModalOpen(true);
  };

  const handleRegisterModal = () => {
    setActiveModal("signup");
  };

  const handleCloseModal = () => {
    setActiveModal("");
    setIsModalOpen(false);
    setIsMenuOpen(false);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleEscKey = (e) => {
    if (e.key === "Escape") {
      return handleCloseModal();
    }
  };

  const handleSignInModalSubmit = (user) => {
    setIsLoading(true);
    auth
      .signIn(user.email, user.password)
      .then((data) => {
        if (data.token) {
          handleToken(data.token);
          return auth.checkToken(getToken());
        } else {
          throw new Error("No token received");
        }
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        handleCloseModal();
        setIsMenuOpen(false);
        navigate("/saved-news");
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleRegisterModalSubmit = (user) => {
    setIsLoading(true);
    auth
      .signUp(user.email, user.password, user.username)
      .then((data) => {
        if (data.token) {
          handleToken(data.token);
          return auth.checkToken(getToken());
        } else {
          throw new Error("No token received");
        }
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsMenuOpen(false);
        setActiveModal("success");
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleLogOutSubmit = (user) => {
    setCurrentUser({});
    removeToken(user);
    navigate("/");
    setIsLoggedIn(false);
    setIsMenuOpen(false);
    setNewsCardItems([]);
    setIsSearchInitiated(false);
  };

  const handleSearch = (query) => {
    setIsSearchInitiated(true);
    setIsLoading(true);
    setShouldResetVisibleCount(true);
    newsApi
      .fetchNews(query)
      .then((articles) => {
        if (articles.length === 0) {
          setIsNotFound(true);
        } else {
          setIsNotFound(false);
        }
        setNewsCardItems(articles);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
        setShouldResetVisibleCount(false);
      });
  };

  const handleSaveArticle = (article) => {
    console.log(article);
    api
      .saveArticle(article)
      .then((savedArticle) => {
        setSavedArticles((prev) => [...prev, savedArticle]);
      })
      .catch((err) => {
        console.error(err);
      });
    // api
    //   .getItems(query)
    //   .then((data) => {
    //     console.log("API response:", data);
    //     const articles = data[0].articles;
    //     if (articles.length === 0) {
    //       setIsNotFound(true);
    //     } else {
    //       setIsNotFound(false);
    //     }
    //     setNewsCardItems(articles);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     setIsLoading(false);
    //   });
  };
  // useEffect(() => {
  //   api
  //     .getItems("latest")
  //     .then((data) => {
  //       setNewsCardItems(data.articles);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // });
  // useEffect(() => {
  //
  //   if (location.pathname === "/") {
  //     setNewsCardItems([]);
  //     setIsSearchInitiated(false);
  //     setIsNotFound(false);
  //   }
  // }, [location.pathname]);

  useEffect(() => {
    api.getItems().then((data) => {
      const articles = data[0].articles;
      setSavedArticles(articles);
    });
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        e.target.classList.contains("modal") ||
        e.target.classList.contains("success-modal")
      ) {
        handleCloseModal();
      }
    };
    if (activeModal) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [activeModal]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Routes>
            <Route
              path="/"
              element={
                <Header
                  onSigninModal={handleSigninModal}
                  isLoggedIn={isLoggedIn}
                  page="main"
                  onProfileLogout={handleLogOutSubmit}
                  onSearch={handleSearch}
                  onToggleMenu={toggleMenu}
                  onCloseMenu={closeMenu}
                  isMenuOpen={isMenuOpen}
                  isModalOpen={isModalOpen}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                <Header
                  onSigninModal={handleSigninModal}
                  isLoggedIn={isLoggedIn}
                  page="saved-news"
                  onProfileLogout={handleLogOutSubmit}
                  onToggleMenu={toggleMenu}
                  onCloseMenu={closeMenu}
                  isMenuOpen={isMenuOpen}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  isLoading={isLoading}
                  isNotFound={isNotFound}
                  newsCardItems={newsCardItems}
                  onSearch={handleSearch}
                  isSearchInitiated={isSearchInitiated}
                  onSaveArticle={handleSaveArticle}
                  isLoggedIn={isLoggedIn}
                  shouldResetVisibleCount={shouldResetVisibleCount}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedNewsHeader
                    isLoggedIn={isLoggedIn}
                    onSigninModal={handleSigninModal}
                    savedArticles={savedArticles}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>

          <Footer />
          {activeModal === "signin" && (
            <SigninModal
              isOpen={true}
              handleSigninModal={handleSigninModal}
              onClose={handleCloseModal}
              onSecondButtonClick={handleRegisterModal}
              activeModal={activeModal}
              onSubmitButtonClick={handleSignInModalSubmit}
              isLoading={isLoading}
            />
          )}
          {activeModal === "signup" && (
            <RegisterModal
              isOpen={true}
              isLoading={isLoading}
              handleRegisterModal={handleRegisterModal}
              onClose={handleCloseModal}
              onSubmitButtonClick={handleRegisterModalSubmit}
              onSecondButtonClick={handleSigninModal}
              activeModal={activeModal}
            />
          )}
          {activeModal === "success" && (
            <SuccessModal
              isOpen={true}
              onClose={handleCloseModal}
              onSecondButtonClick={handleSigninModal}
              activeModal={activeModal}
            />
          )}
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
