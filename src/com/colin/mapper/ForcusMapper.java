package com.colin.mapper;

public interface ForcusMapper {
    int ifForcus(int authorid, int uid);

    void addForcus(int microBlogId, int authorid, int userId);

    void deleteForcus(int authorid, int userId);

    int selectfansCount(int authorid);

    int selectMicCount(int uid);
}
