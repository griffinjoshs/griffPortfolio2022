const modal = document.getElementById('modal')
const email = document.getElementById('userEmail')
const modalEmail = document.getElementById('modal-email')

const showModal = () => {
    modal.classList.remove('hide')
    console.log(email.value)
    modalEmail.value = email.value
}

const hideModal = () => {
    modal.classList.add('hide')
}