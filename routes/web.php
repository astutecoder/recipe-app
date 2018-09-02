<?php

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
Route::resource('recipe', 'V1\RecipeController');
//Route::get('/create', function(){
//    $this->middleware('auth');
//    return view('recipeadd');
//});
//Route::get('/{path?}', function($path = null){
//    return view('welcome');
//})->where('path', '.*');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('use', function(){
    $arr = ["a"=>"abcd"];
    return response()->json($arr);
});
