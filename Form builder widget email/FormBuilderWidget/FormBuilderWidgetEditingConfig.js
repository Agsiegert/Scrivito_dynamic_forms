import * as Scrivito from "scrivito";
import FormWidgetIcon from "../../assets/images/contact_form_widget.svg";
import FormFieldTextWidget from "../FormFieldTextWidget/FormFieldTextWidgetClass";
import FormColumnContainerWidget from "../FormColumnContainerWidget/FormColumnContainerWidgetClass";
import FormColumnWidget from "../FormColumnWidget/FormColumnWidgetClass";
import FormFieldTextareaWidget from "../FormFieldTextareaWidget/FormFieldTextareaWidgetClass";
import FormFieldCheckboxWidget from "../FormFieldCheckboxWidget/FormFieldCheckboxWidgetClass";
import SpaceWidget from "../SpaceWidget/SpaceWidgetClass";

Scrivito.provideEditingConfig("FormBuilderWidget", {
  title: "Form Builder",
  thumbnail: FormWidgetIcon,
  attributes: {
    formName: {
      title: "Form name",
      description:
        "Provide name so the form is easier to find in the dashboard",
    },
    netlifyForm: {
      title: "Netlify form",
      description: "Should the form be handled by Netlify. Default: No",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
    buttonText: {
      title: "Submit button text",
      description: "Default: Submit form",
    },
    submitURL: {
      title: "Data submission URL",
      description:
        "Define the URL where data is supposed to be submitted (only if not Netlify)",
    },
    redirectURL: {
      title: "Redirect after submission URL",
      description:
        "Define the URL where user will be redirected after form submission. Example: '/success'. Remember to provide success page with matching parmalink. If not specified, an inplace message will appear after submission",
    },
    targetEmail: {
      title: "Destination email",
      description: "Email the form data is sent to when using Lambda / AWS SES. Must be verified by AWS",
    },
    errorMessage: {
      title: "Error message",
      description: "Define error message showing when submission fails",
    },
    successMessage: {
      title: "Success message",
      description: "Define success message showing when submission completes",
    },
  },
  properties: [
    "formName",
    "netlifyForm",
    "buttonText",
    "submitURL",
    "redirectURL",
    "targetEmail",
    "successMessage",
    "errorMessage",
  ],
  initialContent: {
    netlifyForm: "no",
    buttonText: "Submit form",
    successMessage:
      "Thank you for submitting form! Our team will contact you shortly.",
    errorMessage: "Unfortunately something went wrong. Please try again later.",
    items: [
      new FormColumnContainerWidget({
        columns: [
          new FormColumnWidget({
            colSize: 6,
            content: [
              new FormFieldTextWidget({
                name: "firstName",
                label: "First name",
                required: "yes",
                placeholder: "Your name",
              }),
              new FormFieldTextWidget({
                name: "email",
                label: "Email Address",
                required: "yes",
                type: "email",
                placeholder: "Your email address",
              }),
            ],
          }),
          new FormColumnWidget({
            colSize: 6,
            content: [
              new FormFieldTextWidget({
                name: "surname",
                label: "Surname",
                required: "yes",
                placeholder: "Your last name",
              }),
              new FormFieldTextWidget({
                name: "company",
                label: "Company (Optional)",
                required: "no",
                type: "text",
                placeholder: "Your company",
              }),
            ],
          }),
        ],
      }),
      new FormFieldTextareaWidget({
        name: "message",
        label: "Message",
        required: "yes",
        placeholder: "Your message",
      }),
      new FormFieldCheckboxWidget({
        name: "optin",
        required: "yes",
      }),
      new SpaceWidget({ size: 2 }),
    ],
  },
});
