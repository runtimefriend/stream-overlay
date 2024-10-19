<?php
    $password = "abcdefg";
    $file = "clientanswers";
    if (
        $_SERVER[ "REQUEST_METHOD" ] === "POST"
        && isset( $_POST[ "pass" ] )
        && isset( $_POST[ "data" ] )
        ) {
            if( $_POST[ "pass" ] == $password ) {
                if( file_put_contents( $file , $_POST[ "data" ] . "\n<break>\n" , FILE_APPEND | LOCK_EX ) ){
                    echo $offer;
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