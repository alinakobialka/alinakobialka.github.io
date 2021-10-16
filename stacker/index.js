//15 rows, 10 columns
//start stop buttons
var numberOfRows = 4;
var numberOfColumns = 10;
function main() {
  copy("box", numberOfColumns);
  copy("row", numberOfRows);
}
function copy(className, num) {
  var element = document.getElementsByClassName(className)[0];
  for (var i = 1; i < num; i++) {
    var clone = element.cloneNode(true);
    var parent = element.parentElement;
    parent.appendChild(clone);
  }
}
main();
