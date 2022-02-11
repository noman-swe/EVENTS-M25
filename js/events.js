function makeFuchsia() {
    document.body.style.backgroundColor = 'fuchsia';
}  

function textRed(){
    const h4 = document.getElementsByTagName('h4');
    h4.style.color = 'red'; 
}


// most efficient process to handle onclick
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}