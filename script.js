const items = document.querySelectorAll('.item');
const cart = document.getElementById('cart');

items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

cart.addEventListener('dragover', dragOver);
cart.addEventListener('drop', drop);

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.textContent);
    setTimeout(() => {
        event.target.style.display = 'none';
    }, 0);
}

function dragEnd(event) {
    event.target.style.display = 'block';
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    cart.innerHTML += `<p>${data}</p>`;
}
