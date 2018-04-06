<?php
	// print_r($_GET);
	// exit();
	// $myFile = $_GET["nome_folha"] . ".json";
	$myFile = $_GET["arquivo"];
	$fh = fopen($myFile, 'w') or die("can't open file");
	$stringData = $_GET["data"];
	fwrite($fh, $stringData);
	fclose($fh);
?>