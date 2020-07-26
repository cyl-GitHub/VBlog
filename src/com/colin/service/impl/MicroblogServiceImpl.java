package com.colin.service.impl;

import com.colin.bean.Discuss;
import com.colin.bean.Microblog;
import com.colin.mapper.MicroblogMapper;
import com.colin.service.MicroblogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class MicroblogServiceImpl implements MicroblogService {
    @Autowired
    MicroblogMapper microblogMapper;

    @Override
    public Integer selectCount(int id) {
        return microblogMapper.selectCount(id);
    }

    @Override
    public List<Microblog> selectAllArticleByUid(int i, int pageCount, int id) {

        return microblogMapper.selectAllArticleByUid(i, pageCount, id);
    }

    @Override
    public void deleteMicroblogByIDAjax(int id) {
        microblogMapper.deleteMicroblogByIDAjax(id);
    }

    @Override
    public void insertByMicroblog(Microblog microblog) {
        microblogMapper.insertByMicroblog(microblog);
    }

    @Override
    public Microblog select(Microblog microblog) {

        return microblogMapper.select(microblog);
    }

    @Override
    public void uploadMicroblog(Microblog microblog1) {
        microblogMapper.uploadMicroblog(microblog1);
    }

    @Override
    public int selectLikesCount(int id) {
        return microblogMapper.selectLikesCount(id);
    }

    @Override
    public int selectForwardCount(int id) {
        return microblogMapper.selectForwardCount(id);
    }

    @Override
    public void addLikeCount(int uid, int likecount) {
        microblogMapper.addLikeCount(uid, likecount);
    }

    @Override
    public void transmit(Microblog microBlog) {
        microblogMapper.transmit(microBlog);

    }

    @Override
    public Microblog selectTransmit(Microblog microBlog) {
        return microblogMapper.selectTransmit(microBlog);
    }

    public void updateTransmitCount(int uid, int transmitCount, int microBlogId) {
        microblogMapper.updateTransmitCount(uid, transmitCount, microBlogId);
    }


    @Override
    public Microblog selectById(int microblogid) {
        return microblogMapper.selectById(microblogid);
    }

    @Override
    public void updateLikeCount(int uid, int likecount, int microblogid) {
        microblogMapper.updateLikeCount(uid, likecount, microblogid);
    }

    @Override
    public List<Microblog> selectAllMic() {
        return microblogMapper.selectAllMic();

    }


    //通过博文id查询所有该博文的评论和回复
    @Override
    public List<Discuss> selectVblogDiscussByMicroblogId(int microblogId) {
        return microblogMapper.selectVblogDiscussByMicroblogId(microblogId);
    }

    @Override
    public void insertVblogDisuss(Discuss discuss) {
        microblogMapper.insertVblogDisuss(discuss);
    }

    @Override
    public void deleteDiscussByUserId(Discuss discuss) {
        microblogMapper.deleteDiscussByUserId(discuss);
    }

    @Override
    public String selectPictureUrl(int id) {
        return microblogMapper.selectPictureUrl(id);
    }

    @Override
    public void insertPicture(Microblog microblog) {
        microblogMapper.insertPicture(microblog);
    }


    @Override
    public void deleteCommentByUser(Map map) {
        String test = (String) map.get("time");
        Date date = new Date(test);
        Timestamp time = new Timestamp(date.getTime());
        //todo 这里先写死
//        User user1 = (User) map.get("user");
//        String user = user1.getName();
        String name = (String) map.get("name");
        String user = (String) map.get("user");
        microblogMapper.deleteCommentByUser(user, name, time);
    }

    @Override
    public List<Microblog> selectMyArticleByUid(int i, int pageCount, int id) {
        return microblogMapper.selectMyArticleByUid(i, pageCount, id);
    }

    @Override
    public List<Microblog> selectHot(int i, int pageCount) {
        return microblogMapper.selectHot(i, pageCount);

    }


}
