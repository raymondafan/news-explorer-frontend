import "./NotFound.css";
import imageNotFound from "../../assets/notfound.svg";
import Preloader from "../Preloader/Preloader";
const NotFound = () => {
  return (
    <div className="notFound">
      <img src={imageNotFound} alt="notfound" className="notFound__image" />
      <div className="notFound__text-container">
        <h2 className="notFound__text">Nothing Found</h2>
        <p className="notFound__subText">
          Sorry, but nothing matched <br />
          your search terms.
        </p>
      </div>
    </div>
  );
};
export default NotFound;
