
	var arrChoices = ["solar system", "exo-planets", "nebulae", "star clusters", "x-ray pulsars"];// arrays for the choices //
	var compWord = arrChoices[Math.floor(Math.random() * arrChoices.length)].toLowerCase();//random
	var blankWord = [];	// variable that will hold the BLANKS//
	var userInput = "";//keys press from the keyboard
	var lettersUsed = "";//store all used letters - right/wrong
	var guessesLeft = 10;
	var wins = 0;//just a counter for calling win();

	//loop that draws blanks//
	for (var i = 0; i <= compWord.length; i++) {
			blankWord.push("__");
			
							
		    //display the blanks to the user//
		    document.getElementById("blankSpaces").innerHTML = blankWord.join(" ");
		    
	}
		    var space = compWord.indexOf(" ");
		    var dash = compWord.indexOf("-");
		 	blankWord.splice(space,0,"&nbsp &nbsp");
		 	blankWord.splice(dash,1,"-");
		 	blankWord.pop("__");//pop spaces - for space
		 	blankWord.pop("__");//pop spaces - for dash
		    document.getElementById("blankSpaces").innerHTML = blankWord.join(" ");

			console.log(compWord);
			console.log(compWord.length);
			console.log(blankWord);			


									

	function checker() {	
	    	if ((arrChoices[0]) && (arrChoices[1]) && (arrChoices[3])) {
	    		if (wins === (compWord.length-1)) {
	    		 // nothing
	    		}
	    	} 
	    	if (arrChoices[2]) {
	    		if (wins === (compWord.length-1)) {
	    		//nothing
	    		} 
	    	}
	    	if (arrChoices[4]) {
	    		if (wins === (compWord.length-2)) {
	    		//nothing
	    		} 
	    	}
	    }

	function lose() {//diplay lose: createElement that has text//
			
			var para = document.createElement("h2");
			var t = document.createTextNode("GAME OVER!!!");
			para.setAttribute("id", "gameOver");//css style = red
			// para.appendChild(t);
			document.getElementById("displayWin").appendChild(para);
			var parent = document.getElementById("div1");
			var child = document.getElementById("removeLater");
			parent.removeChild(child);//remove the child element (not sure if ill keep this - but ill experiment: w3 schools sample) 
			document.getElementById("tryAgain").innerHTML = "Try Again :)";


	}

	function win () {
		
		var cvb = document.getElementById("displayWin").innerHTML = "YOU'RE AWESOME!!!";
		document.getElementById("displayWin").style.Color = "green";//here style not in css (experiment)

	}

	function disable(){//disables keyboard onkey press//
				document.onkeypress = function (a) {//not sure why "e"
				return false;
				}
			}
				function enable(){
					document.onkeypress = function (a){
				return true;
				}
			}


			//keyboard is pressed: 
	document.onkeypress = function(event) {
			var inThere = false;//setting up boolean outside for-loops

	    	// Determines which key was pressed.
	    	userInput = event.key.toLowerCase();//makes sure all cases are lowered to match with possible capitalized letters pressed
		    lettersUsed += " " + userInput;//stores all letters pressed - using global variable
		    document.getElementById("userInput").innerHTML = lettersUsed;//store values in it and display to HTML
		    console.log(userInput);//checking...

		    //loop to determin if the correct guesses are being typed again - and prevent it from being pushed again.
		    for (var i = 0; i <= blankWord.length; i++) {
		    	 var bwLetters = blankWord[i];
		    	
		    	
		    	if (userInput === bwLetters) {  
			        alert("You pressed " + userInput + " already! Try again!");
			        wins = wins -1;
			     } 
			}

		
			//loop that does the pushing/replacing blanks with letters at their corresponding index							
		   for (var i = 0; i <= compWord.length; i++) {

				if (userInput === compWord[i]){
					   	
		    		blankWord.splice(i,1,userInput); // replace blanks at index "i" with userInput 
		    		document.getElementById("blankSpaces").innerHTML = blankWord.join(" "); //join with space
		    		inThere = true; //allows to end the loop and declare another "if statement" for "false" conditionals
	    		console.log(true);
	    		} 
	    	} 

	       if (inThere === false) {//false conditional allows to decrement global variable
	    	  guessesLeft--;
	    	  var rightId = document.getElementById("correctGuesses").innerHTML = "You have " + guessesLeft + " guesses left.";
	    	} else {
	    		wins++;
	    		
	    	}

				
				// var count = (blankWord.match(/_/g) || []).length;
				// console.log(count);
	    	
				
		    	//code for matching correctGuesses to the BLANKS//

	   //  		if (userInput === compWord[0]) {
				// console.log(i);
	   //  		wins++;
	   //  		blankWord.splice(0,1,userInput); //letter
	   //  		document.getElementById("blankSpaces").innerHTML = blankWord.join(" ");;
	   //  	} 	 if (userInput === compWord[1]){
				// console.log(i);	    	
	   //  		wins++;
	   //  		blankWord.splice(1,1,userInput); //letter
	   //  		document.getElementById("blankSpaces").innerHTML = blankWord.join(" ");;
	   //  	} 	 if (userInput === compWord[2]){
				// console.log(i);
	   //  		wins++;
	   //  		blankWord.splice(2,1,userInput);//letter
	   //  		document.getElementById("blankSpaces").innerHTML = blankWord.join(" ");;
	   //  	}	 if (userInput === compWord[3]){
				// console.log(i);
	   //  		wins++;
	   //  		blankWord.splice(3,1,userInput);//letter
	   //  		document.getElementById("blankSpaces").innerHTML = blankWord.join(" ");;
	   //  	}	 if (userInput === compWord[4]){
				// console.log(i);
	   //  		wins++;
	   //  		blankWord.splice(4,1,userInput);//letter
	   //  		document.getElementById("blankSpaces").innerHTML = blankWord.join(" ");;
	   //  	}	 if (userInput === compWord[5]){
				// console.log(i);
	   //  		wins++;
	   //  		blankWord.splice(5,1,userInput);//letter
	   //  		document.getElementById("blankSpaces").innerHTML = blankWord.join(" ");;
	   //  	}    if (userInput === compWord[6]){
				// console.log(i);
	   //  		wins++;
	   //  		blankWord.splice(6,1,userInput);//letter
	   //  		document.getElementById("blankSpaces").innerHTML = blankWord.join(" ");;
	   //  	}	 if (userInput === compWord[7]){
				// console.log(i);
	   //  		wins++;
	   //  		blankWord.splice(7,1,userInput);//letter
	   //  		document.getElementById("blankSpaces").innerHTML = blankWord.join(" ");;
	   //  	}	 if (userInput === compWord[8]){
				// console.log(i);
	   //  		wins++;
	   //  		blankWord.splice(8,1,userInput);//letter
	   //  		document.getElementById("blankSpaces").innerHTML = blankWord.join(" ");;
	   //  	}	 if (userInput === compWord[9]){
				// console.log(i);
	   //  		wins++;
	   //  		blankWord.splice(9,1,userInput);//letter
	   //  		document.getElementById("blankSpaces").innerHTML = blankWord.join(" ");;
	   //  	}	 if (userInput === compWord[10]){
				// console.log(i);
	   //  		wins++;
	   //  		blankWord.splice(10,1,userInput);//letter
	   //  		document.getElementById("blankSpaces").innerHTML = blankWord.join(" ");;
	   //  	}	 if (userInput === compWord[11]){
				// console.log(i);
	   //  		wins++;
	   //  		blankWord.splice(11,1,userInput);//letter
	   //  		document.getElementById("blankSpaces").innerHTML = blankWord.join(" ");;
	   //  	}	 if (userInput === compWord[12]){
				// console.log(i);
	   //  		wins++;
	   //  		blankWord.splice(12,1,userInput);//letter
	   //  		document.getElementById("blankSpaces").innerHTML = blankWord.join(" ");;
	   //  	}	 if (userInput === compWord[13]){
				// console.log(i);
	   //  		wins++;
	   //  		blankWord.splice(13,1,userInput);//letter
	   //  		document.getElementById("blankSpaces").innerHTML = blankWord.join(" ");;
	   //  	}	




	    	//these blocks of code will change the color for "tries"	
	    	
	    	if ((guessesLeft < 8) && (guessesLeft >5)) {
				document.getElementById("removeLater").style.color = "orange";

				  }
			if((guessesLeft < 4) && (guessesLeft > 2)){
				document.getElementById("removeLater").style.color = "#F9D04A";
				  }
			if(guessesLeft < 2){
				document.getElementById("removeLater").style.color = "red";
				  }

	   		//user lost

	    	if (guessesLeft === 0) {
	    		console.log("user lost!");
	    		disable();
	    		lose();

	    	}

	
	    		checker();
	    		console.log("wins :" + wins);
	    		console.log("word length: " + compWord.length);
	    		console.log("blanks: " + blankWord.length);
	    		if (wins === blankWord.length) {
	    			win();
	    		}

				
				var blanks = blankWord.toString();
				var count = (blanks.match(/__/g) || []).length;
				console.log(count);

				if (count === 0) {
					win();
					disable();
				}




		}

		






