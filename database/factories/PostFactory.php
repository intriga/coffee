<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    $title = $faker->sentence(4);
    return [
        'title' => $title,
        'slug' => str_slug($title),
        'description' => $faker->text(200),
        'content' => $faker->text(1200),
        'file' => $faker->imageUrl($width = 400, $height = 400),
    ];
});
