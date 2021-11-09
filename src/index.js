const dotenv = require("dotenv");
dotenv.config();

const { App } = require("@slack/bolt");
const { WebClient, LogLevel } = require("@slack/web-api");
const { oauth_token, app_token } = require("../lib/data");

// starting the server here!
require("./server");

const client = new WebClient(oauth_token, {
  logLevel: LogLevel.DEBUG,
});

const app = new App({
  token: oauth_token,
  appToken: app_token,
  socketMode: true,
});

(async () => {
  await app.start();
  console.log("⚡️ Bolt app started");
})();

app.event("app_mention", async (args) => {
  await args.say("mic check!");
});
