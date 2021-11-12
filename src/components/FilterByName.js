import React from "react";

const FilterByName = (props) => {
  const handleOnChange = (ev) => {
    props.handleFilter({
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
        type="text"
        placeholder="Ex: Bender"
        name="name"
        id="name"
        onChange={handleOnChange}
        autoFocus
      />
    </fieldset>
  );
};

export default FilterByName;
