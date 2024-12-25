const gpio = require("pi-gpio");

gpio.open(26, "output", function (err, result) {
  gpio.write(26, 1, function () {
    setTimeout(() => {
      gpio.write(26, 0, function () {
        console.log("done");
      });
    }, 500);
  });
});
