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
        : ['¶'],

    NUMBER: process.env.YOUR_NUMBER || '254758443111',
    MODE: (process.env.MODE || 'private').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || '✞︎ ΛĪ❥︎ŔƐ√ᎾĿƱŦᎾЯ☠︎︎',
    ANTICALL: process.env.ANTICALL || 'no',
    ADM: process.env.ANTIDELETE || 'no',
    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'no',
    AUTO_LIKE: process.env.AUTO_LIKE === 'no',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'no',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
   ALIVE_URL: process.env.ALIVE_URL,
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0dCeW0zTlByK2pXVHVqclZGS3NQZlRxMmhSemxNOU1zN094aC9XL3BuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3BFSC9VOVhvemxRNGdMQlJpSGlFY1dJNHpqdDJjNEI0N0R4Y2ZCRnJrcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSUhPMSsvUTh3eWVXbFBtUlIyVWhsZ3Jsa29ZWFdYeXRDZmdPQkRRU1hRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqb1VvRk4zLzY3UXprcEZEemQ4aDd2SmhWSmdSVG1OWndsbWVUT1NhK2tJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFFODcrMU9zTktnQXJLcHBCd08zTVRrWDdUdnUvVVVvV1IzUThmdmlUa0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdTVWc0Wng4WlBwYXQ0MlJRdGJ6Zlk1dHlHMWNqNWEveHRkSFFnVHZXem89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQURkTHVWOThqeXFyUXFxdytyS3BqeGJnMjdBZXVQL2ovK05yQzdzYmsyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYitLUG9leG1kb29nQ2QzM0hmb3czMzJkQ0ZDNkM3WmNQU2NCeStkYi9pRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ2NW5vMG4vV0xjdDNCRVVXWUR6empqOGRCQUIwUXNXcWlIMGsxRXlhempadzA1c0tZWUxRSkpUbHBiY0QvVTRHQXA5THJkTzlGVFl0VytndWpqa2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU0LCJhZHZTZWNyZXRLZXkiOiJCbW8xQUFrZkIwc1pvTFd2eGFQSU1rQzhrZXFhUTJEc2kxYXcrSmdNWmo4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc1ODQ0MzExMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxQjk1OUVFODcxQkM2RTc4MkJGNDJFREYyQkI3NTNDNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUwMjI1ODM5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NTg0NDMxMTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUFEQzhFNzBGMDU0OEYyQjI4NEVCOUI1OTJCOTBFOUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDIyNTg0MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUDJOTjZXRzIiLCJtZSI6eyJpZCI6IjI1NDc1ODQ0MzExMTo5NUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjExNzQ4MDgyNzY1ODI1MDo5NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04rNDdkTUVFSm1ueWNJR0dDY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii8ybFdCQ3lvQStWZmlmb1M2VDBuYUZuTjBWcDAvTWpNaFV5Uk9ZTFFRbE09IiwiYWNjb3VudFNpZ25hdHVyZSI6IkJSNTNqaU41MUg2TjF4V2hSV3pyWEtUWFVrTlZUYnZXSUJ3NVBXTXpDNFBSRERJOC9sL0xDdk9IeUpuN1hyZnhUVEJuRnlwVGZwS3JUa05EQ3E1YUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZNWs4Rm04c0NrdmRtL1N0a01iZkVRTjYzQWZkd0VwSmp1ZytqMW9oZmpoVEZZMjV2azFLWHlTVEZ3S3V4dHhvb3EzNDQ0K01pcmJmdU9URVdOa0doQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc1ODQ0MzExMTo5NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmOXBWZ1FzcUFQbFg0bjZFdWs5SjJoWnpkRmFkUHpJeklWTWtUbUMwRUpUIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTAyMjU4MzAsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQTZWIn0=',
    timezone: 'Africa/Nairobi',
    USER_LID: process.env.YOUR_LID || null,
    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
