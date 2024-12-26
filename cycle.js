const gpio = require("pi-gpio");

// gpio.open(26, "output", function (err, result) {
//   gpio.write(26, 1, function () {
//     setTimeout(() => {
//       gpio.write(26, 0, function () {
//         console.log("done");
//       });
//     }, 500);
//   });
// });

async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

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

async function main() {
  try {
    await writePin(26, 1);
    await wait(500);
    await writePin(26, 0);
  } catch (err) {
    console.error(err);
  }
}

main();
