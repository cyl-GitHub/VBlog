package com.colin.service;

import com.colin.bean.Label;

import java.util.List;

public interface LabelService {
    List<Label> selectAll();

    void addLabel(Label label);
}
