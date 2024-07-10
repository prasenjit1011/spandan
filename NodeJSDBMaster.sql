-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 10, 2024 at 08:03 AM
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
-- Table structure for table `articlefiles`
--

CREATE TABLE `articlefiles` (
  `id` int NOT NULL,
  `article_id` int NOT NULL,
  `filename` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `articlefiles`
--

INSERT INTO `articlefiles` (`id`, `article_id`, `filename`, `createdAt`) VALUES
(6, 2, 'f1.jpg', '2024-07-10 08:01:38'),
(7, 2, 'f3.jpg', '2024-07-10 08:03:06'),
(8, 1, 'fnew.jpg', '2024-07-10 08:03:06');

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `details` text,
  `status` enum('Draft','Created','Approve','Rejected') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'Created',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `details`, `status`, `createdAt`) VALUES
(1, 'Test Title', 'Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum ', 'Draft', '2024-07-09 06:59:37'),
(2, 'New Test Title', 'Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum ', 'Created', '2024-07-09 06:59:37'),
(16, 'Test 94', 'Loren Ipsum Loren Ipsum Loren Ipsum 78', 'Created', '2024-07-10 02:33:20');

-- --------------------------------------------------------

--
-- Table structure for table `authusers`
--

CREATE TABLE `authusers` (
  `id` int NOT NULL,
  `type` enum('admin','approver') NOT NULL DEFAULT 'admin',
  `fullname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `authusers`
--

INSERT INTO `authusers` (`id`, `type`, `fullname`, `username`, `password`, `createdAt`) VALUES
(2, 'admin', 'Admin', 'admin@admin.com', '$2a$12$MObkIOMJ75jPy.zKP5oEiOtKlhRAOmA4nEM6HJMKe1SzYgHd.nUd2', '2024-07-10 01:33:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articlefiles`
--
ALTER TABLE `articlefiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `article` (`article_id`);

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `authusers`
--
ALTER TABLE `authusers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articlefiles`
--
ALTER TABLE `articlefiles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `authusers`
--
ALTER TABLE `authusers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `articlefiles`
--
ALTER TABLE `articlefiles`
  ADD CONSTRAINT `article` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
