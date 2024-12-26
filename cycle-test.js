const { pressButton } = require("./door");

async function main() {
  try {
    await pressButton();
  } catch (err) {
    console.error(err);
  }
}

main();
