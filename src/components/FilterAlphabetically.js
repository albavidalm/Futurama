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
      <fieldset className="form__sort">
        <label>
          <input
            className="form__checkbox"
            name="ordered"
            id="ordered"
            value="ordered"
            type="checkbox"
            onChange={handleChange}
            checked={props.ordered}
          />
          Sort <i class="fas fa-arrow-down-a-z"></i>
        </label>
      </fieldset>
    </>
  );
};
export default FilterAlphabetically;
