async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        localStorage.clear();
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
var logoutHandler = function(event) {
    if (event.target.textContent === "Log Out") {
        localStorage.clear();
        logout();
    }
}

 document.querySelector('#logout-signup-a')
   .addEventListener('click', logoutHandler);
  