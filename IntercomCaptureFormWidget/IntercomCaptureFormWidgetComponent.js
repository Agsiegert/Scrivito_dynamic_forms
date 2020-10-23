import * as React from "react";
import * as Scrivito from "scrivito";
import Honeybadger from "honeybadger-js";
import PageView from "../../models/PageView";
import { fetchJson } from "../../utils/fetch";

const CREATE_LEAD_API_URL =
  "https://----------.execute-api.eu-west-1.amazonaws.com/production/create_lead";
const TRACK_EVENT_API_URL =
  "https://----------.execute-api.eu-west-1.amazonaws.com/production/track_event";

class IntercomCaptureFormWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      agreement: "",
      agreementChecked: false,
      email: "",
      name: "",
      phone: "",
      company: "",
      jobPosition: "",
      date: "",
      message: "",
      followup: "",
      followupChecked: false,
      submissionState: "",
    };

    this.handleAgreementChange = this.handleAgreementChange.bind(this);
    this.handleFollowupChange = this.handleFollowupChange.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  handleAgreementChange(event) {
    this.setState({
      agreementChecked: event.target.checked,
      agreement: event.target.value,
    });
  }

  handleFollowupChange(event) {
    this.setState({
      followupChecked: event.target.checked,
      followup: event.target.value,
    });
  }

  handleInputChange(event) {
    const { id } = event.target;
    const { value } = event.target;

    this.setState({
      [id]: value,
    });
  }

  handleSubmit(event) {
    this.setState({ submissionState: "processing" });

    const eventName = this.props.widget.get("eventName");
    const resetForm = this.props.widget.get("resetForm");

    fetchJson({
      crossDomain: false,
      data: {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        custom_attributes: {
          company: this.state.company,
          job_position: this.state.jobPosition,
          meeting_date: this.state.date,
          message: this.state.message,
          followup: this.state.followupChecked,
        },
      },
      type: "POST",
      url: CREATE_LEAD_API_URL,
    })
      .then(success => {
        const payload = {
          leadId: success.leadId,
          eventName,
        };
        fetchJson({
          crossDomain: false,
          data: payload,
          type: "POST",
          url: TRACK_EVENT_API_URL,
        })
          .then(() => this.handleSuccess())
          .catch(() => this.handleError());
      })
      .catch(() => this.handleError());

    PageView.trackEvent(eventName, {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      company: this.state.company,
      jobPosition: this.state.jobPosition,
      date: this.state.date,
      message: this.state.message,
      agreement: this.state.agreement,
      agreementChecked: this.state.agreementChecked,
      followup: this.state.followup,
      followupChecked: this.state.followupChecked,
    });
    if (resetForm === "yes") {
      setTimeout(() => {
        this.setState({
          agreement: "",
          agreementChecked: false,
          email: "",
          submissionState: "",
          name: "",
          phone: "",
          company: "",
          jobPosition: "",
          date: "",
          message: "",
          followup: "",
          followupChecked: false,
        });
      }, 3000);
    }
    event.preventDefault();
  }

  handleSuccess() {
    this.setState({ submissionState: "completed" });
  }

  handleError() {
    this.setState({ submissionState: "failed" });
    if (Honeybadger.environment === "production") {
      Honeybadger.notify({
        message: "Registration Form request failed",
        context: { state: this.state },
      });
    }
  }

  render() {
    if (this.state.submissionState === "completed") {
      return this.renderConfirmation();
    }

    if (this.state.submissionState === "failed") {
      return (
        <Failure failureMessage={this.props.widget.get("failureMessage")} />
      );
    }

    const { widget } = this.props;

    const classNames = [];
    if (widget.get("isTransparent") === "yes") {
      classNames.push("panel-white-transparent");
    } else {
      classNames.push("panel");
      classNames.push("panel-padding");
    }

    const emailPlaceholder =
      widget.get("emailPlaceholder") || "alice@example.org";

    const nameClassName = widget.get("captureName") !== "yes" ? "d-none" : "";
    const namePlaceholder = widget.get("namePlaceholder") || "Name";
    const nameRequired =
      widget.get("nameRequired") === "yes" &&
      widget.get("captureName") === "yes";

    const phoneClassName = widget.get("capturePhone") !== "yes" ? "d-none" : "";
    const phoneRequired =
      widget.get("phoneRequired") === "yes" &&
      widget.get("capturePhone") === "yes";
    const phonePlaceholder =
      widget.get("phonePlaceholder") || "+49 123 456 789";

    const companyClassName =
      widget.get("captureCompany") !== "yes" ? "d-none" : "";
    const companyRequired =
      widget.get("companyRequired") === "yes" &&
      widget.get("captureCompany") === "yes";
    const companyPlaceholder =
      widget.get("companyPlaceholder") || "Example Company AG";

    const jobPositionClassName =
      widget.get("captureJobPosition") !== "yes" ? "d-none" : "";
    const jobPositionRequired =
      widget.get("jobPositionRequired") === "yes" &&
      widget.get("captureJobPosition") === "yes";
    const jobPositionPlaceholder =
      widget.get("jobPositionPlaceholder") ||
      "Marketing Manager, CEO, Software Engineer...";

    const dateClassName = widget.get("captureDate") !== "yes" ? "d-none" : "";
    const dateRequired =
      widget.get("dateRequired") === "yes" &&
      widget.get("captureDate") === "yes";
    const datePlaceholder =
      widget.get("datePlaceholder") || "Proposed date of contact";

    const messageClassName =
      widget.get("captureMessage") !== "yes" ? "d-none" : "";
    const messageRequired =
      widget.get("messageRequired") === "yes" &&
      widget.get("captureMessage") === "yes";
    const messagePlaceholder =
      widget.get("messagePlaceholder") || "Your message";
    const messageMaxLength = widget.get("messageMaxLength") || 500;

    const followupClassName =
      widget.get("captureFollowup") !== "yes" ? "d-none" : "";

    return (
      <div className={classNames.join(" ")}>
        <form onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="intercomCaptureForm" />
          <Scrivito.ContentTag
            content={widget}
            attribute="title"
            tag="h1"
            className="h3 text-center"
          />
          <div className={`form-group ${nameClassName}`}>
            <label htmlFor="name">
              <Scrivito.ContentTag
                content={widget}
                attribute="nameLabel"
                tag="span"
              />
              <span>{nameRequired ? "*" : ""}</span>
            </label>
            <input
              id="name"
              className="form-control input-lg"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder={namePlaceholder}
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <Scrivito.ContentTag
                content={widget}
                attribute="emailLabel"
                tag="span"
              />
              <span>*</span>
            </label>
            <input
              id="email"
              className="form-control input-lg"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder={emailPlaceholder}
              type="email"
              required
            />
          </div>
          <div className={`form-group ${phoneClassName}`}>
            <label htmlFor="phone">
              <Scrivito.ContentTag
                content={widget}
                attribute="phoneLabel"
                tag="span"
              />
              <span>{phoneRequired ? "*" : ""}</span>
            </label>
            <input
              id="phone"
              className="form-control input-lg"
              value={this.state.phone}
              onChange={this.handleInputChange}
              type="tel"
              placeholder={phonePlaceholder}
              required={phoneRequired}
            />
          </div>
          <div className={`form-group ${companyClassName}`}>
            <label htmlFor="company">
              <Scrivito.ContentTag
                content={widget}
                attribute="companyLabel"
                tag="span"
              />
              <span>{companyRequired ? "*" : ""}</span>
            </label>
            <input
              id="company"
              className="form-control input-lg"
              value={this.state.company}
              onChange={this.handleInputChange}
              type="text"
              placeholder={companyPlaceholder}
              required={companyRequired}
            />
          </div>
          <div className={`form-group ${jobPositionClassName}`}>
            <label htmlFor="jobPosition">
              <Scrivito.ContentTag
                content={widget}
                attribute="jobPositionLabel"
                tag="span"
              />
              <span>{jobPositionRequired ? "*" : ""}</span>
            </label>
            <input
              id="jobPosition"
              className="form-control input-lg"
              value={this.state.jobPosition}
              onChange={this.handleInputChange}
              type="text"
              placeholder={jobPositionPlaceholder}
              required={jobPositionRequired}
            />
          </div>

          <div className={`form-group ${dateClassName}`}>
            <label htmlFor="date">
              <Scrivito.ContentTag
                content={widget}
                attribute="dateLabel"
                tag="span"
              />
              <span>{dateRequired ? "*" : ""}</span>
            </label>
            <input
              id="date"
              className="form-control input-lg"
              value={this.state.date}
              onChange={this.handleInputChange}
              type="text"
              placeholder={datePlaceholder}
              required={dateRequired}
            />
          </div>

          <div className={`form-group ${messageClassName}`}>
            <label htmlFor="message">
              <Scrivito.ContentTag
                content={widget}
                attribute="messageLabel"
                tag="span"
              />
              <span>{messageRequired ? "*" : ""}</span>
            </label>
            <textarea
              id="message"
              className="form-control input-lg"
              value={this.state.message}
              onChange={this.handleInputChange}
              placeholder={messagePlaceholder}
              required={messageRequired}
              maxLength={messageMaxLength}
              rows="4"
            />
          </div>

          <div className={`checkbox ${followupClassName}`}>
            <label>
              <input
                type="checkbox"
                checked={this.state.followupChecked}
                onChange={this.handleFollowupChange}
                value={widget.get("followupText")}
              />
              <Scrivito.ContentTag
                content={widget}
                attribute="followupText"
                tag="span"
              />
            </label>
          </div>

          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                checked={this.state.agreementChecked}
                onChange={this.handleAgreementChange}
                value={widget.get("agreementText")}
                required
                disabled={Scrivito.isInPlaceEditingActive()}
              />
              <span>* </span>
              <Scrivito.ContentTag
                content={widget}
                attribute="agreementText"
                tag="span"
              />
            </label>
          </div>
          {this.renderSubmitButton()}
        </form>
        <p className="form-note">
          *&nbsp;
          <Scrivito.ContentTag
            content={widget}
            attribute="requiredNote"
            tag="span"
          >
            {widget.get("requiredNote") || "required field"}
          </Scrivito.ContentTag>
        </p>
      </div>
    );
  }

  renderSubmitButton() {
    if (this.state.submissionState === "processing") {
      return (
        <button className="btn btn-lg btn-block btn-grey" disabled>
          <span>
            <span className="fa fa-spinner fa-spin spinner" />
            {this.props.widget.get("processingMessage")}
          </span>
        </button>
      );
    }

    return (
      <button className="btn btn-lg btn-block btn-primary" type="submit">
        {this.props.widget.get("buttonText") || "send message"}
      </button>
    );
  }

  renderConfirmation() {
    return (
      <div className="box-white border-grey padding-35">
        <div className="registration-details">
          <div className="h2">{this.props.widget.get("successMessage")}</div>
          <br />
          <div>{this.props.widget.get("submittedText")}</div>
        </div>
      </div>
    );
  }
}

function Failure({ failureMessage }) {
  return (
    <div className="box-white border-grey padding-35">
      <h3 className="ask-scrivito-request-error">
        {failureMessage || "Sorry, something went wrong."}
      </h3>
    </div>
  );
}

Scrivito.provideComponent(
  "IntercomCaptureFormWidget",
  IntercomCaptureFormWidget
);
