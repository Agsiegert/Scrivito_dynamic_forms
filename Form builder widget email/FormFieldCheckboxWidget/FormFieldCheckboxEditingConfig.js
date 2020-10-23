import * as Scrivito from "scrivito";
import iconWidgetIcon from "../../assets/images/icon_checkbox.svg";

Scrivito.provideEditingConfig("FormFieldCheckboxWidget", {
  title: "Form Field - Checkbox",
  thumbnail: iconWidgetIcon,
  attributes: {
    name: {
      title: "Field name",
    },
    label: {
      title: "Label",
    },
    value: {
      title: "Value",
      description:
        "Value passed when checkbox is selected. If not specified, label will be treated as value",
    },
    required: {
      title: "Required",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
  },
  properties: ["name", "label", "value", "required"],
  initialContent: {
    required: "yes",
    label:
      "I consent to my above personal data being processed by Infopark AG in accordance with the <a href='https://infopark.com/scrivito/en/privacy-policy' target='_blank' rel='noopener noreferrer'>privacy policy.</a>",
  },
});
