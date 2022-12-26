const signUpFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('.signup-name').value.trim();
  const password = document.querySelector('.signup-password').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up');
    }
  }
};

const signUpButton = document
  .querySelector('.submit-signup')
  .addEventListener('click', signUpFormHandler);
