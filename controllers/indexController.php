<?php

require_once "models/IndexModel.php";

class IndexController {

    public function index() {

        $model = new IndexModel();

        $cursos = $model->getAll();

        require "views/index.php";
    }
}