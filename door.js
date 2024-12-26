const config = require("./config");

async function writePin({ pin, direction }) {
  return new Promise((resolve, reject) => {
    gpio.write(pin, direction, (err, next) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(next);
      }
    });
  });
}

async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
async function pressButton() {
  try {
    await writePin(config.GARAGE_PIN, config.RELAY_ON);
    await wait(config.RELAY_TIMEOUT);
    await writePin(config.GARAGE_PIN, config.RELAY_OFF);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  pressButton,
};
