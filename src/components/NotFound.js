// import photo from "../assets/images/astronaut.png";
import GoBack from "./ui/GoBack";
import spaceship from "../assets/images/Spaceship_crash.png";

const NotFoundSearch = () => {
  return (
    <section className="notfound">
      <GoBack />

      <h2 className="notfound__title">
        Maybe we are in a black hole because we can't find what you are looking
        for.
      </h2>

      <img
        className="notfound__search--img"
        src={spaceship}
        alt="Character not found"
      />
    </section>
  );
};

export default NotFoundSearch;
