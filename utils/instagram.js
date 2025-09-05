<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamWorld EPIC Downloader</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-gray-900 text-white transition-colors duration-300">
    <div class="container mx-auto p-10">
        <h1 class="text-4xl font-bold mb-10 text-center">DreamWorld EPIC Downloader</h1>

        <div class="mb-6">
            <input type="text" id="url" placeholder="Paste YouTube / Facebook / Instagram URL"
                class="w-full p-3 rounded-lg text-black" />
        </div>

        <div class="flex gap-4 mb-6">
            <select id="format" class="p-3 rounded-lg text-black">
                <option value="mp4">MP4</option>
                <option value="mp3">MP3</option>
            </select>
            <button onclick="download()" class="bg-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-700">
                Download
            </button>
        </div>

        <div class="flex justify-between mb-6">
            <button onclick="toggleDarkMode()" class="bg-gray-700 px-4 py-2 rounded-lg">Toggle Dark Mode</button>
            <div>
                <a href="#" class="mx-2 text-blue-500">YouTube</a>
                <a href="#" class="mx-2 text-blue-400">Facebook</a>
                <a href="#" class="mx-2 text-pink-500">Instagram</a>
            </div>
        </div>

        <div id="status" class="mt-5 text-center"></div>

        <h2 class="mt-10 text-2xl font-bold">Download History</h2>
        <ul id="history" class="mt-3"></ul>
    </div>

    <script src="script.js"></script>
</body>
</html>
