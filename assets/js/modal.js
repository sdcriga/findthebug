// There is notign to search for 
// just script that toggle modal windows
const toggleModal = (modalId) => {
    let modal = document.getElementById(modalId);
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}

document.getElementById("openModal1").addEventListener("click", () => { toggleModal("modal");});
document.getElementById("openModal2").addEventListener("click", () => { toggleModal("modalHint");});
document.getElementById("closeModalBtn1").addEventListener("click", () => {toggleModal("modal")});
document.getElementById("closeModalBtn2").addEventListener("click", () => {toggleModal("modalHint")});

document.getElementById("Swisscom").addEventListener("click", () => {toggleModal("swisscom")});
document.getElementById("closeSwisscom").addEventListener("click", () => {toggleModal("swisscom")});

toggleModal("modal");
setTimeout(() => {
    toggleModal("modalHint");
  }, 25000);