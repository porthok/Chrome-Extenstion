console.log("Chrome extension ready");

// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendResponse){
// 	console.log(message.txt);
// }

// var player = document.getElementById('movie_player');
// console.log(player);
// if (player) {
// 	const levels = player.getAvailableQualityLevels();
// 	console.log(levels);
// }

// function updatePlayerQuality(){
// 	new Promise((resolve, reject) => {
// 			let interval = setInterval(() => {
// 				console.log("trying to find player2");
// 				if (isPlayerExists()) {
// 					console.log("found it!!!");
// 					clearInterval(interval);
// 					console.log(player.getAvailableQualityLevels());
// 				}
// 			}, 500);
// 		});
// }

// function isPlayerExists() {
// 		let player = document.getElementById('movie_player') 
// 			|| document.querySelector('.html5-video-player');
// 		console.log(player);

// 		return player && player.getAvailableQualityLevels().length !== 0;
// 	}


// scriptLinesArray = [`try { updatePlayerQuality(); } catch(ex) { console.error(ex); }` ];
// const ELEMENT_ID = `youtube-hd-${chrome.runtime.id}`;

// console.log("etape2");

// let script = document.createElement("script");
// script.textContent = scriptLinesArray.join(';');
// script.id = ELEMENT_ID;

// console.log("etape3");

// document.documentElement.appendChild(script);

var s = document.createElement('script');
s.src = chrome.runtime.getURL('script.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);