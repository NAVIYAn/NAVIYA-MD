const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Vz8xRI6L#dv-ZHK-8FDLDvW0zdWgvyh49OELwTYplvWLyLxhQ9iM",
MONGODB: process.env.MONGODB || "mongodb://mongo:ReMsMhOSBwDQqIwIKpXbHRanJcJiYNmZ@autorack.proxy.rlwy.net:43688",
OMDB_API_KEY:process.env.OMDB_API_KEY || "https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json"
};

