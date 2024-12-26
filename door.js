const config = require("./config");
var gpiop = require("rpi-gpio").promise;

async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function pressButton() {
  try {
    await gpiop.setup(config.GARAGE_PIN, gpiop.DIR_OUT);
    console.log("set up complete");
    await gpiop.write(config.GARAGE_PIN, true);
    console.log("it on");
    // await writePin(config.GARAGE_PIN, config.RELAY_ON);
    await wait(config.RELAY_TIMEOUT);

    await gpiop.write(config.GARAGE_PIN, false);
    console.log("it off");
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  pressButton,
};
