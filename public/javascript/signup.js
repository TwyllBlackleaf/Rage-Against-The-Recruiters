async function signupFormHandler(event) {
    event.preventDefault();
    
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const accountType = document.querySelector('input[name="accountType"]:checked').value;

    if (username && email && password && accountType) {
        // fetch url needs to be updated
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password,
                accountType
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

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
