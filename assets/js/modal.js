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

toggleModal("modal");