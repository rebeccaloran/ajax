<?php

function grade_essay($essay) {

	return strlen($essay);

}

$essay = urldecode(implode(file('php://input')));

$grade = grade_essay($essay);

echo $grade; 

?>
