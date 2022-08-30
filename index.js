function validate() {
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let phoneInput = document.getElementById('phone').value
    let batchInput = document.getElementById('batch').value
    let moduleInput = document.getElementById('module').value
    let tnCInput = document.getElementById('tnC').checked


    let error = false
    //first Name
    if (firstNameInput.length >= 3 ) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    } else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error = true
    }
    //last Name
    if (lastNameInput.length >= 3) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    } else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        error = true
    }
    
    // Email
    if (emailInput && emailInput.includes("@") && emailInput.includes(".") && emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
        emailInput.indexOf('@') !== 0) {
        document.getElementById("email-valid").style.display = "block";
        document.getElementById("email-invalid").style.display = "none";
    } else {
        document.getElementById("email-invalid").style.display = "block";
        document.getElementById("email-valid").style.display = "none";
        error = true
    }

    //phone

    if (phoneInput && phoneInput.length === 10 && parseInt(phoneInput)) {
        document.getElementById("phone-valid").style.display = "block";
        document.getElementById("phone-invalid").style.display = "none";
    } else {
        document.getElementById("phone-invalid").style.display = "block";
        document.getElementById("phone-valid").style.display = "none";
        error = true
    }

    //batch

    if (batchInput && batchInput !=='none') {
        document.getElementById("batch-valid").style.display = "block"
        document.getElementById("batch-invalid").style.display = "none"
    } else {
        document.getElementById("batch-invalid").style.display = "block"
        document.getElementById("batch-valid").style.display = "none"
        error = true
    }

    //module

    if (moduleInput && moduleInput !== 'none') {
        document.getElementById("module-valid").style.display = "block"
        document.getElementById("module-invalid").style.display = "none"
    } else {
        document.getElementById("module-invalid").style.display = "block"
        document.getElementById("module-valid").style.display = "none"
        error = true
    }

    //tnC

    if (tnCInput) {
        document.getElementById("tnC-invalid").style.display = "none"

    } else {
        document.getElementById("tnC-invalid").style.display = "block"
        error = true
    }

    if (!error) {
        alert('Your details have saved successfully !')
        
        document.getElementById('first-name').value = ''
        document.getElementById('last-name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('phone').value = ''
        document.getElementById('batch').value = 'None'
        document.getElementById('module').value = 'None'
        document.getElementById('tnC').checked = false

        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('phone-valid').style.display = 'none'
        document.getElementById('batch-valid').style.display = 'none'
        document.getElementById('module-valid').style.display = 'none'

    }
}