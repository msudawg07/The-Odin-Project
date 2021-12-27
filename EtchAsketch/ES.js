let divContainer = document.querySelector('.container');

for (let i = 1; i <= 16; i++) {
    for (let i = 1; i <= 16; i++) {
        let div1 = document.createElement('div');
        div1.classList = 'divS'
        divContainer.append(div1);
        div1.addEventListener('mouseover', () => {
            div1.style.backgroundColor = randColor();
        })
    }
}

function randColor() {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}
//let divs = document.querySelectorAll(div1);
//
//divs.addEventListener('click', () => {
//  divs.style.backgroundColor = 'red';
//})

