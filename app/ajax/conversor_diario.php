<?php
	// print_r($_GET["data"]);
	// exit();
	// $myFile = "general.json";
	$myFile = 'uploads/importar_diario/data.acd';
	$fh = fopen($myFile, 'r') or die("can't open file");
	// $string = '';
	$count_linha = 0;
	// $linha_real = 1;
	while (!feof($fh)) {
		$texto = fgets($fh);
		// echo $texto.'<br>';

		$linha[] = $texto;
		$count_linha++;
		if ($count_linha == 12) {
			$final_array[] = array(
				'lancamento' => $linha[0],
		        'anotacao' => $linha[1],
		        'data' => $linha[2],
		        'doc_1' => $linha[3],
		        'doc_2' => $linha[4],
		        'debito' => $linha[5],
		        'credito' => $linha[6],
		        'conta' => $linha[7],
		        'titulo' => $linha[8],
		        'conceito' => $linha[9],
		        'subconta' => $linha[10],
		        'mais_1' => $linha[11]
				);
			// $linha = array_values($linha);
			unset($linha);
			$count_linha = 0;
		}
	}
	fclose($fh);
	$response['rows'] = $final_array;

	$fp = fopen('uploads\importar_diario\data.json', 'w');
	fwrite($fp, json_encode($response));
	fclose($fp);













