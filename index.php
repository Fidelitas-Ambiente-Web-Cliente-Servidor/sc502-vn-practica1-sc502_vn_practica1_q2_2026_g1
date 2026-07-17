<?php
$controller = $_GET['controller'] ?? 'index';
$action = $_GET['action'] ?? 'index';
$id = $_GET['id'] ?? null;

$controllerFile = "controllers/" . ucfirst($controller) . "Controller.php";

if (file_exists($controllerFile)) {
    require_once $controllerFile;
    $controllerClass = ucfirst($controller) . "Controller";
    $obj = new $controllerClass();

    if (method_exists($obj, $action)) {
        $obj->$action($id);
    } else {    
        echo "Acción no encontrada";
    }
} else {
    echo "Controlador no encontrado";
}

