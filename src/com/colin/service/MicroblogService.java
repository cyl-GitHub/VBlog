package com.colin.service;

import com.colin.bean.Discuss;
import com.colin.bean.Microblog;

import java.util.List;
import java.util.Map;

public interface MicroblogService {
    Integer selectCount(int id);

    //通过用户id查询所有文章
    List<Microblog> selectAllArticleByUid(int i, int pageCount, int id);

    //通过文章id删除文章
    void deleteMicroblogByIDAjax(int id);

    //插入文章
    void insertByMicroblog(Microblog microblog);

    //查询文章
    Microblog select(Microblog microblog);

    //更新文章
    void uploadMicroblog(Microblog microblog1);

    //查询点赞数
    int selectLikesCount(int id);

    //查询转发数
    int selectForwardCount(int id);

    void addLikeCount(int uid, int likecount);

    //更新喜欢的数量
    void updateLikeCount(int id, int likecount, int microblogid);

    //转发
    void transmit(Microblog microBlog);

    //查询转发文章的具体信息
    Microblog selectTransmit(Microblog microBlog);

    //更新转发数量
    void updateTransmitCount(int uid, int transmitCount, int microBlogId);

    //通过文章id查询文章
    Microblog selectById(int microblogid);

    //查询所有文章
    List<Microblog> selectAllMic();

    //通过博文id查询所有该博文的评论和回复
    List<Discuss> selectVblogDiscussByMicroblogId(int id);

    //插入评论
    void insertVblogDisuss(Discuss discuss);

    //删除评论
    void deleteDiscussByUserId(Discuss discuss);

    //查询图片路径
    String selectPictureUrl(int id);

    //插入图片
    void insertPicture(Microblog microblog);

    //删除评论
    void deleteCommentByUser(Map map);

    List<Microblog> selectMyArticleByUid(int i, int pageCount, int id);

    List<Microblog> selectHot(int i, int pageCount);
}
