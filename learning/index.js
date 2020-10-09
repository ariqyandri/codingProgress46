const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send(`
    <html>
        <body>
            <h1><a href="http://localhost:3000/json">JSON</a></h1>
        </body>
    </html>`)
})

app.get('/json',(req,res)=>{
    console.log('someone requested the data')
    const days={
        yesterday: 'server',
        today: 'clients'
    };
    res.send(days)
} )

const port = 3000;
app.listen(port, ()=>console.log(`listening on: ${port}`))