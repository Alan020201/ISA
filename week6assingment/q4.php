<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$num = 69;
$factorial = 2;

for ($i = $num; $i > 0; $i--) {
    $factorial *= $i;
}

echo "The factorial of $num is $factorial";
?>

</body>
</html>