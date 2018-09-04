@extends('partials.layout')

@section('title', 'Add recipe')
@section('main_content')
    <form method="POST" action="{{ url('recipe') }}" enctype="multipart/form-data">
        {{ csrf_field() }}
        <div class="container mt-3">
            <div class="row">
                <fildset class="col-sm-12">
                    <legend>Create Recipe</legend>
                    <div class="form-group">
                        <label for="">Title</label>
                        <input name="title" class="form-control" type="text" placeholder="Enter recipe title" value={{ old('title') }}>
                        @if($errors->has('title'))
                            <span class="text-danger">
                                {{$errors->first('title')}}
                            </span>
                        @endif
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Preparation Time</label>
                                <input name="prep_time" class="form-control" type="text" placeholder="ex. 4min 37sec" value={{ old('prep_time') }}>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Cooking Time</label>
                                <input name="cooking_time" class="form-control" type="text" placeholder="ex. 50min" value={{ old('cooking_time') }}>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Serving</label>
                                <input name="serving_qty" class="form-control" type="text"  placeholder="4 person" value={{ old('serving_qty') }}>
                                @if($errors->has('serving_qty'))
                                    <span class="text-danger">
                                {{$errors->first('serving_qty')}}
                            </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Source</label>
                                <input name="source" class="form-control" type="text"  placeholder="John Doe, Kaler Kantha" value={{ old('source') }}>
                                @if($errors->has('source'))
                                    <span class="text-danger">
                                {{$errors->first('source')}}
                            </span>
                                @endif
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="">Ingredients</label>
                        <textarea name="ingredients" class="form-control" cols="30" rows="4" placeholder="Enter list of Ingredients">{{ old('ingredients') }}</textarea>
                        @if($errors->has('ingredients'))
                            <span class="text-danger">
                                {{$errors->first('ingredients')}}
                            </span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label for="">Steps</label>
                        <textarea name="steps" class="form-control" cols="30" rows="4" placeholder="What are the steps?">{{ old('steps') }}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="">Tips</label>
                        <textarea name="tips" class="form-control" cols="30" rows="4" placeholder="Any tips?">{{ old('tips') }}</textarea>
                    </div>
                    <div class="form-group">
                        <input type="file" name="food_img" class="custom-file btn btn-info" value="{{ old('food_img') }}">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary">Save</button>
                    </div>
                </fildset>
            </div>
        </div>
    </form>
@stop