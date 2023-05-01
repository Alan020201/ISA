<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $a = 1;
    $b = 2;
    
    $temp = $a;
    $a = $b;
    $b = $temp;
    
    echo "a = $a, b = $b";
    
    ?>
</body>
</html>