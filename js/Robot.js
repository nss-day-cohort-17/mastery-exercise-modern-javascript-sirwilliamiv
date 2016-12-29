
var RoboDome = {}
var one = ""
var two = ""
var player1Type=""
var player2Type=""
// Robot prototype
function Robot () {
    this.type = 'Robot';
    this.robotName = name || "Bot with no name";
    this.damage = 90;
    this.health = 85;

};

// 3 classes of robot = Drone, Bipedal and ATV



///Drone
function Drone (name) {
   this.type = 'Drone';
   this.name = name;
   this.flight = true;

   // this.strength = this.strength + 25;
};

Drone.prototype = new Robot();



RoboDome.Bop = function(){
  this.weapon ="Machine Gun";
  this.health =  Math.floor(Math.random() * 40 + 50) - 15;
  this.damage = 90;

}
RoboDome.Bip = function() {
  this.weapon ="Missles"
  this.health =  Math.floor(Math.random() * 40 + 50) - 13;
  this.damage = 97;
}

RoboDome.Bop.prototype = new Drone();
RoboDome.Bip.prototype = new Drone();
// var Bip = new Drone();




///Bipedal
function Bipedal (name) {
   this.type = 'Bipedal';
   this.name = name;
};
Bipedal.prototype = new Robot();

RoboDome.Tina = function() {
   this.weapon = "Many, Many Slaps to the Face"
   this.health = this.health + 15;
   this.damage = this.damage + 30;
}

RoboDome.Tim = function() {
  this.weapon = "Sarcasm"
  this.health = this.health + 14;
  this.damage = this.damage + 30;
}
RoboDome.Tina.prototype = new Bipedal();
RoboDome.Tim.prototype = new Bipedal();

///ATV
function ATV (name) {
   this.type = 'ATV';
   this.name = name;

};

ATV.prototype = new Robot();


RoboDome.Slug = function() {
    this.weapon = "Bombs"
    this.health =  Math.floor(Math.random() * 40 + 50) - 20;
    this.damage = this.damage + 40;
}
RoboDome.Zippy = function() {
    this.weapon = "Electricity"
    this.health =  Math.floor(Math.random() * 40 + 50) - 23;
    this.damage = this.damage + 50;
}
RoboDome.Slug.prototype = new ATV();
RoboDome.Zippy.prototype = new ATV();


//add hover photo preview of what robots look like from select menu

//====== test capturing user input================







// ============================Attack time
// var player1
// var player2

// display stats


//.each loops thru each object


// var atv = $.each(ATV, function( key, value ) {
//   alert( key + ": " + value );
// });

// var bip = $.each(Bipedal, function( key, value) {
//     alert( key+": " + value);
// });
// var dro = $.each(Drone, function( key, value) {
//     alert( key+": " + value);
// });

// console.log(atv, bip, dro)
