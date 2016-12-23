

function Robot () {
    this.type = 'Robot';
    this.robotName = name || "Bot with no name";
    this.health = Math.floor(Math.random() * 40 + 50);
    this.strength = 90;

};

function Drone (name) {
   this.type = 'Drone';
   this.name = name;
   this.flight = true;
   this.health = this.health - 15;
   this.weapon = "Missles"
   this.strength = this.strength + 25;
};

Drone.prototype = new Robot();
var frank = new Drone();
var toby = new Drone();
// console.log(newDrone.weapon, newDrone.name, newDrone.strength, newDrone.health)


function Bipedal (name) {
   this.type = 'Bipedal';
   this.name = name;
   this.weapon = "Many, Many Slaps to the Face"
   this.health = this.health + 15;
   this.strength = this.strength + 30;

};

Bipedal.prototype = new Robot();

var bingo = new Bipedal();
var nicholas = new Bipedal();


function ATV (name) {
   this.type = 'ATV';
   this.name = name;
   this.weapon = "Bombs"
   this.health = this.health - 30;
   this.strength = this.strength + 50;
};

ATV.prototype = new Robot();

var activity = new ATV();
var slider = new ATV();

// console.log("this is the ATV: ", activity.name, activity.health)













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
