const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  // prevent the form from submitting by default
  event.preventDefault();

  // get the form inputs
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const zip = document.getElementById('zip').value;

  // perform validation for each field
  if (name === '') {
    alert('Please enter your name.');
    return;
  }

  if (email === '') {
    alert('Please enter your email.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (phone === '') {
    alert('Please enter your phone number.');
    return;
  }

  if (!isValidPhone(phone)) {
    alert('Please enter a valid phone number.');
    return;
  }

  if (address === '') {
    alert('Please enter your address.');
    return;
  }

  if (zip === '') {
    alert('Please enter your zip code.');
    return;
  }

  if (!isValidZip(zip)) {
    alert('Please enter a valid zip code.');
    return;
  }

  form.submit();
  alert(`Successfully Submitted`);
  
});


function isValidEmail(email) {
  const emailRegex = /[a-z0-9A-Z]{1,20}@[a-z0-9A-Z]{1,10}\.[a-z]{2,}/gim;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

function isValidZip(zip) {
  const zipRegex = /[0-100000]/;
  return zipRegex.test(zip);
}
