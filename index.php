<?php
header('Content-Type: text/html; charset=utf-8');
require_once __DIR__ . '/config/database.php';

// Enrutador: lee controller y action desde la URL
$controller = $_GET['controller'] ?? 'index';
$action     = $_GET['action'] ?? 'index';

$controladores = [
    'index'      => 'IndexController',
    'cursos'     => 'CursosController',
    'profesores' => 'ProfesoresController',
    'contacto'   => 'ContactoController'
];

if (!isset($controladores[$controller])) {
    http_response_code(404);
    exit('Página no encontrada');
}

$clase   = $controladores[$controller];
$archivo = __DIR__ . '/controllers/' . $clase . '.php';

if (!file_exists($archivo)) {
    http_response_code(404);
    exit('Controlador no disponible');
}

require_once $archivo;
$instancia = new $clase();

if (!method_exists($instancia, $action)) {
    http_response_code(404);
    exit('Acción no encontrada');
}

$instancia->$action();