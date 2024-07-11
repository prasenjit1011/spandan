-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 11, 2024 at 08:36 AM
-- Server version: 8.0.37-0ubuntu0.20.04.3
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `NodeJSDBMaster`
--

-- --------------------------------------------------------

--
-- Table structure for table `authusers`
--

CREATE TABLE `authusers` (
  `id` int NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `type` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `authusers`
--

INSERT INTO `authusers` (`id`, `fullname`, `username`, `password`, `type`, `createdAt`, `updatedAt`) VALUES
(5, 'Test', 'emp@admin.com', '$2a$12$NH7WiBXgMksJ5wczjCIFFOF9E4Z28QPYeD6j97YxK29UUfGmMK4U2', NULL, '2024-07-11 02:05:04', '2024-07-11 02:05:04');

-- --------------------------------------------------------

--
-- Table structure for table `itemfiles`
--

CREATE TABLE `itemfiles` (
  `id` int NOT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `itemId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `itemfiles`
--

INSERT INTO `itemfiles` (`id`, `filename`, `itemId`) VALUES
(17, '80-10.jpeg', 2),
(18, '20-02.jpg', 2),
(19, '27-10.jpeg', 3),
(20, '32-06.png', 3),
(21, '80-03.jpg', 3),
(22, '88-10.jpeg', 4),
(23, '70-02.jpg', 4);

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int NOT NULL,
  `userId` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `details` varchar(255) DEFAULT NULL,
  `status` enum('Draft','Created','Approve','Rejected') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `userId`, `title`, `details`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 5, 'Test 11', 'Loren Ipsum Loren Ipsum Loren Ipsum 82', 'Created', '2024-07-11 03:00:36', '2024-07-11 03:00:36'),
(2, 5, 'Test 87', 'Loren Ipsum Loren Ipsum Loren Ipsum 7', 'Created', '2024-07-11 03:01:00', '2024-07-11 03:01:00'),
(3, 5, 'Test 16', 'Loren Ipsum Loren Ipsum Loren Ipsum 31', 'Created', '2024-07-11 03:01:11', '2024-07-11 03:01:11'),
(4, 5, 'Test 3', 'Loren Ipsum Loren Ipsum Loren Ipsum 57', 'Draft', '2024-07-11 03:02:39', '2024-07-11 03:02:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authusers`
--
ALTER TABLE `authusers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `itemfiles`
--
ALTER TABLE `itemfiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `itemId` (`itemId`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authusers`
--
ALTER TABLE `authusers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `itemfiles`
--
ALTER TABLE `itemfiles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
