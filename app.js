//https://www.w3schools.com/js/js_validation_api.asp
// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

const country = document.getElementById('country')
const countryError = document.querySelector('#country + span.error');


const zipCode = document.getElementById('zipCode')
const zipCodeError = document.querySelector('#zipCode + span.error');

const password = document.getElementById('password')
const passwordError = document.querySelector('#password + span.error');

const confirmPassword = document.getElementById('passwordConfirm')
const confirmPasswordError = document.querySelector('#passwordConfirm + span.error');


email.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.
  
    if (email.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      emailError.textContent = ''; // Reset the content of the message
      emailError.className = 'error'; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showEmailError();
    }
  });

country.addEventListener('input', function (event) {
// Each time the user types something, we check if the
// form fields are valid.

if (country.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    countryError.textContent = ''; // Reset the content of the message
    countryError.className = 'error'; // Reset the visual state of the message
} else {
    // If there is still an error, show the correct error
    showCountryError();
}
});

zipCode.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.
  
    if (zipCode.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        zipCodeError.textContent = ''; // Reset the content of the message
        zipCodeError.className = 'error'; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showZipCodeError();
    }
});

password.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.
  
    if (password.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        passwordError.textContent = ''; // Reset the content of the message
        passwordError.className = 'error'; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showPasswordError();
    }
});

confirmPassword.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.
  
    if (password.textContent == confirmPassword.textContent) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        passwordError.textContent = ''; // Reset the content of the message
        passwordError.className = 'error'; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showPasswordError();
    }
});

form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit

  if(!email.validity.valid | !country.validity.valid | !zipCode.validity.valid | !password.validity.valid | !confirmPassword.validity.valid) {
    // If it isn't, we display an appropriate error message
    showEmailError();
    showCountryError();
    showZipCodeError();
    showPasswordError();
    showPasswordConfirmError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});


// Errors

// Email Error
function showEmailError() {
  if(email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if(email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if(email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
  }

  // Set the styling appropriately
  emailError.className = 'error active';
}

// Country Error
function showCountryError() {
    if(country.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
      countryError.textContent = 'You need to enter a Country.';
    } else if(country.validity.tooShort) {
      // If the data is too short,
      // display the following error message.
      countryError.textContent = `Country should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
    }
  
    // Set the styling appropriately
    countryError.className = 'error active';
  }


function showZipCodeError() {
    if(zipCode.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        zipCodeError.textContent = 'You need to enter a Zip Code.';
    } else if(zipCode.validity.patternMismatch) {
        // If the data is too short,
        // display the following error message.
        zipCodeError.textContent = `You are not following the rule XXXX-XXX`;
    }

    // Set the styling appropriately
    zipCodeError.className = 'error active';
    }


function showPasswordError() {
    if(password.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        passwordError.textContent = 'You need to enter a password.';
    } else if(zipCode.validity.tooShort) {
        // If the data is too short,
        // display the following error message.
        passwordError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
    }else if(zipCode.validity.tooLong) {
        // If the data is too long,
        // display the following error message.
        passwordError.textContent = `Email should have a maximum of ${ email.maxLength } characters; you entered ${ email.value.length }.`;
    }

    // Set the styling appropriately
    passwordError.className = 'error active';
    }


function showPasswordConfirmError() {
    console.log(password.textContent != confirmPassword.textContent)
    if(confirmPassword.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        confirmPasswordError.textContent = 'You need to enter the same password.';
    } else if(password.textContent != confirmPassword.textContent) {
        // If the data is too short,
        // display the following error message.
        confirmPasswordError.textContent = `The passwords do not match`;
    }

    // Set the styling appropriately
    confirmPasswordError.className = 'error active';
    }