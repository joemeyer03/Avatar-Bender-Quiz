function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var question11 = document.quiz.question11.value;
	var question12 = document.quiz.question12.value;
	var question13 = document.quiz.question13.value;
	var question14 = document.quiz.question14.value;
	var question15 = document.quiz.question15.value;
	var question16 = document.quiz.question16.value;
	var question17 = document.quiz.question17.value;
	var question18 = document.quiz.question18.value;

	var air = 0;
	var water = 0;
	var fire = 0;
	var earth = 0;


	if (question1 == "Easygoing") {
		air += 1;
		fire -= 1;
	}
	if (question1 == "Confident") {
		earth += 1;
	}
	if (question1 == "Passionate") {
		fire += 1;
	}
	if (question1 == "Calm") {
		air += 1;
		fire -= 1;
		earth -= 1;
	}

	if (question2 == "Chill") {
		air += 1;
		fire -= 1;
	}	
	if (question2 == "Date") {
		water += 1;
		fire += 1;
	}	
	if (question2 == "Work") {
		fire += 1;
		air -= 1;
	}	
	if (question2 == "Hike") {
		earth += 1;
	}	

	if (question3 == "Understanding") {
		air += 1;
	}	
	if (question3 == "Compassion") {
		water += 1;
		air += 1;
	}	
	if (question3 == "Social") {
		earth += 1;
		air -= 1;
	}	
	if (question3 == "Loyal") {
		fire += 1;
	}		

	if (question4 == "Fire") {
		earth += 1;
		water += 1;
		fire -= 1;
	}
	if (question4 == "Water"){
		fire += 1;
		water -= 1;
	}
	if (question4 == "Air"){
		earth += 1;
		air -= 1;
	}
	if (question4 == "Earth") {
		air += 1; 
		earth -= 1;
	}
	if (question4 == "Lava"){
		earth -= 1;
		fire -= 1;
	}
	if (question4 == "Metal"){
		fire += 1;
		earth -= 1;
	}

	if (question5 == "Offense") {
		fire += 1;
		earth += .5;
	}
	if (question5 == "Defense"){
		air += 1;
		earth += .5;
	}

	if (question6 == "Summer") {
		fire += 1;
		water -= 1;
	}
	if (question6 == "Winter") {
		water += 1;
		fire -= 1;
	}
	if (question6 == "Spring") {
		earth += 1;
	}
	if (question6 == "Fall") {
		air += 1;
	}

	if (question7 == "Overwhelm") {
		fire += 1;
		air -= 1;
	}
	if (question7 == "Calm") {
		air += 1;
		fire -= 1;
	}
	if (question7 == "Push") {
		earth += 1;
	}
	if (question7 == "Fun") {
		water += 1;
	}

	if (question8 == "Pop") {
		earth += 1;
		water += 1;
	}
	if (question8 == "Rap") {
		fire += 1;
	}
	if (question8 == "Country") {
		earth -= 1;
		water -= 1;
		fire -= 1;
		air -= 1;
	}
	if (question8 == "Jazz") {
		air += 1;
		water += 1;
	}
	if (question8 == "Rock") {
		earth += 1;
		fire += 1;
	}
	if (question8 == "LoFi") {
		air += 1;
	}
	if (question8 == "EDM") {
		fire += 1;
	}

	if (question9 == "CEO") {
		fire += 1;
		air -= 1;
	}
	if (question9 == "Doctor") {
		water += 1;
	}
	if (question9 == "Architect") {
		earth += 1;
	}
	if (question9 == "None") {
		air += 1;
	}

	if (question10 == "Cop") {
		fire += 1;
	}
	if (question10 == "Fireman") {
		water += 1;
	}
	if (question10 == "Astronaut") {
		air += 1;
	}
	if (question10 == "Lawyer") {
		earth += 1;
	}

	if (question11 == "Alaska") {
		water += 1;
		fire -= 1;
	}
	if (question11 == "Caribbean") {
		fire += 1;
		air += 1;
	}
	if (question11 == "China") {
		earth += 1;
	}
	if (question11 == "Alps") {
		air += 1;
	}

	if (question12 == "Fish") {
		air += 1;
	}
	if (question12 == "Dog") {
		water += 1;
	}
	if (question12 == "Cat") {
		fire += 1; 
		earth += 1;
	}
	if (question12 == "Hamsters") {
		earth += 1;
	}

	if (question13 == "Sushi") {
		water += 1;
	}
	if (question13 == "Salad") {
		air += 1;
	}
	if (question13 == "Pasta") {
		earth += 1;
	}
	if (question13 == "Steak") {
		fire += 1;
	}

	if (question14 == "Don't") {
		air += 1;
	}
	if (question14 == "Varies") {
		water += 1;
		earth += 1;
	}
	if (question14 == "Everything") {
		fire += 1;
	}

	if (question15 == "Art") {
		air += 1;
	}
	if (question15 == "Math") {
		fire += 1;
	}
	if (question15 == "English") {
		water += 1;
	}
	if (question15 == "History") {
		earth += 1;
	}
	if (question15 == "Science") {
		fire += 1;
	}

	if (question16 == "Full") {
		air += 1;
		water += 1;
	}
	if (question16 == "Empty") {
		fire += 1;
	}

	if (question17 == "Far Left") {
		air += 2;
		fire -= 2;
		water += 1;
		earth -= 1;
	}
	if (question17 == "Left"){
		air += 1;
		fire -= 1; 
		water += 2;
	}
	if (question17 == "Center") {
		air -= 2;
		fire -= 2;
	}
	if (question17 == "Right") {
		air -= 1;
		fire += 1;
		earth += 2;
	}
	if (question17 == "Far Right") {
		air -= 2;
		fire += 2;
		water -= 1;
		earth += 1;
	}

	if (question18 == "Football") {
		fire += 1;
	}
	if (question18 == "Soccer") {
		earth += 1;
	}
	if (question18 == "Ultimate Frisbee") {
		air += 1;
	}
	if (question18 == "Basketball") {
		water += 1;
	}
	
	airPercent = air / 20;
	waterPercent = water / 19;
	firePercent = fire / 20;
	earthPercent = earth / 16.5;

	var bendingType = "";

	if (airPercent > waterPercent && airPercent > firePercent && airPercent > earthPercent) {
		bendingType = "Air Bender"
	}
	if (waterPercent > airPercent && waterPercent > firePercent && waterPercent > earthPercent) {
		bendingType = "Water Bender"
	}
	if (firePercent > waterPercent && firePercent > airPercent && firePercent > earthPercent) {
		bendingType = "Fire Bender"
	}
	if (earthPercent > waterPercent && earthPercent > firePercent && earthPercent > airPercent) {
		bendingType = "Earth Bender"
	}
	if (earthPercent > .8) {
		bendingType = "Metal Bender";
	}
	if (firePercent > airPercent && firePercent > waterPercent) {
		if (earthPercent > airPercent && earthPercent > waterPercent) {
			if ((earthPercent - firePercent) < .15){
				bendingType = "Lava Bender";
			}
		}
	}

	console.log("Air Bender Percent: " + airPercent);
	console.log("Water Bender Percent: " + waterPercent);
	console.log("Fire Bender Percent: " + firePercent);
	console.log("Earth Bender Percent: " + earthPercent);

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You are a " + bendingType + "!";
}
