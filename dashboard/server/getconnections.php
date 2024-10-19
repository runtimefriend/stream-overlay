<?php
    $password = "abcdefg";
    $file = "clientanswers";
    if (
        $_SERVER[ "REQUEST_METHOD" ] === "POST"
        && isset( $_POST[ "pass" ] )
        ) {
            if( $_POST[ "pass" ] == $password ) {
               if( $answers = file_get_contents( $file ) ){
                    echo $answers;
               } else {
                    echo "file error";
               }
            } else {
                echo "wrong password";
            }
        } else {
            echo "request error";
        }
?>