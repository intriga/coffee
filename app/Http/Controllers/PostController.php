<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{
    public function index(Request $request)
    {
        // $posts = Post::get();
        // return $posts;

        $posts = Post::orderBy('id', 'DESC')->paginate(3);

        return [
            'pagination' => [
                'total'         => $posts->total(),
                'current_page'  => $posts->currentPage(),
                'per_page'      => $posts->perPage(),
                'last_page'     => $posts->lastPage(),
                'from'          => $posts->firstItem(),
                'to'            => $posts->lastItem(),
            ],
            'posts' => $posts
        ];

    }

    public function show($slug)
    {
        return Post::where('slug', $slug)->first();
    }
}
