<?php

// A list of permitted file extensions
$allowed = array('acd');

if(isset($_FILES['upl_importar_diario']) && $_FILES['upl_importar_diario']['error'] == 0){

	$extension = pathinfo($_FILES['upl_importar_diario']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}
	// if(move_uploaded_file($_FILES['upl_importar_diario']['tmp_name'], 'uploads/importar_diario/' . $_FILES['upl_importar_diario']['name'])){
	if(move_uploaded_file($_FILES['upl_importar_diario']['tmp_name'], 'uploads/importar_diario/data.acd')){
		echo '{"status":"success"}';
		exit;
	}
}

echo '{"status":"error"}';
exit;