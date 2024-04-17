
const form = document.querySelector('form')
form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
        const response = await fetch('http://localhost:5678/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed')
        }
        const responseData = await response.json()
        localStorage.setItem('token', responseData.token)
        window.location.href = 'index.html'
    } catch (error) {
        console.error('Login error:', error.message);
        alert("Echec de connexion, veuillez remplir les bonnes informations")
    }
})

