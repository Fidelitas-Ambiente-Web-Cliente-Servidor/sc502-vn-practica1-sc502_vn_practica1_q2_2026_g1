<?php
require_once __DIR__ . '/../config/database.php';

class ContactoModel {
    private $conn;

    public function __construct() {
        $this->conn = Database::getConnection();
    }

    public function guardar($datos) {
        $sql = "INSERT INTO contactos
                (nombre, correo, telefono, asunto, mensaje)
                VALUES
                (:nombre, :correo, :telefono, :asunto, :mensaje)";

        $stmt = $this->conn->prepare($sql);

        return $stmt->execute([
            'nombre' => $datos['nombre'],
            'correo' => $datos['correo'],
            'telefono' => $datos['telefono'],
            'asunto' => $datos['asunto'],
            'mensaje' => $datos['mensaje']
        ]);
    }
}