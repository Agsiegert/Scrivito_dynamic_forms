import * as Scrivito from "scrivito";

const FormFieldSelectWidget = Scrivito.provideWidgetClass(
  "FormFieldSelectWidget",
  {
    attributes: {
      name: "string",
      label: "string",
      options: "string",
      values: "string",
      required: ["enum", { values: ["yes", "no"] }],
    },
    onlyInside: ["FormBuilderWidget", "FormColumnWidget"],
  }
);

export default FormFieldSelectWidget;
