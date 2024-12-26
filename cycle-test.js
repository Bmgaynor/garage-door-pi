const { pressButton } = require("./door");

async function main() {
  try {
    console.log("starting");
    await pressButton();
    console.log("complete");
  } catch (err) {
    console.log("error occurred");
    console.error(err);
  }
}

main();
