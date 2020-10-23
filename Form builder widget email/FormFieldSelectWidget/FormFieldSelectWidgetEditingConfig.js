import * as Scrivito from "scrivito";
import iconWidgetIcon from "../../assets/images/icon_select.svg";

Scrivito.provideEditingConfig("FormFieldSelectWidget", {
  title: "Form Field - Select",
  thumbnail: iconWidgetIcon,
  attributes: {
    name: {
      title: "Field name",
    },
    label: {
      title: "Label",
    },
    options: {
      title: "Options",
      description: "Options to select, separated by coma",
    },
    values: {
      title: "Values",
      description:
        "Values assigned to options. If not specified, options will be treated as values",
    },
    required: {
      title: "Required",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
  },
  properties: ["name", "label", "options", "values", "required"],
  initialContent: {
    required: "no",
    type: "text",
    label: "Input field",
    options: "Option 1, Options 2, Options 3, ...",
  },
});
