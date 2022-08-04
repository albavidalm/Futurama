import fry from "../assets/images/fry_sure.webp";
import bubble from "../assets/images/bubble.png";

const NotFoundSearch = ({ search, specieFilter, originFilter }) => {
  return (
    <section className="notfound">
      <div className="notfound__container">
        <img
          className="notfound__container--img"
          src={bubble}
          alt="Thinking bubble"
        />
        <h2 className="notfound__search--title">
          Not sure if {search}{" "}
          {/* {specieFilter !== "all" && <span>{specieFilter}</span>} */}
          {specieFilter !== "all" && `the ${specieFilter} `}
          {originFilter !== "all" && ` from planet ${originFilter}`} exists....
          or you are dumb.
        </h2>
      </div>
      <img
        className="notfound__search--img"
        src={fry}
        alt="Character not found"
      />
    </section>
  );
};

export default NotFoundSearch;
