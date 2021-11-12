import React from "react";

const FilterByOrigin = (props) => {
  const handleOnChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "origin",
    });
  };
  return (
    <fieldset className="form__specie">
      <label className="form__specie--label" htmlFor="origin">
        Choose a home planet
        <select
          className="form__specie--select"
          name="origin"
          id="origin"
          onChange={handleOnChange}
        >
          <option value="all">All</option>
          <option value="Earth">Earth</option>
          <option value="Mars">Mars</option>
          <option value="Unknown">Unknown</option>
        </select>
      </label>
    </fieldset>
  );
};

export default FilterByOrigin;
