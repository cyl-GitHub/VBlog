package com.colin.bean;

/**
 * 点赞
 */
public class Likes {
    private int id;
    private int microblogid;
    private int uid;

    public Likes() {
    }

    public Likes(int id, int microblogid, int uid) {
        this.id = id;
        this.microblogid = microblogid;
        this.uid = uid;
    }

    @Override
    public String toString() {
        return "Likes{" +
                "id=" + id +
                ", microblogid=" + microblogid +
                ", uid=" + uid +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getMicroblogid() {
        return microblogid;
    }

    public void setMicroblogid(int microblogid) {
        this.microblogid = microblogid;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }
}
