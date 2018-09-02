@extends('partials.layout')

@section('title', 'Add recipe')
@section('main_content')
    <form method="POST" action="{{ url('recipe') }}">
        {{ csrf_field() }}
        <div class="container mt-3">
            <div class="row">
                <fildset class="col-sm-12">
                    <legend>Create Recipe</legend>
                    <div class="form-group">
                        <label for="">Title</label>
                        <input name="title" class="form-control" type="text" placeholder="Enter recipe title">
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="">Preparation Time</label>
                                <input name="prep_time" class="form-control" type="text" placeholder="ex. 4min 37sec">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="">Cooking Time</label>
                                <input name="cooking_time" class="form-control" type="text" placeholder="ex. 50min">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="">Source</label>
                                <input name="source" class="form-control" type="text"  placeholder="John Doe, Kaler Kantha">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="">Ingredients</label>
                        <textarea name="ingredients" class="form-control" cols="30" rows="4" placeholder="Enter list of Ingredients"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="">Steps</label>
                        <textarea name="steps" class="form-control" cols="30" rows="4" placeholder="What are the steps?"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="">Tips</label>
                        <textarea name="tips" class="form-control" cols="30" rows="4" placeholder="Any tips?"></textarea>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary">Save</button>
                    </div>
                </fildset>
            </div>
        </div>
    </form>
@stop