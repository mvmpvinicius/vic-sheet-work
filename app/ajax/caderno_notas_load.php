<?php
	// print_r($_GET["data"]);
	// exit();
	// $myFile = "general.json";
	$myFile = $_GET["data"];
	$fh = fopen($myFile, 'r') or die("can't open file");
	$string = '';
	while (!feof($fh)) {
		$texto = fgets($fh);
		$string .= $texto;
	}
	fclose($fh);
	echo $string;
?>