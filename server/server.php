<?php
// Database connection
$conn = mysqli_connect("localhost", "root", "", "data_sekolah");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

// GET request handler
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Perform SELECT query to retrieve data
    $query = "SELECT * FROM tabel_user";
    $result = mysqli_query($conn, $query);

    // Check if query was successful
    if ($result) {
        // Fetch data as an associative array
        $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
        // Encode data as JSON and send response
        echo json_encode($data);
    } else {
        // Send error response
        echo json_encode(["error" => "Failed to fetch data"]);
    }
}

// POST request handler
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve data from POST request
    $data = json_decode(file_get_contents("php://input"), true);
    $namaSekolah = $data['namaSekolah'];
    $alamat = $data['alamat'];
    $kodePos = $data['kodePos'];
    $nomorTeleponSekolah = $data['nomorTeleponSekolah'];
    $emailSekolah = $data['emailSekolah'];
    $tipeSekolah = $data['tipeSekolah'];
    $jumlahSiswa = $data['jumlahSiswa'];
    $provinsi = $data['provinsi'];
    $kota = $data['kota'];

    // Perform INSERT query to add data to database
    $query = "INSERT INTO tabel_user (user_namaSekolah, user_alamat, user_kodePos, user_nomorTeleponSekolah, user_emailSekolah, user_tipeSekolah, user_jumlahSiswa, user_provinsi, user_kota) VALUES ('$namaSekolah', '$alamat', '$kodePos', '$nomorTeleponSekolah', '$emailSekolah', '$tipeSekolah', '$jumlahSiswa', '$provinsi', '$kota')";
    $insert_result = mysqli_query($conn, $query);

    // Check if insertion was successful
    if ($insert_result) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => "Failed to insert data"]);
    }
}

// Close database connection
mysqli_close($conn);
