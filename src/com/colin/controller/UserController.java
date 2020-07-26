package com.colin.controller;

import com.colin.bean.Discuss;
import com.colin.bean.Microblog;
import com.colin.bean.User;
import com.colin.service.MicroblogService;
import com.colin.service.UserService;
import com.colin.util.ParamCheck;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@RequestMapping("/user")
@Controller
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    MicroblogService microblogService;

    //跳转到登录页面
    @RequestMapping("/login")
    public String login() {
        return "userLogin";
    }

    //进行登录 登陆成功进入主页 ok
    @RequestMapping("/userLogin")
    public String userLogin(User user, Model model, HttpSession httpSession) {
        //判断是否非空
        boolean b = ParamCheck.ParamCheck(user.getName(), user.getPassword());
        if (b) {
            String userName = user.getName();
            String email = "^[A-Za-z0-9\\u4e00-\\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$";
            String telephone = "^((13[0-9])|(15[^4,\\D])|(17[0-9])|(18[0,5-9]))\\d{8}$";
            /*java用验证手机号*/ /*测试用代码,前台输入手机号时测试，matches返回true/false*/
            if (userName.matches(telephone)) { /*如果匹配上则将名字置空，并将Name中的值写到setTelephone()方法中*/
                user.setName(null);
                user.setTelephone(userName);/*代码测试用*/
                System.out.println(user.getTelephone());
            } else if (userName.matches(email)) {
                user.setName(null);
                user.setEmail(userName);
            }
            //通过用户输入信息进行查询,数据库有记录则正确登录,否则登陆失败
            User userLogin = userService.userLogin(user);
            if (userLogin == null) {
                return "loginFalse";
            }
            httpSession.setAttribute("userLogin", userLogin);
            model.addAttribute("user", userLogin);
            return "first";
        } else {
            return "loginFalse";
        }
    }

    @RequestMapping("/first")
    public String first(HttpSession httpSession, Model model) {
        User user = (User) httpSession.getAttribute("userLogin");
        model.addAttribute("user", user);
        return "first";
    }

    @RequestMapping(value = "/myMic")
    public String myMic(HttpSession httpSession, Model model) {
        User user = (User) httpSession.getAttribute("userLogin");
        model.addAttribute("user", user);
        return "myMic";
    }

    @RequestMapping(value = "/hot")
    public String hot(HttpSession httpSession, Model model) {
        User user = (User) httpSession.getAttribute("userLogin");
        model.addAttribute("user", user);
        return "hot";
    }

    //跳转到注册页面
    @RequestMapping("/register")
    public String register() {
        return "userRegister";
    }

    //进行注册 注册成功跳转到登陆页面 ok
    @RequestMapping("/userRegister")
    public String userRegister(User user, Model model) {
        User userLogin = userService.userRegister(user);

        if (user.getName().equals(null) || user.getName().equals("")) {
            model.addAttribute("result", "昵称不可为空!");
            return "userRegister";
        } else if (user.getEmail().equals("")) {
            model.addAttribute("result", "邮箱不可为空!");
            return "userRegister";
        } else if (user.getPassword().equals("")) {
            model.addAttribute("result", "密码不可为空!");
            return "userRegister";
        } else if (user.getTelephone().equals("")) {
            model.addAttribute("result", "手机号不可为空!");
            return "userRegister";
        }

        if (user.getSignature().equals("")) {
            user.setSignature("这个人很懒,没留下任何信息哦!");
        }


        String email = "^[A-Za-z0-9\\u4e00-\\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$";
        String telephone = "^((13[0-9])|(15[^4,\\D])|(17[0-9])|(18[0,5-9]))\\d{8}$";

        if (user.getName().length() > 10) {
            model.addAttribute("result", "昵称不可过长!");
            return "userRegister";
        } else if (user.getEmail().matches(email)) {
            model.addAttribute("result", "邮箱格式不正确!");
            return "userRegister";
        } else if (user.getPassword().length() < 6) {
            model.addAttribute("result", "密码过短,不安全!");
            return "userRegister";
        } else if (user.getTelephone().matches(telephone)) {
            model.addAttribute("result", "手机号格式不正确!");
            return "userRegister";
        }


        if (userLogin == null) {
            userService.insertUser(user);
            return "redirect:/user/login";
        } else {
            model.addAttribute("result", "用户已存在!");
            return "userRegister";
        }
    }

    //跳转到用户信息界面 ok
    @RequestMapping("/information")
    public String userInformation(HttpSession httpSession, Model model) {
        User userLogin = (User) httpSession.getAttribute("userLogin");
        model.addAttribute("userLogin", userLogin);
        return "userInformation";
    }

    //更新用户信息  ok
    @RequestMapping("/updateInformation")
    public String userUpdate(User user, HttpSession httpSession) {
        userService.updateUser(user);
        User userLogin = (User) httpSession.getAttribute("userLogin");
        if (user.getPassword().equals(null) || user.getPassword().equals(userLogin.getPassword())) {
            httpSession.setAttribute("userLogin", user);
            return "first";
        } else {
            return "redirect:/user/login";
        }
    }

    //上传用户头像 ok
    @RequestMapping("/uploadAvatar")
    public String uploadAvatar() {
        return "userUploadAvatar";
    }

    @RequestMapping("/uploadAvatarOK")
    public String doUpload(MultipartFile file, Model model, HttpSession session) throws IOException {

        User userLogin = (User) session.getAttribute("userLogin");

        String absolutePath = null;
        if (file != null && !file.isEmpty()) {

            String str = file.getOriginalFilename();
            String str1 = str.substring(str.lastIndexOf(".") + 1);

            File file1 = new File("D:/学习/编译器/文件/VBlog/out/artifacts/ssm_war_exploded/avatar", userLogin.getId() + "." + str1);

            FileUtils.copyInputStreamToFile(file.getInputStream(), file1);
            String name = file1.getName();
            absolutePath = "/avatar/" + name;
            userLogin.setAvatar(absolutePath);
            userService.updateUserAvatar(userLogin);
        }

        model.addAttribute("userLogin", userLogin);
        return "userInformation";
    }


    //todo 未知方法
    @RequestMapping("/Test2")
    public String Test2(int id, HttpSession httpSession) {
        httpSession.setAttribute("microbogid", id);
        return "chp.comment";
    }

    //评论页面的加载
    @RequestMapping("/ShowVblogDiscuss")
    @ResponseBody
    public List<Discuss> ShowVblogDiscuss(@RequestBody Microblog microblog) {
        //通过博文id查询所有该博文的评论和回复
        //todo 登录的用户

        int microblogId = microblog.getId();
        System.out.println("dsdsdsdsd");
        System.out.println(microblogId);
        List<Discuss> discusses = microblogService.selectVblogDiscussByMicroblogId(microblogId);
        System.out.println(discusses);
        return discusses;
    }

    //保存评论博文评论
    @RequestMapping("/AcceptComments")
    @ResponseBody
    public Discuss AcceptComments(@RequestBody Discuss discuss) {
        System.out.println(discuss);
        User user = new User();
        //todo
        user.setId(2);
        discuss.setCommentPerson(user);
        System.out.println(discuss);
        microblogService.insertVblogDisuss(discuss);
        return discuss;
    }

    //保存回复评论
    @RequestMapping("/AcceptResponds")
    @ResponseBody
    public Discuss AcceptResponds(@RequestBody Discuss discuss) {
        User user = new User();
        user.setId(1);
        discuss.setCommentPerson(user);
        System.out.println(discuss);
        microblogService.insertVblogDisuss(discuss);
        return discuss;
    }


    @RequestMapping("/deleteCommentByUser")
    @ResponseBody
    public Discuss deleteCommentByUser(@RequestBody Map map) {
        //todo 再接受一个USer类,比较类里的名字与name是否相等
        System.out.println(map);
        microblogService.deleteCommentByUser(map);
        return new Discuss();
    }

    @RequestMapping("/deleteAllCommentByUser")
    @ResponseBody
    public Discuss deleteAllCommentByUser(@RequestBody Map map) {
        //todo 再接受一个USer类,比较类里的名字与name是否相等
        System.out.println(map);
//        microBlogService.deleteAllCommentByUserId(map);
        return new Discuss();
    }
}
