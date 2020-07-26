package com.colin.bean;

import java.sql.Timestamp;

public class User {

    private int id;//用户id
    private String name;//名字
    private String sex;//性别
    private String password;//密码
    private String avatar;//头像,
    private String telephone; //手机号
    private String email;//邮箱
    private String signature;//个性签名
    private Timestamp createTime;//注册时间
    private String address;//地址
    private String relationship;//感情状况


    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", sex='" + sex + '\'' +
                ", password='" + password + '\'' +
                ", avatar='" + avatar + '\'' +
                ", telephone=" + telephone +
                ", email='" + email + '\'' +
                ", signature='" + signature + '\'' +
                ", createTime=" + createTime +
                ", address='" + address + '\'' +
                ", relationship='" + relationship + '\'' +
                '}';
    }

    public User() {
    }

    public User(int id, String name, String sex, String password, String avatar, String telephone, String email, String signature, Timestamp createTime, String address, String relationship) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.password = password;
        this.avatar = avatar;
        this.telephone = telephone;
        this.email = email;
        this.signature = signature;
        this.createTime = createTime;
        this.address = address;
        this.relationship = relationship;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }

    public Timestamp getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Timestamp createTime) {
        this.createTime = createTime;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getRelationship() {
        return relationship;
    }

    public void setRelationship(String relationship) {
        this.relationship = relationship;
    }
}
