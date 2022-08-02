import React from "react";

const FilterByOrigin = ({ handleFilter, originFilter }) => {
  const handleOnChange = (ev) => {
    handleFilter({
      value: ev.target.value,
      key: "origin",
    });
  };
  return (
    <fieldset className="form__choose">
      <label htmlFor="origin">
        Choose a home planet
        <select
          className="form__choose--select"
          name="origin"
          id="origin"
          onChange={handleOnChange}
          value={originFilter}
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
