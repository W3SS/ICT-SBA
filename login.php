<?php

session_start();

if( isset($_SESSION['user_id']) ){
	header("Location: /");
}

require 'database.php';

if(!empty($_POST['email']) && !empty($_POST['password'])):

	$records = $conn->prepare('SELECT id,email,password FROM users WHERE email = :email');
	$records->bindParam(':email', $_POST['email']);
	$records->execute();
	$results = $records->fetch(PDO::FETCH_ASSOC);

	$message = '';

	if(count($results) > 0 && password_verify($_POST['password'], $results['password']) ){

		$_SESSION['user_id'] = $results['id'];
		header("Location: su.html");

	} else {
		$message = 'Sorry, those credentials do not match';
		header("Location: fa.html");
	}

endif;

?>
<!DOCTYPE html>
<html>
<head>
	<title>SVI System - Login</title>
	<link rel="stylesheet" href="css/login.css">
	<link rel="stylesheet" href="css/animate.css">
	<style>
		html,body{
		 	font-family: Agency FB;
		}
		::-moz-selection {
		  color: #fff;
		  background: #000;
		}
		::selection {
		  color: #fff;
		  background: #000;
		}

		input {
			font-family: Agency FB, Heiti TC, Microsoft YaHei;
		}

		input[type="submit"], input[type="reset"], input[type="button"]
		{
		  animation-name: inflash;
		  animation-duration: 0.5s;
		  animation-fill-mode: forwards;
		}

		input[type="submit"]:hover, input[type="reset"]:hover, input[type="button"]:hover{
		  animation-name: flash;
		  animation-duration: 0.5s;
		  animation-fill-mode: forwards;
		}

		#frm {
			position: fixed;
			left: 50%
			z-index: -1;
		}
		#datajson
		{
			z-index: -2;
		}
	</style>
</head>
<body>
	<div style="position: fixed;top: 0%;left: 0%;width:100%;height:100%" id="datajson"></div>

	<div id="frm" style="position: fixed;left: 40%;top: 40%;visibility: hidden;">

		<?php if(!empty($message)): ?>
			<p><?= $message ?></p>
		<?php endif; ?>
		<h1 style="font-size: 333%;">Login</h1>

		<form action="login.php" method="POST"><br />

			<input type="text" placeholder="Enter your email" name="email" style="width: 150%;font-size: 100%;border: 2px solid #000;" onkeydown="playc_s()" /><br /><br />
			<input type="password" placeholder="and password" name="password" style="width: 150%;font-size: 100%;border: 2px solid #000;"onkeydown="playc_s()" /><br /><br />

			<input id="i_submit"type="submit" style="background-color: #000;border: none;color: white;padding: 11.5px 24px;text-align: center;font-size: 12px;" onmouseenter="playc_s()" onclick="playc_s()" onmouseleave="playc_s()"/>
			<input id="i_reset"type="reset" style="background-color: #000;border: none;color: white;padding: 11.5px 24px;text-align: center;font-size: 12px;" onmouseenter="playc_s()" onclick="playc_s()" onmouseleave="playc_s()"/>
		</form>
		<br /><span><h1 style="font-size: 200%">or <a href="register.php">register here</a></h1></span>
	</div>

	<div id="loginbox" style="position: fixed; top: 1%; right: 2%;line-height:100%;font-size:200%;text-align: right;visibility: hidden;">
		<a href="index.php">
			<input type="button" value="回主頁" style="background-color: #000;border: none;color: white;padding: 11.5px 24px;text-align: center;font-size: 12px;" onmouseenter="playc_s()" onclick="playc_s()" onmouseleave="playc_s()"/>
		</a>
	</div>

	<div id="leftborder" onmouseenter="plays_s()" onmouseleave="plays_s()">
		<div class="leftborder-white">
			<a href="#"><div id="vertical8"></div></a>
		</div>
	</div>

	<div id="rightborder" onmouseenter="plays_s()" onmouseleave="plays_s()">
		<div class="rightborder-white">
			<div id="vertical9"></div>
		</div>
	</div>

	<audio id="c_sound">
		<source src="audio/nier.mp3" type="audio/mp3" />
	</audio>

	<audio id="s_sound">
		<source src="audio/nier2.mp3" type="audio/mp3" />
	</audio>

	<!-- particles.js container -->
	<div id="particles-js" style="visibility: hidden;"></div>

	<script>
		setTimeout(function(){
			var pe = document.getElementById('particles-js');
			pe.style.visibility = "visible";
		}, 1250)
	</script>
	
	<script src="js/particles.js"></script>
	<script src="js/app.js"></script>
	<script src="js/_86.js"></script>
	<script src="js/lg.js"></script>
	<script src="js/sound.js"></script>
</body>
</html>
