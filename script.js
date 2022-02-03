// Your JS goes here

function makeRandomBoard() {
    let i = 99;
    while (i > 0) {
        let prettyChecker = makeChecker();
        console.log(randomHex())
        prettyChecker.style.backgroundColor = `${randomHex()}`
        document.body.appendChild(prettyChecker)
        i--
    }
}

function makeChecker() {
    let checker = document.createElement('div');
    checker.style.width = '11.1%';
    checker.style.paddingBottom = '11.1%';
    checker.style.float = 'left'
    return checker
}

function randomHex() {
    let optionArr = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let output = ['#']
    let j = 6
    while (j > 0) {
        var randomIndex = (Math.floor(Math.random() * (optionArr.length)));
        output.push(optionArr[randomIndex])
        j--
    } return output.join('')
}

function changeColors() {
    document.body.innerHTML = '';
    var audio = new Audio('meow.mp3')
    audio.play()
    makeRandomBoard()
}

makeRandomBoard();
var timer = setInterval(changeColors, 1000)
