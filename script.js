var player = document.getElementById('movie_player');
console.log(player);
if (player) {
	const levels = player.getAvailableQualityLevels();
	console.log(levels);
}