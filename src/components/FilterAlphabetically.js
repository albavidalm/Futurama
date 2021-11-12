import React from "react";

const FilterAlphabetically = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      checked: ev.currentTarget.checked,
      key: "ordered",
    });
  };

  return (
    <>
      <fieldset className="form__name">
        <label className="form__specie">
          <input
            className="form__checkbox"
            name="ordered"
            id="ordered"
            value="ordered"
            type="checkbox"
            onChange={handleChange}
            checked={props.ordered}
          />
          Sort alphabetically
        </label>
      </fieldset>
    </>
  );
};
export default FilterAlphabetically;
