const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

// Function to open the modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Add an event listener to open the modal after 20 seconds
setTimeout(openModal, 20000);

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});





