function validation() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const unitCode = document.getElementById('unitcode').value.trim();
    const phone = document.getElementById('phone').value.trim();

    let isValid = true; 

    if (name === '') {
        document.getElementById('name_error').innerText = 'You did not enter your name.';
        isValid = false;
    } else {
        document.getElementById('name_success').innerText = 'valid';
    }

    if (!email.includes('@deakin.edu.au')) {
        document.getElementById('email_error').innerText = 'Must be your deakin email @deakin.edu.au.';
        isValid = false;
    } else {
        document.getElementById('email_success').innerText = 'valid';
    }

    if (unitCode.length !== 6 || !isNaN(unitCode.substring(0, 3)) || isNaN(unitCode.substring(3))) {
        document.getElementById('unitcode_error').innerText = 'UnitCode must be in the format ABC123.';
        isValid = false;
    } else {
        document.getElementById('unitcode_success').innerText = 'valid';
    }

    if (phone.length !== 10 || isNaN(phone)) {
        document.getElementById('phone_error').innerText = 'Phone number must be exactly 10 digits.';
        isValid = false;
    } else {
        document.getElementById('phone_success').innerText = 'valid';
    }

    return isValid;
}
