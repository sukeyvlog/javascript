<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./dashboard.css">
    <link rel="stylesheet" href="./card/card.css">
    <link rel="stylesheet" href="./table/table.css">
    <link rel="stylesheet" href="./sidebar.css">

</head>

<body>
    <div class="dashboard">
        <div class="">
            <?php include 'sidebar.php'; ?>
        </div>
        <div class="right">
            <div class="section1">
                <div>
                    <?php include './card/card.php'; ?>
                </div>
                <div>
                    <?php include './card/card.php'; ?>
                </div>
                <div>
                    <?php include './card/card.php'; ?>
                </div>
                <div>
                    <?php include './card/card.php'; ?>
                </div>
            </div>
            <div class="recentTask">
                <?php include './table/table.php'; ?>
            </div>
        </div>

        <script src="./table/table.js"></script>
        <script src="./card/card.js"></script>
    </div>
</body>

</html>