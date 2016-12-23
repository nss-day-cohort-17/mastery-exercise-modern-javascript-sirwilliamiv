// var objectName =  $('#player-name').val()
// // objectName = new Gauntlet.Combatants.Human();

// $("#name-button").click(function(){

//   objectName.name =  $('#player-name').val()
//   // objectName.weapon = objectName.WHAT WE CLICK()     $("weaponclicktarget").click(function(){
//   // })
//   objectName.class = $("classClicked").click()

//  // objectName.setWeapon()
//  objectName.generateClass();

//  console.log(objectName)




// // console.log(Gauntlet.Combatants.Human())
// })



// console.log(billy)

// billy.



// This will be used for "Surprise me" option
// console.log(warrior.toString());

// // var orc = new Gauntlet.Combatants.Orc();
// orc.generateClass();
// orc.setWeapon(new BroadSword());
// // console.log(orc.toString());


// gamer character creation

var gamer;
var gamerName;
var gamerClass;
var gamerWeapon;
var gamerStrength;
var gamerIntelligence;

// jQuery event listener for name ---> classes

$('#selectClass').click(function() {
  gamerName = $('#player-name')[0].value
  console.log('gamerName', gamerName);

  gamer =new Gauntlet.Combatants.Player(gamerName)
})

// jQuery event listener for classes ---> weapons : halfway resolved


$('body').click(function() {
  var target = $(event.target)
  gamerClass = target.find('.btn__class').text()
  // console.log(target)
  // gamer.class = gamerClass
  // gamerClass = Gauntlet.GuildHall.$(this)
  console.log("gamer's class", gamerClass)
  return;

})

// jQuery event listener for weapons ---> fight

$('body').click(function() {
  var target = $(event.target)
  gamerWeapon = target.find('.btn__weapon').text()
  // console.log(target)
  // gamer.weapon = gamerWeapon
  // gamerWeapon = Gauntlet.GuildHall.$(this)
  console.log("gamer's weapon", gamerWeapon)
  return;

})
/*
  Test code to generate a spell
 */
// var spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());


$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      // case "card--weapon":
      //   moveAlong = ($("#player-name").val() !== "");
      //   break;
      case "card--battleground":
        moveAlong =($("player-name").val() !== "")
      break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});
