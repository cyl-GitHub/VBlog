package com.colin.bean;

public class Page {
    private Integer pageNumber;
    private Integer totalPage;

    public Page() {
    }

    public Page(Integer pageNumber, Integer totalPage) {
        this.pageNumber = pageNumber;
        this.totalPage = totalPage;
    }

    @Override
    public String toString() {
        return "Page{" +
                "pageNumber=" + pageNumber +
                ", totalPage=" + totalPage +
                '}';
    }

    public Integer getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
    }

    public Integer getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(Integer totalPage) {
        this.totalPage = totalPage;
    }
}
