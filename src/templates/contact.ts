export const contactTemplate = ` ,
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Contact Form</title>
  </head>
  <body>
    <div
      style="
        width: 600px;
        margin: 0 auto;
        padding: 10px;
        border: 1px solid #e7e7e7;
        border-radius: 5px;
        font-family: sans-serif;
      "
    >
      <h2><strong>You have a new message from DRMSWeb site!</strong></h2>
      <p>
        <strong>Name:<br /> </strong> {{username}}
      </p>
      <p>
        <strong>Email: </strong><br />
        {{email}}
      </p>
      <p>
        <strong>Message: </strong><br />
        {{message}}
      </p>
    </div>
  </body>
</html>
`;
