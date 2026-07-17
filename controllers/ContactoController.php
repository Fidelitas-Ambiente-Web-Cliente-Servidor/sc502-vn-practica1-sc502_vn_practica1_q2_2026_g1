<?php
require_once __DIR__ . '/../models/ContactoModel.php';

class ContactoController {
    private $model;

    public function __construct() {
        $this->model = new ContactoModel();
    }

    public function index($id = null) {
        require __DIR__ . '/../views/layout/header.php';
        require __DIR__ . '/../views/contacto.php';
        require __DIR__ . '/../views/layout/footer.php';
    }

    public function guardar($id = null) {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            $datos = [
                'nombre' => $_POST['nombre'],
                'correo' => $_POST['correo'],
                'telefono' => $_POST['telefono'],
                'asunto' => $_POST['asunto'],
                'mensaje' => $_POST['mensaje']
            ];

            $this->model->guardar($datos);

            header(
                'Location: index.php?controller=contacto&action=index&enviado=1'
            );
            exit;
        }
    }
}