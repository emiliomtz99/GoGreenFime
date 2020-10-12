function check(){
	var i;
	
	
	var question1 = document.quiz.pregunta1.value;
	var question2 = document.quiz.pregunta2.value;
	var question3 = document.quiz.pregunta3.value;
	var question4 = document.quiz.pregunta4.value;
	var question5 = document.quiz.pregunta5.value;
	var question6 = document.quiz.pregunta6.value;
	var question7 = document.quiz.pregunta7.value;
	var question8 = document.quiz.pregunta8.value;
	var question9 = document.quiz.pregunta9.value;
	var question10 = document.quiz.pregunta10.value;
	var question11 = document.quiz.pregunta11.value;
	

	correct=1;
	if(question1 == "1") { correct++; }
	if(question2 == "1") { correct++; }
	if(question3 == "1") { correct++; }
	if(question4 == "1") { correct++; }
	if(question5 == "1") { correct++; }
	if(question6 == "1") { correct++; }
	if(question7 == "1") { correct++; }
	if(question8 == "1") { correct++; }
	if(question9 == "1") { correct++; }
	if(question10 == "1") { correct++; }
	if(question11 == "1") { correct++; }

	


	var pictures = ["Imagenes/Result_1.gif", "Imagenes/Result_2.gif", "Imagenes/Result_3.gif"];
	var messages = ["¡Felicitaciones! Al parecer sabes mucho de reciclaje y lo que conlleva esta maravillosa actividad. Esperamos compartas tu conocimientos con los demás para  tener un mundo más limpio y verde. Go Green!", "Te hace falta dar una pequeñita estudiada, sin embargo, tienes los conocimientos suficientes para decir (con orgullo), que sabes lo que es el reciclaje y lo que conlleva esta maravillosa actividad. ¡Sigue así!", "¡Necesitas estudiar!, nunca es tarde para empezar."];
	var score;

	 
	if (correct > 0 && correct <= 3) {
		score = 2;
	}

	if (correct > 3 && correct <= 6) {
		score = 1;
	}

	if (correct > 6 && correct <= 11) {
		score = 0;
	}

	

	document.getElementById("resultado").style.visibility ="visible";
	window.location.assign("#resultado")
	document.getElementById("correctas").innerHTML = "Tienes " + correct + " correctas";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("picture").src = pictures[score];
	  
	  
	
}

