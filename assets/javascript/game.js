$(document).ready(function () {
    $(document).ready(function () {

        var targetNumber = Math.floor(Math.random() * 101);

        $("#number-to-guess").text(targetNumber);

        var counter = "";

        $("your-score").text(counter);



        var crystals = ["assets/images/bluecrystal.jpg", "assets/images/purpleCrystal.png", "assets/images/quartzCrystal.jpg", "assets/images/rainbowCrystal.jpg"];

        for (var i = 0; i < crystals.length; i++) {

            var imageCrystal = $("<img>");

            imageCrystal.addClass("crystal-image");

            imageCrystal.attr("src", crystals[i]);

            imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 11));

            $("#crystals").append(imageCrystal);
        }


        $(".crystal-image").on("click", function () {

            var crystalValue = ($(this).attr("data-crystalvalue"));

            crystalValue = parseInt(crystalValue);

            counter += crystalValue;

            alert("New score: " + counter);

            if (counter === targetNumber) {
                counter = 0;
                alert("You win!");
            }

            else if (counter >= targetNumber) {
                alert("You lose!!");
            }

        });
    });
});