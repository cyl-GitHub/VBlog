package com.colin.service.impl;

import com.colin.bean.Label;
import com.colin.mapper.LabelMapper;
import com.colin.service.LabelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LabelServiceImpl implements LabelService {
    @Autowired
    LabelMapper labelMapper;

    @Override
    public List<Label> selectAll() {
        return labelMapper.selectAll();
    }

    @Override
    public void addLabel(Label label) {
        labelMapper.addLabel(label);
    }
}
