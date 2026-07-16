CREATE TABLE profesores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    especialidad VARCHAR(100) NOT NULL,
    foto VARCHAR(255),
    correo VARCHAR(100),
    descripcion TEXT,
    cursos VARCHAR(255)
);

INSERT INTO profesores (nombre, especialidad, foto, correo, descripcion, cursos) VALUES
('Valeria Calvo', 'Ciencias y Arquitectura de la Información', 'img/IMG_20211018_081536.jpg', 'valeria.calvo@codenova.ac', 'Especialista en gestión de información y tecnologías documentales, con amplia experiencia en entornos académicos y bibliotecológicos.', 'Gestión Documental Digital, Bases de Datos I'),
('Neythan Alvarado', 'Desarrollo de Software', 'img/PHOTO-2026-05-21-21-42-42.jpg', 'neythan.alvarado@codenova.ac', 'Desarrollador con experiencia en construcción de aplicaciones web y móviles, enfocado en buenas prácticas y código limpio.', 'Desarrollo Web, Programación Orientada a Objetos'),
('Ashley Mc Nish Granados', 'Desarrollo Web', 'img/PHOTO-2026-06-03-20-28-40.jpg', 'ashley.mcnish@codenova.ac', 'Desarrolladora frontend con dominio de tecnologías web modernas y experiencia en proyectos colaborativos con control de versiones.', 'Ambiente Web Cliente-Servidor, Diseño UI/UX'),
('Sebastián López', 'Ingeniería en Sistemas', 'img/PHOTO-2026-06-03-20-33-59.jpg', 'sebastian.lopez@codenova.ac', 'Ingeniero en sistemas con conocimientos en infraestructura, bases de datos y desarrollo de soluciones tecnológicas para entornos empresariales.', 'Administración de Proyectos, Redes y Comunicaciones');
('Armando Núñez', 'Bases de Datos', 'img/default-profesor.jpg', 'armando.nunez@codenova.ac', 'Especialista en modelado y administración de bases de datos relacionales, con enfoque en optimización de consultas y seguridad de la información.', 'Bases de Datos II, Administración de Servidores');
