package com.colin.mapper;

import com.colin.bean.Discuss;
import com.colin.bean.Microblog;

import java.sql.Timestamp;
import java.util.List;

public interface MicroblogMapper {
    Integer selectCount(int id);

    List<Microblog> selectAllArticleByUid(int i, int pageCount, int id);

    void deleteMicroblogByIDAjax(int id);

    void insertByMicroblog(Microblog microblog);

    Microblog select(Microblog microblog);

    void uploadMicroblog(Microblog microblog1);

    int selectLikesCount(int id);

    int selectForwardCount(int id);


    void addLikeCount(int uid, int likecount);

    void updateLikeCount(int uid, int likecount, int microblogid);

    void transmit(Microblog microBlog);

    Microblog selectTransmit(Microblog microBlog);

    void updateTransmitCount(int uid, int transmitCount, int microBlogId);

    Microblog selectById(int microblogid);

    List<Microblog> selectAllMic();


    List<Discuss> selectVblogDiscussByMicroblogId(int microblogId);

    void insertVblogDisuss(Discuss discuss);

    void deleteDiscussByUserId(Discuss discuss);

    String selectPictureUrl(int id);

    void insertPicture(Microblog microblog);

    void deleteCommentByUser(String user, String name, Timestamp time);

    List<Microblog> selectMyArticleByUid(int i, int pageCount, int id);

    List<Microblog> selectHot(int i, int pageCount);
}
