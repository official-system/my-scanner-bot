const { ethers } = require("ethers");
const axios = require("axios");

// Ampifandraiso amin'ny WSS-nao
const WSS_URL = "wss://powerful-wiser-sound.matic.quiknode.pro/c564cb505da50ad1e31c5762e3e7d5312a719ecb/";
const provider = new ethers.providers.WebSocketProvider(WSS_URL);

// Router ABI ho an'ny Swap
const routerAddress = "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff";
const abi = ["event Swap(address indexed sender, uint amount0In, uint amount1In, uint amount0Out, uint amount1Out, address indexed to)"];

const router = new ethers.Contract(routerAddress, abi, provider);

console.log("🚀 Scanner mihazakazaka...");

// Mihaino ny "Swap" rehetra mitranga amin'ny router
router.on("Swap", async (sender, amount0In, amount1In, amount0Out, amount1Out, to, event) => {
    console.log("🔔 Swap vaovao hita!");
    console.log("💰 Sender:", sender);
    
    // Eto no ho avy ny "Filter" (Hojerentsika ny token 90 rehefa vita ny deploy)
});
                
