import React from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({
  options,
  name,
  dataTest,
  label,
  value,
  handleChange,
  defaultValue = "Select an option",
  addClass = "",
}) => (
  <div className={`${styles.dropdown} ${addClass}`}>
    <label className={styles.dropdownLabel}>{label}</label>
    <select
      defaultValue={value}
      name={name}
      data-testid={dataTest}
      onChange={handleChange}
      className={styles.dropdownSelect}
    >
      <option value="">{defaultValue}</option>
      {options.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
