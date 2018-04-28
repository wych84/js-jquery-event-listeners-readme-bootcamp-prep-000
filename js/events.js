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
  $('input').on('keydown', function(n) {
    if (n.which === "G") {
      alert("You put G!");
    }
  });
}
$(document).ready(function(){

// call functions here

});
