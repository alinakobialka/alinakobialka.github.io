// guess Number 1-100
// clue pops up
// balloons pop up if number is right

function getAnswer() {
    return 77
}

var answer = getAnswer()

function guess() {
    var value = document.getElementById("input").value
    if (value > answer) {
        alert("too high")
    } else if (value < answer) {
        alert("too low")
    } else if (value === answer) {
        alert("balloon")
    }
}
document.getElementById("button").onclick = guess