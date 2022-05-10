import React from "react";

const FilterBySpecie = (props) => {
  const handleOnChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "specie",
    });
  };
  return (
    <fieldset className="form__specie">
      <label className="form__specie--label" htmlFor="specie">
        Choose a species
        <select
          className="form__specie--select"
          name="specie"
          id="specie"
          onChange={handleOnChange}
          value={props.FilterBySpecie}
        >
          <option value="all">All</option>
          <option value="Amphibiosans">Amphibiosans</option>
          <option value="Decapodian">Decapodian</option>
          <option value="Human">Human</option>
          <option value="Martian">Martian</option>
          <option value="Mutant">Mutant</option>
          <option value="Omicronian">Omicronian</option>
          <option value="Robot">Robot</option>
        </select>
      </label>
    </fieldset>
  );
};

export default FilterBySpecie;
