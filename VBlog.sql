CREATE DATABASE  IF NOT EXISTS `vblog` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `vblog`;
-- MySQL dump 10.13  Distrib 5.7.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: vblog
-- ------------------------------------------------------
-- Server version	5.7.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrator`
--

DROP TABLE IF EXISTS `administrator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `administrator` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '管理员名',
  `name` varchar(45) NOT NULL COMMENT '管理员名',
  `password` varchar(45) NOT NULL COMMENT '管理员密码',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='管理员';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrator`
--

LOCK TABLES `administrator` WRITE;
/*!40000 ALTER TABLE `administrator` DISABLE KEYS */;
/*!40000 ALTER TABLE `administrator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discuss`
--

DROP TABLE IF EXISTS `discuss`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `discuss` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `microblogid` int(11) NOT NULL COMMENT '博文的id',
  `commentid` int(11) NOT NULL COMMENT '评论人的名字',
  `respondentid` int(11) DEFAULT NULL COMMENT '被评论人的名字',
  `discusstime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '用户给博文的评论时间',
  `comment` varchar(100) NOT NULL COMMENT '评论内容',
  `floor` int(255) NOT NULL COMMENT '评论语句所在楼层',
  `like` int(255) NOT NULL DEFAULT '0' COMMENT '点赞数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=167 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discuss`
--

LOCK TABLES `discuss` WRITE;
/*!40000 ALTER TABLE `discuss` DISABLE KEYS */;
INSERT INTO `discuss` VALUES (165,245,2,NULL,'2020-06-20 14:08:54','好看吗',0,0),(166,245,1,1,'2020-06-20 14:09:04',' 还行啊',0,0);
/*!40000 ALTER TABLE `discuss` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forcus`
--

DROP TABLE IF EXISTS `forcus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forcus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `microblogid` int(11) NOT NULL COMMENT '博主文章的id，根据文章id找到博主uid',
  `authorid` int(11) NOT NULL COMMENT '博文作者的id',
  `fansid` int(11) NOT NULL COMMENT '粉丝id',
  `alias` varchar(45) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='关注';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forcus`
--

LOCK TABLES `forcus` WRITE;
/*!40000 ALTER TABLE `forcus` DISABLE KEYS */;
INSERT INTO `forcus` VALUES (4,251,8,1,NULL);
/*!40000 ALTER TABLE `forcus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group`
--

DROP TABLE IF EXISTS `group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL COMMENT '分组名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group`
--

LOCK TABLES `group` WRITE;
/*!40000 ALTER TABLE `group` DISABLE KEYS */;
/*!40000 ALTER TABLE `group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `label`
--

DROP TABLE IF EXISTS `label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `label` (
  `id` int(11) NOT NULL COMMENT '标签id',
  `name` varchar(45) NOT NULL COMMENT '标签名',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `label`
--

LOCK TABLES `label` WRITE;
/*!40000 ALTER TABLE `label` DISABLE KEYS */;
INSERT INTO `label` VALUES (2,'小说'),(1,'明星');
/*!40000 ALTER TABLE `label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `label_microblog`
--

DROP TABLE IF EXISTS `label_microblog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `label_microblog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label_id` int(11) NOT NULL COMMENT '标签id',
  `microblog_id` int(11) NOT NULL COMMENT '微博id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `label_microblog`
--

LOCK TABLES `label_microblog` WRITE;
/*!40000 ALTER TABLE `label_microblog` DISABLE KEYS */;
/*!40000 ALTER TABLE `label_microblog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `likes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `microblogid` int(11) NOT NULL COMMENT '微博id',
  `uid` int(11) NOT NULL COMMENT '点赞用户id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (43,249,8),(44,248,8),(46,251,1),(47,249,1);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `microblog`
--

DROP TABLE IF EXISTS `microblog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `microblog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '用户id',
  `content` varchar(2000) NOT NULL COMMENT '微博内容',
  `reason` varchar(2000) DEFAULT NULL COMMENT '转发理由',
  `videourl` varchar(100) DEFAULT NULL COMMENT '视频地址',
  `createtime` timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) COMMENT '注册时间',
  `likecount` int(11) DEFAULT '0' COMMENT '点赞数量',
  `transmitcount` int(11) DEFAULT '0' COMMENT '转发数量',
  `label` varchar(100) DEFAULT NULL COMMENT '标签',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=255 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `microblog`
--

LOCK TABLES `microblog` WRITE;
/*!40000 ALTER TABLE `microblog` DISABLE KEYS */;
INSERT INTO `microblog` VALUES (245,1,'这是第一条微博',NULL,NULL,'2020-06-20 08:40:32.000',0,0,NULL),(248,1,'[哈哈]',NULL,NULL,'2020-06-20 09:19:41.000',1,0,NULL),(249,1,'呵呵',NULL,NULL,'2020-06-20 09:20:13.000',2,0,NULL),(251,8,'小风的微博[哈哈]',NULL,NULL,'2020-06-20 14:23:20.000',1,3,NULL),(252,1,'小风的微博[哈哈]','挺有意思的',NULL,'2020-06-20 15:11:45.660',1,1,NULL),(254,1,'小风的微博[哈哈]','123',NULL,'2020-06-21 01:23:38.177',1,3,NULL);
/*!40000 ALTER TABLE `microblog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `picture`
--

DROP TABLE IF EXISTS `picture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `picture` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pictureurl` varchar(100) NOT NULL COMMENT '图片路径',
  `microblogid` int(11) NOT NULL COMMENT '关联文章id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `picture`
--

LOCK TABLES `picture` WRITE;
/*!40000 ALTER TABLE `picture` DISABLE KEYS */;
INSERT INTO `picture` VALUES (44,'/picture/%E8%BF%98%E7%BB%8F%E5%B0%8F%E9%98%9F.jpg',243),(45,'/picture/-E5-85-AB-E6-88-92.jpg',244),(46,'/picture/b21c8701a18b87d608167af6050828381e30fd87.jpg',245),(47,'/picture/b21c8701a18b87d608167af6050828381e30fd87.jpg',251);
/*!40000 ALTER TABLE `picture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transmit`
--

DROP TABLE IF EXISTS `transmit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transmit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `microblogid` int(11) NOT NULL COMMENT '博文的id',
  `uid` int(11) NOT NULL COMMENT '转发用户的id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=156 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transmit`
--

LOCK TABLES `transmit` WRITE;
/*!40000 ALTER TABLE `transmit` DISABLE KEYS */;
INSERT INTO `transmit` VALUES (153,251,1),(154,251,1),(155,251,1);
/*!40000 ALTER TABLE `transmit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `name` varchar(45) NOT NULL COMMENT '用户名',
  `sex` varchar(20) NOT NULL DEFAULT '男' COMMENT '用户性别',
  `password` varchar(45) NOT NULL COMMENT '用户密码',
  `avatar` varchar(100) DEFAULT NULL COMMENT '头像',
  `telephone` char(11) DEFAULT NULL COMMENT '手机号',
  `email` varchar(45) DEFAULT NULL COMMENT '邮箱',
  `signature` varchar(45) DEFAULT '一句话介绍一下自己吧,让别人更了解你' COMMENT '个性签名',
  `createtime` timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) COMMENT '注册时间',
  `address` varchar(100) DEFAULT NULL COMMENT '地址',
  `relationship` varchar(45) DEFAULT NULL COMMENT '感情状况',
  `forcuscount` int(11) DEFAULT '0' COMMENT '关注数量',
  `fanscount` int(11) DEFAULT '0' COMMENT '粉丝数量',
  `microblogcount` int(11) DEFAULT '0' COMMENT '微博数量',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'小白','男','123456','/avatar/1.jpg','13948633624','1470497018@qq.com','这个人很懒,没留下任何信息哦!','2019-07-01 08:43:18.000',NULL,NULL,1,0,0),(8,'小风','男','123456','/avatar/8.jpg','19917563834','cyl_box@163.com','这个人很懒,没留下任何信息哦!','2020-06-20 05:15:35.304','','',1,0,0),(9,'1','男','1','/avatar/9.jpg',NULL,NULL,'一句话介绍一下自己吧,让别人更了解你','2020-06-20 05:47:36.759',NULL,NULL,0,0,0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'vblog'
--

--
-- Dumping routines for database 'vblog'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-26 15:56:12
