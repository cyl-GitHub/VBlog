package com.colin.mapper;

import com.colin.bean.Label;

import java.util.List;

public interface LabelMapper {
    List<Label> selectAll();

    void addLabel(Label label);
}
