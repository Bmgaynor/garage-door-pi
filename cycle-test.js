// const { pressButton } = require("./door");

// async function main() {
//   try {
//     await pressButton();
//   } catch (err) {
//     console.log("error occurred");
//     console.error(err);
//   }
// }

const { exec } = require("child_process");

const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout.trim());
    });
  });
};

const getPinStatus = async (pin) => {
  const command = `raspi-gpio get ${pin}`;
  try {
    const result = await runCommand(command);
    const parts = result.split("level=");
    return parseInt(parts[1].charAt(0));
  } catch (error) {
    console.error(error);
    return null;
  }
};

// then later, when I'm doing something - make sure its an async something so I can await getPinStatus
const main = async () => {
  const LED = 26;
  const pinStatus = await getPinStatus(LED);
  console.log(pinStatus);
  await runCommand(``);
  await runCommand(`raspi-gpio set ${LED} op`); // set gpio 5 to output
  await runCommand(`raspi-gpio set ${LED} dh`); // set gpio 5 high
  // await runCommand(`raspi-gpio set ${LED} dl`); // set gpio 5 low

  // pinStatus will be 1 or 0
};

// const Gpio = require("onoff").Gpio; // Gpio class
// const led = new Gpio(26, "out"); // Export GPIO17 as an output

// // Toggle the state of the LED connected to GPIO17 every 200ms
// const iv = setInterval((_) => led.writeSync(led.readSync() ^ 1), 200);

// // Stop blinking the LED after 5 seconds
// setTimeout((_) => {
//   clearInterval(iv); // Stop blinking
//   led.unexport(); // Unexport GPIO and free resources
// }, 5000);

// main();
