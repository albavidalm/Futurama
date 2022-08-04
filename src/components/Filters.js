import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import FilterByOrigin from "./FilterByOrigin";
import FilterAlphabetically from "./FilterAlphabetically";
import ResetButton from "./ui/ResetButton";

const Filters = ({
  nameFilter,
  specieFilter,
  originFilter,
  handleFilter,
  handleReset,
  orderFilter,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <FilterByName nameFilter={nameFilter} handleFilter={handleFilter} />

      <div className="form__filtersRow">
        <FilterBySpecie
          handleFilter={handleFilter}
          specieFilter={specieFilter}
        />
        <FilterByOrigin
          handleFilter={handleFilter}
          originFilter={originFilter}
        />
        <FilterAlphabetically
          ordered={orderFilter}
          handleFilter={handleFilter}
        />
      </div>

      <ResetButton handleReset={handleReset} isFilter={true}>
        Reset <i className="fas fa-recycle"></i>
      </ResetButton>
    </form>
  );
};

export default Filters;
