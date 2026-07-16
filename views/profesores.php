<!-- ENCABEZADO -->
<section class="prof-header">
  <div class="container">
    <p class="prof-header-label">Nuestro equipo</p>
    <h1 class="prof-header-title">Quienes te guían</h1>
    <p class="prof-header-desc">Profesionales apasionados por la tecnología y la enseñanza, comprometidos con tu crecimiento.</p>
  </div>
</section>

<section class="prof-team">
  <div class="container">
    <div class="row g-4" id="profesores-container">
      <?php foreach ($profesores as $profesor): ?>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="prof-card">
            <img src="<?= htmlspecialchars($profesor['foto']) ?>" alt="<?= htmlspecialchars($profesor['nombre']) ?>" class="prof-img">
            <h3><?= htmlspecialchars($profesor['nombre']) ?></h3>
            <p><?= htmlspecialchars($profesor['especialidad']) ?></p>
            <a href="index.php?controller=profesores&action=show&id=<?= $profesor['id'] ?>" class="btn-ghost-custom">Ver más</a>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="prof-mv">
  <div class="container">
    <div class="row g-4">
      <div class="col-12 col-md-6">
        <div class="mv-card">
          <span class="mv-label">Misión</span>
          <h2 class="mv-title">¿Por qué existimos?</h2>
          <p class="mv-text">Formar profesionales en tecnología con una educación accesible, práctica y de calidad, que les permita insertarse con confianza en el mercado laboral digital y generar impacto real en sus comunidades.</p>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="mv-card mv-card-dark">
          <span class="mv-label">Visión</span>
          <h2 class="mv-title">¿Hacia dónde vamos?</h2>
          <p class="mv-text">Ser la academia de tecnología de referencia en América Latina, reconocida por la excelencia de sus egresados, la innovación en sus métodos de enseñanza y su compromiso con la democratización del conocimiento digital.</p>
        </div>
      </div>
    </div>
  </div>
</section>
