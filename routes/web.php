<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');

});

Route::get('home', function (){
    return view('welcome');
});

Route::get('tentang', function () {
    return view('tentang');
});

Route::get('rpl', function () {
    return view('rpl');
});
Route::get('multimedia', function () {
    return view('multimedia');
});

Route::get('eskul', function () {
    return view('eskul');
});
Route::get('osis', function () {
    return view('osis');
});
Route::get('fasilitas', function () {
    return view('fasilitas');
});
Route::get('kontak', function () {
    return view('kontak');
});





