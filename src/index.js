const express = require("express");
const ngrok = require("ngrok");

(async function () {
  const port = process.env.PORT ?? 3000;

  const url = await ngrok.connect(port);
  console.log(`tunnel setup on  ${url} for port ${port} 🚀`);

  const app = express();

  app.post("/hook", (req, res) => {
    res.send("Hello World");
  });

  app.listen(port, () => {
    console.log(`epxress server started on localhost://${port} 🦕`);
  });
})();
