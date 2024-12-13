const domElements = {
	submitBtn: document.querySelector('.submit-btn'),
    emailInput: document.querySelector('#user-email'),
    errorIcon: document.querySelector('.error-icon'),
    errorAdvice: document.querySelector('.email-advice--error'),
}

domElements.submitBtn.addEventListener('click', (event) => {
	event.preventDefault()

	const email = domElements.emailInput.value
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	if (!emailPattern.test(email)) {
		domElements.errorIcon.style.display = 'block'
		domElements.errorAdvice.style.display = 'inline'
	}
	else {
		domElements.errorIcon.style.display = 'none'
		domElements.errorAdvice.style.display = 'none'
	}
})
