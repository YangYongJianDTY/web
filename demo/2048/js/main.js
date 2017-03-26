var score = 0;
var cell_grid = new Array();
var conflict = new Array();

$(document).ready(function() {
  init();
  $("#new_game").on("click", function() {
    init();
  });
})

function init() {
  updateScore(0);
  for (var i = 0; i < 4; i++) {
    cell_grid[i] = new Array();
    conflict[i] = new Array();
    for (var j = 0; j < 4; j++) {
      cell_grid[i][j] = 0;
      conflict[i][j] = false;
    }
  }
  init_grid();
  init_number_cell();
  create_a_number();
  create_a_number();
}

$(document).keydown(function(event) {
  var e = event || window.event;
  preventDefault(e);
  switch (e.keyCode) {
    case 37:
      if (canMoveLeft()) {
        moveLeft();
        setTimeout(function() {
          create_a_number();
          isOver();
        }, 300);
      }
      break;
    case 38:
      if (canMoveUp()) {
        moveUp();
        setTimeout(function() {
          create_a_number();
          isOver();
        }, 300);
      }
      break;
    case 39:
      if (canMoveRight()) {
        moveRight();
        setTimeout(function() {
          create_a_number();
          isOver();
        }, 300);
      }
      break;
    case 40:
      if (canMoveDown()) {
        moveDown();
        setTimeout(function() {
          create_a_number();
          isOver();
        }, 300);
      }
      break;
    default:
  }
});

document.addEventListener('touchstart', function(event) {
  var e = event || window.event;
  //preventDefault(e);
  startx = e.touches[0].pageX;
  starty = e.touches[0].pageY;
}, false);

// document.addEventListener('touchmove', function(event) {
//   var e = event || window.event;
//   preventDefault(e);
// }, false);

document.addEventListener('touchend', function(event) {
  var e = event || window.event;
  //preventDefault(e);
  endx = e.changedTouches[0].pageX;
  endy = e.changedTouches[0].pageY;

  var dx = endx - startx;
  var dy = endy - starty;

  if (Math.abs(dx) > 30 || Math.abs(dy) > 30) {
    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) {
        if (canMoveRight()) {
          moveRight();
          setTimeout(function() {
            create_a_number();
            isOver();
          }, 300);
        }
      } else {
        if (canMoveLeft()) {
          moveLeft();
          setTimeout(function() {
            create_a_number();
            isOver();
          }, 300);
        }
      }
    } else {
      if (dy > 0) {
        if (canMoveDown()) {
          moveDown();
          setTimeout(function() {
            create_a_number();
            isOver();
          }, 300);
        }
      } else {
        if (canMoveUp()) {
          moveUp();
          setTimeout(function() {
            create_a_number();
            isOver();
          }, 300);
        }
      }
    }
  }
}, false);
