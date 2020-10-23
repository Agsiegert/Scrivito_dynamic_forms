import * as Scrivito from "scrivito";

const FormFieldRadioWidget = Scrivito.provideWidgetClass(
  "FormFieldRadioWidget",
  {
    attributes: {
      name: "string",
      label: "html",
      required: ["enum", { values: ["yes", "no"] }],
      value: "string",
    },
    onlyInside: ["FormBuilderWidget", "FormColumnWidget"],
  }
);

export default FormFieldRadioWidget;
