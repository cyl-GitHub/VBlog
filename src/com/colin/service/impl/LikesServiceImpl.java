package com.colin.service.impl;

import com.colin.bean.Likes;
import com.colin.bean.Microblog;
import com.colin.mapper.LikesMapper;
import com.colin.service.LikesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikesServiceImpl implements LikesService {
    @Autowired
    LikesMapper likesMapper;


    @Override
    public int selectLikeCount(Microblog microBlog) {
        return likesMapper.selectLikeCount(microBlog);
    }

    @Override
    public Likes selectLikeUser(Microblog microBlog) {
        return likesMapper.selectLikeUser(microBlog);
    }

    @Override
    public void addLike(int microblogid, int uid) {
        likesMapper.addLike(microblogid, uid);
    }

    @Override
    public int ifLike(int uid, int microblogid) {
        return likesMapper.ifLike(uid, microblogid);
    }

    @Override
    public void deleteLike(int microblogid, int uid) {
        likesMapper.deleteLike(microblogid, uid);
    }


}


