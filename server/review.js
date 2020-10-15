//import NPM package called express to create a server
const express = require("express");
console.log(typeof(express))// function
//creating an app to be used, and assigning it to a port
const app = express();
const port = 3000;
const listening = () => console.log(`listening in ${port}`);
app.listen(port, listening);
//Endpoint - giving a command to the server
    //app.get(a, b)
        //a is the ROUTE
        //b is the callback argument
app.get('/', function(request,respond){
    respond.send(`you're a wizard harry`)
})
//Parameters - customize responses
    //add a : in the ROUTE ie. :title
    //use request.params to refer to it ie. request.params.title
app.get('/:title', function(request,respond){
    respond.send(`the title of the movie is ${request.params.title}`)
})
//Rendering - an HTML is rendered when sent to the server
function render(message){
    const document = `
    <html>
        <body>
        <h1>${message}</h1>
        </body>
    </html>`
    return document
}

app.get('/message/render', function (req, res){
    res.send(render('im not a sk8er'))
})
