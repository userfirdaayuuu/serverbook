const express = require("express");
// const payloadParsing = require("");
const app = express();
const port = 3000;
const userrouter = require("./routes/userRoutes");
const bookrouter = require("./routes/BookRoutes");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

app.use("/register/",userrouter);
app.use("/login",userrouter);
app.use("/getuser",userrouter);
app.use("/book",bookrouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});