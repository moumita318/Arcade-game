// Enemies our player must avoid
var Enemy = function(x,y,speed) {
	this.x = x;
	this.y = y;
	this.speed= speed;
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    this.x += this.speed * dt;

    if(this.x > 510){
    	this.x = -50;
    	this.speed=100 + Math.floor(Math.random() * 222);
    }

    if(player.x< this.x + 80 && player.x + 80 > this.x && player.y< this.y + 60 && 60 + player.y >this.y){
    	alert(`Sorry try again`);
    	//player.x=202;
    	//player.y=405;
    	resetplayer();
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

 function resetplayer(){
	player.x=202;
	player.y=405;
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player=function(x,y,speed) {
	this.x= x;
	this.y= y;
	this.speed=speed;
	this.sprite='images/char-boy.png';
}

Player.prototype.update=function(dt){

}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

//keyboard input for the player
Player.prototype.handleInput=function(KeyPress){
	if(KeyPress=='left' && this.x>0){
		this.x -= 102;
	}
	if(KeyPress=='right' && this.x<405){
		this.x += 102;
	}
	if(KeyPress=='up' && this.y>0){
		this.y -= 83;
	}
	if(KeyPress=='down' && this.y<405){
		this.y += 83;
	}
	if(this.y<0){
		setTimeout(function(){
			alert(`Congratulations.You have won the game.`);
			//player.x=202;
			//player.y=405;
			resetplayer();
		},600);
	}
}

var allEnemies=[];
var enemyLocation=[53,137,235];

enemyLocation.forEach(function(locationY){
	enemy=new Enemy(0,locationY,200);
	allEnemies.push(enemy);

});

var player=new Player(202,405);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
