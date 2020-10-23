import * as Scrivito from "scrivito";
import columnContainerWidgetIcon from "../../assets/images/column_container_widget.svg";
import FormColumnWidget from "../FormColumnWidget/FormColumnWidgetClass";

Scrivito.provideEditingConfig("FormColumnContainerWidget", {
  title: "Columns",
  thumbnail: columnContainerWidgetIcon,
  propertiesGroups: [
    {
      title: "Columns layout",
      component: "ColumnsEditorTab",
    },
  ],
  initialContent: {
    columns: [
      new FormColumnWidget({ colSize: 6 }),
      new FormColumnWidget({ colSize: 6 }),
    ],
    alignment: "start",
  },
});
