function init_grid() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      var cell = $("#box-cell-" + i + "-" + j);
      cell.css("left", getLeftPos(i, j));
      cell.css("top", getTopPos(i, j));
    }
  }
}

function init_number_cell() {
  $(".number-cell").remove();
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      var number_cell = $("<div class='number-cell' id='number-cell-" + i + "-" + j + "'></div>");
      number_cell.css("left", getLeftPos(i, j));
      number_cell.css("top", getTopPos(i, j));
      number_cell.css('background-color', getColor(cell_grid[i][j]));
      number_cell.css('font-size', getFontSize(cell_grid[i][j]));
      number_cell.text(cell_grid[i][j]);
      if (cell_grid[i][j] == 0) {
        number_cell.css("width", "0px");
        number_cell.css("height", "0px");
      } else {
        number_cell.css("width", "50px");
        number_cell.css("height", "50px");
      }
      $(".wall").append(number_cell);
      conflict[i][j] = false;
    }
  }
}

function create_a_number() {
  if (noSpace()) {
    //console.log('0')
    return false;
  }
  var m = parseInt(Math.floor(Math.random() * 4));
  var n = parseInt(Math.floor(Math.random() * 4));
  var times = 0;
  while (times < 20) {
    if (cell_grid[m][n] == 0)
      break;
    var m = parseInt(Math.floor(Math.random() * 4));
    var n = parseInt(Math.floor(Math.random() * 4));
    times++;
  }
  if (times == 20) {
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        if (cell_grid[i][j] == 0) {
          m = i;
          n = j;
        }
      }
    }
  }
  var number = Math.random() < 0.6 ? 2 : 4;
  cell_grid[m][n] = number;
  showNumber(m, n, number);
}

function showNumber(i, j, number) {
  var number_cell = $("#number-cell-" + i + "-" + j);
  number_cell.css('background-color', getColor(number));
  number_cell.css('font-size', getFontSize(number));
  number_cell.css("width", "30px");
  number_cell.css("height", "30px");
  number_cell.css("left", getLeftPos(i, j) + 10);
  number_cell.css("top", getTopPos(i, j) + 10);
  number_cell.css('opacity', 0);
  number_cell.text(number);
  number_cell.animate({ opacity: 1, width: "50px", height: "50px", left: getLeftPos(i, j), top: getTopPos(i, j) }, 200);
}

function updateScore(score) {
  $("#score").text(score);
}

function isOver() {
  if (noSpace() && noMove())
    setTimeout(function() {
      alert("Game Over!")
    }, 600)
}

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}

function getLeftPos(i, j) {
  return 10 + 60 * j;
}

function getTopPos(i, j) {
  return 10 + 60 * i;
}

function has_road(row, col1, col2) {
  for (var i = col1 + 1; i < col2; i++) {
    if (cell_grid[row][i] != 0) {
      return false;
    }
  }
  return true;
}

function has_road_vertical(col, row1, row2) {
  for (var i = row1 + 1; i < row2; i++) {
    if (cell_grid[i][col] != 0) {
      return false;
    }
  }
  return true;
}

function noMove() {
  if (canMoveDown() || canMoveLeft() || canMoveRight() || canMoveUp()) {
    return false;
  }
  return true;
}

function noSpace() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (cell_grid[i][j] == 0)
        return false;
    }
  }
  return true;
}
