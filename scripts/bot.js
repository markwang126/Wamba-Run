document.getElementById("botStatus").addEventListener("change", function() {
	if (this.checked === true) {
		// Activate bot
		var INTERVAL = 2;
		window.tRexBot = setInterval(function() {
		    var tRex = Runner.instance_.tRex;
		    var obstacles = Runner.instance_.horizon.obstacles;
		    if (!tRex.jumping && (obstacles.length > 0) && (obstacles[0].xPos + obstacles[0].width) <= ((parseInt(Runner.instance_.currentSpeed - 0.1) - 5) * 34 + 160) && (obstacles[0].xPos + obstacles[0].width) > 15
			) 
			{
		        // console.log(obstacles[0].xPos + obstacles[0].width + " | " + ((parseInt(Runner.instance_.currentSpeed - 0.1) - 5) * 34 + 160));
		        tRex.startJump();
		    }
		}, INTERVAL);
	}
	else {
		// Disable bot
		clearInterval(tRexBot);
	}
});
