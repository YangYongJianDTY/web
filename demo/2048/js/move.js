function canMoveLeft() {
  for (var i = 0; i < 4; i++) {
    for (var j = 1; j < 4; j++) {
      if (cell_grid[i][j] != 0)
        if (cell_grid[i][j - 1] == 0 || cell_grid[i][j - 1] == cell_grid[i][j])
          return true;
    }
  }
  return false;
}

function canMoveUp() {
  for (var i = 1; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (cell_grid[i][j] != 0)
        if (cell_grid[i - 1][j] == 0 || cell_grid[i - 1][j] == cell_grid[i][j])
          return true;
    }
  }
  return false;
}

function canMoveRight() {
  for (var i = 0; i < 4; i++) {
    for (var j = 2; j >= 0; j--) {
      if (cell_grid[i][j] != 0)
        if (cell_grid[i][j + 1] == 0 || cell_grid[i][j + 1] == cell_grid[i][j])
          return true;
    }
  }
  return false;
}

function canMoveDown() {
  for (var i = 2; i >= 0; i--) {
    for (var j = 0; j < 4; j++) {
      if (cell_grid[i][j] != 0)
        if (cell_grid[i + 1][j] == 0 || cell_grid[i + 1][j] == cell_grid[i][j])
          return true;
    }
  }
  return false;
}

function moveLeft() {
  for (var i = 0; i < 4; i++) {
    for (var j = 1; j < 4; j++) {
      if (cell_grid[i][j] != 0) {
        for (var k = 0; k < j; k++) {
          if (cell_grid[i][k] == 0 && has_road(i, k, j, cell_grid)) {
            moveAnimation(i, j, i, k);
            cell_grid[i][k] = cell_grid[i][j];
            cell_grid[i][j] = 0;
            break;
          } else if (cell_grid[i][k] == cell_grid[i][j] && has_road(i, k, j, cell_grid) && !conflict[i][k]) {
            addMoveAnimation(i, j, i, k);
            cell_grid[i][k] += cell_grid[i][j];
            cell_grid[i][j] = 0;
            conflict[i][k] = true;
            score = score + cell_grid[i][k];
            updateScore(score);
            break;
          }
        }
      }
    }
  }
  setTimeout("init_number_cell()", 300);
}

function moveUp() {
  for (var i = 1; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (cell_grid[i][j] != 0) {
        for (var k = 0; k < i; k++) {
          if (cell_grid[k][j] == 0 && has_road_vertical(j, k, i, cell_grid)) {
            moveAnimation(i, j, k, j);
            cell_grid[k][j] = cell_grid[i][j];
            cell_grid[i][j] = 0;
            break;
          } else if (cell_grid[k][j] == cell_grid[i][j] && has_road_vertical(j, k, i, cell_grid) && !conflict[k][j]) {
            addMoveAnimation(i, j, k, j);
            cell_grid[k][j] += cell_grid[i][j];
            cell_grid[i][j] = 0;
            conflict[k][j] = true;
            score = score + cell_grid[k][j];
            updateScore(score);
            break;
          }
        }
      }
    }
  }
  setTimeout("init_number_cell()", 300);
}


function moveRight() {
  for (var i = 0; i < 4; i++) {
    for (var j = 2; j > -1; j--) {
      if (cell_grid[i][j] != 0) {
        for (var k = 3; k > j; k--) {
          if (cell_grid[i][k] == 0 && has_road(i, j, k, cell_grid)) {
            moveAnimation(i, j, i, k);
            cell_grid[i][k] = cell_grid[i][j];
            cell_grid[i][j] = 0;
            break;
          } else if (cell_grid[i][k] == cell_grid[i][j] && has_road(i, j, k, cell_grid) && !conflict[i][k]) {
            addMoveAnimation(i, j, i, k);
            cell_grid[i][k] += cell_grid[i][j];
            cell_grid[i][j] = 0;
            conflict[i][k] = true;
            score = score + cell_grid[i][k];
            updateScore(score);
            break;
          }
        }
      }
    }
  }
  setTimeout("init_number_cell()", 300);
}

function moveDown() {
  for (var i = 2; i > -1; i--) {
    for (var j = 0; j < 4; j++) {
      if (cell_grid[i][j] != 0) {
        for (var k = 3; k > i; k--) {
          if (cell_grid[k][j] == 0 && has_road_vertical(j, i, k, cell_grid)) {
            moveAnimation(i, j, k, j);
            cell_grid[k][j] = cell_grid[i][j];
            cell_grid[i][j] = 0;
            break;
          } else if (cell_grid[k][j] == cell_grid[i][j] && has_road_vertical(j, i, k, cell_grid) && !conflict[k][j]) {
            addMoveAnimation(i, j, k, j);
            cell_grid[k][j] += cell_grid[i][j];
            cell_grid[i][j] = 0;
            conflict[k][j] = true;
            score = score + cell_grid[k][j];
            updateScore(score);
            break;
          }
        }
      }
    }
  }
  setTimeout("init_number_cell()", 300);
}

function moveAnimation(fromx, fromy, tox, toy) {
  var number_cell = $("#number-cell-" + fromx + "-" + fromy);
  number_cell.animate({ left: getLeftPos(tox, toy), top: getTopPos(tox, toy) }, 200);
}

function addMoveAnimation(fromx, fromy, tox, toy) {
  var number_cell = $("#number-cell-" + fromx + "-" + fromy);
  number_cell.animate({ left: getLeftPos(tox, toy) - 5, top: getTopPos(tox, toy) - 5, width: "60px", height: "60px" }, 200);
  number_cell.animate({ left: getLeftPos(tox, toy), top: getTopPos(tox, toy), width: "50px", height: "50px" }, 100);
}
