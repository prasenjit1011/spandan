-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 11, 2024 at 10:33 AM
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
(1, 'Test', 'emp@admin.com', '$2a$12$f58DdMwDMVR01j0Y/qnEOuM0PPDGDcZI57Dm/JiLm.Cg5XVR1G6c.', NULL, '2024-07-11 04:40:14', '2024-07-11 04:40:14');

-- --------------------------------------------------------

--
-- Table structure for table `itemfiles`
--

CREATE TABLE `itemfiles` (
  `id` int NOT NULL,
  `itemId` int DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `itemfiles`
--

INSERT INTO `itemfiles` (`id`, `itemId`, `filename`, `createdAt`, `updatedAt`) VALUES
(1, 1, '83-CV-Full-Stack-Developer.docx', '2024-07-11 05:01:54', '2024-07-11 05:01:54'),
(2, 1, '50-angular.png', '2024-07-11 05:01:54', '2024-07-11 05:01:54'),
(3, 1, '71-nestjs-1.jpeg', '2024-07-11 05:01:54', '2024-07-11 05:01:54');

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
(1, 1, 'Test 10', 'Loren Ipsum Loren Ipsum ', 'Created', '2024-07-11 05:01:54', '2024-07-11 05:01:54');

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
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `itemfiles`
--
ALTER TABLE `itemfiles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
