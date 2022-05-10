import photo from "../images/astronaut.png";

const NotFound = () => {
  return (
    <>
      <h2 className="notfound__title">
        There is a spaceman waiting in the sky
      </h2>
      <img className="notfound__img" src={photo} alt="Character not found" />
    </>
  );
};

export default NotFound;
