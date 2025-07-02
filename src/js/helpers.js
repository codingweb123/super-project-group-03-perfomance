import { refs } from "./refs"
const { registerModal, bookModal } = refs

const openRegisterModal = () => registerModal.classList.add("is-open")
const hideRegisterModal = () => registerModal.classList.remove("is-open")
const openBookModal = () => bookModal.classList.add("is-open")
const hideBookModal = () => bookModal.classList.remove("is-open")

export { openRegisterModal, hideRegisterModal, openBookModal, hideBookModal }