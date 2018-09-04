<?php

namespace App\Http\Controllers\V1;

use App\Recipe;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mockery\Exception;

class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return redirect('recipe/create');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('recipeadd');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $isValid = $this->validate($request, [
            'title' => 'required',
            'source' => 'required',
            'ingredients' => 'required',
        ], [
            'title.required' => 'How did you forget to fill this?'
        ]);

        $file_uploaded = $request->file('food_img')->getClientOriginalName();
        $file_path = $request->file('food_img')->getPathname();
        $file_type = $request->file('food_img')->getMimeType();
        $file_name = pathinfo($file_uploaded, PATHINFO_FILENAME);
        $extension = pathinfo($file_uploaded, PATHINFO_EXTENSION);
        $file_name_to_store = $file_name . "_" . time() . "." . $extension;

        if ($isValid) {
            $client = new Client([
                'base_uri' => 'http://localhost:8888/recipeapi/public/',
                'timeout' => 5,
                'headers' => [
                    'Accept' => 'application/json',
                    'Authorization' => 'Bearer 0mXTxjf6BkzZ5FIj7qbvW9SOBIeJY1tr1WZyBttEoKuzmTlRvA6jiXWERT4Z'
                ]
            ]);
            $response = $client->post('api/add-recipe',
                ['multipart' => [
                    [
                        'name' => 'title',
                        'contents' => $request->input('title')
                    ],
                    [
                        'name' => 'prep_time',
                        'contents' => $request->input('prep_time')
                    ],
                    [
                        'name' => 'cooking_time',
                        'contents' => $request->input('cooking_time')
                    ],
                    [
                        'name' => 'serving_qty',
                        'contents' => $request->input('serving_qty')
                    ],
                    [
                        'name' => 'source',
                        'contents' => $request->input('source')
                    ],
                    [
                        'name' => 'ingredients',
                        'contents' => $request->input('ingredients')
                    ],
                    [
                        'name' => 'steps',
                        'contents' => $request->input('steps')
                    ],
                    [
                        'name' => 'tips',
                        'contents' => $request->input('tips')
                    ],
                    [
                        'name' => 'food_img',
                        'filename' => $file_name_to_store,
                        'Mime-Type' => $file_type,
                        'contents' => fopen($file_path, 'r'),
                    ],
                ]]);

            $res = json_decode($response->getBody());
            echo $res->message;

            return redirect('recipe/create');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Recipe $recipe
     * @return \Illuminate\Http\Response
     */
    public function show(Recipe $recipe)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Recipe $recipe
     * @return \Illuminate\Http\Response
     */
    public function edit(Recipe $recipe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Recipe $recipe
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Recipe $recipe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Recipe $recipe
     * @return \Illuminate\Http\Response
     */
    public function destroy(Recipe $recipe)
    {
        //
    }

    public function add_recipe(Request $request)
    {
        try{
            $file_name = $request->file('food_img')->getClientOriginalName();           $file_stored = '';

            $recipe = new Recipe();
            $recipe->title = $request->input('title');
            $recipe->serving_qty = $request->input('serving_qty');
            $recipe->prep_time = $request->input('prep_time');
            $recipe->cooking_time = $request->input('cooking_time');
            $recipe->source = $request->input('source');
            $recipe->ingredients = $request->input('ingredients');
            $recipe->steps = $request->input('steps');
            $recipe->tips = $request->input('tips');
            $recipe->image = $file_name;

            $save_status = $recipe->save();

            if ($save_status){
                $file_stored = $request->file('food_img')->storeAs('public/food_image', $file_name);
            }

            return response()->json(['message'=>'Recipe created successfully'], 201);
        }
        catch (Exception $error){
            return response()->json(['message'=>$error->getMessage()], $error->getCode());
        }

    }
}
