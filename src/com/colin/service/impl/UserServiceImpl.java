package com.colin.service.impl;

import com.colin.bean.User;
import com.colin.mapper.UserMapper;
import com.colin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserMapper userMapper;

    @Override
    public User userLogin(User user) {
        return userMapper.userLogin(user);
    }

    @Override
    public User userRegister(User user) {
        return userMapper.userRegister(user);
    }

    @Override
    public void insertUser(User user) {
        userMapper.insertUser(user);
    }

    @Override
    public void updateUser(User user) {
        userMapper.updateUser(user);
    }

    @Override
    public void updateUserAvatar(User user) {
        userMapper.updateUserAvatar(user);
    }

    @Override
    public void updateFans(int uid1, int fansCount) {
        userMapper.updateFans(uid1, fansCount);
    }

    @Override
    public void updateForcus(int uid, int forcusCount) {
        userMapper.updateForcus(uid, forcusCount);
    }

    @Override
    public List<User> selectAllUser() {

        return userMapper.selectAllUser();
    }

    @Override
    public User selectUserById(int id) {

        return userMapper.selectUserById(id);
    }
}
