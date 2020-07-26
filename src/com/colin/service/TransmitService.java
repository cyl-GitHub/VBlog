package com.colin.service;

import com.colin.bean.Microblog;

/**
 * \* Created with IntelliJ IDEA.
 * \* User: WangPeng
 * \* Date: 2019/7/14
 * \* Time: 9:55
 * \* To change this template use File | Settings | File Templates.
 * \* Description:
 * \
 */

public interface TransmitService {
    int transmitCount(Microblog microBlog);

    int ifTransmit(int microblogid, int uid);

    void addTransmit(int microblogid, int uid);
}
