//import NPM package called express to create a server
const express = require("express");
//creating an app to be used
const app = express();
const port = 3000;

app.listen(port, () => console.log(`listening in ${port}`));