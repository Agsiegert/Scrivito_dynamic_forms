import * as React from "react";
import * as Scrivito from "scrivito";

class FormBuilderWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formStatus: "idle",
      displayMessage: false,
    };
  }
  submitForm(e) {
    const { widget } = this.props;
    const formName = widget.get("formName")
      ? `${widget.get("formName")}-id-${widget.id()}`
      : `form-id-${widget.id()}`;
    const form = document.querySelector(`#${formName}`);
    if (form.checkValidity()) {
      e.preventDefault();
      const data = new FormData(form);
      let dataAsJson = {};
      for (const [key, value] of data.entries()) {
        dataAsJson[key] = value;
      }
      dataAsJson.targetEmail = widget.get("targetEmail") || "damian.petryk@infopark.de";
      this.sendData(JSON.stringify(dataAsJson));
    }
  }

  sendData(data) {
    const url = this.props.widget.get("submitURL");
    const request = new XMLHttpRequest();
    request.open("POST", url);
    request.onload = () => {
      if (request.status == 200) {
        console.log("Data successfully uploaded");
        this.setState({ formStatus: "completed" });
        this.displaySubmitMessage();
      } else {
        console.log(
          "Error " + request.status + " occurred when trying to upload data."
        );
        this.setState({ formStatus: "error" });
        this.displaySubmitMessage();
      }
    };
    request.send(data);
  }

  displaySubmitMessage() {
    const redirectURL = this.props.widget.get("redirectURL");
    if (redirectURL) {
      if (
        this.state.formStatus === "completed" ||
        this.state.formStatus === "error"
      ) {
        this.setState({ displayMessage: false });
        window.location.href = redirectURL;
      }
    } else {
      this.setState({ displayMessage: true });
    }
  }

  render() {
    const { widget } = this.props;
    const classNames = [""];
    const errorMessage = widget.get("errorMessage");
    const successMessage = widget.get("successMessage");
    const netlifyForm = widget.get("netlifyForm") === "yes";
    const redirectURL = widget.get("redirectURL");
    const formName = widget.get("formName")
      ? `${widget.get("formName")}-id-${widget.id()}`
      : `form-id-${widget.id()}`;
    classNames.push("floating-label", "card-theme", "card", "card-padding");

    return (
      <div className={classNames.join(" ")}>
        {netlifyForm ? (
          <form
            name={formName}
            id={formName}
            method="post"
            action={redirectURL}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value={formName} />
            <div className="d-none">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </div>
            <Scrivito.ContentTag content={widget} attribute="items" />
            <button className="btn btn-primary btn-block" type="submit">
              {widget.get("buttonText") || "Submit"}
            </button>
          </form>
        ) : (
          <form name={formName} id={formName}>
            <Scrivito.ContentTag content={widget} attribute="items" />
            {this.state.formStatus === "error" && this.state.displayMessage ? (
              <FormSubmitError message={errorMessage} />
            ) : null}
            {this.state.formStatus === "completed" &&
            this.state.displayMessage ? (
              <FormSubmitSuccess message={successMessage} />
            ) : null}
            <button
              className="btn btn-primary btn-block"
              type="submit"
              onClick={e => this.submitForm(e)}
            >
              {widget.get("buttonText") || "Submit"}
            </button>
          </form>
        )}
      </div>
    );
  }
}

function FormSubmitSuccess(props) {
  return (
    <div className="alert alert-success my-4 text-center">
      <strong>Success!</strong> {props.message}
    </div>
  );
}

function FormSubmitError(props) {
  return (
    <div className="alert alert-danger my-4 text-center">
      <strong>Submission failed.</strong> {props.message}
    </div>
  );
}

Scrivito.provideComponent("FormBuilderWidget", FormBuilderWidget);
