console.log("background tasks");


let msg = {
	txt: "hello"
}

chrome.tabs.sendMessage(tab.id,msg);

console.log("OK");
var player = document.getElementsByClassName('video-stream')[0];
console.log(player);
if (player) {
	const levels = player.getAvailableQualityLevels();
	console.log("levels");
}

console.log("end");
