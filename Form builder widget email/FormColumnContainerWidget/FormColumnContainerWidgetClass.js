import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const FormColumnContainerWidget = Scrivito.provideWidgetClass(
  "FormColumnContainerWidget",
  {
    onlyInside: ["FormBuilderWidget", "FormColumnWidget"],
    attributes: {
      columns: ["widgetlist", { only: "FormColumnWidget" }],
      alignment: ["enum", { values: ["start", "center", "end", "stretch"] }],
    },
  }
);

registerTextExtract("FormColumnContainerWidget", [
  { attribute: "columns", type: "widgetlist" },
]);

export default FormColumnContainerWidget;
