import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import FilterByOrigin from "./FilterByOrigin";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form className="form" action="" onSubmit={handleSubmit}>
        <FilterByName handleFilter={props.handleFilter} />
        <FilterBySpecie handleFilter={props.handleFilter} />
        <FilterByOrigin handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};

export default Filters;
