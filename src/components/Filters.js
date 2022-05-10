import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import FilterByOrigin from "./FilterByOrigin";
import FilterAlphabetically from "./FilterAlphabetically";
import ResetButton from "./ResetButton";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <FilterByName handleFilter={props.handleFilter} />
        <FilterBySpecie handleFilter={props.handleFilter} />
        <FilterByOrigin handleFilter={props.handleFilter} />
        <FilterAlphabetically
          ordered={props.ordered}
          handleFilter={props.handleFilter}
        />
        <ResetButton handleReset={props.handleReset} />
      </form>
    </section>
  );
};

export default Filters;
