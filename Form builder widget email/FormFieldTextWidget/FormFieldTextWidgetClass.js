import * as Scrivito from "scrivito";

const FormFieldTextWidget = Scrivito.provideWidgetClass("FormFieldTextWidget", {
  attributes: {
    name: "string",
    label: "string",
    type: ["enum", { values: ["text", "date", "email", "tel", "password"] }],
    required: ["enum", { values: ["yes", "no"] }],
    placeholder: "string",
  },
  onlyInside: ["FormBuilderWidget", "FormColumnWidget"],
});

export default FormFieldTextWidget;
