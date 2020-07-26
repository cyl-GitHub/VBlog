package com.colin.service.impl;

import com.colin.bean.Microblog;
import com.colin.mapper.TransmitMapper;
import com.colin.service.TransmitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * \* Created with IntelliJ IDEA.
 * \* User: WangPeng
 * \* Date: 2019/7/14
 * \* Time: 10:05
 * \* To change this template use File | Settings | File Templates.
 * \* Description:
 * \
 */
@Service
public class TransmitServiceImpl implements TransmitService {
    @Autowired
    TransmitMapper transmitMapper;

    @Override
    public int transmitCount(Microblog microBlog) {
        return transmitMapper.transmitCount(microBlog);

    }

    @Override
    public int ifTransmit(int microblogid, int uid) {
        return transmitMapper.ifTransmit(microblogid, uid);
    }

    @Override
    public void addTransmit(int microblogid, int uid) {
        transmitMapper.addTransmit(microblogid, uid);
    }


}
