<?php

// A list of permitted file extensions
$allowed = array('png', 'jpg', 'gif', 'zip', 'pdf');

if(isset($_FILES['upl_manual_controlo_interno']) && $_FILES['upl_manual_controlo_interno']['error'] == 0){

	$extension = pathinfo($_FILES['upl_manual_controlo_interno']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl_manual_controlo_interno']['tmp_name'], 'uploads/manual_controlo_interno/'.$_FILES['upl_manual_controlo_interno']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

echo '{"status":"error"}';
exit;