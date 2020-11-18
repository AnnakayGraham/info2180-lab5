<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
if ($_SERVER['REQUEST_METHOD']==='GET'){
    $x=filter_var($_GET['country'], FILTER_SANITIZE_FULL_SPECIAL_CHARS, FILTER_FLAG_NO_ENCODE_QUOTES);
    $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$x%';");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
}



?>
<ul>
<?php foreach ($results as $row): ?>
  <li><?= $row['name'] . ' is ruled by ' . $row['head_of_state']; ?></li>
<?php endforeach; ?>
</ul>
