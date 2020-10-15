const axios = require('axios');

async function logYesterday(topic){
    try{
        const url = 'http://localhost:3000/json';
        const response = await axios.get(url);
        const {data} = response;
        const theTopic = data[topic]
        console.log(theTopic)
    } catch(error){
        console.log(error.message)
    }
};

logYesterday('yesterday')