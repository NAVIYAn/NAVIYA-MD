const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "taFBkRAT#-pje8o-_85YSUHxfNxOJmkIeiVZbayZ176O-dYj5xFE",
MONGODB: process.env.MONGODB || "mongodb://mongo:fGFNiDCkljigagBHUDEIfaffkjbdlMFb@junction.proxy.rlwy.net:39122",
};

