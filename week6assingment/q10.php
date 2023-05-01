<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    $number = 153;
    $sum = 0;
    
    $temp = $number;
    while ($temp > 0) {
      $digit = $temp % 10;
      $sum += pow($digit, 3); 
      $temp = floor($temp / 10); 
    }
    
    if ($sum == $number) {
      echo "$number is an Armstrong number.";
    } else {
      echo "$number is not an Armstrong number.";
    }
    
    ?>
</body>
</html>