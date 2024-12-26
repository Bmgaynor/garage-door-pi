const { pressButton } = require("./door");

async function main() {
  try {
    await pressButton();
  } catch (err) {
    console.log("error occurred");
    console.error(err);
  }
}

main();
