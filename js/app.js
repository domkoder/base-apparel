// Event listener
document.querySelector('.btn').addEventListener('click', function(event) {
  const email = document.querySelector('#email');
  const error = document.querySelectorAll('.hide');

  function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  }

  if (validateEmail(email.value) === false || email.value === '') {
    error[0].classList.remove('hide');
    error[1].classList.remove('hide');
    email.value = '';
    setTimeout(function() {
      error[0].classList.add('hide');
      error[1].classList.add('hide');
    }, 2000);
  }
  event.preventDefault();
});
