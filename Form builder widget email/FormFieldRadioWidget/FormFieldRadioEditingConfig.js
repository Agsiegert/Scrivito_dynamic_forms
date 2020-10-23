import * as Scrivito from "scrivito";
import iconWidgetIcon from "../../assets/images/icon_radio.svg";

Scrivito.provideEditingConfig("FormFieldRadioWidget", {
  title: "Form Field - Radio",
  thumbnail: iconWidgetIcon,
  attributes: {
    name: {
      title: "Field name",
      description:
        "Provide same name among radio buttons to treat them as a group",
    },
    label: {
      title: "Label",
    },
    value: {
      title: "Value",
      description:
        "Value passed when radio button is selected. If not specified, label will be treated as value",
    },
    required: {
      title: "Required",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
  },
  properties: ["name", "label", "value", "required"],
  initialContent: {
    required: "no",
    label: "Radio",
  },
});
