const axios = require('axios');

//promises
const test0 = axios.get('http://google.com');

// console.log(test0);

//async
    /*
    const getUrl = async (url) => {
        const response = axios.get(url)
      }
    ~OR~
    async function getUrl (url) {
      const response = axios.get(url)
    }
    */
//await
    /*
    ~only in async function~
    await axios.get(url)
    */

const getGoogle = async (url) =>{
    const response = await axios.get(url);
    console.log(response.data)    
}
// getGoogle('http://google.com')       //calls html or data file of the url

//try and catch
    /*
    try{
        function...
        console.log...
    } catch (error){
        console.log('test...', error.message)
    }
    */
// getGoogle('google.com')      //error bcs url is nonexistent

const getGoogleNew = async (url) =>{
    try {
        const response = await axios.get(url);
    console.log(response.data)
    } catch (error){
        console.log('theres an error:', error.message)
    } 
}

getGoogleNew('google.com')




