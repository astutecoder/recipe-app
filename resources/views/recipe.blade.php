@extends('partials.layout')

@section('title', 'Beef Recipe')
@section('main_content')
    <div id="recipe_component"></div>
    <script src="{{ asset('js/recipe.js') }}"></script>
@endsection