const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "h3cgUYiZ#yaT9tkGwp6H0Rn85N4Aq7PggwydtvCuDGHD8-5v9x-s",
MONGODB: process.env.MONGODB || "mongodb://mongo:nCNtvmpZQfbmQyteQXzHtYWyzpjMSpcp@autorack.proxy.rlwy.net:55349",
OMDB_API_KEY:process.env.OMDB_API_KEY || "http://www.omdbapi.com/?i=tt3896198&apikey=db6731e5" 
};


