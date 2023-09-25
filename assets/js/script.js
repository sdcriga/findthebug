const elements = document.querySelectorAll('.element');
const result = document.getElementById('result');


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
    const listItem = document.createElement('li');
    listItem.textContent = element.textContent;
    listItem.id = elementId;
    result.appendChild(listItem);

    checkCombination();
});


let updateTotalCouner = () => {
    const elements        = document.querySelectorAll('.element');
    const totalElement    = document.getElementById('total');
    const enabledElements = Array.from(elements).filter(element => !element.hasAttribute('disabled'));
    totalElement.innerHTML = enabledElements.length;
}

let updateCounter = (sortedCombination) => {
    sortedCombination.forEach(combinationItem => {
        let browserElement = document.getElementById(combinationItem);
        let combinationElement = browserElement.querySelector(".element__combination");
        let currentValue = parseInt(combinationElement.textContent);
        if (!isNaN(currentValue)) {
            let newValue = currentValue - 1;
            combinationElement.textContent = newValue;
        } else {
            console.log("Elemen have NAN");
        }
    });
}

let checkCombination = () => {
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
            result.innerHTML = '';
            const item = document.getElementById(elementName);
            if (item.getAttribute("disabled") === null) {
                alert(`${item.querySelector(".element__text").innerText} already created`);
            } else {
                item.removeAttribute("disabled");
                item.classList.add("animated");
                setTimeout(() => {
                    item.classList.remove("animated");
                }, 500);
                updateCounter(sortedCombination);
                updateTotalCouner();
            }
        } else {
            result.innerHTML = '';
        }
    }
  }
}

updateTotalCouner();

let showAllButton = document.getElementById('showAll');
showAllButton.addEventListener('click', function(e) {
  let a = document.querySelectorAll('.element');
  a.forEach(element => {
    element.removeAttribute("disabled");
 
  });
  alert(`
    nice try but its also not correct!,
    review Swisscom element
  `)
});

function find() {
  alert(
`No no no it would be too easy 
take look closer maybe you will find something.

id="elements" is perfect place to start
`);} 