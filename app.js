var express = require("express"),
  app = express();

const { pressButton } = require("./door");

app.set("port", process.env.PORT || 3000);

app.use("/", express.static(__dirname + "/public"));

app.get("/api/ping", function (req, res) {
  res.json("pong");
});

app.post("/api/press", async function (req, res, next) {
  await pressButton();
  res.json("ok");
});

// app.post("/api/garage/left", function (req, res) {
//   async.series([
//     function (callback) {
//       // Open pin for output
//       gpio.open(config.LEFT_GARAGE_PIN, "output", callback);
//     },
//     function (callback) {
//       // Turn the relay on
//       gpio.write(config.LEFT_GARAGE_PIN, config.RELAY_ON, callback);
//     },
//     function (callback) {
//       // Turn the relay off after delay to simulate button press
//       delayPinWrite(config.LEFT_GARAGE_PIN, config.RELAY_OFF, callback);
//     },
//     function (err, results) {
//       setTimeout(function () {
//         // Close pin from further writing
//         gpio.close(config.LEFT_GARAGE_PIN);
//         // Return json
//         res.json("ok");
//       }, config.RELAY_TIMEOUT);
//     },
//   ]);
// });

app.listen(app.get("port"), () => {
  console.log("Server listening on ", app.get("port"));
});
