<?php

// A list of permitted file extensions
$allowed = array('csv');

if(isset($_FILES['upl_importar_caderno_notas']) && $_FILES['upl_importar_caderno_notas']['error'] == 0){

	$extension = pathinfo($_FILES['upl_importar_caderno_notas']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl_importar_caderno_notas']['tmp_name'], 'uploads/' . $_FILES['upl_importar_caderno_notas']['name'])){
		echo '{"status":"success"}';

		$myFile = 'uploads/' . $_FILES['upl_importar_caderno_notas']['name'];
		$fh = fopen($myFile, 'r') or die("can't open file");

		$stringData = '[';
		while (!feof($fh)) {
			$texto = fgets($fh);
			print_r($texto.'<br>');
			$stringData .= '["';
			$stringData .= str_replace(',', '","', $texto);
			$stringData .= '"],';
		}
		$stringData = substr($stringData , 0, -1);
		$stringData .= ']';
		$stringData = preg_replace( '/\r|\n/', '', $stringData);

		fclose($fh);

		$fp = fopen('uploads/caderno_notas/' . $_FILES['upl_importar_caderno_notas']['name'] . '.json', 'w');
		fwrite($fp, $stringData);
		fclose($fp);

		exit;
	}
}

echo '{"status":"error"}';
exit;