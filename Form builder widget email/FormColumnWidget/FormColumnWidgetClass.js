import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const FormColumnWidget = Scrivito.provideWidgetClass("FormColumnWidget", {
  onlyInside: "FormColumnContainerWidget",
  attributes: {
    colSize: "integer",
    content: [
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
  },
});

registerTextExtract("FormColumnWidget", [
  { attribute: "content", type: "widgetlist" },
]);

export default FormColumnWidget;
