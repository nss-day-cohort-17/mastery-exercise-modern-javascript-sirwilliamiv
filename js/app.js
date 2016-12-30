
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


// when button is clicked - user input capture
  $('.btn__text').click(function(){
  //text field name assignments
        var one = $('#name1').val()
        var two = $('#name2').val()

        //SELECT option selection
        var name1 = $('#player1>option:selected').text();
        var name2 = $('#player2>option:selected').text();
        console.log("name1 =",name1)
        player1Type = new RoboDome[name1]
        player2Type = new RoboDome[name2]

        player1Type.name = one
        player2Type.name = two



    createPlayersHtml(one, two, player1Type, player2Type)

  })



  function createPlayersHtml(one, two, Player1Type, Player2Type) {
      $("#playerInfo1").html(`<h1><span id="playerName"> ${one}</span></h1>
                   <li>Type: <span id="playerClass">${player1Type.type}</span></li>
                    <li>Weapon:  <span id="playerWeapon1">${player1Type.weapon} </span> </li>
                    <li>Health: <span id="playerHealth1">${player1Type.health} </span></li>
                    <li id="playerStrength1"> Strength: <span> ${player1Type.damage}</span></li>`
                 );

      $("#playerInfo2").html( `<h1> <span id="playerName">${two}</span></h1>
                    <ul>

                    <li>Type: <span id="playerClass">${player2Type.type}</span></li>
                    <li>Weapon: <span id="playerWeapon">  ${player2Type.weapon}</span> </li>
                    <li>Health: <span id="playerHealth2">${player2Type.health} </span></li>
                    <li> Strength:<span id="playerStrength2">  ${player2Type.damage}</span></li>
                    </ul>` )
  }

function setTheHealth(player1Type, player2Type) {
  console.log("player one health",player1Type)
  // youJustDied(player1Type.health, player2Type.health)

  $("#playerHealth1").html(player1Type.health)
  $("#playerHealth2").html(player2Type.health)
}


function youJustDied() {
    if(player1Type.health <= 0) {
    alert(`${player2Type.name} defeated ${player1Type.name} with their weapon of choice, ${player2Type.weapon}`)
      }
      else if (player2Type.health <= 0) {
        alert(`${player1Type.name} defeated ${player2Type.name} with their weapon of choice, ${player1Type.weapon}`)
      }
}
// function showAlert()
// ==============ATTACK=========================

$("#attackButton").click( function () {

  if (player1Type.health > 0 && player2Type.health > 0)   {
    // console.log("health not zero, if")

  if(player1Type.damage >=  player2Type.damage) {
      // console.log("player 1 is stronger")
      player2Type.health = player2Type.health - (player1Type.damage - player2Type.damage)
      player1Type.health = player1Type.health - player2Type.damage;
        youJustDied( player2Type.health)
      setTheHealth(player1Type, player2Type)

  } else if (player2Type.damage >=  player1Type.damage){
      // console.log("player2 is stronger")
        player1Type.health = player1Type.health - (player2Type.damage - player1Type.damage)
        player2Type.health = player2Type.health - player1Type.damage;
          youJustDied(player1Type.health)
        setTheHealth(player1Type, player2Type)
    }
  }





     // youJustDied(player1Type.health, player2Type.health)

});

});
