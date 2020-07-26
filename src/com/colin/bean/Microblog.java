package com.colin.bean;

import java.sql.Timestamp;
//微博
public class Microblog {
    private int id;
    private User user;
    private String content;
    private String reason;
    private String videoUrl;
    private String pictureUrl;
    private Timestamp createTime;
    private int likesCount;
    private int forwardCount;
    private String label;


    @Override
    public String toString() {
        return "Microblog{" +
                "id=" + id +
                ", user=" + user +
                ", content='" + content + '\'' +
                ", reason='" + reason + '\'' +
                ", videoUrl='" + videoUrl + '\'' +
                ", createTime=" + createTime +
                ", likesCount=" + likesCount +
                ", forwardCount=" + forwardCount +
                ", label='" + label + '\'' +
                '}';
    }

    public Microblog() {
    }


    public Microblog(int id, User user, String content, String reason, String videoUrl, String pictureUrl, Timestamp createTime, int likesCount, int forwardCount, String label) {
        this.id = id;
        this.user = user;
        this.content = content;
        this.reason = reason;
        this.videoUrl = videoUrl;
        this.pictureUrl = pictureUrl;
        this.createTime = createTime;
        this.likesCount = likesCount;
        this.forwardCount = forwardCount;
        this.label = label;
    }

    public Microblog(String content, Timestamp createTime) {
        this.content = content;
        this.createTime = createTime;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    public Timestamp getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Timestamp createTime) {
        this.createTime = createTime;
    }

    public int getLikesCount() {
        return likesCount;
    }

    public void setLikesCount(int likesCount) {
        this.likesCount = likesCount;
    }

    public int getForwardCount() {
        return forwardCount;
    }

    public void setForwardCount(int forwardCount) {
        this.forwardCount = forwardCount;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }


}
