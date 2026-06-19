// array de cursos destacados
const cursos = [
    {
        nombre: "Python para Todos",
        descripcion: "Desde cero hasta proyectos reales. Automatización, análisis de datos y programación orientada a objetos.",
        imagen: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
        categoria: "Programación",
        badge: "Popular",
        badgeClass: "accent"
    },
    {
        nombre: "Full Stack Web",
        descripcion: "HTML, CSS, JavaScript, Node.js y bases de datos relacionales. Conviértete en desarrollador completo.",
        imagen: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
        categoria: "Desarrollo Web",
        badge: "Nuevo",
        badgeClass: ""
    },
    {
        nombre: "Machine Learning",
        descripcion: "Redes neuronales, modelos generativos y visión por computadora con Python y TensorFlow.",
        imagen: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
        categoria: "Inteligencia Artificial",
        badge: "Avanzado",
        badgeClass: "blue"
    }
];

// contenedor donde se agregarán las tarjetas
const contenedor = document.getElementById("contenedorCursos");

// recorrer el arreglo
cursos.forEach(curso => {

    const columna = document.createElement("div");
    columna.className = "col-md-4";

    const tarjeta = document.createElement("div");
    tarjeta.className = "course-card";

    const imagenDiv = document.createElement("div");
    imagenDiv.className = "course-card-img";

    const imagen = document.createElement("img");
    imagen.src = curso.imagen;
    imagen.alt = curso.nombre;

    const badge = document.createElement("span");
    badge.className = `course-badge ${curso.badgeClass}`;
    badge.textContent = curso.badge;

    imagenDiv.appendChild(imagen);
    imagenDiv.appendChild(badge);

    const cuerpo = document.createElement("div");
    cuerpo.className = "course-card-body";

    const categoria = document.createElement("span");
    categoria.className = "course-category";
    categoria.textContent = curso.categoria;

    const nombre = document.createElement("h3");
    nombre.className = "course-name";
    nombre.textContent = curso.nombre;

    const descripcion = document.createElement("p");
    descripcion.className = "course-desc";
    descripcion.textContent = curso.descripcion;

    const boton = document.createElement("a");
    boton.href = "cursos.html";
    boton.className = "btn-card";
    boton.textContent = "Ver más";

    cuerpo.appendChild(categoria);
    cuerpo.appendChild(nombre);
    cuerpo.appendChild(descripcion);
    cuerpo.appendChild(boton);

    tarjeta.appendChild(imagenDiv);
    tarjeta.appendChild(cuerpo);

    columna.appendChild(tarjeta);

    contenedor.appendChild(columna);
});