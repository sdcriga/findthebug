// nothing useful in this file
// seriously it just render items
let elementsView = document.getElementById('elements');

items.forEach(item => {
    elementsView.innerHTML += `
    <div 
        class="element" 
        draggable="true" 
        id="${item.title}" 
        ${item.initial? '': 'disabled'}
    >
        <span class="element__combination">${item.combination}</span>
        <span class="element__text">${item.title}</span>
    </div>`;
});