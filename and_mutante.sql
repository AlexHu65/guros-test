-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-03-2022 a las 19:37:12
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `and_mutante`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mutants`
--

CREATE TABLE `mutants` (
  `id` int(11) NOT NULL,
  `adn` varchar(250) NOT NULL,
  `mutant` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mutants`
--

INSERT INTO `mutants` (`id`, `adn`, `mutant`) VALUES
(771, '[\"A\",\"C\",\"T\",\"A\",\"C\",\"T\"]', 0),
(772, '[\"A\",\"A\",\"A\",\"A\",\"T\",\"G\"]', 1),
(773, '[\"T\",\"A\",\"T\",\"G\",\"C\",\"C\"]', 0),
(774, '[\"T\",\"G\",\"T\",\"G\",\"A\"]', 0),
(775, '[\"G\",\"G\",\"A\",\"A\",\"C\",\"A\"]', 0),
(776, '[\"A\",\"T\",\"G\",\"C\",\"G\",\"A\"]', 0),
(777, '[\"G\",\"T\",\"G\",\"G\"]', 0),
(778, '[\"C\",\"A\",\"G\",\"T\",\"G\",\"C\"]', 0),
(779, '[\"C\",\"T\",\"T\",\"A\",\"C\",\"C\"]', 0),
(780, '[\"C\",\"G\",\"T\"]', 0),
(781, '[\"T\",\"T\",\"A\",\"T\",\"G\",\"T\"]', 0),
(782, '[\"G\",\"G\",\"G\",\"G\",\"T\",\"T\"]', 0),
(783, '[\"G\",\"C\"]', 0),
(784, '[\"A\",\"G\",\"A\",\"A\",\"G\",\"G\"]', 0),
(785, '[\"A\",\"C\",\"T\",\"G\",\"A\",\"G\"]', 0),
(786, '[\"A\"]', 0),
(787, '[\"C\",\"C\",\"C\",\"C\",\"T\",\"A\"]', 0),
(788, '[\"C\",\"T\",\"A\",\"C\",\"T\"]', 0),
(789, '[\"T\",\"C\",\"A\",\"C\",\"T\",\"G\"]', 0),
(790, '[\"T\",\"G\",\"C\",\"C\"]', 0),
(791, '[\"A\",\"C\",\"A\"]', 0),
(792, '[\"C\",\"C\"]', 0),
(793, '[\"T\"]', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mutants`
--
ALTER TABLE `mutants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mutants`
--
ALTER TABLE `mutants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=794;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
