const axios = require("axios");
const fs = require("fs");

axios
.get(
  "http://api.nal.usda.gov/ndb/nutrients/?format=json&max=1500&api_key=yA4dQlWhts5H48QIOFEWJX9ZcbkLtWE9fC4qLukR&nutrients=205&nutrients=204&nutrients=208&nutrients=269"
)
.then(res => {
  // handle success
  console.log(res.data);
  let stringified = JSON.stringify(res.data);
  fs.writeFile(__dirname + "/macronutrients.json", stringified, "utf8", err => {
    if (err) {
      console.error(err);
    } else {
      console.log("Successful request!");
    }
  });
});