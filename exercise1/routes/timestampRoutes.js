var express = require("express");
var router = express.Router();

router.get("/:id", function (req, res) {
  const dateInt = parseInt(req.params.id);

  if (/\d{5,}/.test(req.params.id)) {
    res.json({ unix: req.params.id, utc: new Date(dateInt).toUTCString() });
  }

  console.log(dateInt);

  const date = new Date(req.params.id);
  if (date.toString === "Invalid Date") {
    res.json({ error: "Invalid Date" });
  } else {
    res.json({ unix: date.valueOf(), utc: date.toUTCString() });
  }
});

router.get("/", (req, res) => {
  res.json({
    unix: Date.now(),
    utc: new Date().toUTCString(),
  });
});

module.exports = router;
