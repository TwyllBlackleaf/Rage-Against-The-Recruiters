if (localStorage.getItem("user")) {
    document.querySelector("#homepage-login-a").textContent = "Dashboard";
    if (localStorage.getItem("user.user_type") === "Recruiter") {
        document.querySelector("#homepage-login-a").setAttribute("href", "/recruiter_dash");
    } else if (localStorage.getItem("user.user_type") === "Talent") {
        document.querySelector("#homepage-login-a").setAttribute("href", "/talent_dash");
    }
    document.querySelector("#logout-signup-a").setAttribute("href", "");
    document.querySelector("#logout-signup-a").textContent = "Log Out";
} else {
    document.querySelector("#homepage-login-a").textContent = "Log In";
    document.querySelector("#homepage-login-a").setAttribute("href", "/login");

    document.querySelector("#logout-signup-a").textContent = "Sign Up";
    document.querySelector("#logout-signup-a").setAttribute("href", "/signup");
}

