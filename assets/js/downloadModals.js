let openModalButtons,
    closeModalButtons,
    overlay;

function setUpDownloadModals() {
    let openModalButtons = document.querySelectorAll('[data-modal-target]');
    let closeModalButtons = document.querySelectorAll('[data-close-button]');
    let overlay = document.querySelector('#overlay');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal);
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });	

    overlay.addEventListener('click', () => {
        const modal = document.querySelector('.modal.active');
        closeModal(modal);
    });

}

function openModal(modal) {
    modal.classList.add('active');
    document.querySelector('#overlay').classList.add('active');
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.querySelector('#overlay').classList.remove('active');
}