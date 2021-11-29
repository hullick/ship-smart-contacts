<?php
namespace App\Http\Controllers\Apis;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;
use App\Models\Address;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\URL;
use Laravel\Lumen\Application;

class FileController extends Controller
{

    private $publicPath;

    function __construct()
    {
        $this->publicPath = app()->basePath('public');
    }

    public function upload(Request $request, string $publicFolder)
    {
        $path = $this->publicPath . '/' . trim($publicFolder);
        $fileName = time() . '_' . $request->file->getClientOriginalName();

        $request->file('file')->move($path, $fileName);

        return JsonResponse::create([
            "avatar_filename" => $fileName
        ]);
    }

    static function delete(string $publicFolder, string $filename)
    {
        $filePath = app()->basePath('public') . '/' . trim($publicFolder) . '/'. trim($filename);
        File::delete($filePath);
    }
}
    