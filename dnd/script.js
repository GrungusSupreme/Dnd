/*Info*/

const character = {
  /*Stats*/
  name : "Grungus",
  race : "Half-Orc",
  class : "Barbarian",
  maxhp : 10,
  ac : 10,
  ab : 1,
  initiative : 2,

  str : 16,
  dex : 12,
  con : 14,
  int : 9,
  wis : 10,
  cha : 9,

  strmod : 3,
  dexmod : 1,
  conmod : 2,
  intmod : -1,
  wismod : 0,
  chamod : -1
}



/*Skills*/

let animalHandling = 1;
let acrobatics = 1;
let arcana = 0;
let athletics = 2;
let deception = 0;
let history = 0;
let insight = 0;
let intimidation = 2;
let investigation = 0;
let medicine = 1;
let nature = 1;
let perception = 1;
let performance = 0;
let persuasion = 0;
let religion = 0
let sleightOfHand = 0;
let stealth = 1;
let survival = 2;

/*
Acrobatics (Dex)
Animal Handling (Wis)
Arcana (Int)
Athletics (Str)
Deception (Cha)
History (Int)
Insight (Wis)
Intimidation (Cha)
Investigation (Int)
Medicine (Wis)
Nature (Int)
Perception (Wis)
Performance (Cha)
Persuasion (Cha)
Religion (Int)
Sleight of Hand (Dex)
Stealth (Dex)
Survival (Wis)
*/

/*Stuff*/

let inventory = ['Bedroll', 'Torch', 'Rope', 'Tent'];
let equipment = ['Greatsword', 'Leather Armor', 'Skull Helm'];
let weapons = ['Greatsword'];

/*Functions*/

function initiativeRoll(){
  var initiative = (Math.ceil(Math.random() * 20)) + character.initiative;
  document.getElementById("output").innerHTML = 'Roll for initiative! You got a ' + initiative;
  return initiative;

}

var roll = 0;

function roll20(){
  return (Math.ceil(Math.random() * 20))
}

function attackRoll() {
  roll = roll20();
return console.log('You strike with a ' + (roll+character.ab) )}

function attack(){
 return console.log('You deal ' + (Math.ceil(Math.random() * 8) +  character.strmod) + ' damage.');
 }
 
function acrobaticsCheck() {
  roll = roll20();
  document.getElementById("output").innerHTML = 'Parkour! par! huh Parkour!... you score a ' + (acrobatics +  character.dexmod + roll);
  return console.log('Parkour! par! huh Parkour!... you score a ' + (acrobatics +  character.dexmod + roll));
}

function animalHandleCheck() {
  roll = roll20();
  document.getElementById("output").innerHTML = 'Your inner spirit tries to calms the creature, you score a ' + (animalHandling +  character.wismod + roll);
  return console.log('Your inner spirit tries to calms the creature, you score a ' + (animalHandling +  character.wismod + roll));
}

function arcanaCheck() {
  roll = roll20();
  document.getElementById("output").innerHTML = 'You attempt to sense the magic, you score a ' + (arcana +  character.intmod + roll);
  return console.log('You attempt to sense the magic, you score a ' + (arcana +  character.intmod + roll));
}

function athleticsCheck() {
  roll = roll20();
  document.getElementById("output").innerHTML = 'You stretch a bit and then go for it, you score a ' + (athletics +  character.strmod + roll);
return console.log('You stretch a bit and then go for it, you score a ' + (athletics +  character.strmod + roll));
}

function deceptionCheck() {
  roll = roll20();
  document.getElementById("output").innerHTML = 'You flex your eyebrow musceles and try to gaslight them, you score a ' + (deception +  character.chamod + roll);
return console.log('You flex your eyebrow musceles and try to gaslight them, you score a ' + (deception +  character.chamod + roll));
}

function historyCheck() {
  roll = roll20();
  document.getElementById("output").innerHTML = 'You pop on your intellectual glassess and think back on the texts you have read on the subject, you score a ' + (history +  character.intmod + roll);
return console.log('You pop on your intellectual glassess and think back on the texts you have read on the subject, you score a ' + (history +  character.intmod + roll));
}

function insightCheck() {
  roll = roll20();
  document.getElementById("output").innerHTML = 'Vibe check, you score a ' + (insight +  character.wismod + roll);
return console.log('Vibe check, you score a ' + (insight +  character.wismod + roll));
}

function intimidationCheck() {
  roll = roll20();
  document.getElementById("output").innerHTML = 'You give a death stare, you score a ' + (intimidation +  character.chamod + roll);
return console.log('You give a death stare, you score a ' + (intimidation +  character.chamod + roll));
}

function investigationCheck() {
  roll = roll20();
  document.getElementById("output").innerHTML = 'Magnifying glass in hand you give a schollarly hmmmm, you score a ' + (investigation +  character.intmod + roll);
return console.log('Magnifying glass in hand you give a schollarly hmmmm, you score a ' + (investigation +  character.intmod + roll));
}

function medicineCheck() {
  roll = roll20();
  document.getElementById("output").innerHTML = 'Oh god theres blood everywhere, you score a ' + (medicine +  character.wismod + roll);
return console.log('Oh god theres blood everywhere, you score a ' + (medicine +  character.wismod + roll));
}

function natureCheck() {
  roll = roll20();
  document.getElementById("output").innerHTML = 'Hmm... what an interesting specimen, you score a ' + (nature +  character.intmod + roll);
return console.log('Hmm... what an interesting specimen, you score a ' + (nature +  character.intmod + roll));
}

function perceptionCheck() {
  roll = roll20();
  document.getElementById("output").innerHTML = 'Wait... wtf is tha?-, you score a ' + (perception +  character.wismod + roll);
return console.log('Wait... wtf is tha?-, you score a ' + (perception +  character.wismod + roll));
}

function performanceCheck() {
  roll = roll20();
  document.getElementById("output").innerHTML = 'You wind up to give em the ol razzle dazzle, you score a ' + (performance +  character.chamod + roll);
return console.log('You wind up to give em the ol razzle dazzle, you score a ' + (performance +  character.chamod + roll));
}

function persuasionCheck() {
  roll = roll20();
  document.getElementById("output").innerHTML = 'You feel a compromise bubbling up, oh lord, here it comes, you score a ' + (persuasion +  character.chamod + roll);
return console.log('You feel a compromise bubbling up, oh lord, here it comes, you score a ' + (persuasion +  character.chamod + roll));
}

function religionCheck() {
  roll = roll20();
  document.getElementById("output").innerHTML = 'You channel your divinites will and attempt to interpret it, you score a ' + (religion +  character.intmod + roll);
return console.log('You channel your divinites will and attempt to interpret it, you score a ' + (religion +  character.intmod + roll));
}

function sleightOfHandCheck() {
  roll = roll20();
  document.getElementById("output").innerHTML = 'You try to distract with one hand and act with the other, you score a ' + (sleightOfHand +  character.dexmod + roll);
return console.log('You try to distract with one hand and act with the other, you score a ' + (sleightOfHand +  character.dexmod + roll));
}

function stealthCheck() {
  roll = roll20();
  document.getElementById("output").innerHTML = 'You tiptoe with all your might, you score a ' + (stealth +  character.dexmod + roll);
return console.log('You tiptoe with all your might, you score a ' + (stealth +  character.dexmod + roll));
}

function survivalCheck() {
  roll = roll20();
  document.getElementById("output").innerHTML = 'This berry seems fine... yeah and this mushroom too... alright... okay... oh boy..., you score a ' + (survival +  character.wismod + roll);
return console.log('This berry seems fine... yeah and this mushroom too... alright... okay... oh boy..., you score a ' + (survival +  character.wismod + roll));
}

