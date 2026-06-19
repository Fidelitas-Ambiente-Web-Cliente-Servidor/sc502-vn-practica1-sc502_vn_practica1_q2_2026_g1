// Obtener los elementos del formulario
const formContacto = document.getElementById("formContacto");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("btnEnviar");
const mensajeExito = document.getElementById("mensajeExito");

// Obtener los elementos donde se mostrarán los errores
const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorTelefono = document.getElementById("errorTelefono");
const errorAsunto = document.getElementById("errorAsunto");
const errorMensaje = document.getElementById("errorMensaje");

// Valida que el nombre tenga mínimo 5 caracteres y solo letras o espacios
function validarNombre() {
  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  if (nombre.value.trim().length < 5) {
    errorNombre.textContent = "El nombre debe tener mínimo 5 caracteres.";
    return false;
  }

  if (!regexNombre.test(nombre.value.trim())) {
    errorNombre.textContent = "El nombre solo puede contener letras y espacios.";
    return false;
  }

  errorNombre.textContent = "";
  return true;
}

// Valida el correo usando una expresión regular
function validarCorreo() {
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexCorreo.test(correo.value.trim())) {
    errorCorreo.textContent = "Ingrese un correo electrónico válido.";
    return false;
  }

  errorCorreo.textContent = "";
  return true;
}

// Valida que el teléfono tenga solo números y mínimo 8 dígitos
function validarTelefono() {
  const regexTelefono = /^[0-9]+$/;

  if (!regexTelefono.test(telefono.value.trim())) {
    errorTelefono.textContent = "El teléfono solo puede contener números.";
    return false;
  }

  if (telefono.value.trim().length < 8) {
    errorTelefono.textContent = "El teléfono debe tener mínimo 8 dígitos.";
    return false;
  }

  errorTelefono.textContent = "";
  return true;
}

// Valida que el asunto tenga mínimo 3 caracteres
function validarAsunto() {
  if (asunto.value.trim().length < 3) {
    errorAsunto.textContent = "El asunto debe tener mínimo 3 caracteres.";
    return false;
  }

  errorAsunto.textContent = "";
  return true;
}

// Valida que el mensaje tenga mínimo 20 caracteres
function validarMensaje() {
  if (mensaje.value.trim().length < 20) {
    errorMensaje.textContent = "El mensaje debe tener mínimo 20 caracteres.";
    return false;
  }

  errorMensaje.textContent = "";
  return true;
}

function validarFormulario() {
  const formularioValido =
    validarNombre() &&
    validarCorreo() &&
    validarTelefono() &&
    validarAsunto() &&
    validarMensaje();

  btnEnviar.disabled = !formularioValido;
}

// Validación en tiempo real
nombre.addEventListener("input", validarFormulario);
correo.addEventListener("input", validarFormulario);
telefono.addEventListener("input", validarFormulario);
asunto.addEventListener("input", validarFormulario);
mensaje.addEventListener("input", validarFormulario);

// Evento al enviar el formulario
formContacto.addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    validarNombre() &&
    validarCorreo() &&
    validarTelefono() &&
    validarAsunto() &&
    validarMensaje()
  ) {
    mensajeExito.textContent =
      "Mensaje enviado correctamente. Pronto nos pondremos en contacto contigo.";

    formContacto.reset();
    btnEnviar.disabled = true;
  }
});

