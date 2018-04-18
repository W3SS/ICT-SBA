<?php
$server = 'localhost';
$username = 'xxx';
$password = 'xxx';
$database = 'accounts';

try{
	$conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
} catch(PDOException $e){
	die( "Connection failed: " . $e->getMessage());
}