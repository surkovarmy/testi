-- phpMyAdmin SQL Dump
-- version 4.0.10.10
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 08 2016 г., 13:49
-- Версия сервера: 5.5.45
-- Версия PHP: 5.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `test_rabota`
--

-- --------------------------------------------------------

--
-- Структура таблицы `color`
--

CREATE TABLE IF NOT EXISTS `color` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `key` (`key`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Дамп данных таблицы `color`
--

INSERT INTO `color` (`id`, `key`, `name`) VALUES
(1, 1, 'Белый'),
(2, 2, 'Черный'),
(3, 3, 'Синий'),
(4, 4, 'Желтый');

-- --------------------------------------------------------

--
-- Структура таблицы `glav`
--

CREATE TABLE IF NOT EXISTS `glav` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_proiz` int(11) NOT NULL,
  `opersis` int(11) NOT NULL,
  `color` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `name_proiz` (`name_proiz`),
  KEY `opersis` (`opersis`),
  KEY `color` (`color`),
  KEY `weight` (`weight`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Дамп данных таблицы `glav`
--

INSERT INTO `glav` (`id`, `name_proiz`, `opersis`, `color`, `weight`, `price`) VALUES
(1, 1, 2, 1, 1, 21970),
(2, 1, 1, 1, 2, 14880),
(3, 2, 3, 3, 3, 13200),
(4, 2, 4, 4, 4, 19377),
(5, 3, 5, 1, 5, 16647),
(6, 4, 5, 2, 6, 20000),
(7, 1, 2, 2, 1, 24600),
(8, 2, 5, 4, 7, 15249),
(9, 5, 7, 1, 8, 11500),
(10, 1, 2, 2, 1, 27900);

-- --------------------------------------------------------

--
-- Структура таблицы `name_proiz`
--

CREATE TABLE IF NOT EXISTS `name_proiz` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `key` (`key`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `name_proiz`
--

INSERT INTO `name_proiz` (`id`, `key`, `name`) VALUES
(1, 1, 'Apple'),
(2, 2, 'Samsung'),
(3, 3, 'Sony'),
(4, 4, 'HTC'),
(5, 5, 'Nokia');

-- --------------------------------------------------------

--
-- Структура таблицы `opersis`
--

CREATE TABLE IF NOT EXISTS `opersis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `key` (`key`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Дамп данных таблицы `opersis`
--

INSERT INTO `opersis` (`id`, `key`, `name`) VALUES
(1, 1, 'iOS 5'),
(2, 2, 'iOS 6'),
(3, 3, 'Android 4.0'),
(4, 4, 'Android 4.2'),
(5, 5, 'Android 4.1'),
(7, 7, 'MS Windows Phone 8');

-- --------------------------------------------------------

--
-- Структура таблицы `weight`
--

CREATE TABLE IF NOT EXISTS `weight` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `key` (`key`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Дамп данных таблицы `weight`
--

INSERT INTO `weight` (`id`, `key`, `name`) VALUES
(1, 1, '112'),
(2, 2, '140'),
(3, 3, '133'),
(4, 4, '130'),
(5, 5, '146'),
(6, 6, '143'),
(7, 7, '180'),
(8, 8, '185');

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `glav`
--
ALTER TABLE `glav`
  ADD CONSTRAINT `glav_ibfk_1` FOREIGN KEY (`name_proiz`) REFERENCES `name_proiz` (`key`),
  ADD CONSTRAINT `glav_ibfk_2` FOREIGN KEY (`opersis`) REFERENCES `opersis` (`key`),
  ADD CONSTRAINT `glav_ibfk_3` FOREIGN KEY (`color`) REFERENCES `color` (`key`),
  ADD CONSTRAINT `glav_ibfk_4` FOREIGN KEY (`weight`) REFERENCES `weight` (`key`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
