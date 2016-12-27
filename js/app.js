
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
      $("#playerInfo1").html(`<h1>Bot 1: <span id="playerName"> ${one}</span></h1>
                   <li>Class:<span id="playerClass">${player1Type.type}</span></li>
                    <li>Weapon:  <span id="playerWeapon1">${player1Type.weapon} </span> </li>
                    <li>Health: <span id="playerHealth1">${player1Type.health} </span></li>
                    <li id="playerStrength1"> Strength: <span> ${player1Type.strength}</span></li>`
                 );

      $("#playerInfo2").html( `<h1>Bot 2:  <span id="playerName">${two}</span></h1>
                    <ul>

                    <li>Class:<span id="playerClass">${player2Type.type}</span></li>
                    <li>Weapon: <span id="playerWeapon">  ${player2Type.weapon}</span> </li>
                    <li>Health: <span id="playerHealth2">${player2Type.health} </span></li>
                    <li> Strength:<span id="playerStrength2">  ${player2Type.strength}</span></li>
                    </ul>` )
  }

$("#attackButton").click( function () {

    var p1 = $("#playerhealth1").html("")
    var p2 = $("playerhealth2").html("")

  if (player1Type.health > 0 && player2Type.health > 0)   {
    var high =(player1Type.strength - player2Type.strength);
    var low = Math.min(player1Type.strength, player2Type.strength);
    var loser = high - low
      p1.html(loser)
      p2.html()
    // -subtract difference from lesser strengthed player
    // send information to html element holding health
  }
  // else {
    // alert(#player has been killed by #player with #weaponName)


})


});
