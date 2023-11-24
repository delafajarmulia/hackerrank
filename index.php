<?php
    function compareTriplets($a, $b) {
        $lenght = count($a);
        $pointA = $pointB = 0;
        $result = array();
        
        for($i = 0; $i < $lenght; $i++){
            if($a[$i] > $b[$i]){
                $pointA += 1;
            }else if ($a[$i] < $b[$i]){
                $pointB += 1;
            }else{
                0;
            }
        }
        
        $result[0] = $pointA;
        $result[1] = $pointB;
        
        return $result;
    }

    $a = array(3, 7, 1);
    $b = array(3, 9, 2);

    compareTriplets($a, $b);
?>