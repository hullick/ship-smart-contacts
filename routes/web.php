<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
 * |--------------------------------------------------------------------------
 * | Application Routes
 * |--------------------------------------------------------------------------
 * |
 * | Here is where you can register all of the routes for an application.
 * | It is a breeze. Simply tell Lumen the URIs it should respond to
 * | and give it the Closure to call when that URI is requested.
 * |
 */
$router->get('/', function () use ($router) {
    return view('app');
});

$router->get('/adicionar', function () use ($router) {
    return view('add-contact');
});

$router->get('/editar/{contactId}', function ($contactId) {
    return view('detail-contact', [
        "contactId" => $contactId
    ]);
});

$router->group([
    'prefix' => 'api'
], function () use ($router) {
    $router->get('estado', [
        'uses' => 'Apis\StateController@list'
    ]);

    $router->get('contato', [
        'uses' => 'Apis\ContactController@list'
    ]);
    $router->get('contato/{contactId}', [
        'uses' => 'Apis\ContactController@get'
    ]);
    $router->post('contato', [
        'uses' => 'Apis\ContactController@create'
    ]);
});