package com.colin.mapper;

import com.colin.bean.Microblog;

/**
 * \* Created with IntelliJ IDEA.
 * \* User: WangPeng
 * \* Date: 2019/7/14
 * \* Time: 10:06
 * \* To change this template use File | Settings | File Templates.
 * \* Description:
 * \
 */

public interface TransmitMapper {
    int transmitCount(Microblog microBlog);

    int ifTransmit(int microblogid, int uid);

    void addTransmit(int microblogid, int uid);
}
