// const config = require("./config");
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

async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

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
const pressButton = async () => {
  const LED = 26;
  const pinStatus = await getPinStatus(LED);
  console.log(pinStatus);

  await runCommand(`raspi-gpio set ${LED} op`);
  await runCommand(`raspi-gpio set ${LED} dh`);
  await wait(500);
  await runCommand(`raspi-gpio set ${LED} dl`);
};
module.exports = {
  pressButton,
};
