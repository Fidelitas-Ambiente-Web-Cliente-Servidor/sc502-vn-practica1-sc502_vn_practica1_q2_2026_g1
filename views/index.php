<?php require "views/layout/header.php"; ?>


  <!--  hero  -->
  <section class="hero-section">
    <div class="hero-lines"></div>
    <div class="container hero-inner">
      <div class="hero-deco-number">01</div>
      <div class="row align-items-center w-100">

        <div class="col-lg-6 hero-left" data-anim="fade-up">
          <p class="hero-label">
            <span class="hero-label-line"></span>
            Academia de Tecnología
          </p>
          <h1 class="hero-title">
            Aprende a<br>
            <em>construir</em><br>
            el futuro.
          </h1>
          <p class="hero-subtitle">
            Domina las habilidades digitales más demandadas del mercado
            con instructores expertos y proyectos del mundo real.
          </p>
          <div class="hero-actions">
            <a href="index.php?controller=cursos&action=index" class="btn-primary-custom">Explorar Cursos</a>
            <a href="index.php?controller=contacto&action=index" class="btn-ghost-custom">Contáctanos</a>
          </div>
        </div>

        <div class="col-lg-6 hero-image-col d-none d-lg-block" data-anim="fade-left">
          <div class="hero-img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80"
              alt="Estudiantes de CodeNova Academy trabajando en un proyecto"
            />
            <div class="hero-img-badge">
              <strong>4,800+</strong>
              estudiantes activos
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="hero-bottom-bar">
      <div class="container">
        <a href="index.php?controller=cursos&action=index" class="hero-tag">Desarrollo Web</a>
        <a href="index.php?controller=cursos&action=index" class="hero-tag">Python</a>
        <a href="index.php?controller=cursos&action=index" class="hero-tag">Inteligencia Artificial</a>
        <a href="index.php?controller=cursos&action=index" class="hero-tag">Data Science</a>
        <a href="index.php?controller=cursos&action=index" class="hero-tag">Ciberseguridad</a>
      </div>
    </div>
  </section>

  <!--  cursos destacados  -->
  <section class="section-featured-courses" id="cursos-destacados">
    <div class="container">
      <div class="courses-grid-header">
        <div data-anim="fade-up">
          <p class="section-eyebrow">
            <span class="section-eyebrow-line"></span>
            Lo más popular
          </p>
          <h2 class="section-title-lg">Cursos Destacados</h2>
          <p class="section-desc">
            Elige tu camino y empieza a construir desde el primer día.
          </p>
        </div>
        <div data-anim="fade-up" data-delay="100">
          <a href="index.php?controller=cursos&action=index" class="btn-ghost-custom">Ver todos los cursos</a>
        </div>
      </div>


      
  <!--  tarjetas se hacen desde el php  -->
<div class="row" id="contenedorCursos">

<?php foreach ($cursos as $curso): ?>

    <div class="col-md-4">

        <div class="course-card">

            <div class="course-card-img">

                <img src="<?= htmlspecialchars($curso['imagen']) ?>"
                     alt="<?= htmlspecialchars($curso['nombre']) ?>">

                <span class="course-badge <?= htmlspecialchars($curso['badgeClass']) ?>">
                    <?= htmlspecialchars($curso['badge']) ?>
                </span>

            </div>

            <div class="course-card-body">

                <span class="course-category">
                    <?= htmlspecialchars($curso['categoria']) ?>
                </span>

                <h3 class="course-name">
                    <?= htmlspecialchars($curso['nombre']) ?>
                </h3>

                <p class="course-desc">
                    <?= htmlspecialchars($curso['descripcion']) ?>
                </p>

                <a href="index.php?controller=cursos&action=index" class="btn-card">
                    Ver más
                </a>

            </div>

        </div>

    </div>

<?php endforeach; ?>

</div>
</section>   

  <!--  estadistica  -->
  <section class="section-stats">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-lg-4 stats-header" data-anim="fade-up">
          <p class="section-eyebrow">
            <span class="section-eyebrow-line"></span>
            Resultados reales
          </p>
          <h2 class="stats-title">Números que<br><em style="color:var(--color-accent);font-style:italic;">hablan</em><br>por sí solos.</h2>
        </div>

        <div class="col-lg-8">
          <div class="row g-0">

            <div class="col-6 col-md-3" data-anim="fade-up" data-delay="0">
              <div class="stat-item">
                <div>
                  <span class="stat-number" data-target="4800">0</span><span class="stat-symbol">+</span>
                </div>
                <p class="stat-label">Estudiantes activos</p>
              </div>
            </div>

            <div class="col-6 col-md-3" data-anim="fade-up" data-delay="100">
              <div class="stat-item">
                <div>
                  <span class="stat-number" data-target="38">0</span><span class="stat-symbol">+</span>
                </div>
                <p class="stat-label">Profesores expertos</p>
              </div>
            </div>

            <div class="col-6 col-md-3" data-anim="fade-up" data-delay="200">
              <div class="stat-item">
                <div>
                  <span class="stat-number" data-target="120">0</span><span class="stat-symbol">+</span>
                </div>
                <p class="stat-label">Cursos disponibles</p>
              </div>
            </div>

            <div class="col-6 col-md-3" data-anim="fade-up" data-delay="300">
              <div class="stat-item">
                <div>
                  <span class="stat-number" data-target="96">0</span><span class="stat-symbol">%</span>
                </div>
                <p class="stat-label">Tasa de empleo</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>

  <!--  TESTIMONIOS  -->
  <section class="section-testimonials" id="testimonios">
    <div class="container">
      <div class="testimonials-layout">

        <div class="testimonials-aside" data-anim="fade-right">
          <p class="section-eyebrow">
            <span class="section-eyebrow-line"></span>
            Lo que dicen
          </p>
          <h2 class="section-title-lg">Historias de<br><em style="font-style:italic;color:var(--color-accent);">éxito</em><br>reales.</h2>
          <p>
            Más de 4,800 profesionales transformaron su carrera con
            CodeNova Academy. Aquí algunos de ellos.
          </p>
        </div>

        <div class="testimonials-list">

          <div class="testimonial-card" data-anim="fade-up" data-delay="0">
            <p class="testimonial-text">
              Llegué sin conocimientos previos y en 6 meses conseguí mi primer empleo
              como desarrolladora frontend. Los proyectos prácticos hacen toda la diferencia.
            </p>
            <div class="testimonial-author">
              <div class="author-avatar" style="background: #4b7029;">A</div>
              <div>
                <p class="author-name">Andrea Solís</p>
                <p class="author-role">Frontend Developer — StartupCR</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card" data-anim="fade-up" data-delay="100">
            <p class="testimonial-text">
              El curso de Machine Learning fue exactamente lo que necesitaba para
              pasar de analista de datos a ML Engineer. Los profesores responden
              todas las dudas y el material es excelente.
            </p>
            <div class="testimonial-author">
              <div class="author-avatar" style="background: #174355;">C</div>
              <div>
                <p class="author-name">Carlos Mendoza</p>
                <p class="author-role">ML Engineer — TechLabs</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card" data-anim="fade-up" data-delay="200">
            <p class="testimonial-text">
              Estudié Full Stack mientras trabajaba de tiempo completo. La flexibilidad
              del programa y el soporte del equipo me permitieron terminar sin problemas.
            </p>
            <div class="testimonial-author">
              <div class="author-avatar" style="background: #533161;">M</div>
              <div>
                <p class="author-name">Mariana Torres</p>
                <p class="author-role">Full Stack Developer — Freelance</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card" data-anim="fade-up" data-delay="300">
            <p class="testimonial-text">
              La comunidad de CodeNova es increíble. Después de graduarme, sigo
              participando en las sesiones en vivo y continúo aprendiendo constantemente.
            </p>
            <div class="testimonial-author">
              <div class="author-avatar" style="background: #531c4c;">R</div>
              <div>
                <p class="author-name">Rodrigo Vargas</p>
                <p class="author-role">DevOps Engineer — CloudBase</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!--  CTA FINAL  -->
  <section class="section-cta">
    <div class="cta-bg-text">Nova</div>
    <div class="container cta-content" data-anim="fade-up">
      <p class="cta-label">
        <span class="hero-label-line"></span>
        Comienza hoy
      </p>
      <h2 class="cta-title">
        Tu carrera en tech<br>
        <em>empieza aqui.</em>
      </h2>
      <p class="cta-subtitle">Sin requisitos previos. A tu ritmo. Con resultados reales.</p>
      <a href="index.php?controller=contacto&action=index" class="btn-cta">Inscríbete ahora</a>
    </div>
  </section>


      <?php require "views/layout/footer.php"; ?>

 