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
        : [''],

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
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUpzcDdlK1dUWnVjMUp0SmxjTVp6b0ErZUdqT1BjNGphOCs3dUxpa1FuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVpVajFobERTMHZ0MmNMRFJXSHhxQ3pxRE5nWlFpMFdQbVdXUFR5Yit4cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTksybFpEVEJ2bCt6VmZmRm1Tak4xVmtldS9xYjI4WGNoaGdvOU94eWxRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKQTE2Q1VVdFNmV0VKbzdQSWV1MmJEaU10aUcxcWR6TnFCTE1ISTlxdUdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllLY2JoOEFpeSs4R3BkNjd3dnFGU2JnVGpkWjhLOUZmbzdzRkRvR0pkWGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpCL3pvSzR4MTg1OWZaRVZvMFZVczZiSHZqVW9kWDV1aG5DUTVFQzFsZ2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUt0QUUxUFp1TlkyUHhvVVhXS3BLSlU2a05nOFpWYjZPK3h1MEoyYWtXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUlzcFYwZm15TERNcEV1UWRXamw5YlZHQS9EemJvaWFQY003SGtScExERT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRIUXphWHdPN1pvaTAxNGZSazQxUVkrMFcwNzJPNkJVRy8zY3FuZFVEZmVTamUwTUV5T0h6c2grUnVmRmgvWDBsWnlSRFFVZE1ZZnFuWks1MEZnZmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM4LCJhZHZTZWNyZXRLZXkiOiI3TVYzMWFCQTNYTFZDT1pGVlAwR29ibGRiVHJYMmY4d3E5aUk2ZEYzYWZjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6ZmFsc2UsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRZ0MifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09QMW9uQVFvdFAxeWdZWUR5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkhHcWRTNDh5RHFLbVRzUTFvRGFKZTlNR1dtSHJjR01sM2tOQ0k1d1hmSEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImhsODVJMllWbXc2ZDQyNEZrdXVJamVrT2gySitSQ0hzSytnNEE5Mk5jUjlGajVPM1M4czQ3a3ZFRG14dHF1UStPSlVJWGd1dVZXS1NvWm9DaVhwN0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTcWY0Kzc5RFM3UEVMMmhPQkFjN0JkWnpmQ2d1cDlsUFNmbUR6eXJOemJkTS9xUDRTTmUraDBPMGNFRkFXTEpmb1ZEQ2UxdlRZSXVBSHNtWTBabERodz09In0sIm1lIjp7ImlkIjoiMjU0NzU4NDQzMTExOjQxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTE3NDgwODI3NjU4MjUwOjQxQGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NTg0NDMxMTE6NDFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUnhxblV1UE1nNmlwazdFTmFBMmlYdlRCbHBoNjNCakpkNURRaU9jRjN4eCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NzcyOTU3NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNSFoifQ==',
    timezone: 'Africa/Nairobi',

    USER_LID: process.env.YOUR_LID, 

    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
