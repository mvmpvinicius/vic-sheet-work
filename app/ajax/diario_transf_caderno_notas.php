<?php
	$fh = fopen("/xampp/htdocs/www/Vicente/app/ajax/uploads/caderno_notas/" . $_POST['nome'] . ".json", "w") or die("can't open file");
	$stringData = $_POST['data'];

	// $stringData = '[';
	// $total_linhas = sizeof($_POST['transf_caderno_notas']);
	// $linha = 0;
	// print_r($_POST);
	// foreach($_POST['transf_caderno_notas'] as $val_1){
	// 	$stringData .= '[';
	// 	$count = 0;
	// 	$linha++;
	// 	foreach ($val_1 as $val_2) {
	// 		$count++;
	// 		$val_2 = str_replace('"', '', $val_2);
	// 		$val_2 = preg_replace( "/\r|\n/", "", $val_2);
	// 		if ($count == 12) {
	// 			$count = 0;
	// 			$stringData .= '"' . $val_2 . '"';
	// 		} else {
	// 			$stringData .= '"' . $val_2 . '",';
	// 		}
	// 	}
	// 	if ($linha == $total_linhas) {
	// 		$stringData .= ']';
	// 	} else {
	// 		$stringData .= '],';
	// 	}
	// }
	// $stringData .= ']';


	fwrite($fh, $stringData);
	fclose($fh);