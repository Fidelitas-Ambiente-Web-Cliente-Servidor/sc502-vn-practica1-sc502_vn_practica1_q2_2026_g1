<?php

require_once "config/database.php";

class IndexModel {

    private $conn;

    public function __construct() {
        $this->conn = Database::getConnection();
    }

    public function getAll() {

        $sql = "SELECT * FROM cursos_destacados";

        $stmt = $this->conn->prepare($sql);
        $stmt->execute();

        return $stmt->fetchAll();
    }
}