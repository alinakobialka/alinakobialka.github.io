// guess Number 1-100
// clue pops up
// balloons pop up if number is right

function getAnswer() {
    // TODO
    return 77
}

var answer = getAnswer()

function guess() {
    var value = parseInt(document.getElementById("input").value)
    if (value > answer) {
        alert("too high")
    } else if (value < answer) {
        alert("too low")
    } else if (value === answer) {
        alert("balloon")
    }
    return false
}
document.getElementById("form").onsubmit = guess