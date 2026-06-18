/*
 * profesores.js
 */
 
// 1. ARRAY DE PROFESORES
// Cada objeto uno es umn profesor con toda su información
const profesores = [
  {
    nombre: "Valeria Calvo",
    especialidad: "Ciencias y Arquitectura de la Información",
    descripcion: "Especialista en gestión de información y tecnologías documentales, con amplia experiencia en entornos académicos y bibliotecológicos.",
    foto: "../img/IMG_20211018_081536.jpg",
    correo: "valeria.calvo@codenova.ac",
    cursosQueImparte: ["Gestión Documental Digital", "Bases de Datos I"]
  },
  {
    nombre: "Neythan Alvarado",
    especialidad: "Desarrollo de Software",
    descripcion: "Desarrollador con experiencia en construcción de aplicaciones web y móviles, enfocado en buenas prácticas y código limpio.",
    foto: "../img/PHOTO-2026-05-21-21-42-42.jpg",
    correo: "neythan.alvarado@codenova.ac",
    cursosQueImparte: ["Desarrollo Web", "Programación Orientada a Objetos"]
  },
  {
    nombre: "Ashley Mc Nish Granados",
    especialidad: "Desarrollo Web",
    descripcion: "Desarrolladora frontend con dominio de tecnologías web modernas y experiencia en proyectos colaborativos con control de versiones.",
    foto: "../img/PHOTO-2026-06-03-20-28-40.jpg",
    correo: "ashley.mcnish@codenova.ac",
    cursosQueImparte: ["Ambiente Web Cliente-Servidor", "Diseño UI/UX"]
  },
  {
    nombre: "Sebastián López",
    especialidad: "Ingeniería en Sistemas",
    descripcion: "Ingeniero en sistemas con conocimientos en infraestructura, bases de datos y desarrollo de soluciones tecnológicas para entornos empresariales.",
    foto: "../img/PHOTO-2026-06-03-20-33-59.jpg",
    correo: "sebastian.lopez@codenova.ac",
    cursosQueImparte: ["Administración de Proyectos", "Redes y Comunicaciones"]
  }
];
 
// 2. RENDERIZA TARJETAS
 
document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('profesores-container');
 
  // Recorremos el array y creamos una tarjeta por cada profesor
  profesores.forEach((profesor, index) => {
    // Columna de Bootstrap
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-lg-3';
 
    // Tarjeta
    const card = document.createElement('div');
    card.className = 'prof-card';
    card.style.cursor = 'pointer';
    // Guardamos el índice del profesor en un atributo data-*
    card.setAttribute('data-profesor-index', index);
 
    // Contenedor de la imagen
    const imgWrap = document.createElement('div');
    imgWrap.className = 'prof-card-img-wrap';
 
    const img = document.createElement('img');
    img.src = profesor.foto;
    img.alt = `Foto de ${profesor.nombre}`;
 
    imgWrap.appendChild(img);
 
    // Cuerpo de la tarjeta
    const body = document.createElement('div');
    body.className = 'prof-card-body';
 
    const specialty = document.createElement('span');
    specialty.className = 'prof-specialty';
    specialty.textContent = profesor.especialidad;
 
    const name = document.createElement('h3');
    name.className = 'prof-name';
    name.textContent = profesor.nombre;
 
    const desc = document.createElement('p');
    desc.className = 'prof-desc';
    desc.textContent = profesor.descripcion;
 
    // El cuerpo
    body.appendChild(specialty);
    body.appendChild(name);
    body.appendChild(desc);
 
    // La tarjeta
    card.appendChild(imgWrap);
    card.appendChild(body);
 
    // La columna
    col.appendChild(card);
 
    //  columna al contenedor principal
    contenedor.appendChild(col);
 
    // 3. EVENTO CLICK: abrir el modal con la info del profesor
    card.addEventListener('click', () => {
      abrirModalProfesor(profesor);
    });
  });
});
 
// 4. ESTE ABRE EL MODAL CON LA INFORMACIÓN DEL PROFESOR
function abrirModalProfesor(profesor) {
  // Rellenamos los campos del modal con los datos del profesor
  document.getElementById('modalProfesorNombre').textContent = profesor.nombre;
  document.getElementById('modalProfesorFoto').src = profesor.foto;
  document.getElementById('modalProfesorFoto').alt = `Foto de ${profesor.nombre}`;
  document.getElementById('modalProfesorEspecialidad').textContent = profesor.especialidad;
  document.getElementById('modalProfesorDescripcion').textContent = profesor.descripcion;
  document.getElementById('modalProfesorCorreo').textContent = profesor.correo;
 
  // Lista de cursos
  const listaCursos = document.getElementById('modalProfesorCursos');
  listaCursos.innerHTML = ''; // limpiamos lo anterior
 
  profesor.cursosQueImparte.forEach(curso => {
    const li = document.createElement('li');
    li.textContent = curso;
    listaCursos.appendChild(li);
  });
 
  // Componente Modal de Bootstrap para mostrarlo
 
  const modal = new bootstrap.Modal(document.getElementById('modalProfesor'));
  modal.show();
}