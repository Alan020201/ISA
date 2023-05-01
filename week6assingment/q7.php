<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
function isPalindrome($str) {
  $str = strtolower($str);
  $str = preg_replace('/[^a-z0-9]/', '', $str); 
  $rev = strrev($str); 
  return $str === $rev; 
}



echo isPalindrome("racecar");
?>
</body>
</html>