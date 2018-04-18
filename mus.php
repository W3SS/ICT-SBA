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
<html>
	<head>
		<title>SVI System - Music software</title>
		<link rel="stylesheet" href="css/comment.css">
		<link rel="stylesheet" href="css/default.css">
		<link rel="stylesheet" href="css/flex.css">
		<link rel="stylesheet" href="css/bro.css">
		<link rel="stylesheet" href="css/animate.css">
	</head>
	<body>
		<div id="blockuser">
			<div style="width:100%;height:100%" id="datajson"></div>

			<div id="flexcontainer">
				<div id="flexitem" onmouseenter="playc_s()" onclick="playc_s()" onmouseleave="playc_s()">
					<div id="bro"></div>
				</div>
			</div>

			<div id="link" style="visibility:hidden;">
				<div id="btnborderout">
					<div id="flexcontainer">
						<div id="flexitem" onmouseenter="playc_s()" onclick="playc_s()" onmouseleave="playc_s()">
							<div class="bordertest">
								<img onclick="UI_onClick(0)" onmouseenter="playc_s()" onclick="playc_s()" onmouseleave="playc_s()" onmouseover="mouseOver(0)" src="img/mus/itunes.jpg" width="100%" height="28%" />
							</div>
						</div>
						<div id="flexitem" onmouseenter="playc_s()" onclick="playc_s()" onmouseleave="playc_s()">
							<div class="bordertest">
								<img onclick="UI_onClick(1)" onmouseenter="playc_s()" onclick="playc_s()" onmouseleave="playc_s()" onmouseover="mouseOver(1)" src="img/mus/shazam.jpg" width="100%" height="28%" />
							</div>
						</div>
						<div id="flexitem" onmouseenter="playc_s()" onclick="playc_s()" onmouseleave="playc_s()">
							<div class="bordertest">
								<img onclick="UI_onClick(2)" onmouseenter="playc_s()" onclick="playc_s()" onmouseleave="playc_s()" onmouseover="mouseOver(2)" src="img/mus/soundcloud.jpg" width="100%" height="28%" />
							</div>
						</div>
						<div id="flexitem" onmouseenter="playc_s()" onclick="playc_s()" onmouseleave="playc_s()">
							<div class="bordertest">
								<img onclick="UI_onClick(3)" onmouseenter="playc_s()" onclick="playc_s()" onmouseleave="playc_s()" onmouseover="mouseOver(3)" src="img/mus/spotify.jpg" width="100%" height="28%" />
							</div>
						</div>
						<div id="flexitem" onmouseenter="playc_s()" onclick="playc_s()" onmouseleave="playc_s()">
							<div class="bordertest">
								<img onclick="UI_onClick(4)" onmouseenter="playc_s()" onclick="playc_s()" onmouseleave="playc_s()" onmouseover="mouseOver(4)" src="img/mus/upload.jpg" width="100%" height="28%" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="Detail">
				<span id="bn"><strong>按下圖示投票自己最喜歡的軟件</strong></span>
			</div>

			<span id="commentbox" class="textoverflow_c"><br/>留言區:<br/>
				<strong><br/>
					<p class="st" onmouseenter="plays_s()" onmouseleave="plays_s()">Anonymous#8324 8 個月前<br/><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;個網站好威</p>
					<p class="st" onmouseenter="plays_s()" onmouseleave="plays_s()">Anonymous#8414 6 個月前<br/><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;個網站好型</p>
					<p class="st" onmouseenter="plays_s()" onmouseleave="plays_s()">Anonymous#5972 5 個月前<br/><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;個網站好勁</p>
					<p class="st" onmouseenter="plays_s()" onmouseleave="plays_s()">Anonymous#1223 4 個月前<br/><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;個網站好巴閉</p>
					<p class="st" onmouseenter="plays_s()" onmouseleave="plays_s()">Anonymous#6991 4 個月前<br/><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;個網站好英雄主義</p>
					<p class="st" onmouseenter="plays_s()" onmouseleave="plays_s()">Anonymous#2316 4 個月前<br/><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;又好有才華</p>
				</strong>
				<input type="text" onkeydown="playc_s()" style="font-size:70%;position:fixed;left: calc(57.75% + 5px);top:90.95%;border-left-width:0px;border-right-width:0px;border-top-width:5px;border-bottom-width:5px;border-style:solid;width:28.95%;height:5%;font-family: Agency FB, Heiti TC, Microsoft YaHei;" placeholder="Anonymous#1999:" title="在此留言"/>
			</span>

			<div id="leftborder" onmouseenter="plays_s()" onmouseleave="plays_s()" style="z-index: 100;">
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
				<source src="audio/bgm.mp3" type="audio/mp3">
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
				<a href="index.php">
					<input id="i_reset" type="button" value="回主頁" onmouseenter="playc_s()" onclick="playc_s()" onmouseleave="playc_s()" style="background-color: #000;border: none;color: white;padding: 11.5px 24px;text-align: center;font-size: 12px;" />
				</a>
			</div>

			<div id="loginbox2" style="position: fixed; top: 1%; left: 2%;line-height:100%;font-size:150%;text-align: right;visibility: hidden;">
				<a href="contact.html">
					<input id="i_reset" type="button" value="關於我們" onmouseenter="playc_s()" onclick="playc_s()" onmouseleave="playc_s()" style="background-color: #000;border: none;color: white;padding: 11.5px 24px;text-align: center;font-size: 12px;" />
				</a>
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

			<script>
				setTimeout(function(){
					document.getElementById('loginbox').style.visibility = "visible";
					document.getElementById('loginbox2').style.visibility = "visible";
				},1500);
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

			<script src="js/_86.js" type="text/javascript"></script>
			<script src="js/mus.js"></script>
			<script src="js/login.js"></script>
			<script src="js/identical.js"></script>
			<script src="js/sound.js"></script>

			<div>
				<img id="CommentButton" onclick="UI_onClick()" src="img/comment.png" style="position: fixed;right: 57.5px;bottom: 128px;cursor: pointer;visibility: hidden;" width="80px" height="80px" title="Comment sth.">
			</div>

			<div>
				<img id="UploadIconButton" onclick="UI_onClick()" src="img/upload.png" style="position: fixed;right: 64px;bottom: 64px;cursor: pointer;" width="64px" height="64px" title="Upload a software that you want to occur on this list.">
			</div>
		</div>
	</body>
</html>
