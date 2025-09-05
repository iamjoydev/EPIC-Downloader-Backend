const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const fs = require("fs");
const path = require("path");

const { downloadFacebook } = require("./utils/facebook");
const { downloadInstagram } = require("./utils/instagram");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("DreamWorld EPIC Downloader Backend"));

// YouTube Download
app.get("/download/youtube", async (req, res) => {
    const url = req.query.url;
    const format = req.query.format || "mp4";

    if (!ytdl.validateURL(url)) return res.status(400).send("Invalid YouTube URL");

    try {
        const info = await ytdl.getInfo(url);
        const title = info.videoDetails.title.replace(/[^\w\s]/gi, "");
        res.header("Content-Disposition", `attachment; filename="${title}.${format}"`);
        ytdl(url, { format: format === "mp3" ? "audioonly" : "highest" }).pipe(res);
    } catch (err) {
        res.status(500).send("Error downloading video");
    }
});

// Facebook Download
app.get("/download/facebook", async (req, res) => {
    const url = req.query.url;
    try {
        const filePath = await downloadFacebook(url);
        res.download(filePath, (err) => fs.unlinkSync(filePath));
    } catch (err) {
        res.status(500).send("Facebook download failed");
    }
});

// Instagram Download
app.get("/download/instagram", async (req, res) => {
    const url = req.query.url;
    try {
        const filePath = await downloadInstagram(url);
        res.download(filePath, (err) => fs.unlinkSync(filePath));
    } catch (err) {
        res.status(500).send("Instagram download failed");
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
