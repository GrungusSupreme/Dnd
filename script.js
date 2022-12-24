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

/*Functions

function initiativeRoll()*/

function roll20() {
    return (Math.ceil(Math.random() * 20))
}

function initiativeRoll() {
    document.getElementById("output").innerHTML = 'A twig snaps, you whip your head around and flare your nostrils, you score a ' + (roll20() + initiative)
return console.log('A twig snaps, you whip your head around and flare your nostrils, you score a ' + (roll20() + initiative))}

function attackRoll() {
    document.getElementById("output").innerHTML = 'You strike with a ' + (roll20() + ab)
return console.log('You strike with a ' + (roll20() + ab))}

function attack(){
    document.getElementById("output").innerHTML = 'You deal ' + (Math.ceil(Math.random() * 8) + strmod) + ' damage.';
 return console.log('You deal ' + (Math.ceil(Math.random() * 8) + strmod) + ' damage.');
 }
 
function acrobaticsCheck() {
    document.getElementById("output").innerHTML = 'Parkour! par! huh Parkour!... you score a ' + (acrobatics + dexmod + roll20());
return console.log('Parkour! par! huh Parkour!... you score a ' + (acrobatics + dexmod + roll20()));
}

function animalHandleCheck() {
    document.getElementById("output").innerHTML = 'Your inner spirit tries to calms the creature, you score a ' + (animalHandling + wismod + roll20())
return console.log('Your inner spirit tries to calms the creature, you score a ' + (animalHandling + wismod + roll20()));
}

function arcanaCheck() {
    document.getElementById("output").innerHTML = 'You attempt to sense the magic, you score a ' + (arcana + intmod + roll20())
return console.log('You attempt to sense the magic, you score a ' + (arcana + intmod + roll20()));
}

function athleticsCheck() {
    document.getElementById("output").innerHTML = 'You stretch a bit and then go for it, you score a ' + (athletics + strmod + roll20())
return console.log('You stretch a bit and then go for it, you score a ' + (athletics + strmod + roll20()));
}

function deceptionCheck() {
    document.getElementById("output").innerHTML = 'You flex your eyebrow musceles and try to gaslight them, you score a ' + (deception + chamod + roll20())
return console.log('You flex your eyebrow musceles and try to gaslight them, you score a ' + (deception + chamod + roll20()));
}

function historyCheck() {
    document.getElementById("output").innerHTML = 'You pop on your intellectual glassess and think back on the texts you have read on the subject, you score a ' + (history + intmod + roll20())
return console.log('You pop on your intellectual glassess and think back on the texts you have read on the subject, you score a ' + (history + intmod + roll20()));
}

function insightCheck() {
    document.getElementById("output").innerHTML = 'Vibe check, you score a ' + (insight + wismod + roll20())
return console.log('Vibe check, you score a ' + (insight + wismod + roll20()));
}

function intimidationCheck() {
    document.getElementById("output").innerHTML = 'You give a death stare, you score a ' + (intimidation + chamod + roll20())
return console.log('You give a death stare, you score a ' + (intimidation + chamod + roll20()));
}

function investigationCheck() {
    document.getElementById("output").innerHTML = 'Magnifying glass in hand you give a schollarly hmmmm, you score a ' + (investigation + intmod + roll20())
return console.log('Magnifying glass in hand you give a schollarly hmmmm, you score a ' + (investigation + intmod + roll20()));
}

function medicineCheck() {
    document.getElementById("output").innerHTML = 'Oh god theres blood everywhere, you score a ' + (medicine + wismod + roll20())
return console.log('Oh god theres blood everywhere, you score a ' + (medicine + wismod + roll20()));
}

function natureCheck() {
    document.getElementById("output").innerHTML = 'Hmm... what an interesting specimen, you score a ' + (nature + intmod + roll20())
return console.log('Hmm... what an interesting specimen, you score a ' + (nature + intmod + roll20()));
}

function perceptionCheck() {
    document.getElementById("output").innerHTML = 'Wait... wtf is tha?-, you score a ' + (perception + wismod + roll20())
return console.log('Wait... wtf is tha?-, you score a ' + (perception + wismod + roll20()));
}

function performanceCheck() {
    document.getElementById("output").innerHTML = 'You wind up to give em the ol razzle dazzle, you score a ' + (performance + chamod + roll20())
return console.log('You wind up to give em the ol razzle dazzle, you score a ' + (performance + chamod + roll20()));
}

function persuasionCheck() {
    document.getElementById("output").innerHTML = 'You feel a compromise bubbling up, oh lord, here it comes, you score a ' + (persuasion + chamod + roll20())
return console.log('You feel a compromise bubbling up, oh lord, here it comes, you score a ' + (persuasion + chamod + roll20()));
}

function religionCheck() {
    document.getElementById("output").innerHTML = 'You chanel your divinites will and attempt to interpret it, you score a ' + (religion + intmod + roll20())
return console.log('You chanel your divinites will and attempt to interpret it, you score a ' + (religion + intmod + roll20()));
}

function sleightOfHandCheck() {
    document.getElementById("output").innerHTML = 'You try to distract with one hand and act with the other, you score a ' + (sleightOfHand + dexmod + roll20())
return console.log('You try to distract with one hand and act with the other, you score a ' + (sleightOfHand + dexmod + roll20()));
}

function stealthCheck() {
    document.getElementById("output").innerHTML = 'You tiptoe with all your might, you score a ' + (stealth + dexmod + roll20())
return console.log('You tiptoe with all your might, you score a ' + (stealth + dexmod + roll20()));
}

function survivalCheck() {
    document.getElementById("output").innerHTML = 'This berry seems fine... yeah and this mushroom too... alright... okay... oh boy..., you score a ' + (survival + wismod + roll20())
return console.log('This berry seems fine... yeah and this mushroom too... alright... okay... oh boy..., you score a ' + (survival + wismod + roll20()));
}

/*Log*/