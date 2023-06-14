<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class borracharia extends Controller
{
    public function homepage()
    {
        return view('homepage');

    }

    public function back()
    {
        return redirect('borracharia.index');
    }
}
