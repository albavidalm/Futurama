import React from "react";

const FilterByName = ({ nameFilter, handleFilter }) => {
  const handleOnChange = (ev) => {
    handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };

  return (
    <fieldset className="form__name">
      <label className="form__name--label" htmlFor="name">
        Search a character:
      </label>
      <input
        className="form__name--input"
        type="search"
        placeholder="Ex: Bender"
        name="name"
        id="name"
        value={nameFilter}
        onChange={handleOnChange}
        autoFocus
      />
    </fieldset>
  );
};

export default FilterByName;
