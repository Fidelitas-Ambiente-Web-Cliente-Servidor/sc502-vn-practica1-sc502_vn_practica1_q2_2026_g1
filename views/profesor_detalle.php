<section class="prof-header">
  <div class="container">
    <p class="prof-header-label">Perfil</p>
    <h1 class="prof-header-title"><?= htmlspecialchars($profesor['nombre'] ?? 'Profesor no encontrado') ?></h1>
  </div>
</section>

<?php if ($profesor): ?>
<section class="prof-team">
  <div class="container">
    <div class="row g-4">
      <div class="col-12 col-md-4">
        <img src="<?= htmlspecialchars($profesor['foto']) ?>" alt="<?= htmlspecialchars($profesor['nombre']) ?>" class="prof-img w-100">
      </div>
      <div class="col-12 col-md-8">
        <p><strong>Especialidad:</strong> <?= htmlspecialchars($profesor['especialidad']) ?></p>
        <p><?= htmlspecialchars($profesor['descripcion']) ?></p>
        <p><strong>Correo:</strong> <?= htmlspecialchars($profesor['correo']) ?></p>
        <a href="index.php?controller=profesores&action=index" class="btn-ghost-custom">← Volver a Profesores</a>
      </div>
    </div>
  </div>
</section>
<?php else: ?>
<div class="container"><p>No se encontró el profesor solicitado.</p></div>
<?php endif; ?>
