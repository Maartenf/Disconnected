var Map = {

	tilemap: [[2,2,2,2,2,2,2,2,2,2,8,8,8,8,8,2,2,2,8,8,8,8,8,8,8,8,8,8,8,2,2,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,2,2],[2,2,2,2,2,2,2,2,8,12,1,0,4,0,0,11,2,7,1,0,0,0,4,0,0,0,0,0,0,5,7,4,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,15,13,11,8,2],[2,2,2,8,8,2,2,7,0,0,0,0,0,0,4,0,11,12,0,0,0,0,0,0,0,0,0,4,0,5,7,0,0,0,0,4,0,1,1,0,0,4,13,0,0,0,0,4,0,0,0,0,0,0,15,15,15,4,0,5],[2,2,12,4,0,5,2,7,0,4,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,15,15,15,15,15,5],[2,7,0,0,0,5,2,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,6,10,0,0,0,0,0,15,15,15,15,15,5],[2,12,13,4,0,5,2,2,10,1,0,0,0,0,0,0,0,0,0,13,0,0,9,6,10,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,0,0,9,6,6,6,2,2,7,1,0,0,0,0,15,15,15,15,15,5],[7,0,0,0,0,11,8,2,7,1,0,0,0,4,0,0,0,0,0,0,0,0,11,8,2,10,0,0,0,0,0,0,0,13,0,0,0,0,0,4,0,0,11,2,2,8,8,8,12,1,0,0,0,0,0,15,15,15,15,5],[7,0,0,0,0,0,0,11,12,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,5,7,1,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,11,12,14,0,0,0,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,4,0,0,5,7,1,0,0,0,4,0,0,0,9,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,4,0,13,5],[7,4,0,14,0,0,0,0,0,0,0,0,0,0,0,0,9,10,0,0,0,0,0,0,5,7,0,4,0,0,0,0,0,0,5,7,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,0,1,1,0,0,0,0,4,0,0,0,0,5,7,0,0,0,0,0,0,11,12,0,0,0,0,0,0,0,9,2,7,1,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,0,0,4,0,0,0,0,0,0,0,9,6,2,2,6,10,0,0,0,0,0,0,0,0,0,0,0,0,9,2,2,12,0,0,0,0,0,4,0,0,0,0,0,0,0,9,10,0,0,0,0,0,1,1,1,5],[7,0,0,0,0,0,0,0,0,0,0,0,0,0,11,8,8,8,2,7,0,0,14,0,0,0,0,0,0,4,0,0,5,2,12,0,0,0,0,0,0,0,0,0,0,0,0,0,9,2,2,10,0,0,0,0,1,1,1,5],[7,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12,0,0,0,0,0,0,0,0,0,0,0,9,2,12,0,0,0,0,4,0,0,0,0,13,0,0,0,9,2,2,2,7,0,0,4,0,0,0,0,5],[2,6,6,6,10,1,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,0,0,0,0,0,0,11,12,0,0,0,0,0,0,0,0,0,0,0,0,4,0,5,2,2,8,12,0,0,0,0,0,0,0,5],[2,2,2,2,12,1,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,5,2,7,0,0,0,0,0,0,0,0,0,5],[2,8,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,6,10,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,1,0,0,0,0,0,0,5,2,7,0,13,0,0,0,0,14,0,4,5],[7,0,0,14,0,0,0,4,0,0,0,0,0,0,0,0,4,0,0,0,0,0,5,2,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,5,2,7,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,8,2,10,0,0,0,0,0,13,4,0,0,0,0,1,1,1,1,1,0,0,4,0,14,5,2,2,10,0,0,0,0,0,0,0,0,5],[7,0,0,0,0,0,0,0,0,0,1,1,15,15,15,16,16,16,15,15,15,1,1,0,11,2,6,6,10,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,5,2,2,7,1,0,0,0,0,9,6,6,2],[7,0,0,4,0,0,0,0,0,0,15,15,15,15,15,16,16,16,15,15,15,15,15,1,0,11,8,8,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,2,2,7,1,0,0,0,0,11,2,2,2],[7,13,0,0,0,0,0,0,15,15,15,15,15,15,15,16,16,16,15,15,15,15,15,15,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,5,2,2,7,0,0,0,0,0,0,11,8,2],[7,0,0,0,0,0,0,15,15,15,15,15,15,15,15,16,16,16,15,15,15,15,15,15,15,0,0,0,0,0,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,4,5,2,2,12,0,0,0,4,0,0,0,1,5],[7,0,0,0,9,10,0,15,15,15,15,15,15,15,15,0,0,0,15,15,15,15,15,15,15,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,2,7,0,0,0,0,0,0,14,0,0,5],[7,0,0,0,5,7,15,15,15,15,15,15,15,15,1,0,0,0,15,15,15,15,15,15,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,9,2,2,7,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,5,7,15,15,15,15,15,15,15,1,0,0,0,1,15,15,15,15,15,15,15,0,0,9,10,0,0,0,9,6,10,0,0,0,0,0,0,0,4,0,9,6,2,2,2,7,0,0,0,0,1,1,0,4,0,5],[7,1,1,1,5,7,15,15,15,15,15,15,15,1,0,13,1,15,15,15,15,15,15,15,15,0,9,2,12,0,0,0,11,2,7,1,1,1,4,0,0,0,0,0,11,8,2,2,2,12,0,0,0,4,1,1,0,0,0,5],[7,1,1,1,5,7,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,9,2,12,0,0,0,0,0,5,7,1,1,0,0,0,0,0,0,0,0,0,11,8,12,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,5,7,0,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,9,2,12,13,0,0,0,4,0,5,7,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,11,2,10,0,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,14,5,7,0,0,0,0,0,0,9,2,12,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,0,11,2,10,0,15,15,15,15,15,15,15,15,15,15,15,15,15,0,9,2,7,4,0,0,0,0,9,2,12,0,0,0,0,4,0,0,0,0,4,0,0,1,1,4,0,0,0,0,9,6,10,13,0,4,5],[7,0,0,0,4,13,11,2,10,0,0,15,15,15,15,15,15,15,0,0,0,0,1,11,2,2,10,0,0,0,9,2,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,2,2,6,6,6,2],[7,0,0,0,0,0,0,5,2,10,0,0,0,0,0,0,0,0,0,0,0,0,0,1,11,8,2,6,6,6,2,12,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,11,2,2,2,2,2],[7,14,4,0,0,0,0,11,8,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,11,8,8,8,12,0,0,0,0,0,13,0,9,10,0,0,0,0,13,0,0,0,0,0,4,0,0,0,0,11,8,8,8,2],[7,0,0,0,0,0,0,0,0,0,0,0,4,0,0,14,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,9,6,2,2,10,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,5],[2,6,6,10,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,4,9,2,2,2,2,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,5],[2,2,2,2,10,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,9,6,2,2,2,8,12,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,5],[2,8,8,8,2,10,0,0,4,0,0,0,0,0,0,1,0,0,0,0,0,0,0,9,10,0,0,4,0,0,0,0,9,2,2,2,2,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,11,12,0,0,0,0,0,1,1,1,1,1,0,0,0,4,0,0,0,5,2,10,0,0,0,0,4,9,2,2,2,8,12,4,0,0,4,0,0,0,14,4,0,0,0,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,4,0,0,0,0,9,6,2,2,12,0,0,0,0,9,2,2,2,12,13,0,0,0,0,0,0,0,0,0,0,1,1,1,15,15,15,15,15,15,15,16,16,16,5],[7,0,0,0,0,0,14,0,0,0,0,0,1,1,1,0,0,0,0,0,9,2,2,8,12,0,0,0,4,0,5,2,2,12,4,0,0,0,0,0,0,0,0,0,1,1,15,15,15,15,15,15,15,15,15,15,16,16,16,5],[7,0,4,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,5,2,12,0,0,0,0,0,0,0,11,2,7,0,0,0,0,0,0,0,4,0,1,1,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,5],[7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12,0,0,0,0,4,0,0,0,0,11,12,0,0,0,0,0,0,0,0,1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,5],[7,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,5],[7,0,13,0,0,4,0,0,9,6,6,6,6,6,10,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,4,15,15,15,15,15,15,15,15,0,0,0,4,0,0,15,16,16,16,5],[7,4,0,0,0,0,9,6,2,2,2,2,2,2,2,6,10,0,0,4,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,15,15,15,15,15,15,15,15,0,9,6,10,9,6,10,0,0,0,0,5],[7,0,0,0,0,0,5,2,2,8,8,8,8,2,2,2,2,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,14,0,0,0,0,15,15,15,15,15,15,15,0,0,11,2,2,2,2,12,0,0,0,0,5],[7,0,0,0,0,9,2,8,12,0,0,0,0,11,8,2,2,2,10,0,0,0,13,4,0,0,1,1,0,4,0,0,0,0,0,0,0,0,0,0,15,15,15,15,15,15,0,4,0,0,0,11,12,0,0,0,0,4,0,5],[7,0,0,4,1,5,7,0,0,0,0,0,0,1,1,11,2,2,2,10,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,15,15,15,15,15,15,15,0,0,13,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,1,11,12,0,13,0,4,0,0,0,0,1,11,2,2,7,0,0,0,0,0,0,9,6,10,0,0,0,4,0,0,0,1,1,1,15,15,15,15,15,15,15,9,10,0,0,4,0,0,0,0,0,0,0,0,5],[7,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,1,11,2,2,10,0,0,0,0,0,11,2,2,10,0,0,0,0,0,0,1,1,1,15,15,15,15,15,15,15,5,7,0,0,0,0,0,0,0,0,0,1,1,5],[7,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,1,5,2,7,0,0,0,0,0,0,11,2,2,10,0,0,0,0,0,0,0,0,15,15,15,15,15,15,15,5,7,0,0,4,0,0,4,0,0,0,1,9,2],[7,4,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,11,2,7,0,4,0,0,0,0,0,5,2,7,0,0,0,4,0,0,0,0,15,15,15,15,15,15,15,11,12,0,0,0,0,0,0,0,0,0,0,11,2],[7,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,5,2,10,0,0,0,4,0,0,5,2,7,0,0,0,0,0,0,0,0,15,15,15,15,15,15,15,1,0,0,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,2,7,0,0,0,0,0,0,11,8,12,0,0,4,0,0,0,0,4,16,16,16,16,16,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,5],[7,1,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,11,2,2,10,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,16,16,16,16,16,16,16,0,0,0,0,0,4,0,0,0,4,0,0,4,5],[2,10,1,0,4,0,0,0,13,0,9,10,0,0,0,0,0,13,0,0,5,2,7,0,0,0,0,0,0,0,0,13,0,0,0,0,4,0,0,16,16,16,16,16,16,16,0,4,0,14,0,0,9,10,0,0,0,0,13,5,null,null,null,null,6],[2,2,10,1,0,0,0,0,0,9,2,7,0,0,0,0,0,0,4,0,5,2,7,0,0,0,4,0,0,0,4,0,0,0,0,0,0,9,10,15,15,15,15,15,15,15,1,0,0,0,0,0,5,7,0,0,0,0,0,5],[2,2,2,10,0,0,4,0,0,5,2,7,0,0,0,0,4,0,1,1,5,2,2,6,10,0,0,0,0,0,0,0,0,0,0,1,9,2,7,15,15,15,15,15,15,15,1,0,0,0,0,9,2,7,0,0,0,0,9,2],[2,2,2,2,6,6,6,6,6,2,2,2,6,6,6,6,6,6,6,6,2,2,2,2,2,6,6,6,6,6,6,6,6,6,6,6,2,2,2,6,6,6,6,6,6,6,6,6,6,6,6,2,2,2,6,6,6,6,2,2]],

  	tileinfo: {
  		0: {
  			walk: true,
  			transp: true,
  			color: "Ground"
  		},
  		1: {
  			shoot: true,
            transp: true,
  			color: "ShootWall"
  		},
  		2: {
  			color: "Wall"
  		},
  		3: {
        walk: true,
  			shoot: true,
  			transp: true,
  			trap: true,
  			color: "Trap"
  		},
  		4: {
  			walk: true,
  			transp: true,
  			color: "Grass"
  		},
  		5: {
  			color: "WallLeft"
  		},
  		6: {
  			color: "WallTop"
  		},
  		7: {
  			color: "WallRight"
  		},
  		8: {
  			color: "WallBottom"
  		},
  		9: {
  			color: "WallLeftTop"
  		},
  		10: {
  			color: "WallRightTop"
  		},
  		11: {
  			color: "WallLeftBottom"
  		},
  		12: {
  			color: "WallRightBottom"
  		},
  		13: {
  			walk: true,
  			transp: true,
  			color: "YellowFlower"
  		},
  		14: {
  			walk: true,
  			transp: true,
  			color: "RedFlower"
  		},
  		15: {
  			transp: true,
  			color: "Water"
  		},
  		16: {
  			walk: true,
  			transp: true,
  			color: "Bridge"
  		}
  	},

	tilesize: 20,

	draw: function() {
		ctx.fillStyle = "#2dcc5f";
		ctx.fillRect(-GUI.left - this.tilesize, -GUI.top - this.tilesize, 640, 640);

		for (var y = 0; y < this.tilemap.length; y++) {
			//don't draw images that aren't visible
			var yC = y * this.tilesize;
			if (yC < -GUI.top - this.tilesize || yC > -GUI.top + 600) continue;

			for (var x = 0; x < this.tilemap[0].length; x++) {
				//don't draw ground tiles because even color
				if (this.tilemap[y][x] == 0) continue;

				//don't draw images that aren't visible
				var xC = x * this.tilesize;

				if (xC < -GUI.left - this.tilesize || xC > -GUI.left + 600) continue;

				ImageLoader.drawIMG(this.tileinfo[this.tilemap[y][x]].color, xC, yC);
			}
		}
	},

	getTileNumber: function(x, y) {
		//out of screen
		if (x < 0 || x >= width || y < 0 || y >= height) return 1;

		xTile = Math.floor(x / this.tilesize);
		yTile = Math.floor(y / this.tilesize);

		return this.tilemap[yTile][xTile];
	},

	isWalkable: function(x, y, type) {
		if (Array.isArray(x)) {
			for (var i = 0; i < x.length; i++) {
				var tile = this.getTileNumber(x[i], y);
				if (!this.tileinfo[tile].walk) return false;
			}
			return true;
		} else if (Array.isArray(y)) {
			for (var i = 0; i < y.length; i++) {
				var tile = this.getTileNumber(x, y[i]);
				if (!this.tileinfo[tile].walk) return false;
			}
			return true;
		} else {
			var tile = this.getTileNumber(x, y);
			return this.tileinfo[tile].walk;
		}
	},

	isShootable: function(x, y) {
		var tile = this.getTileNumber(x, y);
		return this.tileinfo[tile].shoot;
	},

	isTransparent: function(x, y) {
		//check if out of screen
		if (x <= 0 || x >= width || y <= 0 || y >= height) return false;

		var tile = this.getTileNumber(x, y);
		return this.tileinfo[tile].transp;
	},

	isTrap: function(x, y) {
		var tile = this.getTileNumber(x, y);
		return this.tileinfo[tile].trap;
	},

	changeTile: function(x, y, newTileNumber) {
		xTile = Math.floor(x / this.tilesize);
		yTile = Math.floor(y / this.tilesize);

		this.tilemap[yTile][xTile] = newTileNumber;
	}
	
};