
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


// when button is clicked - user input capture
  $('.btn__text').click(function(){
  //text field name assignments
        var one = $('#name1').val()
        var two = $('#name2').val()

        //SELECT option selection
        var name1 = $('#player1>option:selected').text();
        var name2 = $('#player2>option:selected').text();
        // console.log(name1)
        player1Type = new RoboDome[name1]
        player2Type = new RoboDome[name2]

// console.log(player1Type)

    createPlayersHtml(one, two, player1Type, player2Type)
    // fight(player1Type, player2Type)
  })

  // $( "div" ).html( "<span class='red'>Hello <b>Again</b></span>" )

  function createPlayersHtml(one, two, Player1Type, Player2Type) {
      $("#playerInfo1").html(`<h1>Name: ${one} <span id="playerName"></span></h1>
                   <li>Class:${player1Type.type}<span id="playerClass"></span></li>
                    <li>Weapon: ${player1Type.weapon} <span id="playerWeapon"> </span> </li>
                    <li>Health: ${player1Type.health}<span id="playerIntelligence"> </span></li>
                    <li> Strength: ${player1Type.strength}<span id="playerSkinColor"> </span></li>`
                 );

      $("#playerInfo2").html( `<h1>Name: ${two} <span id="playerName"></span></h1>
                    <ul>

                    <li>Class:${player2Type.type}<span id="playerClass"></span></li>
                    <li>Weapon: ${player2Type.weapon} <span id="playerWeapon"> </span> </li>
                    <li>Health: ${player2Type.health}<span id="playerIntelligence"> </span></li>
                    <li> Strength: ${player2Type.strength}<span id="playerSkinColor"> </span></li>
                    </ul>` )
  }

$('attackbutton').click(function fight(player1Type, player2Type){
  if (health > 0)   {
    var blow = player1Type.strength - player2Type.strength
    -subtract difference from lesser strengthed player
    send information to html element holding health
  } else {
    alert(#player has been killed by #player with #weaponName)
  }

})
}

});
