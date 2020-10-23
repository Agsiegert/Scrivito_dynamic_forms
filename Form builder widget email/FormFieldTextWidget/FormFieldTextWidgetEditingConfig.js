import * as Scrivito from "scrivito";
import iconWidgetIcon from "../../assets/images/icon_input.svg";

Scrivito.provideEditingConfig("FormFieldTextWidget", {
  title: "Form Field - Text",
  thumbnail: iconWidgetIcon,
  attributes: {
    name: {
      title: "Field name",
    },
    label: {
      title: "Label",
    },
    type: {
      title: "Type",
      values: [
        { value: "text", title: "Text" },
        { value: "date", title: "Date" },
        { value: "email", title: "Email" },
        { value: "tel", title: "Phone" },
        { value: "password", title: "Password" },
      ],
    },
    placeholder: {
      title: "Placeholder",
    },
    required: {
      title: "Required",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
  },
  properties: ["name", "label", "type", "placeholder", "required"],
  initialContent: {
    required: "no",
    type: "text",
    label: "Input field",
  },
});
