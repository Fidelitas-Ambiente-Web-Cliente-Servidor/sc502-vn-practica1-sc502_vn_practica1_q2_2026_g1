
<header class="page-header">
    <div class="page-header-deco"></div>

    <div class="page-header-inner">
        <p class="ph-eyebrow">
            <span class="ph-eyebrow-line"></span>
            Hablemos
        </p>

        <h1 class="ph-title">Contáctanos</h1>

        <p class="ph-desc">
            ¿Tienes dudas? Escríbenos y te respondemos pronto.
        </p>
    </div>
</header>

<main class="my-5">
    <div class="row g-5">

        <div class="col-lg-7">
            <h2 class="mb-4">Envíanos un mensaje</h2>

            <form
                id="formContacto"
                action="index.php?controller=contacto&action=guardar"
                method="POST"
                novalidate
            >

                <div class="mb-3">
                    <label for="nombre" class="form-label">
                        Nombre completo
                    </label>

                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        class="form-control"
                        placeholder="Tu nombre"
                    >

                    <small
                        id="errorNombre"
                        class="mensaje-error"
                    ></small>
                </div>

                <div class="mb-3">
                    <label for="correo" class="form-label">
                        Correo electrónico
                    </label>

                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        class="form-control"
                        placeholder="correo@ejemplo.com"
                    >

                    <small
                        id="errorCorreo"
                        class="mensaje-error"
                    ></small>
                </div>

                <div class="mb-3">
                    <label for="telefono" class="form-label">
                        Teléfono
                    </label>

                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        class="form-control"
                        placeholder="88887777"
                    >

                    <small
                        id="errorTelefono"
                        class="mensaje-error"
                    ></small>
                </div>

                <div class="mb-3">
                    <label for="asunto" class="form-label">
                        Asunto
                    </label>

                    <input
                        type="text"
                        id="asunto"
                        name="asunto"
                        class="form-control"
                        placeholder="Asunto del mensaje"
                    >

                    <small
                        id="errorAsunto"
                        class="mensaje-error"
                    ></small>
                </div>

                <div class="mb-3">
                    <label for="mensaje" class="form-label">
                        Mensaje
                    </label>

                    <textarea
                        id="mensaje"
                        name="mensaje"
                        class="form-control"
                        rows="4"
                        placeholder="Escribe tu mensaje aquí..."
                    ></textarea>

                    <small
                        id="errorMensaje"
                        class="mensaje-error"
                    ></small>
                </div>

                <button
                    type="submit"
                    id="btnEnviar"
                    class="btn-contact"
                    disabled
                >
                    Enviar mensaje
                </button>

                <p id="mensajeExito" class="mensaje-exito">
                    <?php
                    if (isset($_GET['enviado'])) {
                        echo 'Mensaje enviado correctamente. '
                           . 'Pronto nos pondremos en contacto contigo.';
                    }
                    ?>
                </p>

            </form>
        </div>

        <div class="col-lg-5">
            <h2 class="mb-4">Información de contacto</h2>

            <p>San José, Costa Rica — Barrio Escalante #42</p>
            <p>+506 2200-1234</p>
            <p>hola@codenova.academy</p>

            <div class="mt-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9!2d-84.0833!3d9.9333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTYnMDAuMCJOIDg0wrAwNScwMC4wIlc!5e0!3m2!1ses!2scr!4v1"
                    width="100%"
                    height="250"
                    style="border: 0;"
                    loading="lazy"
                    allowfullscreen
                ></iframe>
            </div>
        </div>

    </div>
</main>

<script src="js/contacto.js"></script>