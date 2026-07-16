/* JS de Tarea 2 desactivado: el renderizado y los filtros ahora los hace
 * el servidor con PHP y MySQL. Se reactiva en Tarea 4. */

// const cursos = [
//   {
//     nombre: 'Python para Todos',
//     categoria: 'Programación',
//     duracion: '10 semanas',
//     precio: '$129',
//     descripcion: 'Desde cero hasta proyectos reales: automatización, programación orientada a objetos y análisis de datos.',
//     imagen: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80',
//     badge: 'Popular', badgeColor: 'accent'
//   },
//   {
//     nombre: 'Java desde Cero',
//     categoria: 'Programación',
//     duracion: '12 semanas',
//     precio: '$149',
//     descripcion: 'Fundamentos sólidos de Java y POO para crear aplicaciones de escritorio y servicios backend.',
//     imagen: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&q=80'
//   },
//   {
//     nombre: 'Algoritmos y Estructuras de Datos',
//     categoria: 'Programación',
//     duracion: '8 semanas',
//     precio: '$99',
//     descripcion: 'Pensamiento lógico, complejidad y resolución de problemas para superar entrevistas técnicas.',
//     imagen: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
//     badge: 'Avanzado', badgeColor: 'blue'
//   },
//   {
//     nombre: 'Full Stack Web',
//     categoria: 'Desarrollo Web',
//     duracion: '16 semanas',
//     precio: '$199',
//     descripcion: 'HTML, CSS, JavaScript, Node.js y bases de datos relacionales. Conviértete en desarrollador completo.',
//     imagen: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
//     badge: 'Nuevo', badgeColor: ''
//   },
//   {
//     nombre: 'Frontend con React',
//     categoria: 'Desarrollo Web',
//     duracion: '10 semanas',
//     precio: '$159',
//     descripcion: 'Componentes, hooks y consumo de APIs para construir interfaces modernas, rápidas y mantenibles.',
//     imagen: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
//     badge: 'Popular', badgeColor: 'accent'
//   },
//   {
//     nombre: 'Diseño UI/UX',
//     categoria: 'Desarrollo Web',
//     duracion: '6 semanas',
//     precio: '$119',
//     descripcion: 'Principios de diseño, prototipado en Figma y experiencia de usuario centrada en las personas.',
//     imagen: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80'
//   },
//   {
//     nombre: 'Machine Learning',
//     categoria: 'Datos e IA',
//     duracion: '14 semanas',
//     precio: '$229',
//     descripcion: 'Redes neuronales, modelos generativos y visión por computadora con Python y TensorFlow.',
//     imagen: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
//     badge: 'Avanzado', badgeColor: 'blue'
//   },
//   {
//     nombre: 'Data Science con Python',
//     categoria: 'Datos e IA',
//     duracion: '12 semanas',
//     precio: '$179',
//     descripcion: 'Pandas, visualización y estadística aplicada para tomar mejores decisiones basadas en datos.',
//     imagen: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
//     badge: 'Popular', badgeColor: 'accent'
//   }
// ];

// const categorias = ['Programación', 'Desarrollo Web', 'Datos e IA'];
// const catalogo      = document.getElementById('catalog');
// const inputBusqueda = document.getElementById('courseSearch');
// const chips         = document.querySelectorAll('.chip');
// const noResults     = document.getElementById('noResults');
// let categoriaActiva = 'todas';
// let tarjetas = [];
// let bloques  = {};
//
// function crearTarjeta(curso) {
//   const col = document.createElement('div');
//   col.className = 'col-md-6 col-lg-4 curso-col';
//   col.setAttribute('data-anim', 'fade-up');
//   const badgeHTML = curso.badge
//     ? `<span class="curso-badge ${curso.badgeColor || ''}">${curso.badge}</span>`
//     : '';
//   col.innerHTML = `
//     <article class="curso-card">
//       <div class="curso-img">
//         <img src="${curso.imagen}" alt="Curso ${curso.nombre}" loading="lazy" />
//         ${badgeHTML}
//       </div>
//       <div class="curso-body">
//         <span class="curso-category">${curso.categoria}</span>
//         <h3 class="curso-name">${curso.nombre}</h3>
//         <p class="curso-desc">${curso.descripcion}</p>
//         <div class="curso-meta">
//           <span class="curso-duration">${curso.duracion}</span>
//           <span class="curso-price">${curso.precio}</span>
//         </div>
//         <a href="#" class="btn-card">Ver más</a>
//       </div>
//     </article>`;
//   return col;
// }
//
// function renderCatalogo() {
//   catalogo.innerHTML = '';
//   tarjetas = [];
//   bloques  = {};
//   categorias.forEach((categoria, indice) => {
//     const cursosCategoria = cursos.filter(curso => curso.categoria === categoria);
//     if (cursosCategoria.length === 0) return;
//     const bloque = document.createElement('section');
//     bloque.className = 'category-block';
//     const numero = String(indice + 1).padStart(2, '0');
//     const header = document.createElement('div');
//     header.className = 'category-header';
//     header.setAttribute('data-anim', 'fade-up');
//     header.innerHTML = `
//       <p class="category-eyebrow"><span class="ph-eyebrow-line"></span>Categoría ${numero}</p>
//       <h2 class="category-title">${categoria}</h2>`;
//     bloque.appendChild(header);
//     const fila = document.createElement('div');
//     fila.className = 'row g-4';
//     cursosCategoria.forEach(curso => {
//       const col = crearTarjeta(curso);
//       fila.appendChild(col);
//       tarjetas.push({ curso, col });
//     });
//     bloque.appendChild(fila);
//     catalogo.appendChild(bloque);
//     bloques[categoria] = bloque;
//   });
// }
//
// function aplicarFiltros() {
//   const termino = inputBusqueda.value.trim().toLowerCase();
//   const visibles = cursos.filter(curso => {
//     const coincideCategoria =
//       categoriaActiva === 'todas' || curso.categoria === categoriaActiva;
//     const coincideTexto =
//       curso.nombre.toLowerCase().includes(termino) ||
//       curso.descripcion.toLowerCase().includes(termino);
//     return coincideCategoria && coincideTexto;
//   });
//   tarjetas.forEach(({ curso, col }) => {
//     col.style.display = visibles.includes(curso) ? '' : 'none';
//   });
//   categorias.forEach(categoria => {
//     const bloque = bloques[categoria];
//     if (!bloque) return;
//     const tieneVisibles = visibles.some(curso => curso.categoria === categoria);
//     bloque.style.display = tieneVisibles ? '' : 'none';
//   });
//   noResults.hidden = visibles.length > 0;
// }
//
// function activarAnimaciones() {
//   const elementos = document.querySelectorAll('[data-anim]');
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const delay = parseInt(entry.target.dataset.delay) || 0;
//         setTimeout(() => entry.target.classList.add('anim-visible'), delay);
//         observer.unobserve(entry.target);
//       }
//     });
//   }, { threshold: 0.1 });
//   elementos.forEach(el => observer.observe(el));
// }
//
// inputBusqueda.addEventListener('input', aplicarFiltros);
// chips.forEach(chip => {
//   chip.addEventListener('click', () => {
//     chips.forEach(c => c.classList.remove('is-active'));
//     chip.classList.add('is-active');
//     categoriaActiva = chip.dataset.filter;
//     aplicarFiltros();
//   });
// });
//
// renderCatalogo();
// activarAnimaciones();