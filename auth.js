// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // In a real app, you would send this to your backend
    console.log('Login attempt:', { email, password });
    
    // For demo purposes, just show an alert and redirect
    alert('Login successful! Redirecting to home page...');
    window.location.href = 'index.html';
});

// Handle registration form submission
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // In a real app, you would send this to your backend
    console.log('Registration:', { name, email, password });
    
    // For demo purposes, just show an alert and redirect
    alert('Registration successful! Redirecting to login page...');
    window.location.href = 'login.html';
});