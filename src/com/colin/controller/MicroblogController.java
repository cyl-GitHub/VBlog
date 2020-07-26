package com.colin.controller;

import com.colin.bean.Microblog;
import com.colin.bean.Page;
import com.colin.bean.User;
import com.colin.service.*;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/microblog")

public class MicroblogController {
    @Autowired
    MicroblogService microblogService;
    @Autowired
    LabelService labelService;
    @Autowired
    LikesService likesService;
    @Autowired
    TransmitService transmitService;
    @Autowired
    ForcusService forcusService;
    @Autowired
    UserService userService;

    @RequestMapping("/selectByUser")
    public String selectByUser() {
        return "first";
    }

    //查找所有文章
    @RequestMapping(value = "/selectByUserAjax", method = RequestMethod.POST)
    @ResponseBody
    public Map selectByUser(@RequestBody Page page, HttpSession httpSession) {
        int pageNumber1 = page.getPageNumber();
        int pageCount = 2;
        int totalPage;
        User user = (User) httpSession.getAttribute("userLogin");
        Integer count = microblogService.selectCount(user.getId());

        if (count % pageCount == 0) {
            totalPage = count / pageCount;
        } else {
            totalPage = count / pageCount + 1;
        }


        List<Microblog> microblogs = microblogService.selectAllArticleByUid((pageNumber1 - 1) * pageCount, pageCount, user.getId());

        for (Microblog microblog : microblogs
        ) {
            microblog.setLikesCount(microblogService.selectLikesCount(microblog.getId()));
            microblog.setForwardCount(transmitService.transmitCount(microblog));
            microblog.setPictureUrl(microblogService.selectPictureUrl(microblog.getId()));
            microblog.setUser(userService.selectUserById(microblog.getUser().getId()));
        }


        if (pageNumber1 > totalPage) {
            return null;
        } else {
            Page page1 = new Page();
            page1.setPageNumber(pageNumber1 + 1);
            page1.setTotalPage(totalPage);

            Map res = new HashMap();
            res.put("page", page1);
            res.put("microblogs", microblogs);
            return res;
        }
    }


    //根据登录用户查找自己的所有文章
    @RequestMapping(value = "/selectMyMic", method = RequestMethod.POST)
    @ResponseBody
    public Map selectMyMic(@RequestBody Page page, HttpSession httpSession) {
        int pageNumber1 = page.getPageNumber();
        int pageCount = 2;
        int totalPage;
        User user = (User) httpSession.getAttribute("userLogin");
        Integer count = microblogService.selectCount(user.getId());

        if (count % pageCount == 0) {
            totalPage = count / pageCount;
        } else {
            totalPage = count / pageCount + 1;
        }


        List<Microblog> microblogs = microblogService.selectMyArticleByUid((pageNumber1 - 1) * pageCount, pageCount, user.getId());

        for (Microblog microblog : microblogs
        ) {
            microblog.setLikesCount(microblogService.selectLikesCount(microblog.getId()));
            microblog.setForwardCount(transmitService.transmitCount(microblog));
            microblog.setPictureUrl(microblogService.selectPictureUrl(microblog.getId()));
            microblog.setUser(user);
        }


        if (pageNumber1 > totalPage) {
            return null;
        } else {
            Page page1 = new Page();
            page1.setPageNumber(pageNumber1 + 1);
            page1.setTotalPage(totalPage);

            Map res = new HashMap();
            res.put("page", page1);
            res.put("microblogs", microblogs);
            return res;
        }
    }


    //查找热点文章
    @RequestMapping(value = "/selectHot", method = RequestMethod.POST)
    @ResponseBody
    public Map selectHot(@RequestBody Page page, HttpSession httpSession) {
        int pageNumber1 = page.getPageNumber();
        int pageCount = 2;
        int totalPage;
        //设置热点数
        User user = (User) httpSession.getAttribute("userLogin");
        Integer count = microblogService.selectCount(user.getId());

        if (count % pageCount == 0) {
            totalPage = count / pageCount;
        } else {
            totalPage = count / pageCount + 1;
        }


        List<Microblog> microblogs = microblogService.selectHot((pageNumber1 - 1) * pageCount, pageCount);

        for (Microblog microblog : microblogs
        ) {
            microblog.setLikesCount(microblogService.selectLikesCount(microblog.getId()));
            microblog.setForwardCount(transmitService.transmitCount(microblog));
            microblog.setPictureUrl(microblogService.selectPictureUrl(microblog.getId()));
            User user1 = userService.selectUserById(microblog.getUser().getId());
            microblog.setUser(user1);
        }


        if (pageNumber1 > totalPage) {
            return null;
        } else {
            Page page1 = new Page();
            page1.setPageNumber(pageNumber1 + 1);
            page1.setTotalPage(totalPage);

            Map res = new HashMap();
            res.put("page", page1);
            res.put("microblogs", microblogs);
            return res;
        }
    }




    //根据文章id进行删除文章
    @RequestMapping("/deleteByIDAjax")
    public void deleteByIDAjax(@RequestBody Microblog microblog) {
        microblogService.deleteMicroblogByIDAjax(microblog.getId());
    }

    //发布文章
    @RequestMapping("/insertByMicroblog")
    @ResponseBody
    public Microblog insertByMicroblog(@RequestParam(value = "file", required = false) MultipartFile file,
                                       @RequestParam(value = "content", required = false) String content,
                                       @RequestParam(value = "createtime", required = false) String createtime,
                                       @RequestParam(value = "flag", required = false) int flag,
                                       HttpSession httpSession) throws IOException {
        Microblog microblog;

        microblog = new Microblog(content, new Timestamp(new Date(createtime).getTime()));


        User user = (User) httpSession.getAttribute("userLogin");
        microblog.setUser(user);
        String absolutePath = null;

        if (!file.isEmpty()) {
            if (flag == 1) {
                File file1 = new File("D:/学习/编译器/文件/VBlog/out/artifacts/ssm_war_exploded/video", java.net.URLEncoder.encode(file.getOriginalFilename(), "utf-8").replace("%", "-"));
                FileUtils.copyInputStreamToFile(file.getInputStream(), file1);
                String name = file1.getName();
                absolutePath = "/video/" + name;
                microblog.setVideoUrl(absolutePath);
            } else if (flag == 2) {
                File file1 = new File("D:/学习/编译器/文件/VBlog/out/artifacts/ssm_war_exploded/picture", java.net.URLEncoder.encode(file.getOriginalFilename(), "utf-8").replace("%", "-"));
                FileUtils.copyInputStreamToFile(file.getInputStream(), file1);
                String name = file1.getName();
                absolutePath = "/picture/" + name;
                microblog.setPictureUrl(absolutePath);
            }
        }


        microblogService.insertByMicroblog(microblog);

        Microblog microblog1 = microblogService.select(microblog);
        microblog1.setUser(user);


        if (flag == 2) {
            microblog1.setPictureUrl(microblog.getPictureUrl());
            microblogService.insertPicture(microblog1);
        }

        System.out.println(microblog.getCreateTime());
        return microblog1;
    }

    //查询所有文章  无差别查询
    // TODO: 2019/7/11   如何将查出来的点赞个数注入到文章表中
    @RequestMapping("selectAllMic")
    @ResponseBody
    public List<Microblog> selectAllMic() {
        List<Microblog> microBlogs = microblogService.selectAllMic();
        return microBlogs;
    }

    //点赞
    @RequestMapping("/like")
    @ResponseBody
    public Map<String, Object> Like(@RequestBody Microblog microBlog, HttpSession httpSession) {
        // TODO: 2019/7/12  查找同一篇文章点赞用户的个数
        int likecount = likesService.selectLikeCount(microBlog);
        User user = (User) httpSession.getAttribute("userLogin");
        int uid = user.getId();//当前用户的id
        Microblog microBlog1 = microblogService.selectById(microBlog.getId());//根据传入这篇文章的id找到这篇文章的对象
        int uid1 = microBlog1.getUser().getId();//文章作者的id
        System.out.println("登录用户的id ： " + uid);
        System.out.println("文章作者的id ： " + uid1);
        // TODO: 2019/7/11 判断当前用户是否点赞过该文章  0--没有点赞过 1--点赞过
        int counts = likesService.ifLike(uid, microBlog.getId());

        if (counts != 0) {//点赞不为0，说明有用户点赞，执行赞数-1操作
            likecount = likecount - 1;
            //将点赞用户从数据库中删除

            if (uid == uid1) {//自己给自己的文章点赞
                likesService.deleteLike(microBlog.getId(), uid);
                microblogService.updateLikeCount(uid, likecount, microBlog.getId());
                //selectAllMic();
            }
            if (uid != uid1) {//给别人的文章点赞
                likesService.deleteLike(microBlog.getId(), uid);
                microblogService.updateLikeCount(uid1, likecount, microBlog.getId());
                //selectAllMic();
            }

        } else {//点赞为0，说明没有用户点赞，执行赞数+1操作
            likecount = likecount + 1;
            //向likes数据库中添加点赞用户

            if (uid == uid1) {//自己给自己的文章点赞
                likesService.addLike(microBlog.getId(), uid);
                microblogService.updateLikeCount(uid, likecount, microBlog.getId());
                //selectAllMic();
            }
            if (uid != uid1) {//给别人的文章点赞
                likesService.addLike(microBlog.getId(), uid);//likes表里仍然要存登录用户的id
                microblogService.updateLikeCount(uid1, likecount, microBlog.getId());//更新文章表，必须根据文章作者的id进行更新，不然找不到该文章
                //selectAllMic();
            }
        }
        Map<String, Object> map = new HashMap<>();
        map.put("likecount", likecount);
        map.put("counts", counts);//将点赞的用户传到前端
        return map;
    }

    //转发
    @RequestMapping("/transmit")
    @ResponseBody                       //将博主微博里面的内容传到microblog对象中
    public Microblog transmit(@RequestBody Microblog microBlog, HttpSession httpSession) {
//        Map<String, Object> map = new HashMap<>();
        User user = (User) httpSession.getAttribute("userLogin");//登录的用户
        Microblog microBlog1 = microblogService.selectById(microBlog.getId());//根据传回来的博主文章的id找到对应的微博


        // TODO: 2019/7/14 自己可以转发自己的文章
        //向转发表中增加该转发信息
        transmitService.addTransmit(microBlog.getId(), user.getId());
        int transmitCount = transmitService.transmitCount(microBlog);//获取当前文章的转发数量

        microBlog.setUser(user);//将当前用户的id传入到文章uid字段中,也就是向自己的文章表中插入新文章，只不过文章的内容不是接收用户端输入，直接从查询到的文章id找到对应的文章
        microBlog.setContent(microBlog1.getContent());
        microBlog.setLabel(microBlog1.getLabel());
        microBlog.setLikesCount(microBlog1.getLikesCount());
        microBlog.setVideoUrl(microBlog1.getVideoUrl());
        microBlog.setForwardCount(transmitCount);
        microBlog.setCreateTime(new Timestamp(new Date().getTime()));//转换成timestamp格式插入到文章字段中

        //将博主的文章的各个字段插入到自己的微博表中
        microblogService.transmit(microBlog);
        //将转发数量更新到微博表中
        microblogService.updateTransmitCount(microBlog1.getUser().getId(), transmitCount, microBlog.getId());
        selectAllMic();

        //将转发的新微博展示在页面上
        Microblog microBlogs = microblogService.selectTransmit(microBlog);
        microBlogs.setUser(user);
        microBlogs.setPictureUrl(microblogService.selectPictureUrl(microBlog.getId()));

//        map.put("microblogs", microBlogs);//经转发后的文章
//        map.put("microblog1", microBlog1);//博主的文章
//        map.put("transmitCount", transmitCount);


        return microBlogs;
    }

    //关注
    @RequestMapping("/forcus")
    @ResponseBody
    public Map<String, Object> forcus(@RequestBody Microblog microBlog, HttpSession httpSession) {
        //获取登录用户
        User user = (User) httpSession.getAttribute("userLogin");
        int uid = user.getId();
        //获取博主的id
        Microblog microBlog1 = microblogService.selectById(microBlog.getId());
        int microblogid1 = microBlog1.getId();
        int authorid = microBlog1.getUser().getId();//博文作者的id

        //获取关注数量--对象是当前登录用户
        int forcusCount = forcusService.selectMicCount(uid);

        //获取粉丝数量--对象是博主
        int fansCount = forcusService.selectfansCount(authorid);

        //判断当前用户是否关注过该博主
        // TODO: 2019/7/18 不能根据文章id来判断是否关注, 因为一个作者可以多个文章，判断的依据是博文的作者,因此表中必须要有authorid字段
        int count = forcusService.ifForcus(authorid, uid);

        //count=0-->当前用户没有关注博主，要执行关注操作，当前用户增加了一个博主关注；博主增加了一个当前用户的粉丝
        if (count == 0 && uid != authorid) {
            forcusCount = forcusCount + 1;
            fansCount = fansCount + 1;
            // TODO: 2019/7/18 向表中添加了两个相同的字段 ？fuck
            //向关注表中增加用户关注，同时博主也拥有了一个当前用户的粉丝
            forcusService.addForcus(microBlog.getId(), authorid, uid);

            //更新当前用户表中的关注数
            userService.updateForcus(uid, forcusCount);
            //更新博主用户表中的粉丝数
            userService.updateFans(authorid, fansCount);
            userService.updateFans(authorid, fansCount);
            userService.selectAllUser();
        }
        //count!=0,关注过了，要执行取关操作，当前用户删除一个博主关注，博主删除了一个当前用户的粉丝
        if (count != 0 && uid != authorid) {
            forcusCount = forcusCount - 1;
            fansCount = fansCount - 1;

            //向关注表中删除用户关注，同时博主也减少了一个当前用户的粉丝
            forcusService.deleteForcus(authorid, uid);

            //更新当前用户表中的关注数
            userService.updateForcus(uid, forcusCount);
            //更新博主用户表中的粉丝数
            userService.updateFans(authorid, fansCount);
            userService.selectAllUser();
        }
        Map<String, Object> map = new HashMap<>();
        map.put("forcusCount", forcusCount);
        map.put("fansCount", fansCount);
        map.put("uid", uid);
        map.put("uid1", authorid);
        map.put("counts", count);
        return map;
    }

}
