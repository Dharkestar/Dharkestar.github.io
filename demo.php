<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form Submission</title>
</head>
<body>
    <h1>Form Submission Results</h1>
    <table>
        <thead>
            <tr>
                <th>Field</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <?php
            foreach ($_POST as $field => $value) {
                echo "<tr><td>$field</td><td>$value</td></tr>";
            }
            ?>
        </tbody>
    </table>
</body>
</html>
