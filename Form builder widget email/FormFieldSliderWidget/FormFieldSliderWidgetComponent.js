import * as React from "react";
import * as Scrivito from "scrivito";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import ReactDOM from "react-dom";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";

class FormFieldSliderWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.widget.get("placeholder") || 30,
    };
  }

  render() {
    const { widget } = this.props;
    const name = widget.get("name") || `input-id-${widget.id()}`;
    const label = widget.get("label");
    const required = widget.get("required") === "yes";
    const color = widget.get("color");
    const border = widget.get("border") === "yes";
    const minValue = widget.get("minValue");
    const maxValue = widget.get("maxValue");
    const step = widget.get("step");
    const dotsOnSteps = widget.get("dotsOnSteps") === "yes";

    const wrapperStyle = {
      padding: "11px",
      border: border ? "1px #dadada solid" : "none",
      marginTop: "-11px",
    };

    const colorStyle = {
      backgroundColor: color,
      border: "none",
      boxShadow: "none",
    };

    const activeDotStyle = {
      backgroundColor: color,
      border: `2px ${color} solid`,
      boxShadow: "none",
    };

    return (
      <div className="position-relative form-group">
        <label className="floating-label floating-label-slider">
          {label} {required ? <span className="required-mark"> *</span> : ""}
        </label>
        <div style={wrapperStyle} className="form-control">
          <div className="d-flex">
            <div className="flex-value">{minValue}</div>
            <div className="flex-slider">
              <Slider
                min={minValue}
                max={maxValue}
                step={step}
                dots={dotsOnSteps}
                activeDotStyle={activeDotStyle}
                defaultValue={this.state.value}
                handle={handle}
                trackStyle={colorStyle}
                handleStyle={colorStyle}
                onChange={value => this.setState({ value })}
              />
            </div>
            <div className="flex-value">{maxValue}</div>
          </div>
        </div>
        <input
          readOnly
          className="form-control form-control-lg d-none"
          id={name}
          name={name}
          required={required}
          value={this.state.value}
        />
      </div>
    );
  }
}

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  const Handle = Slider.Handle;

  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

Scrivito.provideComponent("FormFieldSliderWidget", FormFieldSliderWidget);
