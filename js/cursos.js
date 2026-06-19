
const cursos = [
  {
    nombre: 'Python para Todos',
    categoria: 'Programación',
    duracion: '10 semanas',
    precio: '$129',
    descripcion: 'Desde cero hasta proyectos reales: automatización, programación orientada a objetos y análisis de datos.',
    imagen: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80',
    badge: 'Popular', badgeColor: 'accent'
  },
  {
    nombre: 'Java desde Cero',
    categoria: 'Programación',
    duracion: '12 semanas',
    precio: '$149',
    descripcion: 'Fundamentos sólidos de Java y POO para crear aplicaciones de escritorio y servicios backend.',
    imagen: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&q=80'
  },
  {
    nombre: 'Algoritmos y Estructuras de Datos',
    categoria: 'Programación',
    duracion: '8 semanas',
    precio: '$99',
    descripcion: 'Pensamiento lógico, complejidad y resolución de problemas para superar entrevistas técnicas.',
    imagen: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
    badge: 'Avanzado', badgeColor: 'blue'
  },
  {
    nombre: 'Full Stack Web',
    categoria: 'Desarrollo Web',
    duracion: '16 semanas',
    precio: '$199',
    descripcion: 'HTML, CSS, JavaScript, Node.js y bases de datos relacionales. Conviértete en desarrollador completo.',
    imagen: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
    badge: 'Nuevo', badgeColor: ''
  },
  {
    nombre: 'Frontend con React',
    categoria: 'Desarrollo Web',
    duracion: '10 semanas',
    precio: '$159',
    descripcion: 'Componentes, hooks y consumo de APIs para construir interfaces modernas, rápidas y mantenibles.',
    imagen: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    badge: 'Popular', badgeColor: 'accent'
  },
  {
    nombre: 'Diseño UI/UX',
    categoria: 'Desarrollo Web',
    duracion: '6 semanas',
    precio: '$119',
    descripcion: 'Principios de diseño, prototipado en Figma y experiencia de usuario centrada en las personas.',
    imagen: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80'
  },
  {
    nombre: 'Machine Learning',
    categoria: 'Datos e IA',
    duracion: '14 semanas',
    precio: '$229',
    descripcion: 'Redes neuronales, modelos generativos y visión por computadora con Python y TensorFlow.',
    imagen: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    badge: 'Avanzado', badgeColor: 'blue'
  },
  {
    nombre: 'Data Science con Python',
    categoria: 'Datos e IA',
    duracion: '12 semanas',
    precio: '$179',
    descripcion: 'Pandas, visualización y estadística aplicada para tomar mejores decisiones basadas en datos.',
    imagen: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    badge: 'Popular', badgeColor: 'accent'
  }
];

/* Orden en que se mostrarán las categorías en el catálogo */
const categorias = ['Programación', 'Desarrollo Web', 'Datos e IA'];

/* =========================================================
 * 2) REFERENCIAS DEL DOM
 * ========================================================= */
const catalogo      = document.getElementById('catalog');
const inputBusqueda = document.getElementById('courseSearch');
const chips         = document.querySelectorAll('.chip');
const noResults     = document.getElementById('noResults');

/* Estado de los filtros */
let categoriaActiva = 'todas';

/* Guardamos la relación curso -> tarjeta para mostrar/ocultar al filtrar
 * tarjetas = [{ curso, col }]   |   bloques = { categoria: elementoSección } */
let tarjetas = [];
let bloques  = {};

/* =========================================================
 * 3) CREA UNA TARJETA DE CURSO y la devuelve como elemento del DOM
 * ========================================================= */
function crearTarjeta(curso) {
  const col = document.createElement('div');
  col.className = 'col-md-6 col-lg-4 curso-col';
  col.setAttribute('data-anim', 'fade-up');

  // Etiqueta (badge) opcional
  const badgeHTML = curso.badge
    ? `<span class="curso-badge ${curso.badgeColor || ''}">${curso.badge}</span>`
    : '';

  col.innerHTML = `
    <article class="curso-card">
      <div class="curso-img">
        <img src="${curso.imagen}" alt="Curso ${curso.nombre}" loading="lazy" />
        ${badgeHTML}
      </div>
      <div class="curso-body">
        <span class="curso-category">${curso.categoria}</span>
        <h3 class="curso-name">${curso.nombre}</h3>
        <p class="curso-desc">${curso.descripcion}</p>
        <div class="curso-meta">
          <span class="curso-duration">${curso.duracion}</span>
          <span class="curso-price">${curso.precio}</span>
        </div>
        <a href="#" class="btn-card">Ver más</a>
      </div>
    </article>`;

  return col;
}

/* =========================================================
 * 4) RENDERIZA EL CATÁLOGO completo agrupado por categoría
 *    (se ejecuta una sola vez al cargar la página)
 * ========================================================= */
function renderCatalogo() {
  catalogo.innerHTML = '';
  tarjetas = [];
  bloques  = {};

  categorias.forEach((categoria, indice) => {
    // Tomamos solo los cursos de esta categoría
    const cursosCategoria = cursos.filter(curso => curso.categoria === categoria);
    if (cursosCategoria.length === 0) return;

    // Sección de la categoría
    const bloque = document.createElement('section');
    bloque.className = 'category-block';

    // Encabezado de la categoría
    const numero = String(indice + 1).padStart(2, '0');
    const header = document.createElement('div');
    header.className = 'category-header';
    header.setAttribute('data-anim', 'fade-up');
    header.innerHTML = `
      <p class="category-eyebrow"><span class="ph-eyebrow-line"></span>Categoría ${numero}</p>
      <h2 class="category-title">${categoria}</h2>`;
    bloque.appendChild(header);

    // Fila con las tarjetas
    const fila = document.createElement('div');
    fila.className = 'row g-4';

    cursosCategoria.forEach(curso => {
      const col = crearTarjeta(curso);
      fila.appendChild(col);
      tarjetas.push({ curso, col }); // guardamos la referencia para filtrar luego
    });

    bloque.appendChild(fila);
    catalogo.appendChild(bloque);
    bloques[categoria] = bloque;
  });
}

/* =========================================================
 * 5) FILTRO COMBINADO: búsqueda (nombre o descripción) + categoría
 * ========================================================= */
function aplicarFiltros() {
  const termino = inputBusqueda.value.trim().toLowerCase();

  // Lista de cursos que cumplen AMBOS filtros a la vez
  const visibles = cursos.filter(curso => {
    const coincideCategoria =
      categoriaActiva === 'todas' || curso.categoria === categoriaActiva;

    const coincideTexto =
      curso.nombre.toLowerCase().includes(termino) ||
      curso.descripcion.toLowerCase().includes(termino);

    return coincideCategoria && coincideTexto;
  });

  // Mostramos u ocultamos cada tarjeta según si su curso quedó en "visibles"
  tarjetas.forEach(({ curso, col }) => {
    col.style.display = visibles.includes(curso) ? '' : 'none';
  });

  // Ocultamos las categorías que se quedaron sin tarjetas visibles
  categorias.forEach(categoria => {
    const bloque = bloques[categoria];
    if (!bloque) return;
    const tieneVisibles = visibles.some(curso => curso.categoria === categoria);
    bloque.style.display = tieneVisibles ? '' : 'none';
  });

  // Mensaje de "sin resultados"
  noResults.hidden = visibles.length > 0;
}

/* =========================================================
 * 6) ANIMACIONES DE ENTRADA (mismo efecto que el resto del sitio)
 * ========================================================= */
function activarAnimaciones() {
  const elementos = document.querySelectorAll('[data-anim]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay) || 0;
        setTimeout(() => entry.target.classList.add('anim-visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  elementos.forEach(el => observer.observe(el));
}

/* =========================================================
 * 7) EVENTOS
 * ========================================================= */

// Búsqueda en tiempo real: se dispara con cada tecla
inputBusqueda.addEventListener('input', aplicarFiltros);

// Filtro por categoría: al hacer clic en un chip
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('is-active')); // limpiamos el chip activo
    chip.classList.add('is-active');                     // marcamos el seleccionado
    categoriaActiva = chip.dataset.filter;               // guardamos la categoría
    aplicarFiltros();                                    // re-aplicamos los filtros
  });
});

/* =========================================================
 * 8) ARRANQUE — al cargar la página
 * ========================================================= */
renderCatalogo();       // pinta todas las tarjetas desde el array
activarAnimaciones();   // activa las animaciones de entrada