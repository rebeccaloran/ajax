function grade(essay) {

// Mozilla

if (window.XMLHttpRequest) {

	xhr = new XMLHttpRequest();

}

// IE

else if (window.ActiveXObject) {

	xhr= new ActiveXObject("Microsoft.XMLHTTP");

}

essay=encodeURICompotent(essay);

xhr.open("POST","php/grade.php");

xhr.setRequestHeader(
	'Content-Type',

	'application/x-www-form-urlencoded; charset=UTF-8');
xhr.send(essay);

xhr.onreadystatechange=function() {

	if (xhr.readyState==4) {

	grade = xhr.responseText;

	alert ("Nice essay. Your grade is " + grade);

	}

   }
	return false;

}

