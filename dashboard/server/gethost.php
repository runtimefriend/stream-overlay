<!-- php -e -r '$_SERVER["REQUEST_METHOD"] = "POST"; $_POST["pass"] = "abcdefg"; include "gethost.php";' -->
<?php
    $password = "abcdefg";
    $file = "hostoffer";
    if (
        $_SERVER[ "REQUEST_METHOD" ] === "POST"
        && isset( $_POST[ "pass" ] )
        ) {
            if( $_POST[ "pass" ] == $password ) {
               if( $offer = file_get_contents( $file ) ){
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