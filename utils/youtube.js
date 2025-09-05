const ytdl = require("ytdl-core");

async function getYouTubeInfo(url) {
    const info = await ytdl.getInfo(url);
    return info;
}

module.exports = { getYouTubeInfo };
