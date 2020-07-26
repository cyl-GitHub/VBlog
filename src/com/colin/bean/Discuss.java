package com.colin.bean;

import java.sql.Timestamp;
import java.util.List;

public class Discuss {
    //评论id
    private int id;
    //博文id
    private int microblogId;
    //评论人或回复人
    private User commentPerson;
    //被回复人
    private User getCommentPerson;
    //评论或回复时间
    private Timestamp discussTime;
    //评论内容
    private String comment;
    //别评论或回复的楼层
    private Integer floor;
    //拥有赞数
    private int likeCount;
    //点赞的人名单
    private List<DiscussLikes> likesPerson;


    public Discuss() {
    }

    public Discuss(int id, int microblogId, User commentPerson, User getCommentPerson, Timestamp discussTime, String comment, Integer floor, int likeCount, List<DiscussLikes> likesPerson) {
        this.id = id;
        this.microblogId = microblogId;
        this.commentPerson = commentPerson;
        this.getCommentPerson = getCommentPerson;
        this.discussTime = discussTime;
        this.comment = comment;
        this.floor = floor;
        this.likeCount = likeCount;
        this.likesPerson = likesPerson;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getMicroblogId() {
        return microblogId;
    }

    public void setMicroblogId(int microblogId) {
        this.microblogId = microblogId;
    }

    public User getCommentPerson() {
        return commentPerson;
    }

    public void setCommentPerson(User commentPerson) {
        this.commentPerson = commentPerson;
    }

    public User getGetCommentPerson() {
        return getCommentPerson;
    }

    public void setGetCommentPerson(User getCommentPerson) {
        this.getCommentPerson = getCommentPerson;
    }

    public Timestamp getDiscussTime() {
        return discussTime;
    }

    public void setDiscussTime(Timestamp discussTime) {
        this.discussTime = discussTime;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Integer getFloor() {
        return floor;
    }

    public void setFloor(Integer floor) {
        this.floor = floor;
    }

    public int getLikeCount() {
        return likeCount;
    }

    public void setLikeCount(int likeCount) {
        this.likeCount = likeCount;
    }

    public List<DiscussLikes> getLikesPerson() {
        return likesPerson;
    }

    public void setLikesPerson(List<DiscussLikes> likesPerson) {
        this.likesPerson = likesPerson;
    }

    @Override
    public String toString() {
        return "Discuss{" +
                "id=" + id +
                ", microblogId=" + microblogId +
                ", commentPerson=" + commentPerson +
                ", getCommentPerson=" + getCommentPerson +
                ", discussTime=" + discussTime +
                ", comment='" + comment + '\'' +
                ", floor=" + floor +
                ", likeCount=" + likeCount +
                ", likesPerson=" + likesPerson +
                '}';
    }
}

