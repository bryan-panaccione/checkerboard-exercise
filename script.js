// Your JS goes here
document.body.style.background = 'linear-gradient(136deg, #673ab7, transparent);'
function gradientOver() {
    let gradientDiv = document.createElement('div');
    gradientDiv.style.position = 'fixed';
    gradientDiv.style.width = '100%'
    gradientDiv.style.height = '100%'
    gradientDiv.style.left = 0;
    gradientDiv.style.top = 0;
    gradientDiv.style.zIndex = 1;
    gradientDiv.style.background = 'linear-gradient(90deg, rgba(255,255,255) 0%, rgba(9,9,121, 0) 52%, rgba(9,9,121,1) 100%)';
    //gradientDiv.appendChild((makeRandomBoard()))
    gradientDiv.classList.add('overlay')
    document.body.appendChild(gradientDiv)
    return gradientDiv;
}
//function gradientOver() {
//  let gradientDiv = document.createElement('div');
//gradientDiv.style.position = 'absolute';
//gradientDiv.style.width = '100%'
//gradientDiv.style.height = '100%' linear-gradient(136deg, #673ab7, transparent);
//gradientDiv.style.left = 0;
//gradientDiv.style.top = 0;
//gradientDiv.style.zIndex = 100;
//gradientDiv.style.background = 'linear-gradient(to bottom, rgba(2,0,36,1) 0%, rgba(9,9,121,0.7) 40%, rgba(0,212,255,0.3) 100%)';
//document.body.appendChild(gradientDiv)
//}
function makeGradientBoard(parentDiv) {
    gradientOver()
    let i = 99;
    while (i > 0) {
        let prettyChecker = makeChecker();
        //console.log(randomHex())
        prettyChecker.style.backgroundColor = `${randomHex()}`
        //prettyChecker.style.opacity = i + '%'
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


makeGradientBoard();