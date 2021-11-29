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

$router->get('/exibir/{contactId}', function ($contactId) {
    return view('detail-contact', [
        "contactId" => $contactId
    ]);
});

$router->get('/editar/{contactId}', function ($contactId) {
    return view('edit-contact', [
        "contactId" => $contactId
    ]);
});

$router->group([
    'prefix' => 'api'
], function () use ($router) {
    $router->post('file/upload/{publicFolder}', [
        'uses' => 'Apis\FileController@upload'
    ]);

    $router->get('estado', [
        'uses' => 'Apis\StateController@list'
    ]);

    $router->get('contato', [
        'uses' => 'Apis\ContactController@list'
    ]);
    $router->post('contato', [
        'uses' => 'Apis\ContactController@create'
    ]);
    $router->get('contato/{contactId}', [
        'uses' => 'Apis\ContactController@get'
    ]);
    $router->delete('contato/{contactId}', [
        'uses' => 'Apis\ContactController@delete'
    ]);
    $router->patch('contato/{contactId}', [
        'uses' => 'Apis\ContactController@update'
    ]);
    $router->post('contato/associar-avatar/{contactId}/{avatar_filename}', [
        'uses' => 'Apis\ContactController@associateAvatar'
    ]);
    $router->post('contato/trocar-avatar/{contactId}/{avatar_filename}', [
        'uses' => 'Apis\ContactController@changeAvatar'
    ]);
});