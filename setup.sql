CREATE DATABASE IF NOT EXISTS atlantic;
use atlantic;

CREATE TABLE IF NOT EXISTS `arts` (
  `id` int(11) unsigned NOT NULL,
  `type` varchar(500) DEFAULT NULL,
  PRIMARY KEY ( `id` )
);

CREATE TABLE IF NOT EXISTS `articles` (
  `id` int(11) unsigned NOT NULL, 
  `slug` varchar(500) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `dek` varchar(500) DEFAULT NULL,
  `published_date` DATETIME DEFAULT NULL,
  `canonical_url` varchar(500) NOT NULL,
  `word_count` BIGINT DEFAULT NULL,
  `tags` varchar(500) DEFAULT NULL,
  `embeds` varchar(500) DEFAULT NULL,
  `lead_art_id` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY ( `id`, `canonical_url` ),
  FOREIGN KEY ( `lead_art_id` ) REFERENCES arts( `id` )
); 

CREATE TABLE IF NOT EXISTS `authors` (
  `id` int(11) unsigned NOT NULL,
  `slug` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `authors_articles` (
  `authorId` int(11) unsigned NOT NULL,
  `articleId` int(11) unsigned NOT NULL,
  PRIMARY KEY ( `authorId`, `articleId` ),
  FOREIGN KEY ( `authorId` ) REFERENCES authors( `id` ),
  FOREIGN KEY ( `articleId` ) REFERENCES articles( `id` )
);