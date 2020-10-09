const express = require('express');

const app = express();

const port = 3000;

app.get('/timer', function (req,res){
    res.send(`<p id="demo"></p>

    <script>
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
    </script>
    `)
})

app.get('/', function(req,res){
    res.send(`
        <html>
            <head>
                <title>main page</title>
            </head>
            <body>
                <h1 id="demo"></h1></h1>
            <script>
            var countDownDate = new Date("Oct 9, 2020 16:00:00").getTime();
            var x = setInterval(function(){
              var now = new Date().getTime();
            
              var distance = countDownDate - now;
            
              var days = Math.floor(distance / (1000 * 60 * 60 * 24));
              var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
              document.getElementById("demo").innerHTML = days + "d " + hours + "h "
              + minutes + "m " + seconds + "s ";
            
              if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "IIIIIITTSSS... TIIIIIMMMEEEE!";
              }
            }, 1000);
            </script>
                <h1>THIS IS THE MAIN PAGE</h1>
                <p>to the <a href="http://localhost:3000/test">TEST</a> page</p>
                <p>to the <a href="http://localhost:3000/request-practice">REQUEST PRACTICE</a> page</p>
                <p>to the <a href="http://localhost:3000/html-practice">HTML PRACTICE</a> page</p>
                <p>to the <a href="http://localhost:3000/user/george">GEORGE's</a> page</p>
                <p>to the <a href="http://localhost:3000/user/greet/george">GREETING GEORGE's</a> page</p>
                </body>
                </html>`)
            });
            
app.get('/test', function(req,res){
    res.send(`
        <html>
            <body>
                <h1>testing....</h1>
                <a href="http://localhost:3000/">go back</a>
            </body>
        </html>`)
});

app.get('/request-practice', function(req, res){
    console.log(req.method, req.path);
    res.send(`
        <html>
            <head>
                <title>request practice page</title>
            </head>
            <body>
                <h1>this is a testing page</h1>
                <a href="http://localhost:3000/">go back</a>
            </body>
        </html>`)
    }
);

app.get('/html-practice', function(req,res){
    res.send(`
        <html>
            <head>
                <title>HOME</title>
            </head>
            <body>
                <h1>WELCOME</h1>
                <a href="http://localhost:3000/">go back</a>
            </body>
        </html>`)
    }
);

app.get('/user/:name', function(req,res){
    // console.log(`this is the user`, req.params.name)
    res.send(`
        <html>
            <head>
                 <title>${req.params.name.toUpperCase()}'S PAGE</title>
            </head>
            <body>
                <h1>${req.params.name.toUpperCase()}</h1>
                <a href="http://localhost:3000/">go back</a>
            </body>
        </html>`)
    }
);

function greet(name){
    return `
        <html>
            <head>
                 <title>${name}'S PAGE</title>
            </head>
            <body>
                <h1>WHATS GOOOOOOOOD ${name}!!!!</h1>
                <a href="http://localhost:3000/">go back</a>  
            </body>
        </html>`  
}

app.get('/user/greet/:name', function(req,res){
    res.send(greet(req.params.name.toUpperCase()))
})

function onListen(){
    console.log(`Listening on: ${port}`)
};

app.listen(
    port,
    onListen()
);