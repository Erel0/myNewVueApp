<?php

use Illuminate\Support\Facades\Route;


//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('/{any?}', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard')->where('any', '.*');


require __DIR__ . '/auth.php';
