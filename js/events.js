function makeFuchsia() {
    document.body.style.backgroundColor = 'fuchsia';
}

function textRed() {
    const h4 = document.getElementsByTagName('h4');
    h4.style.color = 'red';
}

// M25-2
// most efficient process to handle onclick
const blueButton = document.getElementById('make-blue-button');
//just set the name of the function
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// M25-3
// onclick again
const greenButton = document.getElementById('make-green-button');
//console.log(greenButton);
greenButton.onclick = function makeGreen() {
    document.body.style.backgroundColor = 'green';
};

//purple button
const purpleBtn = document.getElementById('purple-btn');
purpleBtn.onclick = function () {
    document.body.style.backgroundColor = 'purple'
}

//using addEventListener() 
const teal = document.getElementById('teal-btn');
teal.addEventListener('click', makeTeal);

function makeTeal() {
    document.body.style.backgroundColor = 'teal';
}

// addEventListener() with inline function
const hotpink = document.getElementById('hotPink-btn');
hotpink.addEventListener('click', function makeHotPink() {
    document.body.style.backgroundColor = 'hotpink';
});

//direct shortcut addEventListener() with inline function
document.getElementById('lightBlue-btn').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
});