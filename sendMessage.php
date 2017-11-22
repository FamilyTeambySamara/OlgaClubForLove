<?php




    $user_id = 210700286;
    
    $request_params = array(

        'user_id' => $user_id,
        'fields' => 'bdate',
        'v' => '5.52'

    );
    $get_params = http_build_query($request_params);
    $result = json_decode(file_get_contents('https://api.vk.com/method/users.get?'. $get_params));
    echo($result -> response[0] -> bdate);




 ?>
