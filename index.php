<?php

session_start();

require 'database.php';

if( isset($_SESSION['user_id']) ){

	$records = $conn->prepare('SELECT id,email,password FROM users WHERE id = :id');
	$records->bindParam(':id', $_SESSION['user_id']);
	$records->execute();
	$results = $records->fetch(PDO::FETCH_ASSOC);

	$user = NULL;

	if( count($results) > 0){
		$user = $results;
	}

}

?>
<!DOCTYPE html>
<html>
	<head>
		<title>SVI System - Index</title>
		<link rel="stylesheet" href="css/default.css">
		<link rel="stylesheet" href="css/flex.css">
		<link rel="stylesheet" href="css/animate.css">
		<script src="js/cookie.js"></script>
		<style>

		.animation
		{
			animation-name: inflash;
			animation-duration: 0.5s;
			animation-fill-mode: forwards;
			opacity: 1;
		}

		.animation:hover
		{
			animation-name: flash;
			animation-duration: 0.5s;
			animation-fill-mode: forwards;
			opacity: 1;
		}

		</style>
	</head>
	<body>
		<div id="blockuser">
			<script src="js/_86.js" type="text/javascript"></script>

			<div style="width:105%;height:105%;position: fixed;left: -2.5%;" id="datajson"></div>

			<div id="link" style="visibility:hidden;">
				<div id="btnborderout">
					<div id="flexcontainer">
						<div id="flexitem">
							<a href="bro.php">
								<div id="vertical1" class="animation" onmouseenter="playc_s()" onmouseleave="playc_s()"></div>
							</a>
						</div>
						<div id="flexitem">
							<a href="soc.php">
								<div id="vertical2" class="animation" onmouseenter="playc_s()" onmouseleave="playc_s()"></div>
							</a>
						</div>
						<div id="flexitem">
							<a href="com.php">
								<div id="vertical3" class="animation" onmouseenter="playc_s()" onmouseleave="playc_s()"></div>
							</a>
						</div>
						<div id="flexitem">
							<a href="mus.php">
								<div id="vertical4" class="animation" onmouseenter="playc_s()" onmouseleave="playc_s()"></div>
							</a>
						</div>
						<div id="flexitem">
							<a href="dic.php">
								<div id="vertical5" class="animation" onmouseenter="playc_s()" onmouseleave="playc_s()"></div>
							</a>
						</div>
						<div id="flexitem">
							<a href="vid.php">
								<div id="vertical6" class="animation" onmouseenter="playc_s()" onmouseleave="playc_s()"></div>
							</a>
						</div>
						<div id="flexitem">
							<a href="new.php">
								<div id="vertical7" class="animation" onmouseenter="playc_s()" onmouseleave="playc_s()"></div>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div id="leftborder" onmouseenter="plays_s()" onmouseleave="plays_s()">
				<div class="leftborder-white">
					<?php if( !empty($user) ): ?>
					<div id="vertical8"></div>
					<?php else: ?>
					<a href="login.php"><div id="vertical8"></div></a>
					<?php endif; ?>
				</div>
			</div>

			<div id="rightborder" onmouseenter="plays_s()" onmouseleave="plays_s()">
				<div class="rightborder-white">
					<div id="vertical9"></div>
				</div>
			</div>

			<style>
				audio
				{
					animation-name: inflash;
					animation-duration: 0.5s;
					animation-fill-mode: forwards;
					width: 40%;
				}
				audio:hover
				{
					animation-name: flash;
					animation-duration: 0.5s;
					animation-fill-mode: forwards;
				}
				audio::-webkit-media-controls-panel
				{
					background-color: transparent;
				}
				audio::-webkit-media-controls-timeline
				{
					color: red;
				}
			</style>

			<audio controls id="bgm" style="visibility: hidden;position: absolute; left: 30%; top: 1%; background-color: transparent;" onmouseenter="playc_s()" onmouseleave="playc_s()" onplay="playc_s()" onpause="playc_s()" >
				<source src="audio/bgm.mp3" type="audio/mp3" />
			</audio>

			<audio id="c_sound">
				<source src="audio/nier.mp3" type="audio/mp3" />
			</audio>

			<audio id="s_sound">
				<source src="audio/nier2.mp3" type="audio/mp3" />
			</audio>

			<script>
				var bgm = document.getElementById("bgm");
				bgm.volume = 0.2;
				bgm.play();

				setTimeout(function(){
					bgm.style.visibility = "visible";
				},1500);
			</script>

			<div id="loginbox" style="position: fixed; top: 1%; right: 2%;line-height:100%;font-size:150%;text-align: right;visibility: hidden;">
				<?php if( !empty($user) ): ?>
					Welcome, <?= $user['email']; ?>.<br/>
					<a href="logout.php">Logout?</a>
				<?php else: ?>
					Welcome, Guest.<br/>
				<?php endif; ?>
			</div>

			<style>
				#i_reset
				{
				 	font-family: Agency FB, Heiti TC, Microsoft YaHei;
				  animation-name: inflash;
				  animation-duration: 0.5s;
				  animation-fill-mode: forwards;
				}

				#i_reset:hover{
				  animation-name: flash;
				  animation-duration: 0.5s;
				  animation-fill-mode: forwards;
				}
			</style>

			<div id="loginbox2" style="position: fixed; top: 0.8%; right: 13.5%;line-height:100%;font-size:150%;text-align: right;visibility: hidden;">
				<a href="contact.html">
					<input id="i_reset" type="button" value="關於我們" onmouseenter="playc_s()" onclick="playc_s()" onmouseleave="playc_s()" style="background-color: #000;border: none;color: white;padding: 11.5px 24px;text-align: center;font-size: 12px;" />
				</a>
				<a href="https://www.youtube.com/watch?v=nLypPmzVw0U" target="_blank">
					<input id="i_reset" type="button" value="網站教學" onmouseenter="playc_s()" onclick="playc_s()" onmouseleave="playc_s()" style="background-color: #000;border: none;color: white;padding: 11.5px 24px;text-align: center;font-size: 12px;" />
				</a>
			</div>

			<script>
				setTimeout(function(){
					document.getElementById('loginbox').style.visibility = "visible";
					document.getElementById('loginbox2').style.visibility = "visible";
				},1500);
			</script>

			<!-- particles.js container -->
			<div id="particles-js" style="visibility: hidden;"></div>

			<script>
				setTimeout(function(){
					var pe = document.getElementById('particles-js');
					pe.style.visibility = "visible";
				}, 1250)
			</script>

			<!-- particles.js container -->
			<div id="particles-js" style="visibility: hidden;position: fixed;top: 0%;width: 100%;z-index: -2;"></div>

			<script>
				setTimeout(function(){
					var pe = document.getElementById('particles-js');
					pe.style.visibility = "visible";
				}, 1250)
				setTimeout(function(){datajson.style.display = "none";},1500)
			</script>

			<script src="js/particles.js"></script>
			<script src="js/app.js"></script>

			<script src="js/particles.js"></script>
			<script src="js/app.js"></script>
			<script src="js/default.js"></script>
			<script src="js/index.js"></script>
			<script src="js/sound.js"></script>
		</div>
	</body>
</html>
