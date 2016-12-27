
var RoboDome = {}
// Robot prototype
function Robot () {
    this.type = 'Robot';
    this.robotName = name || "Bot with no name";
    this.strength = 90;

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
  this.strength = 90;

}
RoboDome.Bip = function() {
  this.weapon ="Missles"
  this.health =  Math.floor(Math.random() * 40 + 50) - 13;
  this.strength = 97;
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
   this.strength = this.strength + 30;
}

RoboDome.Tim = function() {
  this.weapon = "Sarcasm"
  this.health = this.health + 14;
  this.strength = this.strength + 30;
}
RoboDome.Tina.prototype = new Bipedal();
RoboDome.Tim.prototype = new Bipedal();

///ATV
function ATV (name) {
   this.type = 'ATV';
   this.name = name;
   this.weapon = "Bombs"
   this.health =  Math.floor(Math.random() * 40 + 50) - 30;
   this.strength = this.strength + 50;
};

ATV.prototype = new Robot();

var Slug = new ATV();
var Zippy = new ATV();

//add hover photo preview of what robots look like from select menu

//====== test capturing user input================
var one = ""
var two = ""
var player1Type=""
var player2Type=""


$('.btn__text').click(function(){
  //text field name assignments
  var one = $('#name1').val()
  var two = $('#name2').val()
  console.log(one, two)
  //option selection
  var name1 = $('#player1>option:selected').text();
  var name2 = $('#player2>option:selected').text();
  console.log(name1)
  player1Type = new RoboDome[name1]
  // player2Type = new ((name2) + ("()"))
console.log(player1Type,player2Type)

// functionwhichsends(one,two,player1Type,player2Type)

})

Tina

// ============================Attack time
// var player1
// var player2

// display stats
//  $('attackbutton').click(function attacking(){
//   if (health > 0)   {
//     -take difference of strengths
//     -subtract difference from lesser strengthed player
//     send information to html element holding health
//   } else {
//     alert(#player has been killed by #player with #weaponName)
//   }

// })

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
