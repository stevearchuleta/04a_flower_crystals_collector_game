
var randomResult;
var losses = 0;
var wins = 0;
var score = 0;

var images = ['assets/images/crystal-flower-1.jpg',
              'assets/images/crystal-flower-3.png',
              'assets/images/crystal-flower-2.png',
              'assets/images/crystal-flower-3.jpeg',];


var resetAndStart = function() {
  // ensure that crystals div is empty of any data
  $('.crystals').empty();

  // generate target number
  randomResult = Math.floor(Math.random() * 69 ) +30;
  $('#result').html("Your Target Number: " + randomResult);

    // loop through 4 crystals
    for(var i=0; i < 4; i++) {
      
      var random = Math.floor(Math.random()* 11) +1;
      
      // create a crystal div
      var crystal = $('<div>');
      
      //give crytal two attributes
      crystal.attr({
        "class": 'crystal',
        'data-random': random
      });
    

      // if I want user to see each crystal value, 
      // then write each random number to each crystal in the DOM
      // crystal.html(random);
      

      crystal.css({
      "background-image": "url('" + images[i] + "')",
      "background-size": "cover"
      });

      $('.crystals').append(crystal);
  }
  

  // write score to DOM
  $("#score").html("Total Score: " + score);

}


  //invoke the reset function when the page loads
  resetAndStart();



  //on click event
  $(document).on('click', ".crystal", function() {

  var number = parseInt($(this).attr('data-random'));

  score += number;
  
  // write score to DOM
  $("#score").html("Your Total Score: " + score);

    if (score > randomResult) {
      losses--;
      $('#losses').html("Games Lost: " + losses);
      
      // reset score
      score = 0;
      // reset game
      resetAndStart();
      
    }

    else if (score === randomResult) {
      wins++;
      $('#wins').html("Games Won: " + wins);
       
      // reset score
       score = 0;
       // reset game
       resetAndStart();
      
    }

});     