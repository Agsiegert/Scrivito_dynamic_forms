import * as React from "react";
import * as Scrivito from "scrivito";

class FormFieldTextareaWidget extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = { counter: 0 };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ counter: event.target.value.length });
  }

  render() {
    const name = this.props.widget.get("name") || `input-id-${widget.id()}`;
    const label = this.props.widget.get("label");
    const rows = this.props.widget.get("rows")
      ? this.props.widget.get("rows").toString()
      : "3";
    const placeholder = this.props.widget.get("placeholder");
    const maxLength = this.props.widget.get("maxLength")
      ? this.props.widget.get("maxLength").toString()
      : "250";
    const required = this.props.widget.get("required") === "yes" ? true : false;
    const counter = this.state.counter;

    return (
      <div className="form-group">
        <label htmlFor={name}>
          {label}
          {required ? <span className="required-mark"> *</span> : ""}
        </label>
        <textarea
          className="form-control form-control-lg"
          id={name}
          name={name}
          rows={rows}
          required={required}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={event => this.handleChange(event)}
        ></textarea>
        <div
          className={`textarea-counter ${
            counter == maxLength ? "exceeded" : ""
          }`}
        >
          {counter}/{maxLength}
        </div>
      </div>
    );
  }
}

Scrivito.provideComponent("FormFieldTextareaWidget", FormFieldTextareaWidget);
