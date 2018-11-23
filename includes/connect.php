<?php

    $user = "root";
    $pw = "";

    try {
        $conn = new PDO('mysql:host=localhost;dbname=db_video_class', $user, $pw);
        //var_dump($conn);

    } catch(PDOException $exception) {
        echo 'connect error!'.$exception->getMessage();
    }

?>