// Mostrar/ocultar contraseña
const togglePassword = document.querySelector('#togglePassword');
const password1 = document.querySelector('#password1');

if (togglePassword && password1) {
  togglePassword.addEventListener('click', () => {
    const type = password1.type === 'password' ? 'text' : 'password';
    password1.type = type;
    togglePassword.classList.toggle('fa-eye-slash');
  });
}

// Validar que las contraseñas coinciden
const password2 = document.querySelector('#password2');
const message = document.querySelector('#message');

if (password1 && password2 && message) {
  password2.addEventListener('input', () => {
    if (password1.value === password2.value) {
      message.textContent = "Las contraseñas coinciden";
      message.style.color = "green";
    } else {
      message.textContent = "La contraseñas no coinciden";
      message.style.color = "red";
    }
  });
}

// Cambiar color de línea activa
const inputs = document.querySelectorAll('.input-group input');

inputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.classList.add('active');
  });
  input.addEventListener('blur', () => {
    input.parentElement.classList.remove('active');
  });
});
