// Your JS goes here

function makeBoard() {
    let i = 99;
    while (i > 0) {
        if (i % 2 === 0) {
            let redChecker = makeChecker();
            redChecker.style.backgroundColor = 'red'
            document.body.appendChild(redChecker)
        } else {
            let blackChecker = makeChecker();
            blackChecker.style.backgroundColor = 'black'
            document.body.appendChild(blackChecker)
        } i--
    }
}

function makeChecker() {
    let checker = document.createElement('div');
    checker.style.width = '11.1%';
    checker.style.paddingBottom = '11.1%';
    checker.style.float = 'left'
    return checker
}

makeBoard();