$( document ).ready(function() {

    // Variable declaration
    var resetGame = false;

    // Hide reset me button
    $(".container6").children(".reset-me").hide();

    // If first Star Wars character is clicked
    $( ".sw-character1" ).click(function() {

        // Not to allow clicking unless reset button is clicked to restart game
        if (resetGame)  {
            alert ("Please click reset button to restart game!!");
        }
        else  {

            // Process as following for characters in container 3
            //  When character is clicked move to defender area
            //  Change the character moved to defender area to different color
            //  Initialize contents of text fields to empty string in container 6
            if ($(".sw-character1").parent().attr("class") === "container3")   {
                $(".container5").append($(".sw-character1"));
                $(".container5").children("div[class^='sw-character']").css("background-color", "#00CC99");
                $(".container6").children(".txt-character").text("");
                $(".container6").children(".txt-defender").text("");
            }

            // Process as following for characters in container 1
            //  Selected character move to container 2
            //  Rest of characters are moved to container 3
            //  Change the character moved to defender area to different color
            if ($(".sw-character1").parent().attr("class") === "container1")   {
                $(".container3").append($(".sw-character2"));
                $(".container3").append($(".sw-character3"));
                $(".container3").append($(".sw-character4"));
                $(".container2").append($(".sw-character1"));
                $(".container3").children("div[class^='sw-character']").css("background-color", "red");
            }
        }
    });

    // If second Star Wars character is clicked
    $( ".sw-character2" ).click(function() {

        // Not to allow clicking unless reset button is clicked to restart game
        if (resetGame)  {
            alert ("Please click reset button to restart game!!");
        }
        else  {

            // Process as following for characters in container 3
            //  When character is clicked move to defender area
            //  Change the character moved to defender area to different color
            //  Initialize contents of text fields to empty string in container 6
            if ($(".sw-character2").parent().attr("class") === "container3")   {
                $(".container5").append($(".sw-character2"));
                $(".container5").children("div[class^='sw-character']").css("background-color", "#00CC99");
                $(".container6").children(".txt-character").text("");
                $(".container6").children(".txt-defender").text("");
            }

            // Process as following for characters in container 1
            //  Selected character move to container 2
            //  Rest of characters are moved to container 3
            //  Change the character moved to defender area to different color
            if ($(".sw-character2").parent().attr("class") === "container1")   {
                $(".container3").append($(".sw-character1"));
                $(".container3").append($(".sw-character3"));
                $(".container3").append($(".sw-character4"));
                $(".container2").append($(".sw-character2"));
                $(".container3").children("div[class^='sw-character']").css("background-color", "red");
            }
        }
    });

    // If third character is clicked
    $( ".sw-character3" ).click(function() {

        // Not to allow clicking unless reset button is clicked to restart game
        if (resetGame)  {
            alert ("Please click reset button to restart game!!");
        }
        else  {

            // Process as following for characters in container 3
            //  When character is clicked move to defender area
            //  Change the character moved to defender area to different color
            //  Initialize contents of text fields to empty string in container 6
            if ($(".sw-character3").parent().attr("class") === "container3")   {
                $(".container5").append($(".sw-character3"));
                $(".container5").children("div[class^='sw-character']").css("background-color", "#00CC99");
                $(".container6").children(".txt-character").text("");
                $(".container6").children(".txt-defender").text("");
            }

            // Process as following for characters in container 1
            //  Selected character move to container 2
            //  Rest of characters are moved to container 3
            //  Change the character moved to defender area to different color
            if ($(".sw-character3").parent().attr("class") === "container1")   {
                $(".container3").append($(".sw-character1"));
                $(".container3").append($(".sw-character2"));
                $(".container3").append($(".sw-character4"));
                $(".container2").append($(".sw-character3"));
                $(".container3").children("div[class^='sw-character']").css("background-color", "red");
            }
        }
    });

    // If forth character is clicked
    $( ".sw-character4" ).click(function() {

        // Not to allow clicking unless reset button is clicked to restart game
        if (resetGame)  {
            alert ("Please click reset button to restart game!!");
        }
        else  {

            // Process as following for characters in container 3
            //  When character is clicked move to defender area
            //  Change the character moved to defender area to different color
            //  Initialize contents of text fields to empty string in container 6
            if ($(".sw-character4").parent().attr("class") === "container3")   {
                $(".container5").append($(".sw-character4"));
                $(".container5").children("div[class^='sw-character']").css("background-color", "#00CC99");
                $(".container6").children(".txt-character").text("");
                $(".container6").children(".txt-defender").text("");
            }

            // Process as following for characters in container 1
            //  Selected character move to container 2
            //  Rest of characters are moved to container 3
            //  Change the character moved to defender area to different color
            if ($(".sw-character4").parent().attr("class") === "container1")   {
                $(".container3").append($(".sw-character1"));
                $(".container3").append($(".sw-character2"));
                $(".container3").append($(".sw-character3"));
                $(".container2").append($(".sw-character4"));
                $(".container3").children("div[class^='sw-character']").css("background-color", "red");
            }
        }
    });

    // When attach me button is clicked
    $(".attack-me").click(function() {

        // Not to allow clicking unless reset button is clicked to restart game
        if (resetGame)  {
            alert ("Please click reset button to restart game!!");
        }
        else  {

            // Check if any character is in defender area otherwise alert user
            if ($(".container5").children("div[class^='sw-character']").children("p[class^='sw-name']").text() === "")  {
                alert("There is no one in defender area to attack!!")
            }
            else   {

                // Get value of health points from the character in container 2
                var selChar = $(".container2").children("div[class^='sw-character']").children("p[class^='sw-cap']").text();

                // Get value of health points from the character in container 5
                var defendChar = $(".container5").children("div[class^='sw-character']").children("p[class^='sw-cap']").text();

                // Get the character name in container 5
                var defendCharName = $(".container5").children("div[class^='sw-character']").children("p[class^='sw-name']").text();
                
                // Determine random numbers between 0 and 50
                var selCharRandNbr = Math.floor(Math.random() * 50);
                var defendCharRandNbr = Math.floor(Math.random() * 50);

                // Subtract health points from random number generated
                selChar = selChar - selCharRandNbr;
                defendChar = defendChar - defendCharRandNbr;

                // Update the health points for the characters
                $(".container2").children("div[class^='sw-character']").children("p[class^='sw-cap']").text(selChar);
                $(".container5").children("div[class^='sw-character']").children("p[class^='sw-cap']").text(defendChar);

                // Display the message 
                $(".container6").children(".txt-character").text("You attacked " + defendCharName + " for " + selCharRandNbr + " damage.");
                $(".container6").children(".txt-defender").text(defendCharName + " attacked you back for " + defendCharRandNbr + " damage.");

                // If the defender health points are less than zero
                if ( defendChar < 0 )   {
                    
                    // Move characters from container 5 to container 7
                    $(".container7").append($(".container5").children("div[class^='sw-character']"));

                    // Hide all characters in container 7
                    $(".container7").children("div[class^='sw-character']").hide();

                    // Update messages
                    $(".container6").children(".txt-character").text("You have defeated " + defendCharName + ", you can choose to find another enemy.");
                    $(".container6").children(".txt-defender").text("");
                    
                }

                // If the selected character health points are less than zero
                if ( selChar < 0 )  {
                    // Move character from container 5 to container 7
                    $(".container7").append($(".container5").children("div[class^='sw-character']"));

                    // Hide the characters in container 7
                    $(".container7").children("div[class^='sw-character']").hide();

                    // Update the messages
                    $(".container6").children(".txt-character").text("You have been defeated. GAME OVER!!!!");
                    $(".container6").children(".txt-defender").text("");

                    // Show the reset button
                    $(".container6").children(".reset-me").show();

                    // Change to true
                    resetGame = true;
                }
            }
        }
    });

    // If the reset button is clicked 
    $(".reset-me").click(function() {

        //Change to false
        resetGame = false;

        // Show the hidden characters in container 7
        $(".container7").children("div[class^='sw-character']").show();

        // Move all the characters from other containers to container 1
        $(".container1").append($(".container2").children("div[class^='sw-character']"));
        $(".container1").append($(".container3").children("div[class^='sw-character']"));
        $(".container1").append($(".container7").children("div[class^='sw-character']"));

        // Reset the background color to white
        $(".container1").children("div[class^='sw-character']").css("background-color", "#fff");

        // Hide the reset button
        $(".container6").children(".reset-me").hide();

        // Update the messages
        $(".container6").children(".txt-character").text("");
        $(".container6").children(".txt-defender").text("");

        // Reset the counter attack power for all the characters
        $(".container1").children("div[class='sw-character1']").children("p[class^='sw-cap']").text("150");
        $(".container1").children("div[class='sw-character2']").children("p[class^='sw-cap']").text("100");
        $(".container1").children("div[class='sw-character3']").children("p[class^='sw-cap']").text("80");
        $(".container1").children("div[class='sw-character4']").children("p[class^='sw-cap']").text("200");
    });

});