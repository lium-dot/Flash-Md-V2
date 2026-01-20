require('dotenv').config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'paused';
}

module.exports = {
    prefixes: process.env.PREFIX
        ? process.env.PREFIX.split(',').map(p => p.trim())
        : ['.'],

    NUMBER: process.env.YOUR_NUMBER || '254758443111',
    MODE: (process.env.MODE || 'private').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || 'ΛĿĿᏋЙ',
    ANTICALL: process.env.ANTICALL || 'on',
    ADM: process.env.ANTIDELETE || 'on',
    AR: process.env.AUTO_REACTION || 'off',

    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'on',
    AUTO_LIKE: process.env.AUTO_LIKE === 'on',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'off',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUJvQys2dFI4TDdIUHRJZWxjMXhmckNrMS9aWlkvWUZVSlpNV1pHbmIzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWdMY2VUK2hoNElUY1BKNlI5dWxZMWVBcUd6emxrWG1QNUdEM2VrSkUxQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TEZ3dHVZaS9pZGZRUnZ1NTlvTkt1Mkt5dE50dFVzTEI2d25GOXZZRVVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEVlQ0WCswS0I1ampKRzBwQkVnZzg1SXBPdkRBSjBUMGJRS2dlSkY3UEZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllQVjQvUkJqOXBoanFqUWFNWFYzZFMxdElLTnZSMTMreDBKbzkwbm5TM1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNaNU1hMHF0b0RPUFBlNm04dVFuU2l1SUJnVWFQTS9UK3B3M0prZDlUblE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUtpZm9aZTB5Vkp4REFPeU1pTi9wd0tLYjUyeEFZOFlSYUtsYUh0cXlGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEZmQXlaL2dNNmpBNlNvbVNRT0tWMXo2dkNzOFZ1TjVPclVQcldpNTBCdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNXaU0vZStGa2RQVFF4VnJzRnJERDR6VW1ibk85U2pKclRueXB6Vk82L1UzSHhXNWZvWkFTV0VxVURUMzMxNEVTOXhUMENyclFQN1RQREZnaUxwaWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTksImFkdlNlY3JldEtleSI6IkVmWFE5UGhXNHRyemtzRFBIL080QVY3WHBFdkVNQlBxbG9uQ2o3N0lLSG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjpmYWxzZSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFFnQyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlhVME9zQkVJNm52OHNHR0EwZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOFppNnhCNDVqcExaY3NFTmJBdmZKODdaSWpOcTNRRHBJaHhDNkh2Y1FVQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZk1HMHd2L3VmNjRYZnlVaC9Tc2M5Z3ZCcXFBZUJ3ZmxuajdSNmlCWVMzbXJudEZCbDUyT0hRNkN5YnkxZXphNXhidHJ5QUt4SFZGMGdnYitwSHppQlE9PSIsImRldmljZVNpZ25hdHVyZSI6Ijd1b0dsWXhTd2FHWExPWjUyYmZUeVp5QVQyNjdUNW02VUxBMUFpUWNFdVMvQk1FTVNXNHZMMjluMUFlVi96bEF4UlZxNmxlaXB2eXRsQTNmL05DaWd3PT0ifSwibWUiOnsiaWQiOiIyNTQ3NTg0NDMxMTE6NjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMTc0ODA4Mjc2NTgyNTA6NjJAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc1ODQ0MzExMTo2MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmR1l1c1FlT1k2UzJYTEJEV3dMM3lmTzJTSXphdDBBNlNJY1F1aDczRUZBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY4OTM2MzM5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURyUyJ9',
    timezone: 'Africa/Nairobi',

    USER_LID: process.env.YOUR_LID, 

    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'typing'),

    mapPresence
};
