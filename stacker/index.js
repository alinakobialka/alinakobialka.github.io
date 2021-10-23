//15 rows, 10 columns
//start stop buttons
var numberOfRows = 4;
var numberOfColumns = 10;
function main() {
  copy("box", numberOfColumns);
  copy("row", numberOfRows);
  selectBoxes(1, 1, 3);
  selectBoxes(1, 2, 3);
}
function copy(className, num) {
  var element = document.getElementsByClassName(className)[0];
  for (var i = 1; i < num; i++) {
    var clone = element.cloneNode(true);
    var parent = element.parentElement;
    parent.appendChild(clone);
  }
}
function selectBoxes(rowNumber, columnNumber, numberOfBoxes) {
  var row = document.getElementsByClassName("row")[rowNumber];

  for (var i = 0; i < numberOfColumns; i++) {
    var box = row.children[i];
    box.classList.remove("selected");
  }

  for (var i = 0; i < numberOfBoxes; i++) {
    var box = row.children[columnNumber + i];
    box.classList.add("selected");
  }
}
main();
