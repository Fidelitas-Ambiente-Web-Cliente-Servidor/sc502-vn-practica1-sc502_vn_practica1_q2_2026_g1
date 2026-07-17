<?php
$titulo   = 'CodeNova Academy — Cursos';
$pagina   = 'cursos';
$cssExtra = 'cursos.css';
require __DIR__ . '/layout/header.php';

// Agrupamos los cursos por categoría para mantener las secciones del catálogo
$porCategoria = [];
foreach ($cursos as $curso) {
    $porCategoria[$curso['categoria']][] = $curso;
}
?>

  <!--  ENCABEZADO DE PÁGINA  -->
  <header class="page-header">
    <div class="page-header-deco">02</div>
    <div class="container page-header-inner">
      <div class="row">
        <div class="col-lg-9" data-anim="fade-up">
          <p class="ph-eyebrow">
            <span class="ph-eyebrow-line"></span>
            Catálogo completo
          </p>
          <h1 class="ph-title">
            Encuentra el curso<br>
            que <em>impulsa</em> tu carrera.
          </h1>
          <p class="ph-desc">
            Más de 120 programas diseñados con la industria. Filtra por categoría,
            elige tu nivel y empieza a construir desde el primer día.
          </p>
        </div>
      </div>
    </div>
  </header>

  <!--  FILTRO POR CATEGORÍA (GET al servidor)  -->
  <section class="search-section">
    <div class="container">
      <form method="GET" action="index.php" class="filter-form">
        <input type="hidden" name="controller" value="cursos" />
        <input type="hidden" name="action" value="index" />
        <label for="categoria" class="filter-label">Categoría</label>
        <select name="categoria" id="categoria" class="filter-select">
          <option value="">Todas</option>
          <?php foreach ($categorias as $cat): ?>
          <option value="<?= htmlspecialchars($cat) ?>" <?= $categoriaActiva === $cat ? 'selected' : '' ?>>
            <?= htmlspecialchars($cat) ?>
          </option>
          <?php endforeach; ?>
        </select>
        <button type="submit" class="chip">Filtrar</button>
      </form>

      <!-- Búsqueda de Tarea 2 comentada: se reactiva en Tarea 4
      <div class="search-bar" data-anim="fade-up">
        <span class="search-icon" aria-hidden="true">&#9906;</span>
        <input type="search" id="courseSearch" class="search-input"
               placeholder="Buscar curso, lenguaje o tecnología..." aria-label="Buscar curso" />
      </div>
      -->
    </div>
  </section>

  <!--  CATÁLOGO (las tarjetas vienen de la tabla cursos vía CursoModel)  -->
  <main class="catalog">
    <div class="container">
      <div id="catalog">

        <?php if (empty($cursos)): ?>
        <p class="no-results">No encontramos cursos que coincidan con tu búsqueda.</p>
        <?php endif; ?>

        <?php $indice = 0; foreach ($porCategoria as $categoria => $lista): $indice++; ?>
        <section class="category-block">
          <div class="category-header">
            <p class="category-eyebrow">
              <span class="ph-eyebrow-line"></span>Categoría <?= str_pad($indice, 2, '0', STR_PAD_LEFT) ?>
            </p>
            <h2 class="category-title"><?= htmlspecialchars($categoria) ?></h2>
          </div>

          <div class="row g-4">
            <?php foreach ($lista as $curso): ?>
            <div class="col-md-6 col-lg-4 curso-col">
              <article class="curso-card">
                <div class="curso-img">
                  <img src="<?= htmlspecialchars($curso['imagen']) ?>" alt="Curso <?= htmlspecialchars($curso['nombre']) ?>" loading="lazy" />
                  <?php if (!empty($curso['badge'])): ?>
                  <span class="curso-badge <?= htmlspecialchars($curso['badge_color']) ?>"><?= htmlspecialchars($curso['badge']) ?></span>
                  <?php endif; ?>
                </div>
                <div class="curso-body">
                  <span class="curso-category"><?= htmlspecialchars($curso['categoria']) ?></span>
                  <h3 class="curso-name"><?= htmlspecialchars($curso['nombre']) ?></h3>
                  <p class="curso-desc"><?= htmlspecialchars($curso['descripcion']) ?></p>
                  <div class="curso-meta">
                    <span class="curso-duration"><?= htmlspecialchars($curso['duracion']) ?></span>
                    <span class="curso-price"><?= htmlspecialchars($curso['precio']) ?></span>
                  </div>
                  <a href="#" class="btn-card">Ver más</a>
                </div>
              </article>
            </div>
            <?php endforeach; ?>
          </div>
        </section>
        <?php endforeach; ?>

      </div>
    </div>
  </main>

<?php require __DIR__ . '/layout/footer.php'; ?>