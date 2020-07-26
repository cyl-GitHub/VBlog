package com.colin.bean;

import java.sql.Timestamp;

public class DiscussLikes {
    //点赞表id
    private int id;
    //点赞的人
    private User likePerson;
    //被点赞的人
    private User getLikePerson;
    //被点赞评论或回复的发表时间
    private Timestamp discussTime;
    //被点赞评论或回复的id
    private int discussId;

    public DiscussLikes() {
    }

    public DiscussLikes(int id, User likePerson, User getLikePerson, Timestamp discussTime, int discussId) {
        this.id = id;
        this.likePerson = likePerson;
        this.getLikePerson = getLikePerson;
        this.discussTime = discussTime;
        this.discussId = discussId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getLikePerson() {
        return likePerson;
    }

    public void setLikePerson(User likePerson) {
        this.likePerson = likePerson;
    }

    public User getGetLikePerson() {
        return getLikePerson;
    }

    public void setGetLikePerson(User getLikePerson) {
        this.getLikePerson = getLikePerson;
    }

    public Timestamp getDiscussTime() {
        return discussTime;
    }

    public void setDiscussTime(Timestamp discussTime) {
        this.discussTime = discussTime;
    }

    public int getDiscussId() {
        return discussId;
    }

    public void setDiscussId(int discussId) {
        this.discussId = discussId;
    }

    @Override
    public String toString() {
        return "DiscussLikes{" +
                "id=" + id +
                ", likePerson=" + likePerson +
                ", getLikePerson=" + getLikePerson +
                ", discussTime=" + discussTime +
                ", discussId=" + discussId +
                '}';
    }
}
