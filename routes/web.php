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
    // return view('recipe');
    return redirect('beef-recipe');
});
Route::resource('beef-recipe', 'V1\RecipeController');
Route::get('/create', function(){
    $this->middleware('auth');
    return view('recipeadd');
});


Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

Route::get('/{path?}', function($path = null){
    return view('recipe');
})->where('path', '.*');
