async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/', {
            // method: 'post'
            body: JSON.stringify({
                email,
                password
            }),
            // headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            // replace url needs to be updated
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

// queryselector needs to be updated
document.querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);
