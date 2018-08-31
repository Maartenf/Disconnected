var GUI = {

	span: null,

	init: function() {
		this.span = document.getElementById("info");
	},

	update: function() {
		var player = GameEngine.getPlayer();
		this.span.innerHTML = "Bullets=" + player.bullets + " | Blocks=" + player.blocks + " | Carrying=" + (player.carrying == null ? "" : player.carrying.type) + " | Health=" + player.health + "/100";
	}
	
};