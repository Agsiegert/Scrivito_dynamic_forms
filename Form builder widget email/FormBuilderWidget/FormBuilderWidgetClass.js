import * as Scrivito from "scrivito";

const FormBuilderWidget = Scrivito.provideWidgetClass("FormBuilderWidget", {
  attributes: {
    formName: "string",
    netlifyForm: ["enum", { values: ["yes", "no"] }],
    items: [
      "widgetlist",
      {
        only: [
          "FormFieldTextWidget",
          "FormFieldCheckboxWidget",
          "FormFieldRadioWidget",
          "FormFieldSelectWidget",
          "FormFieldTextareaWidget",
          "SpaceWidget",
          "TextWidget",
          "HeadlineWidget",
          "FormColumnContainerWidget",
          "FormFieldSliderWidget",
        ],
      },
    ],
    buttonText: "string",
    action: "string",
    submitURL: "string",
    successMessage: "string",
    errorMessage: "string",
    redirectURL: "string",
    targetEmail: "string",
  },
});

export default FormBuilderWidget;
