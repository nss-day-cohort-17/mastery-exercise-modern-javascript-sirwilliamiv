BOT TYPES


var battleDome = BattleDome || {};
battleDome.RobotLab = {};

/*
  Base function for a player, or enemy, class (profession)
 */
battleDome.RobotLab.RobotType = function() {
  this.name = "Boz";
  this.healthBonus = 0;
  this.strengthBonus = 0;


  // this.toString = function() {
  //   return this.name;
  }
};
