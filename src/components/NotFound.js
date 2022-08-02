import photo from "../assets/images/astronaut.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Link className="goback" to="/">
        <i className="fas fa-chevron-circle-left"></i>
        Go back
      </Link>

      <h2 className="notfound__title">
        There is a spaceman waiting in the sky
      </h2>
      <img className="notfound__img" src={photo} alt="Character not found" />
    </>
  );
};

export default NotFound;
