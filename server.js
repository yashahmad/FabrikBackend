const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

// var corsOptions = {
//     origin: "http://localhost:8001"
// };

app.use(cors());

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true}));
initRoutes(app);

let port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Running at localhost: ${port}`);
});

app.get("/", (req,res) => {
    res.send("Working")
})