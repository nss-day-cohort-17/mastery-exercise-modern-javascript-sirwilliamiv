var battleDome = BattleDome || {};
battleDome.fighters = {};



battleDome.players.robot = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;

  this.robotName = name || "Bot with no name";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.flight = false;
  this.strength = 90;

};




battleDome.players.drone = function() {

  this.flight = true;
  this.species = "Drone";
  this.weapon = "Missles"

  // this.allowedClasses = ["Warrior", "Berserker", "Valkyrie",];
};
battleDome.fighters.drone.prototype = new battleDome.fighters.robot();


battleDome.players.atv = function() {

  this.flight = false;
  this.species = "ATV";
  this.weapon = "Machine Gun"

  // this.allowedClasses = ["Warrior", "Berserker", "Valkyrie",];
};
battleDome.fighters.drone.prototype = new battleDome.fighters.robot();


battleDome.players.bipedal = function() {

  this.flight = false;
  this.species = "BiPedal";
  this.weapon = "Power Punches"

  // this.allowedClasses = ["Warrior", "Berserker", "Valkyrie",];
};
battleDome.fighters.drone.prototype = new battleDome.fighters.robot();
