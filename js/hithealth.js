$(document).ready(function() {
  console.log("Let's go!!");

  var health = 100;



// damage functionality for player

function attack(event) {

    $('.btn').on('click', function(){

      //math placeholder for attack button damage function
      health = health - 10;
      $('#playerHealth').css('width', health + '%')
      $('#enemyHealth').css('width', health)
    });
  }

  attack();

})


if (gamerHealth= 0) {
  alert("May tales of your exploits live forever...but you dead.");
}
