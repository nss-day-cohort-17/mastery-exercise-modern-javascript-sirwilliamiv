
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
  this.health =  Math.floor(Math.random() * 40 + 50);
  this.damage = Math.floor(Math.random() * 45 + 75);

}
RoboDome.Bip = function() {
  this.weapon ="Missles"
  this.health =  Math.floor(Math.random() * 40 + 50);
  this.damage = Math.floor(Math.random() * 45 + 65);
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
   this.health = Math.floor(Math.random() * 30 + 50);
   this.damage = Math.floor(Math.random() * 45 + 65);
}

RoboDome.Tim = function() {
  this.weapon = "Sarcasm"
  this.health = this.health + 14;
  this.damage = Math.floor(Math.random() * 45 + 10);
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
    this.health =  Math.floor(Math.random() * 25 + 50);
    this.damage = Math.floor(Math.random() * 20 + 65);
}
RoboDome.Zippy = function() {
    this.weapon = "Electricity"
    this.health = Math.floor(Math.random() * 40 + 5);
    this.damage = Math.floor(Math.random() * 45);
}
RoboDome.Slug.prototype = new ATV();
RoboDome.Zippy.prototype = new ATV();
