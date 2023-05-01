<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    define('a', 5);
    $num_multiples = 10;
    
    for ($i = 1; $i <= $num_multiples; $i++) {
      $multiple = a * $i;
      echo $multiple;
      if ($i != $num_multiples) {
        echo "<br>"; 
      }
    }
    
    ?>
</body>
</html>