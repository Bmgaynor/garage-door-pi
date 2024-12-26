// const { pressButton } = require("./door");

// async function main() {
//   try {
//     await pressButton();
//   } catch (err) {
//     console.log("error occurred");
//     console.error(err);
//   }
// }

var gpio = require("rpi-gpio");

gpio.setup(26, gpio.DIR_HIGH, write);

function write(err) {
  if (err) throw err;
  gpio.write(26, false, function (err) {
    if (err) throw err;
    console.log("Written to pin");
  });
}
// main();
