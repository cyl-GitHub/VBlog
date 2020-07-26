package com.colin.service;

import com.colin.bean.Likes;
import com.colin.bean.Microblog;

public interface LikesService {

    int selectLikeCount(Microblog microBlog);

    Likes selectLikeUser(Microblog microBlog);

    void addLike(int microblogid, int uid);

    int ifLike(int uid, int microblogid);

    void deleteLike(int micblogid, int uid);
}
