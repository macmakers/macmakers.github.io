-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 26, 2019 at 08:09 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `login`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_accounts`
--

CREATE TABLE `user_accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `program` varchar(50) NOT NULL,
  `year_of_study` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_accounts`
--

INSERT INTO `user_accounts` (`id`, `username`, `password`, `email`, `program`, `year_of_study`) VALUES
(1, 'test', '$2y$10$SfhYIDtn.iOuCW7zfoFLuuZHX6lja4lF4XA4JqNmpiH/.P3zB8JCa', 'test@test.com', 'test', '1'),
(5, 'test2', '$2y$10$v/D1pAqzpc/A7KGUQf3KA.NuLGLcKWCINO0wfECNnbLVfx/ea5DIW', 'test@g', 'test', '1'),
(6, 'test3', '$2y$10$IeaaGmleO0xRmeIca/G5XeWkGVLErr.ckrcek2aY9W2Kz4pZ0B00S', 'test@g', 'test', '1'),
(7, 'test123', '$2y$10$1DFrcJqNnzqJW9c4IHYjN.Un1iWH8E.dVYd.mkd.i96zn4Ldp0Pry', 'test', 'test', '1'),
(8, 'test4', '$2y$10$VFzdzwpTTJhviuiD.x4M6OenLcUdBQ6sDC5t3qLnudepklPFPwa9K', 'test@g', 'test', '1'),
(9, 'test5', '$2y$10$ztlUkvwIZuHExLikDlv9EOWv8onjLrv7un169ZlRautxz9wPMe.Za', 'test@g', 'test', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_accounts`
--
ALTER TABLE `user_accounts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_accounts`
--
ALTER TABLE `user_accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
