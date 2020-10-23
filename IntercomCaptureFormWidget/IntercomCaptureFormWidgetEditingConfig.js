import * as Scrivito from "scrivito";
import contactFormWidgetIcon from "../../assets/images/contact_form_widget.svg";

Scrivito.provideEditingConfig("IntercomCaptureFormWidget", {
  title: "Intercom Capture Form",
  thumbnail: contactFormWidgetIcon,
  attributes: {
    eventName: {
      title: "Intercom Event Trigger Name",
      description:
        "Provide an Intercom event trigger name, must be snake cased. E.g. ebook_ordered.",
    },
    backgroundColor: {
      title: "Background Color",
      description: "Default: White",
      values: [
        { value: "white", title: "White" },
        { value: "transparent", title: "Transparent" },
      ],
    },
    emailLabel: {
      title: "Email field label",
      description: "Default: Your Email",
    },
    emailPlaceholder: {
      title: "Email Field Placeholder",
      description: "Default: alice@example.org",
    },
    captureName: {
      title: "Capture Name?",
      description: "Default: Yes",
    },
    nameLabel: {
      title: "Name field label",
      description: "Default: Your Name",
    },
    namePlaceholder: {
      title: "Name Field Placeholder",
      description: "Default: Name",
    },
    nameRequired: {
      title: "Name Field Required?",
      description: "Default: No. Works only if Capture Name option is enabled",
    },
    capturePhone: {
      title: "Capture Phone Number?",
      description: "Default: No",
    },
    phoneLabel: {
      title: "Phone field label",
      description: "Default: Your Phone",
    },
    phonePlaceholder: {
      title: "Phone Field Placeholder",
      description: "Default: +49 123 456 789",
    },
    phoneRequired: {
      title: "Phone Field Required?",
      description:
        "Default: No. Works only if Capture Phone Number option is enabled",
    },
    captureCompany: {
      title: "Capture Company?",
      description: "Default: No",
    },
    companyLabel: {
      title: "Company field label",
      description: "Default: Company",
    },
    companyPlaceholder: {
      title: "Company Field Placeholder",
      description: "Default: Example Company AG",
    },
    companyRequired: {
      title: "Company Field Required?",
      description:
        "Default: No. Works only if Capture Company option is enabled",
    },
    captureJobPosition: {
      title: "Capture Job Position?",
      description: "Default: No",
    },
    jobPositionLabel: {
      title: "Job Position field label",
      description: "Default: Your job position",
    },
    jobPositionPlaceholder: {
      title: "Job Position Field Placeholder",
      description: "Default: Marketing Manager, CEO, Software Engineer...",
    },
    jobPositionRequired: {
      title: "Job Position Field Required?",
      description:
        "Default: No. Works only if Capture Job Position option is enabled",
    },
    captureDate: {
      title: "Capture Date?",
      description: "Default: No",
    },
    dateLabel: {
      title: "Date field label",
      description: "Default: Proposed meeting date",
    },
    datePlaceholder: {
      title: "Date Field Placeholder",
      description: "Default: Proposed date of contact",
    },
    dateRequired: {
      title: "Date Field Required?",
      description: "Default: No. Works only if Capture Date option is enabled",
    },
    captureMessage: {
      title: "Capture Message?",
      description: "Default: No",
    },
    messageLabel: {
      title: "Message field label",
      description: "Default: Your message",
    },
    messagePlaceholder: {
      title: "Message Field Placeholder",
      description: "Default: Your message",
    },
    messageMaxLength: {
      title: "Message Field Length`",
      description:
        "Input a limit for the number of characters allowed. Default: 500",
    },
    messageRequired: {
      title: "Message Field Required?",
      description:
        "Default: No. Works only if Capture Message option is enabled",
    },
    captureFollowup: {
      title: "Include followup checkbox?",
      description: "Default: No",
    },
    followupText: {
      title: "Followup checkbox text",
      description: "Default: Would you like us to follow up with you?",
    },
    agreementText: {
      title: "Agreement Text",
      description:
        "Required by GDPR we must collect consent to store personal data.",
    },
    buttonText: {
      title: "Submit Button Text",
      description: "Default: send message",
    },
    submittedText: {
      title: "Submitted Text",
      description: "Text that is shown, once the form was submitted.",
    },
    processingMessage: {
      title: "Message showing during form processing",
      description: "Default: 'Contacting the Scrivito team...'",
    },
    successMessage: {
      title: "Message showing after successful submit",
      description: "Default: 'Success!'",
    },
    failureMessage: {
      title: "Message showing after failed submit",
      description: "Default: 'Sadly, something went wrong'",
    },
    resetForm: {
      title: "Auto refresh form?",
      description:
        "Reset form to provide easier form managment during events. Default: No",
    },
  },

  properties: [
    "eventName",
    "backgroundColor",
    "agreementText",
    "buttonText",
    "submittedText",
    "processingMessage",
    "failureMessage",
    "successMessage",
    "resetForm",
  ],

  propertiesGroups: [
    {
      title: "Fields",
      properties: [
        "emailLabel",
        "emailPlaceholder",
        "captureName",
        "nameLabel",
        "namePlaceholder",
        "nameRequired",
        "capturePhone",
        "phoneLabel",
        "phonePlaceholder",
        "phoneRequired",
        "captureCompany",
        "companyLabel",
        "companyPlaceholder",
        "companyRequired",
        "captureJobPosition",
        "jobPositionLabel",
        "jobPositionPlaceholder",
        "jobPositionRequired",
        "captureDate",
        "dateLabel",
        "datePlaceholder",
        "dateRequired",
        "captureMessage",
        "messageLabel",
        "messagePlaceholder",
        "messageMaxLength",
        "messageRequired",
        "captureFollowup",
        "followupText",
      ],
    },
  ],

  initialContent: {
    captureName: "yes",
    nameLabel: "Your name",
    namePlaceholder: "Name",
    phoneRequired: "yes",
    emailLabel: "Your email",
    emailPlaceholder: "alice@example.org",
    capturePhone: "no",
    phoneLabel: "Your phone",
    phonePlaceholder: "+49 123 456 789",
    phoneRequired: "no",
    captureCompany: "no",
    companyLabel: "Company",
    companyPlaceholder: "Example Company AG",
    companyRequired: "no",
    captureJobPosition: "no",
    jobPositionLabel: "Your job position",
    jobPositionPlaceholder: "Marketing Manager, CEO, Software Engineer...",
    jobPositionRequired: "no",
    captureDate: "no",
    dateLabel: "Proposed meeting date",
    dateRequired: "no",
    datePlaceholder: "Proposed date of contact",
    captureMessage: "no",
    messageLabel: "Your message",
    messageRequired: "no",
    messagePlaceholder: "Your message",
    captureFollowup: "no",
    followupText: "Would you like us to follow up with you?",
    requiredNote: "required field",
    processingMessage: "Contacting the Scrivito team...",
    successMessage: "Success!",
    failureMessage: "Sadly, something went wrong.",
    buttonText: "Send message",
    backgroundColor: "white",
    agreementText: `The personal data sent will be processed by <a href="https://www.infopark.com" target="_blank">Infopark AG</a> to meet your request. Further information can be found in the <a href="https://www.iubenda.com/privacy-policy/69857018" target="_blank">privacy policy</a> and the <a href="https://www.scrivito.com/transparent-information" target="_blank">transparent information</a>.`,
  },
  validations: [
    [
      "eventName",
      eventName =>
        !eventName.match(/^[a-z_]*$/) &&
        "The Intercom event trigger name must be snake cased. E.g. ebook_ordered.",
    ],
  ],
});
