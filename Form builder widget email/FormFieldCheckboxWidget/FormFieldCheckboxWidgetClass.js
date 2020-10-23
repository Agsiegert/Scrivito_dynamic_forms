import * as Scrivito from "scrivito";

const FormFieldCheckboxWidget = Scrivito.provideWidgetClass(
  "FormFieldCheckboxWidget",
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

export default FormFieldCheckboxWidget;
