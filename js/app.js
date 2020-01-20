// Event listener
document.querySelector('.btn').addEventListener('click', function(event) {
  const email = document.querySelector('#email');
  const error = document.querySelectorAll('.hide');

  if ((email.value = '')) {
    error[0].classList.remove('hide');
    error[1].classList.remove('hide');
    email.value = '';
    setTimeout(function() {
      error[0].classList.add('hide');
      error[1].classList.add('hide');
    }, 3000);
  }
  event.preventDefault();
});
