package com.colin.service;

public interface ForcusService {

    int ifForcus(int authorid, int uid);

    void addForcus(int microBlogId, int authorid, int userId);

    void deleteForcus(int authorid, int userId);

    int selectfansCount(int authorid);

    int selectMicCount(int uid);//关注数
}
