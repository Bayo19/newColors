function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const colors = ['red'];

setTimeout(function() {
    const h2 = document.querySelector('h2');
    h2.innerHTML += ' - doubleclick any box to copy rgb color code';
}, 3000);

const otherBox = function() {
    let boxa = document.createElement('div');
    boxa.style.backgroundColor = getRandomColor();
    boxa.classList.add('boxa');
    container.appendChild(boxa);
    boxa.addEventListener('mouseover', function() {
        const h1 = document.querySelector('h1');
        h1.innerHTML = boxa.style.backgroundColor;
        h1.style.color = boxa.style.backgroundColor;
    })
    boxa.addEventListener('dblclick', async event => {
        if (!navigator.clipboard) {
            return
        }
        const h1 = document.querySelector('h1');
        try {
            await navigator.clipboard.writeText(h1.innerHTML)
            event.target.textContent = 'Copied to clipboard'
        } catch (err) {
            console.error('Failed to copy!', err)
        }
    })

}



const container = document.querySelector('#boxes');

for (let color of colors) {
    let box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click', otherBox);

}