async function signupFormHandler(event) {
    event.preventDefault();
    
    // queryselector needs to be updated
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        // fetch url needs to be updated
        const response = await fetch('/', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            // location url needs to be updated
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

// queryselector needs to be updated
document.querySelector('.singup-form').addEventListener('submit', signupFormHandler);