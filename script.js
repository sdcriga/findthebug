const elements = document.querySelectorAll('.element');
const result = document.getElementById('result');

const database = {
  steam: ['fire', 'water'],
  dust: ['air', 'earth'],
  lava: ['fire', 'earth'],
  mud: ['water', 'earth'],
};

elements.forEach(element => {
  element.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  });
});

result.addEventListener('dragover', (e) => {
  e.preventDefault();
});

result.addEventListener('drop', (e) => {
  e.preventDefault();
  const elementId = e.dataTransfer.getData('text/plain');
  const element = document.getElementById(elementId);

  if (result.querySelector(`#${elementId}`)) {
    alert('Уже есть!');
    return;
  }

  const listItem = document.createElement('li');
  listItem.textContent = element.textContent;
  listItem.id = elementId;
  result.appendChild(listItem);

  checkCombination();
});

function checkCombination() {
  const combination = Array.from(result.children).map(item => item.id);

  for (const elementName in database) {
    if (combination.length === database[elementName].length) {
      const sortedCombination = combination.slice().sort();
      const sortedDatabaseElements = database[elementName].slice().sort();

      let isMatch = true;

      for (let i = 0; i < sortedCombination.length; i++) {
        if (sortedCombination[i] !== sortedDatabaseElements[i]) {
          isMatch = false;
          break;
        }
      }

      if (isMatch) {
        // Очищаем результат и добавляем новый элемент
        result.innerHTML = '';

        const newElement = document.createElement('div');
        newElement.className = 'element';
        newElement.draggable = true;
        newElement.id = 'air';
        newElement.textContent = elementName;

        const elementsContainer = document.getElementById('elements');
        elementsContainer.appendChild(newElement);

        break;
      }
    }
  }
}