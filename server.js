const app = require("./app");

require("dotenv").config();
const PORT = process.env.PORT || 3030;

app.listen(PORT, (req, res) => {
  console.log("Turner Api app is running");
});
