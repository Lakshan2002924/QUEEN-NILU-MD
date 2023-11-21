/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;xn4HzADC#V2ewGMC1mdIM1aR17O5QHlRZaJmmt5_ffnIMwhmElG8' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://lakshan_p09c_user:50qFHLdb3zPyyZ9GKCflE3LaCZR5bjQx@dpg-cle7grts40us73buc69g-a.frankfurt-postgres.render.com/lakshan_p09c'

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94760401321'

global.OWNER_NAME = '𝙻𝙰𝙺𝚂𝙷𝙰𝙽'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "false" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = '𝙻𝙰𝙺𝚂𝙷𝙰𝙽-𝙼𝙳'

global.FOOTER = '𝙻𝙰𝙺𝚂𝙷𝙰𝙽-𝙼𝙳 2023'

global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@ʟᴀᴋsʜᴀɴ-ᴍᴅ🤹‍♂️' //sticker

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = '𝙻𝙰𝙺𝚂𝙷𝙰𝙽-𝙼𝙳  © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/eddc75caf6cbc2d69e954.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = '' // Set Alive Message

global.MAX_SIZE = '500' // Bot Uloading Max size 

global.ANTI_BAD = true // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = true //Anti Link (on = True , Off = False )

global.ANTI_BOTS = false

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/IRdyJY5P4sF5BhtP5PIdHH' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: 𝙻𝙰𝙺𝚂𝙷𝙰𝙽-𝙼𝙳" //ur yt chanel name
global.socialm = "GitHub: janithsadanuwan" //ur github or insta name
global.location = "Srilanka, colombo" //ur location
