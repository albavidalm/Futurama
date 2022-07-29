import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import FilterByOrigin from "./FilterByOrigin";
import FilterAlphabetically from "./FilterAlphabetically";
import ResetButton from "./ResetButton";

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
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <FilterByName nameFilter={nameFilter} handleFilter={handleFilter} />
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
        <ResetButton handleReset={handleReset} />
      </form>
    </section>
  );
};

export default Filters;
