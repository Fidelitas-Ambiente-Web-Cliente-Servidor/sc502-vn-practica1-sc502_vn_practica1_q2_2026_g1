<?php
class Database {
    private static ?PDO $instancia = null;

    private const HOST = 'db';          // nombre del servicio en docker-compose
    private const DB   = 'codenova';    // debe coincidir con MYSQL_DATABASE
    private const USER = 'root';
    private const PASS = 'root';

    private function __construct() {}

    public static function getInstance(): PDO {
        if (self::$instancia === null) {
            $dsn = 'mysql:host=' . self::HOST . ';dbname=' . self::DB . ';charset=utf8mb4';
            self::$instancia = new PDO($dsn, self::USER, self::PASS, [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            ]);
        }
        return self::$instancia;
    }
}