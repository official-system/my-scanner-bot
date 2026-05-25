const { ethers } = require("ethers");
const axios = require("axios");
const http = require("http");

// Server kely hanome fahafaham-po ny Render (manala ny "No open ports")
const PORT = process.env.PORT || 10000;
http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Bot is running!");
}).listen(PORT);

const WSS_URL = "wss://powerful-wiser-sound.matic.quiknode.pro/c564cb505da50ad1e31c5762e3e7d5312a719ecb/";
const provider = new ethers.providers.WebSocketProvider(WSS_URL);

const routerAddress = "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff";
const abi = ["event Swap(address indexed sender, uint amount0In, uint amount1In, uint amount0Out, uint amount1Out, address indexed to)"];

const router = new ethers.Contract(routerAddress, abi, provider);

console.log("🚀 Scanner mihazakazaka...");

router.on("Swap", async (sender, amount0In, amount1In, amount0Out, amount1Out, to, event) => {
    console.log("🔔 Swap vaovao hita!");
    console.log("💰 Sender:", sender);
});
