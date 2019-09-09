const axios = require("axios");
const fs = require("fs");

axios
.get(
  "http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269"
)
.then(res => {
  // handle success
  console.log(res.data);
  let stringified = JSON.stringify(res.data);
  fs.writeFile(__dirname + "/nutrientReport.json", stringified, "utf8", err => {
    if (err) {
      console.error(err);
    } else {
      console.log("Successful request!");
    }
  });
});