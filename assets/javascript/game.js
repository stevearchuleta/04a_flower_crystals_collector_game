
var randomResult;
var losses = 0;
var wins = 0;
var previous = 0;

var resetAndStart = function(){
  $('#crystals').empty();
  randomResult = Math.floor(Math.random() * 69 ) +30;
  //console.log("test");
  $('#result').html("Random Result: " + randomResult);

    for(var i=0; i < 4; i++){
    var random = Math.floor(Math.random()* 11) +1;
    //console.log(random);
    var crystal = $('<div>');
    //give var crytal two attributes via key-value object syntax  
    crystal.attr({
      "class": 'crystal',
      'data-random': random
    });
    crystal.html(random);
    $('.crystals').append(crystal);
  }
}
//invoke the function when the page loads
resetAndStart();

//event delegation (ask Uzair)
  $(document).on('click', ".crystal", function(){

  var num = parseInt($(this).attr('data-random'));

  previous += num;

  $("#previous").html(previous);
  //console.log(previous)

  if (previous > randomResult){
    losses--;
    $('#losses').html(losses);
    //console.log("You lost!");
    previous = 0;
    $("#previous").html(previous);
    resetAndStart();
    
  }
  else if (previous === randomResult){
    wins++;
    $('#wins').html(wins);
    previous = 0;
    $("# previous").html(previous);
    resetAndStart();
    
    //console.log ('You win!');
  }
    //console.log (preceding);
});     