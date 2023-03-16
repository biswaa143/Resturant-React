import React from "react";

const Table = (props) => {
  return (
    <div>
      <label htmlFor="table">Choose a Table</label>
      <select name="table" id="table">
        <option value="select">Select One</option>
        <option value="table1">Table 1</option>
        <option value="table2">Table 2</option>
        <option value="table3">Table 3</option>
      </select>
    </div>
  );
};
export default Table;
