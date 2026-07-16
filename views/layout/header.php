<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?= $titulo ?? 'CodeNova Academy' ?></title>
  <!-- Bootstrap SOLO para sistema de grillas -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
  <!-- Estilos del sitio -->
  <link rel="stylesheet" href="css/style.css" />
  <?php if (!empty($cssExtra)): ?>
  <link rel="stylesheet" href="css/<?= $cssExtra ?>" />
  <?php endif; ?>
</head>
<body>

  <!--  NAVBAR  -->
  <nav class="navbar navbar-expand-lg" id="main-navbar">
    <div class="container">
      <a class="navbar-brand" href="index.php?controller=index&action=index">
        CodeNova<span class="accent">.</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-label="Menú">
        <span class="toggler-icon"></span>
        <span class="toggler-icon"></span>
        <span class="toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link <?= ($pagina ?? '') === 'index' ? 'active' : '' ?>" href="index.php?controller=index&action=index">Inicio</a></li>
          <li class="nav-item"><a class="nav-link <?= ($pagina ?? '') === 'cursos' ? 'active' : '' ?>" href="index.php?controller=cursos&action=index">Cursos</a></li>
          <li class="nav-item"><a class="nav-link <?= ($pagina ?? '') === 'profesores' ? 'active' : '' ?>" href="index.php?controller=profesores&action=index">Profesores</a></li>
          <li class="nav-item"><a class="nav-link <?= ($pagina ?? '') === 'contacto' ? 'active' : '' ?>" href="index.php?controller=contacto&action=index">Contacto</a></li>
        </ul>
      </div>
    </div>
  </nav>