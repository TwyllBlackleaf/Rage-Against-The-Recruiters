async function loginFormHandler(event) {
    event.preventDefault();

    // queryselector needs to be updated
    const email = document.querySelector('#').value.trim();
    const password = document.querySelector('#').value.trim();

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
document.querySelector('.')
    .addEventListener('submit', loginFormHandler);
