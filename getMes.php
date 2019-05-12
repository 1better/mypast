<?php 
	header('content-type:text/html ;charset=utf-8');

	$array = json_decode(file_get_contents('info/data.json'));

	$randomArray = array_rand($array,10);

	$newArray = array();

	for($i=0;$i<count($randomArray);$i++){
		$newArray[$i] = $array[$randomArray[$i]];
	}

	echo json_encode($newArray);

 ?>