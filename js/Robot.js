

function Robot () {
    this.type = 'Robot';
    this.flight = false;
    this.robotName = name || "Bot with no name";
    this.health = Math.floor(Math.random() * 40 + 50);
    this.strength = 90;

};

function Drone (name) {
   this.type = 'Drone';
   this.name = name;
   this.flight = true;
   this.weapon = "Missles"
};

Drone.prototype = new Robot();
var newDrone = new Drone("Bobby")
console.log(newDrone.weapon, newDrone.name, newDrone.strength, newDrone.health)


function Bipedal (name) {
   this.type = 'Bipedal';
   this.name = name;
   this.flight = false;
   this.weapon = "Many, Many Slaps to the Face"
};

Bipedal.prototype = new Robot();

var bingo = new Bipedal("Bibbity")

console.log(bingo.name + " will defeat you with " + bingo.weapon + ". Unless, you rip down his health, which is " + bingo.health)



function ATV (name) {
   this.type = 'ATV';
   this.name = name;
   this.flight = false;
   this.weapon = "Bombs"
};

ATV.prototype = new Robot();

var activity = new ATV("Arron");

console.log("this is the ATV: ", activity.name, activity.health)













// var BattleDome = BattleDome || {};
// BattleDome.fighters = {};



// BattleDome.fighters.robot = function(name) {
//   this.species = null;
//   this.class = null;
//   this.weapon = null;
//   this.flight = false;
//   this.robotName = name || "Bot with no name";
//   this.health = Math.floor(Math.random() * 40 + 50);
//   this.strength = 90;

// };




// BattleDome.fighters.drone = function() {
//   this.flight = true;
//   this.species = "Drone";
//   this.weapon = "Missles"


// };
// BattleDome.fighters.drone.prototype = new BattleDome.fighters.robot();

// console.log(drone.weapon)
// BattleDome.fighters.atv = function() {
//   this.species = "ATV";
//   this.weapon = "Machine Gun"

//   // this.allowedClasses = ["Warrior", "Berserker", "Valkyrie",];
// };
// BattleDome.fighters.atv.prototype = new BattleDome.fighters.robot();
// // ---------------------------------------------------------------------------
// bipedal.prototype = new robot();

// BattleDome.fighters.bipedal = function() {
//   this.species = "BiPedal";
//   this.weapon = "Power Punches"

//   // this.allowedClasses = ["Warrior", "Berserker", "Valkyrie",];
// };
// BattleDome.fighters.bipedal.prototype = new BattleDome.fighters.robot();


// console.log(BattleDome.fighters.bipedal.weapon)
