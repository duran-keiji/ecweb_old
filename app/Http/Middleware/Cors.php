<?php
 
namespace App\Http\Middleware;
 
use Illuminate\Support\Facades\Log;
use Closure;
 
class Cors {
    /**
     * 異なるオリジンからのアクセスを許容させる
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next) {
        $response = $next($request);
        $http_origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : "";
 
        if ($http_origin == "http://localhost:4200") {
            $response
                ->header("Access-Control-Allow-Origin" , $http_origin)
                ->header("Access-Control-Allow-Headers" , 'content-type');
        }
 
        return $response;
    }
}