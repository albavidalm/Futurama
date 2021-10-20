// import React from "react";

// const FilterByOrigin = (props) => {
//   const handleOnChange = (ev) => {
//     props.handleFilter({
//       value: ev.target.value,
//       key: "origin",
//     });
//   };

//   return (
//     <fieldset className="form__origin">
//       <label className="form__origin--label" htmlFor="origin">
//         Search by home planet
//       </label>
//       <input
//         className="form__origin--input"
//         type="text"
//         placeholder="Ex: Earth"
//         name="origin"
//         id="origin"
//         onChange={handleOnChange}
//       />
//     </fieldset>
//   );
// };

// export default FilterByOrigin;
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
      <label className="form__specie--label" htmlFor="specie">
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
