<?php
    $password = "abcdefg";
    $file = "hostoffer";
    if (
        $_SERVER[ "REQUEST_METHOD" ] === "POST"
        && isset( $_POST[ "pass" ] )
        && isset( $_POST[ "data" ] )
        ) {
            if( $_POST[ "pass" ] == $password ) {
               if( file_put_contents( $file , $_POST[ "data" ] , LOCK_EX ) ){
                    echo "success";
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