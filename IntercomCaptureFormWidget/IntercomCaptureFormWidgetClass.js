import * as Scrivito from "scrivito";

const IntercomCaptureFormWidget = Scrivito.provideWidgetClass(
  "IntercomCaptureFormWidget",
  {
    attributes: {
      title: "string",
      agreementText: "html",
      buttonText: "string",
      submittedText: "string",
      backgroundColor: ["enum", { values: ["white", "transparent"] }],
      eventName: "string",
      captureName: ["enum", { values: ["yes", "no"] }],
      nameLabel: "string",
      namePlaceholder: "string",
      nameRequired: ["enum", { values: ["yes", "no"] }],
      emailLabel: "string",
      emailPlaceholder: "string",
      capturePhone: ["enum", { values: ["yes", "no"] }],
      phoneLabel: "string",
      phonePlaceholder: "string",
      phoneRequired: ["enum", { values: ["yes", "no"] }],
      captureCompany: ["enum", { values: ["yes", "no"] }],
      companyLabel: "string",
      companyPlaceholder: "string",
      companyRequired: ["enum", { values: ["yes", "no"] }],
      captureJobPosition: ["enum", { values: ["yes", "no"] }],
      jobPositionLabel: "string",
      jobPositionPlaceholder: "string",
      jobPositionRequired: ["enum", { values: ["yes", "no"] }],
      captureDate: ["enum", { values: ["yes", "no"] }],
      dateLabel: "string",
      datePlaceholder: "string",
      dateRequired: ["enum", { values: ["yes", "no"] }],
      captureMessage: ["enum", { values: ["yes", "no"] }],
      messageLabel: "string",
      messagePlaceholder: "string",
      messageRequired: ["enum", { values: ["yes", "no"] }],
      messageMaxLength: "integer",
      requiredNote: "string",
      processingMessage: "string",
      successMessage: "string",
      failureMessage: "string",
      resetForm: ["enum", { values: ["yes", "no"] }],
      captureFollowup: ["enum", { values: ["yes", "no"] }],
      followupText: "string",
    },
  }
);

export default IntercomCaptureFormWidget;
