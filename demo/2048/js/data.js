var color_cell = new Array();
color_cell[2] = "#eee4da";
color_cell[4] = "#ede0c8";
color_cell[8] = "#f2b179";
color_cell[16] = "#f59563";
color_cell[32] = "#f67c5f";
color_cell[64] = "#f65e3b";
color_cell[128] = "#edcf72";
color_cell[256] = "#edcc61";
color_cell[512] = "#9c0";
color_cell[1024] = "#33b5e5";
color_cell[2048] = "#09c";
color_cell[4096] = "#a6c";
color_cell[8192] = "#93c";

var font_cell = new Array();
font_cell[2] = "25px";
font_cell[4] = "25px";
font_cell[8] = "23px";
font_cell[16] = "21px";
font_cell[32] = "21px";
font_cell[64] = "21px";
font_cell[128] = "18px";
font_cell[256] = "18px";
font_cell[512] = "18px";
font_cell[1024] = "15px";
font_cell[2048] = "15px";
font_cell[4096] = "15px";
font_cell[8192] = "15px";

function getColor(num) {
  return color_cell[num];
}

function getFontSize(num) {
  return font_cell[num];
}
