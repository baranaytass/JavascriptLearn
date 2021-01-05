const openModal = document.getElementById('openModal')
const closeModal = document.getElementById('closeModal')
const modal = document.getElementById('modal')

openModal.addEventListener('click', function() { 
    modal.classList.add('open-modal')
})

closeModal.addEventListener('click', function() { 
    modal.classList.remove('open-modal')
})