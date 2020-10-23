import * as Scrivito from "scrivito";
// import iconWidgetIcon from "../../assets/images/icon_input.svg";

Scrivito.provideEditingConfig("FormFieldSliderWidget", {
  title: "Form Field - Slider",
  // thumbnail: iconWidgetIcon,
  attributes: {
    name: {
      title: "Field name",
    },
    label: {
      title: "Label",
    },
    required: {
      title: "Required",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
    minValue: {
      title: "Minimum value",
      description: "Default: 0",
    },
    maxValue: {
      title: "Maximum value",
      description: "Default: 100",
    },
    step: {
      title: "Step",
      description: "Dragging step. Default: 1",
    },
    dotsOnSteps: {
      title: "Dots on steps",
      description: "Show dots on steps. Default: No",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
    placeholder: {
      title: "Placeholder",
      description: "Starting value",
    },
    color: {
      title: "Icon color",
      values: [
        { value: "#00aeef", title: "Primary" },
        { value: "#ff6b6b", title: "Secondary" },
        { value: "#716f73", title: "Grey" },
        { value: "#383838", title: "Dark Grey" },
      ],
    },
    border: {
      title: "Border",
      description: "Border around form field. Default: Yes",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
  },
  properties: [
    "name",
    "label",
    "required",
    "minValue",
    "maxValue",
    "step",
    "dotsOnSteps",
    "placeholder",
    "color",
    "border",
  ],
  initialContent: {
    required: "no",
    color: "#00aeef",
    border: "yes",
    label: "Slider field",
    dotsOnSteps: "no",
    minValue: 0,
    maxValue: 100,
    step: 1,
    placeholder: 30,
  },
});
