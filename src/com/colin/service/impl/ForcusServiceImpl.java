package com.colin.service.impl;

import com.colin.mapper.ForcusMapper;
import com.colin.service.ForcusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ForcusServiceImpl implements ForcusService {
    @Autowired
    ForcusMapper forcusMapper;

    @Override
    public int ifForcus(int authorid, int uid) {
        return forcusMapper.ifForcus(authorid, uid);

    }

    @Override
    public void addForcus(int microBlogId, int authorid, int userId) {
        forcusMapper.addForcus(microBlogId, authorid, userId);
    }


    @Override
    public void deleteForcus(int authorid, int userId) {
        forcusMapper.deleteForcus(authorid, userId);
    }

    @Override
    public int selectfansCount(int authorid) {
        return forcusMapper.selectfansCount(authorid);
    }

    @Override
    public int selectMicCount(int uid) {

        return forcusMapper.selectMicCount(uid);
    }
}
