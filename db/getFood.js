const axios = require("axios");
const fs = require("fs");

axios
.get(
  "https://api.nal.usda.gov/ndb/list?format=json&lt=f&sort=n&api_key=yA4dQlWhts5H48QIOFEWJX9ZcbkLtWE9fC4qLukR"
)
.then(res => {
  // handle success
  console.log(res.data);
  let stringified = JSON.stringify(res.data);
  fs.writeFile(__dirname + "/food.json", stringified, "utf8", err => {
    if (err) {
      console.error(err);
    } else {
      console.log("Successful request!");
    }
  });
});

