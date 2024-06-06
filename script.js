const users = [
    { email: 'user@example.com', password: 'password', role: 'user' },
    { email: 'agent@example.com', password: 'password', role: 'agent' },
    { email: 'admin@example.com', password: 'password', role: 'admin' }
  ];
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      if (user.role === 'user') {
        window.location.href = 'user.html';
      } else if (user.role === 'agent') {
        window.location.href = 'agent.html';
      } else if (user.role === 'admin') {
        window.location.href = 'admin.html';
      }
    } else {
      document.getElementById('error').innerText = 'Invalid credentials';
    }
  });
  
  document.getElementById('userSignupBtn').addEventListener('click', function() {
    window.location.href = 'user-signup.html';
  });
  
  document.getElementById('agentSignupBtn').addEventListener('click', function() {
    window.location.href = 'agent-signup.html';
  });
  
  document.getElementById('adminSignupBtn').addEventListener('click', function() {
    window.location.href = 'admin-signup.html';
  });
  