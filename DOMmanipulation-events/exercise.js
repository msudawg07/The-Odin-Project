let container = document.querySelector('#container')

let p = document.createElement('p');
p.innerText = 'Hey I am red';
p.style.color = 'red';
container.appendChild(p);

let hThree = document.createElement('h3');
hThree.innerText = 'Hey I am a blue H3';
hThree.style.color = 'blue';
container.appendChild(hThree);

let div = document.createElement('div');
div.style.cssText = "border: 3px solid black; background-color: pink"
let headOne = document.createElement('h1');
headOne.innerText = "I am in a Div";
let pTwo = document.createElement('p');
pTwo.innerText = 'ME TOOO!';
div.append(headOne, pTwo);
//div.appendChild(pTwo);
container.appendChild(div);
