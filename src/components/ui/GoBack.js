import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <Link className="goback" to="/">
      <i className="fas fa-chevron-circle-left"></i>
      Go back
    </Link>
  );
};

export default GoBack;
