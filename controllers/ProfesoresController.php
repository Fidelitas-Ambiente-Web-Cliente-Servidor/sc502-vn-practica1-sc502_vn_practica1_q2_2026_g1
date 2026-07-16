<?php
require_once __DIR__ . '/../models/ProfesoresModel.php';

class ProfesoresController {
    private $model;

    public function __construct() {
        $this->model = new ProfesoresModel();
    }

    public function index($id = null) {
        $profesores = $this->model->getAll();
        require __DIR__ . '/../views/layout/header.php';
        require __DIR__ . '/../views/profesores.php';
        require __DIR__ . '/../views/layout/footer.php';
    }

    public function show($id) {
        $profesor = $this->model->getById($id);
        require __DIR__ . '/../views/layout/header.php';
        require __DIR__ . '/../views/profesor_detalle.php';
        require __DIR__ . '/../views/layout/footer.php';
    }
}