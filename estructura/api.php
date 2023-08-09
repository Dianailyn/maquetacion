<?php
$servername = "localhost";
$username = "Diana";
$password = "@eC5ztrCZKpp2aT";
$dbname = "maquetacion";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta SQL para obtener los datos de la tabla 'albums'
$sql = "SELECT name, release_date, place, duration, copies_sold FROM albums";
$result = $conn->query($sql);

// Crear un array para almacenar los datos
$data = array();

// Obtener los datos de la consulta y almacenarlos en el array
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Verificar el método de la solicitud
$method = $_SERVER["REQUEST_METHOD"];
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $band_id = $_POST["band_id"];
    $sql_verify_band = "SELECT id FROM bands WHERE id = '$band_id'";
    $result_verify_band = $conn->query($sql_verify_band);

    if ($result_verify_band->num_rows === 0) {
        die("Error: El band_id proporcionado no es válido.");
    }

    // Si el band_id es válido, obtener los demás datos del formulario
    $name = $_POST["name"];
    $release_date = $_POST["release_date"];
    $place = $_POST["place"];
    $duration = $_POST["duration"];
    $copies_sold = $_POST["copies_sold"];

    // Consulta SQL para insertar los datos en la tabla
    $sql_insert = "INSERT INTO albums (band_id, name, release_date, place, duration, copies_sold)
            VALUES ('$band_id', '$name', '$release_date', '$place', '$duration', '$copies_sold')";

    if ($conn->query($sql_insert) === TRUE) {
        echo "Registro insertado correctamente";
    } else {
        echo "Error al insertar el registro: " . $conn->error;
    }
} else {
    // Devolver los datos en formato JSON
    header('Content-type: application/json');
    echo json_encode($data);
}

// Cerrar la conexión a la base de datos
$conn->close();
?>
