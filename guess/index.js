// guess Number 1-100
// clue pops up
// balloons pop up if number is right

(() => {
  var biggest = 100;

  function getAnswer() {
    return Math.ceil(Math.random() * biggest);
  }

  var answer = getAnswer();

  function guess() {
    var value = parseInt(document.getElementById("input").value);
    if (value > answer) {
      alert("too high");
    } else if (value < answer) {
      alert("too low");
    } else if (value === answer) {
      alert("balloon");
    }
    return false;
  }
  document.getElementById("form").onsubmit = guess;
})();
