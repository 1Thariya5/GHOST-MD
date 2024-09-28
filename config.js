const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "qFN3DIIY#GQFQ9_WLIfjYGOQE8cq_raGOTzDcOZRenYrxrclBiv4",
MONGODB: process.env.MONGODB || "mongodb+srv://recovera347:zg7h5pDexig1fHDQ@cluster0.q6b4o.mongodb.net/",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/397000a07a1deb7fad9c2.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi GHOST-MD Is Online Now 💻\n*💻 Owner* - GHOST-MD\n\n*💻 Owner Number* -+94768358007",
SUDO_NB: process.env.SUDO_NB || "94768358007",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
