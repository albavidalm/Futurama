import fry from "../assets/images/fry_sure.webp";
import bubble from "../assets/images/bubble.png";
import ResetButton from "./ui/ResetButton";

const NotFoundSearch = ({
  search,
  specieFilter,
  originFilter,
  handleReset,
}) => {
  return (
    <section className="notfound">
      <ResetButton
        handleReset={handleReset}
        isList={true}
        className=" reset-btn-back "
      >
        BACK HOME <i className="fas fa-user-astronaut"></i>
      </ResetButton>

      <div className="notfound__container">
        <img
          className="notfound__container--img"
          src={bubble}
          alt="Thinking bubble"
        />
        <h2 className="notfound__search--title">
          Not sure if {search}{" "}
          {specieFilter !== "all" && `the ${specieFilter} `}
          {/* {specieFilter !== "all" && <span>{specieFilter}</span>} */}
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
