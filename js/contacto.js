


document.addEventListener('DOMContentLoaded', () => {
  const formContacto = document.getElementById('formContacto');

  const nombre = document.getElementById('nombre');
  const correo = document.getElementById('correo');
  const telefono = document.getElementById('telefono');
  const asunto = document.getElementById('asunto');
  const mensaje = document.getElementById('mensaje');

  const errorNombre = document.getElementById('errorNombre');
  const errorCorreo = document.getElementById('errorCorreo');
  const errorTelefono = document.getElementById('errorTelefono');
  const errorAsunto = document.getElementById('errorAsunto');
  const errorMensaje = document.getElementById('errorMensaje');

  const btnEnviar = document.getElementById('btnEnviar');
  const mensajeExito = document.getElementById('mensajeExito');

  nombre.addEventListener('input', validarFormulario);
  correo.addEventListener('input', validarFormulario);
  telefono.addEventListener('input', validarFormulario);
  asunto.addEventListener('input', validarFormulario);
  mensaje.addEventListener('input', validarFormulario);

  formContacto.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validarFormulario()) {
      mensajeExito.textContent = 'Mensaje enviado correctamente.';
      formContacto.reset();
      btnEnviar.disabled = true;
    }
  });

  function validarFormulario() {
    let valido = true;

    mensajeExito.textContent = '';

    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^[0-9]+$/;

    if (nombre.value.trim().length < 5) {
      errorNombre.textContent = 'El nombre debe tener mínimo 5 caracteres.';
      valido = false;
    } else if (!regexNombre.test(nombre.value.trim())) {
      errorNombre.textContent = 'El nombre solo debe contener letras y espacios.';
      valido = false;
    } else {
      errorNombre.textContent = '';
    }

    if (!regexCorreo.test(correo.value.trim())) {
      errorCorreo.textContent = 'Ingrese un correo electrónico válido.';
      valido = false;
    } else {
      errorCorreo.textContent = '';
    }

    if (!regexTelefono.test(telefono.value.trim())) {
      errorTelefono.textContent = 'El teléfono solo debe contener números.';
      valido = false;
    } else if (telefono.value.trim().length < 8) {
      errorTelefono.textContent = 'El teléfono debe tener mínimo 8 dígitos.';
      valido = false;
    } else {
      errorTelefono.textContent = '';
    }

    if (asunto.value.trim().length < 3) {
      errorAsunto.textContent = 'El asunto debe tener mínimo 3 caracteres.';
      valido = false;
    } else {
      errorAsunto.textContent = '';
    }

    if (mensaje.value.trim().length < 20) {
      errorMensaje.textContent = 'El mensaje debe tener mínimo 20 caracteres.';
      valido = false;
    } else {
      errorMensaje.textContent = '';
    }

    btnEnviar.disabled = !valido;

    return valido;
  }
});