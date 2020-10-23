const AWS = require("aws-sdk");
const successResponse = {
  isBase64Encoded: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  statusCode: 200,
  body: '{"result": "Success."}',
};

const failureResponse = {
  isBase64Encoded: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  statusCode: 400,
  body: '{"result": "Error."}',
};

exports.handler = function(event, context) {
  AWS.config.update({ region: "eu-west-1" });
  const message = JSON.parse(event.body);
  const inputData = Object.keys(message)
    .map(field => {
      if (field !== "targetEmail")
        return `<p> <span style="font-weight:600">${field}:</span> ${message[field]}</p>`;
    })
    .join(" ");

  const htmlBody = `
        <!DOCTYPE html>
        <html>
        <head>
        </head>
        <body>
            <h1>Form input</h1>
            ${inputData}
        </body>
        </html>
    `;

  const textBody = Object.keys(message)
    .map(
      field => `
  ${field}: ${message[field]}
  `
    )
    .join(" ");

  const params = {
    Destination: {
      ToAddresses: [message.targetEmail],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: htmlBody,
        },
        Text: {
          Charset: "UTF-8",
          Data: textBody,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Job application form",
      },
    },
    Source: "Form Builder <YOUR_CONTACT_EMAIL@YOUR_DOMAIN.de>",
  };

  const sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
    .sendEmail(params)
    .promise();

  sendPromise
    .then(data => {
      console.log(data.MessageId);
      context.done(null, successResponse);
    })
    .catch(err => {
      console.error(err, err.stack);
      context.done(null, failureResponse);
    });
};
