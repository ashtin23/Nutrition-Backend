const express = require("express");
const parser = require("body-parser");
const app = express();
// const cors = require("cors");
// const 

// app.use(cors())

app.use(parser.json());
// app.use(parser.urlencoded({ extended: true }));

// app.use("/", require('./routes/listing'))
// app.use("/user", userRouter)

app.get("/", (req, res) => {
  res.send("Hello World")
})
app.set("port", process.env.PORT || 3131);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});