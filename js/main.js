const SUBMIT_BTN = document.querySelector('.submit-btn')

SUBMIT_BTN.addEventListener('click', (event) => {
	event.preventDefault()

	let email = document.querySelector('#user-email').value
	let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	if (!emailPattern.test(email)) {
		document.querySelector('.error-icon').style.display = 'block'
		document.querySelector('.email-advice--error').style.display = 'inline'
	}
	else {
		document.querySelector('.error-icon').style.display = 'none'
		document.querySelector('.email-advice--error').style.display = 'none'
	}
})
