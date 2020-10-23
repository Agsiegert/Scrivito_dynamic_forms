import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("FormFieldSelectWidget", ({ widget }) => {
  const name = widget.get("name") || `input-id-${widget.id()}`;
  const label = widget.get("label");
  const options = widget.get("options").split(",");
  const values = widget.get("values").split(",");
  const required = widget.get("required") === "yes" ? true : false;

  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}
        {required ? <span className="required-mark"> *</span> : ""}
      </label>
      <select
        className="form-control form-control-lg"
        id={name}
        name={name}
        type="select"
        required={required}
      >
        {options.map((item, index) => (
          <option
            key={index}
            value={
              values && values.length === options.length
                ? values[index].trim()
                : item.trim()
            }
          >
            {item.trim()}
          </option>
        ))}
      </select>
    </div>
  );
});
