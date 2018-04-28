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
    if (n.which === 71) {
      alert("You put G!");
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    
  })
}
$(document).ready(function(){

// call functions here

});
