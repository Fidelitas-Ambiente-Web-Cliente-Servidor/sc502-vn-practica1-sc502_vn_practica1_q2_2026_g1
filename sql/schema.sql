CREATE DATABASE IF NOT EXISTS codenova CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE codenova;
SET NAMES utf8mb4;

CREATE TABLE cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    duracion VARCHAR(30) NOT NULL,
    precio VARCHAR(15) NOT NULL,
    descripcion TEXT NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    badge VARCHAR(30),
    badge_color VARCHAR(20)
);

INSERT INTO cursos (nombre, categoria, duracion, precio, descripcion, imagen, badge, badge_color) VALUES
('Python para Todos', 'Programación', '10 semanas', '$129', 'Desde cero hasta proyectos reales: automatización, programación orientada a objetos y análisis de datos.', 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80', 'Popular', 'accent'),
('Java desde Cero', 'Programación', '12 semanas', '$149', 'Fundamentos sólidos de Java y POO para crear aplicaciones de escritorio y servicios backend.', 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&q=80', NULL, NULL),
('Algoritmos y Estructuras de Datos', 'Programación', '8 semanas', '$99', 'Pensamiento lógico, complejidad y resolución de problemas para superar entrevistas técnicas.', 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80', 'Avanzado', 'blue'),
('Full Stack Web', 'Desarrollo Web', '16 semanas', '$199', 'HTML, CSS, JavaScript, Node.js y bases de datos relacionales. Conviértete en desarrollador completo.', 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80', 'Nuevo', ''),
('Frontend con React', 'Desarrollo Web', '10 semanas', '$159', 'Componentes, hooks y consumo de APIs para construir interfaces modernas, rápidas y mantenibles.', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80', 'Popular', 'accent'),
('Diseño UI/UX', 'Desarrollo Web', '6 semanas', '$119', 'Principios de diseño, prototipado en Figma y experiencia de usuario centrada en las personas.', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80', NULL, NULL),
('Machine Learning', 'Datos e IA', '14 semanas', '$229', 'Redes neuronales, modelos generativos y visión por computadora con Python y TensorFlow.', 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80', 'Avanzado', 'blue'),
('Data Science con Python', 'Datos e IA', '12 semanas', '$179', 'Pandas, visualización y estadística aplicada para tomar mejores decisiones basadas en datos.', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80', 'Popular', 'accent');