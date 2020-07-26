package com.colin.service;

import com.colin.bean.User;

import java.util.List;

public interface UserService {
    User userLogin(User user);

    User userRegister(User user);

    void insertUser(User user);

    void updateUser(User user);
    //插入用户头像
    void updateUserAvatar(User user);
    //更新博主用户表中的粉丝数
    void updateFans(int uid1, int fansCount);
    //更新当前用户表中的关注数
    void updateForcus(int uid, int forcusCount);

    List<User> selectAllUser();

    User selectUserById(int id);

}
