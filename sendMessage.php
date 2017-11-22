<?php


    $user_id = 210700286;
    $tokenPublic = '30e4b91476b023e1ffb00f0f14c4c91be0937eb2028c24f290c9aa536a36ac072eed9e17c9ce9101d4031';
    $message = $_GET['message'];
    $random_id = $_GET['random_id'];

    $request_params = array(

        'user_id' => $user_id,
        'access_token' = $tokenPublic,
        'peer_id' = $user_id,
        'random_id' = $random_id,
        'message' = $message,
        'v' => '5.52'

    );
    
    $get_params = http_build_query($request_params);
    $result = json_decode(file_get_contents('https://api.vk.com/method/messages.send?'. $get_params));

 ?>
