@extends('partials.layout')

@section('title', 'Home')
@section('main_content')
    <!-- @if (Route::has('login'))
        <div class="top-right links">
            @auth
                <a href="{{ url('/home') }}">Home</a>
                @else
                    <a href="{{ route('login') }}">Login</a>
                    <a href="{{ route('register') }}">Register</a>
                    @endauth
        </div>
    @endif -->
    <div id="example"></div>
    <script src="{{asset('js/app.js')}}"></script>
@stop
