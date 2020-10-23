import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("FormFieldTextWidget", ({ widget }) => {
    const name = widget.get("name") || `input-id-${widget.id()}`;
    const label = widget.get("label");
    const type = widget.get("type");
    const required = widget.get("required") === "yes" ? true : false;
    const placeholder = widget.get("placeholder");

    return (
            <div className="form-group">
                <label htmlFor={name}>{label}{required ? <span className="required-mark"> *</span> : ""}</label>
                <input
                    className="form-control form-control-lg"
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    required={required}
                />
            </div>
    )
})
