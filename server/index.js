const express = require("express");
const ReactDOMServer = require("react-dom/server");
const React = require("react");
const SampleComponent = require("./SampleComponent.jsx"); // Replace with your component
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.static("public"));

app.options("*", cors());
app.get("/", (req, res) => {
  const componentStr = ReactDOMServer.renderToString(
    React.createElement(SampleComponent)
  );

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>React SSR with Client-Side Hydration</title>
    </head>
    <body>
      <div id="root">${componentStr}</div>
      <script src="/bundled-client.js"></script>
    </body>
    </html>
  `);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
