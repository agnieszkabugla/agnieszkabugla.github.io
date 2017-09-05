var tab =[
   {
      name:"Turtwig",
      picture:"https://cdn.bulbagarden.net/upload/5/5c/387Turtwig.png",
      description:"It is a small, light green, quadruped Pokémon resembling a turtle or tortoise.",
      answer:"Pokemon"
   }, 
   {
      name:"Lairon",
      picture:"https://cdn.bulbagarden.net/upload/b/bf/305Lairon.png",
      description:"It is a stocky, armored, Pokémon with four short legs.",
      answer:"Pokemon"
   },
   {
      name:"Verlaat",
      picture:"https://upload.wikimedia.org/wikipedia/commons/5/56/Netherlands%2C_Nieuwkoop%2C_Woerdense_Verlaat_%282%29.JPG",
      description:"It is a village in the Dutch province of South Holland.",
      answer:"Village"
   }, 
   {
      name:"Mesprit",
      picture:"https://cdn.bulbagarden.net/upload/4/40/481Mesprit.png",
      description:"It is  a small, gray, fairy-like Pokémon. It has two tails that each have a red jewel encrusted in them.",
      answer:"Pokemon"
   }, 
   {
      name:"Tiggelt",
      picture:"https://upload.wikimedia.org/wikipedia/commons/f/fe/P10-NB-positiekaart2-gemlabels.png",
      description:"It is a village in the Dutch province of North Brabant.",
      answer:"Village"
   }, 
   {
      name:"Wapse",
      picture:"https://upload.wikimedia.org/wikipedia/commons/5/57/P03-DR-positiekaart2-gemlabels.png",
      description:"It is a town in the Dutch province of Drenthe. ",
      answer:"Village"
   }, 
   {
      name:"Rotom",
      picture:"https://cdn.bulbagarden.net/upload/c/c5/479Rotom.png",
      description:"It is a dual-type Electric/Ghost Pokémon introduced in Generation IV",
      answer:"Pokemon"
   },  
   {
      name:"Breloom",
      picture:"https://cdn.bulbagarden.net/upload/d/de/286Breloom.png",
      description:"It is a bipedal, mushroom-like Pokémon with some kangaroo-like qualities. ",
      answer:"Pokemon"
   },
   {
      name:"Wouw",
      picture:"https://upload.wikimedia.org/wikipedia/commons/6/6d/St_Lambertus%2C_Wouw_1.JPG",
      description:"It is a village in the southern Netherlands. It is located in North Brabant, between the cities Roosendaal and Bergen op Zoom, close to the border with Belgium.",
      answer:"Village"
   }, 
   {
      name:"Herdier",
      picture:"https://cdn.bulbagarden.net/upload/9/96/507Herdier.png",
      description:"Herdier is a light brown, canine Pokémon with a short snout.",
      answer:"Pokemon"
   },
   {
      name:"Oploo",
      picture:"https://upload.wikimedia.org/wikipedia/commons/b/bb/1865_Oploo.png",
      description:"It is a village in the Dutch province of North Brabant. It is located in the municipality of St. Anthonis.",
      answer:"Village"
   }, 
   {
      name:"Sunkern",
      picture:"https://cdn.bulbagarden.net/upload/9/95/191Sunkern.png",
      description:"Sunkern is a mostly yellow, seed-like Pokémon with a small sprout growing out of its top.",
      answer:"Pokemon"
   },
   {
      name:"Langelo",
      picture:"https://upload.wikimedia.org/wikipedia/commons/6/6b/Schoolbrink_Langelo.jpg",
      description:"Langelo is a village of about 230 residents located in the Netherlands, part of the Noordenveld municipality in Drenthe.",
      answer:"Village"
   },
   {
      name:"Valom",
      picture:"https://upload.wikimedia.org/wikipedia/commons/0/0e/Valom_-_panorama.jpg",
      description:"It is a village, in the province of Groningen.",
      answer:"Village"
   },
   {
      name:"Renswoude",
      picture:"https://upload.wikimedia.org/wikipedia/commons/e/ea/Renswoude_kasteel.jpg",
      description:"It is a municipality and a town in the central Netherlands, in the province of Utrecht.",
      answer:"Village"
   },
   {
      name:"Litwick",
      picture:"https://cdn.bulbagarden.net/upload/8/8e/607Litwick.png",
      description:"Litwick is a small, candle-like Pokémon with a purple flame atop its head, which is powered by life energy that it absorbs.",
      answer:"Pokemon"
   },
   {
      name:"Kopaf",
      picture:"https://upload.wikimedia.org/wikipedia/commons/2/2b/P01-GR-positiekaart2-gemlabels.png",
      description:"It is a village in the Dutch province of Groningen.",
      answer:"Village"
   }, 
   {
      name:"Ledian",
      picture:"https://cdn.bulbagarden.net/upload/5/5b/166Ledian.png",
      description:"It is dual-type Bug/Flying Pokémon introduced in Generation II.",
      answer:"Pokemon"
   },
   {
      name:"Heatmor",
      picture:"https://cdn.bulbagarden.net/upload/b/b0/631Heatmor.png",
      description:"Heatmor is a bipedal, anteater-like Pokémon. It has a beige face while the rest of its fur is red with yellow stripes sharing appearance of molten lava.",
      answer:"Pokemon"
   },
   {
      name:"Nunspeet",
      picture:"https://upload.wikimedia.org/wikipedia/commons/3/3b/Zicht_op_Nunspeet1.jpg",
      description:"It is a municipality and town in the central Netherlands.",
      answer:"Village"
   }
];
var nTab = []; 
var newQuestion = document.getElementById("newQuestion");
var newQuestionAnswer = document.getElementById("newQuestionAnswer"); 
var answer = document.getElementById("answer"); 
var img = document.querySelector("img"); 
var description = document.querySelector("p"); 
var title = document.querySelector("h1"); 
var clickedPokemon = document.getElementById("clickedPokemon");
var clickedVillage = document.getElementById("clickedVillage"); 
var spanQuestion = document.querySelector(".display1");
var spanAnswer = document.querySelector(".display2"); 
var spanBtn = document.querySelector(".btn"); 
var wellWrong = document.querySelector("#wellWrong"); ;
var nextQuestion = document.querySelector("#nextQuestion");
var currentQuestionIndex = 0; 
var randomQ; 
var score = 0; 
var num = tab.length;

function randomQuestion() {
	for(var i = 0; i < 11; i++) {
		randomQ = Math.floor(Math.random() * num);
		nTab.push(tab[randomQ]); 
		tab.splice(randomQ, 1);
		num--; 
	} 
};

randomQuestion(); 

function fillUp(index) {
	newQuestion.textContent = nTab[index].name; 
	newQuestionAnswer.textContent = nTab[index].name; 
	answer.textContent = nTab[index].answer; 
	img.setAttribute("src", nTab[index].picture); 
	description.textContent = nTab[index].description; 
};

fillUp(currentQuestionIndex);

function check(answer) {
	if(answer === nTab[currentQuestionIndex].answer) { 
		wellWrong.textContent = "Very well"; 
		spanAnswer.classList.toggle("display2");
		spanQuestion.classList.toggle("display2");
		spanBtn.classList.toggle("display2"); 
		spanAnswer.style.color = "#f9dc5c"; 
		score++;  
		console.log("punkty " + score); 
	} else {
		wellWrong.textContent = "Wrong";
		spanAnswer.classList.toggle("display2");
		spanQuestion.classList.toggle("display2");
		spanBtn.classList.toggle("display2"); 
		spanAnswer.style.color = "#e84855";    
	}
};

clickedVillage.addEventListener("click", function() {
	check("Village"); 
});

clickedPokemon.addEventListener("click", function() {
	check("Pokemon");
});

nextQuestion.addEventListener("click", function() {
	spanAnswer.classList.toggle("display2"); 
	spanQuestion.classList.toggle("display2");
	spanBtn.classList.toggle("display2"); 
	if(currentQuestionIndex === 10) {
		title.textContent = "Thank you. Your score is " + score + " out of " + currentQuestionIndex;  
		spanQuestion.classList.toggle("display2");
		spanBtn.classList.toggle("display2");  
	} else {
		currentQuestionIndex++;
		console.log("pyt" + currentQuestionIndex);  
		fillUp(currentQuestionIndex); 
	}	
});
