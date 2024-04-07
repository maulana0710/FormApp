-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2024 at 10:19 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `data_sekolah`
--

-- --------------------------------------------------------

--
-- Table structure for table `tabel_user`
--

CREATE TABLE `tabel_user` (
  `user_id` int(36) NOT NULL,
  `user_namaSekolah` varchar(60) NOT NULL,
  `user_alamat` text NOT NULL,
  `user_kodePos` int(5) NOT NULL,
  `user_nomorTeleponSekolah` varchar(13) NOT NULL,
  `user_emailSekolah` varchar(30) NOT NULL,
  `user_tipeSekolah` varchar(10) NOT NULL,
  `user_jumlahSiswa` int(5) NOT NULL,
  `user_provinsi` varchar(50) NOT NULL,
  `user_kota` varchar(50) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tabel_user`
--

INSERT INTO `tabel_user` (`user_id`, `user_namaSekolah`, `user_alamat`, `user_kodePos`, `user_nomorTeleponSekolah`, `user_emailSekolah`, `user_tipeSekolah`, `user_jumlahSiswa`, `user_provinsi`, `user_kota`, `create_at`) VALUES
(3, 'School Name', 'School Address', 12345, '123-456-7890', 'school@example.com', 'Public', 500, 'Province', 'City', '2024-04-06 16:09:39'),
(5, 'sma', 'depok', 12345, '0821345', 'user@gmail.com', 'negeri', 99, 'Jawa Barat', 'Depok', '2024-04-06 16:32:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tabel_user`
--
ALTER TABLE `tabel_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tabel_user`
--
ALTER TABLE `tabel_user`
  MODIFY `user_id` int(36) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
