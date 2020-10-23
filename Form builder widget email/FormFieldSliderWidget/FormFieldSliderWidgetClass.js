import * as Scrivito from "scrivito";

const FormFieldSliderWidget = Scrivito.provideWidgetClass(
  "FormFieldSliderWidget",
  {
    attributes: {
      name: "string",
      label: "string",
      type: ["enum", { values: ["text", "date", "email", "tel", "password"] }],
      required: ["enum", { values: ["yes", "no"] }],
      minValue: "integer",
      maxValue: "integer",
      step: "integer",
      dotsOnSteps: ["enum", { values: ["yes", "no"] }],
      placeholder: "integer",
      color: [
        "enum",
        {
          values: ["#00aeef", "#ff6b6b", "#716f73", "#383838"],
        },
      ],
      border: ["enum", { values: ["yes", "no"] }],
    },
    onlyInside: ["FormBuilderWidget", "FormColumnWidget"],
  }
);

export default FormFieldSliderWidget;
