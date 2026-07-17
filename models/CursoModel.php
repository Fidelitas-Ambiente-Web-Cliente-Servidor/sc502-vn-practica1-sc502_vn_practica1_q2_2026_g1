<?php
require_once __DIR__ . '/../config/database.php';

class CursoModel {
    private $conn;

    public function __construct() {
        $this->conn = Database::getConnection();
    }

    public function getAll() {
        $sql = "SELECT * FROM cursos ORDER BY categoria, nombre";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public function getByCategory($categoria) {
        $sql = "SELECT * FROM cursos WHERE categoria = :categoria ORDER BY nombre";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute(['categoria' => $categoria]);
        return $stmt->fetchAll();
    }

    public function getCategorias() {
        $sql = "SELECT DISTINCT categoria FROM cursos ORDER BY categoria";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_COLUMN);
    }
}