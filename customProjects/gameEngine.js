//Player Class
function GameObj(w, h, context){
	//vars
	this.width = w;
	this.height = h;
	this.facingRight = false;
	//movement
	this.left = false;
	this.right = false;
	this.up = false;
	this.down = false;
	//images
	this.spritesheet = function(url, xSS. ySS){
		this.image = new Image();
		this.src = url;
		this.draw = function(){context.drawImage(image, xSS, ySS, w, h);};
	};

	//main functions
	this.update = function(){

	};
	this.draw = function(context){

	};
	//helper functions
	

};