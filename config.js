const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DDoSwTAR#nsfLLDliKuXQqzN1kcaeFrj-rtngJebbfwJpftgT6S0",
MONGODB: process.env.MONGODB || "mongodb://mongo:nCNtvmpZQfbmQyteQXzHtYWyzpjMSpcp@autorack.proxy.rlwy.net:55349",
OMDB_API_KEY:process.env.OMDB_API_KEY || "http://www.omdbapi.com/?i=tt3896198&apikey=db6731e5" 
};



