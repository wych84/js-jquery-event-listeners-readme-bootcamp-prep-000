function getIt () {
  $('p').on('click', function () {
    alert('Hey!');
  });
}

function frameIt () {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('input').on('keydown', function() {
    if ($('input').val() === "G") {
      alert("You put G!");
    }
  });
}
$(document).ready(function(){

// call functions here

});
