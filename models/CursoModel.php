<?php
require_once __DIR__ . '/../config/database.php';

class CursoModel {
    private PDO $db;

    public function __construct() {
        $this->db = Database::getInstance();
    }

    public function getAll(): array {
        $sql = 'SELECT * FROM cursos ORDER BY categoria, nombre';
        return $this->db->query($sql)->fetchAll();
    }

    public function getByCategory(string $categoria): array {
        $sql = 'SELECT * FROM cursos WHERE categoria = :categoria ORDER BY nombre';
        $stmt = $this->db->prepare($sql);
        $stmt->execute([':categoria' => $categoria]);
        return $stmt->fetchAll();
    }

    // Llena el select del filtro con las categorías que existen en la BD
    public function getCategorias(): array {
        $sql = 'SELECT DISTINCT categoria FROM cursos ORDER BY categoria';
        return $this->db->query($sql)->fetchAll(PDO::FETCH_COLUMN);
    }
}