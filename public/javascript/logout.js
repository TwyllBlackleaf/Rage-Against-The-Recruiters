async function logout() {
    const response = await fetch('/api/users/logout');

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#logoutButton').addEventListener('click', logout);
  