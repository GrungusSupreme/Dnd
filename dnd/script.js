/*Info*/

let name = "Grungus";
let race = "Half-Orc";
let clas = "Barbarian";

/*Stats*/

let hp = 10;
let ac = 10;
let ab = 1;
let initiative = 2;
let str = 16;
let dex = 12;
let con = 14;
let int = 9;
let wis = 10;
let cha = 9;

let strmod = 3;
let dexmod = 1;
let conmod = 2;
let intmod = -1;
let wismod = 0;
let chamod = -1;

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
let weapondmg = (Math.ceil(Math.random() * 8) + strmod);

/*Functions

function initiativeRoll()*/

function attackRoll() {
return console.log('You strike with a ' + (Math.ceil(Math.random() * 20) + ab))}

function attack(){
 return console.log('You deal ' + (weapondmg) + ' damage.');
 }
 
function acrobaticsCheck() {
  return console.log('Parkour! par! huh Parkour!... you score a ' + (acrobatics + dexmod + (Math.ceil(Math.random() * 20))));
}

function animalHandleCheck() {
  return console.log('Your inner spirit tries to calms the creature, you score a ' + (animalHandling + wismod + (Math.ceil(Math.random() * 20))));
}

function arcanaCheck() {
  return console.log('You attempt to sense the magic, you score a ' + (arcana + intmod + (Math.ceil(Math.random() * 20))));
}

function athleticsCheck() {
return console.log('You stretch a bit and then go for it, you score a ' + (athletics + strmod + (Math.ceil(Math.random() * 20))));
}

function deceptionCheck() {
return console.log('You flex your eyebrow musceles and try to gaslight them, you score a ' + (deception + chamod + (Math.ceil(Math.random() * 20))));
}

function historyCheck() {
return console.log('You pop on your intellectual glassess and think back on the texts you have read on the subject, you score a ' + (history + intmod + (Math.ceil(Math.random() * 20))));
}

function insightCheck() {
return console.log('Vibe check, you score a ' + (insight + wismod + (Math.ceil(Math.random() * 20))));
}

function intimidationCheck() {
return console.log('You give a death stare, you score a ' + (intimidation + chamod + (Math.ceil(Math.random() * 20))));
}

function investigationCheck() {
return console.log('Magnifying glass in hand you give a schollarly hmmmm, you score a ' + (investigation + intmod + (Math.ceil(Math.random() * 20))));
}

function medicineCheck() {
return console.log('Oh god theres blood everywhere, you score a ' + (medicine + wismod + (Math.ceil(Math.random() * 20))));
}

function natureCheck() {
return console.log('Hmm... what an interesting specimen, you score a ' + (nature + intmod + (Math.ceil(Math.random() * 20))));
}

function perceptionCheck() {
return console.log('Wait... wtf is tha?-, you score a ' + (perception + wismod + (Math.ceil(Math.random() * 20))));
}

function performanceCheck() {
return console.log('You wind up to give em the ol razzle dazzle, you score a ' + (performance + chamod + (Math.ceil(Math.random() * 20))));
}

function persuasionCheck() {
return console.log('You feel a compromise bubbling up, oh lord, here it comes, you score a ' + (persuasion + chamod + (Math.ceil(Math.random() * 20))));
}

function religionCheck() {
return console.log('You chanel your divinites will and attempt to interpret it, you score a ' + (religion + intmod + (Math.ceil(Math.random() * 20))));
}

function sleightOfHandCheck() {
return console.log('You try to distract with one hand and act with the other, you score a ' + (sleightOfHand + dexmod + (Math.ceil(Math.random() * 20))));
}

function stealthCheck() {
return console.log('You tiptoe with all your might, you score a ' + (stealth + dexmod + (Math.ceil(Math.random() * 20))));
}

function survivalCheck() {
return console.log('This berry seems fine... yeah and this mushroom too... alright... okay... oh boy..., you score a ' + (survival + wismod + (Math.ceil(Math.random() * 20))));
}

/*Log*/