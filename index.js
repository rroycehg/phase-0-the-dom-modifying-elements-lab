// Write your code here!

const main = document.querySelector('main');

main.remove();



const newHeader = document.createElement('h1');
const currentDiv = document.getElementById("div1");

newHeader.id = 'victory';

const champ = document.createTextNode("Roli is the champion");
newHeader.appendChild(champ);

