
var randomResult;
var losses = 0;
var wins = 0;
var previous = 0;

var resetAndStart = function(){

  $('#crystals').empty();

  randomResult = Math.floor(Math.random() * 69 ) +30; // hoisting
//console.log("test");
$('#result').html("Random Result " + randomResult);

for(var i=0; i < 4; i++){
  
  var random = Math.floor(Math.random()* 11) +1;
  //console.log(random);
  
  var crystal = $('<div>');
    crystal.attr({
      "class": 'crystal',
      'data-random': random
      
    });

    crystal.html(random);

  $('.crystals').append(crystal);

  }
}

resetAndStart();

  $(document).on('click', ".crystal", function(){


  var num = parseInt($(this).attr('data-random'));

  previous += num;
  console.log(previous)

  if (previous > randomResult){
    losses--;
    $('#losses').html(losses);
  //console.log("You lost!");
  previous = 0;
    resetAndStart();
  }
  else if (previous === randomResult){
    wins++;

    $('#wins').html(wins);

    previous = 0;

    resetAndStart();
    //console.log ('You win!');
  }
  //console.log (preceding);
});     