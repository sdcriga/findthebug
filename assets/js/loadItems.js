// nothing useful in this file
// seriously it just renders items

let elementsView = document.getElementById('elements');

items.forEach(item => {
    elementsView.innerHTML += `
    <div 
        ${item.combination > 0 ? `class="element"` : `class="element done"`}  
        draggable="true" 
        id="${item.title}" 
        ${item.initial ? '' : 'disabled'}
    >
        ${item.combination > 0 ? `<span class="element__combination">${item.combination}</span>` : ''}
        <span class="element__text">${item.title}</span>
    </div>`;
});