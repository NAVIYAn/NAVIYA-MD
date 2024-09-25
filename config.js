const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eB0yAZZT#dt_vgYNS8knu-rjSlgTTrdEIX2ktseRCB0M4UO-6cmk",
MONGODB: process.env.MONGODB || "mongodb://mongo:fGFNiDCkljigagBHUDEIfaffkjbdlMFb@junction.proxy.rlwy.net:39122",
};
