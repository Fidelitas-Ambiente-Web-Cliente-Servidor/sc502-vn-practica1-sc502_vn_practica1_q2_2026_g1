<?php
require_once __DIR__ . '/../models/CursoModel.php';

class CursosController {

    public function index(): void {
        $modelo = new CursoModel();

        // Si viene una categoría por GET se filtra en el servidor
        $categoriaActiva = $_GET['categoria'] ?? '';

        if ($categoriaActiva !== '') {
            $cursos = $modelo->getByCategory($categoriaActiva);
        } else {
            $cursos = $modelo->getAll();
        }

        $categorias = $modelo->getCategorias();

        require __DIR__ . '/../views/cursos.php';
    }
}