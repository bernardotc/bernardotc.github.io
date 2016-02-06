var events = {};
events[1] = "Nadar";
events[2] = "Ver One Piece";

function getTodaysEvent() {
	$("#doing").html("<h1>" + selectRandomEvent() + "</h1>");
}

function selectRandomEvent() {
	var index = Math.floor((Math.random() * Object.keys(events).length) + 1);
	return events[index];
}