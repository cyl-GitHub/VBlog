package com.colin.mapper;

import com.colin.bean.User;

import java.util.List;

public interface UserMapper {
    User  userLogin(User user);

    User userRegister(User user);

    void insertUser(User user);

    void updateUser(User user);

    void updateUserAvatar(User user);

    void updateFans(int uid1, int fansCount);

    void updateForcus(int uid, int forcusCount);

    List<User> selectAllUser();

    User selectUserById(int id);



}
