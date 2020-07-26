function timeStamp2String(time) {
    var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var date = datetime.getDate();
    var hour = datetime.getHours();
    if (hour <= 9) {
        hour = "0" + hour;
    }
    var minute = datetime.getMinutes();
    if (minute <= 9) {
        minute = "0" + minute;
    }
    var second = datetime.getSeconds();
    if (second <= 9) {
        second = "0" + second;
    }
    // var mseconds = datetime.getMilliseconds();
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;//+"."+mseconds;
};

function forcusUser(id) {
    /*todo 触发用户的id将div显示出来*/
    // $(".forcus").toggle();
    // $("#jiaguan").click(function () {
    $.ajax({
        url: "/microblog/forcus",
        dataType: "json",//预期服务器返回的类型
        type: "POST",
        contentType: "application/json;charset=utf-8",
        //向后台传输的数据
        data: JSON.stringify({
            id: id/*将微博id传向后端*/
        }),
        success: function (map) {
            var forcusCount = map.forcusCount;
            var fansCount = map.fansCount;
            var uid = map.uid;
            var uid1 = map.uid1;
            var count = map.counts;


            if (count == 0) {

                alert("关注成功");
                alert("当前用户的关注数 ： " + forcusCount);
                alert("博主的粉丝数 : " + fansCount);
            } else {

                alert("取关成功！");
                alert("当前用户的关注数 ： " + forcusCount);
                alert("博主的粉丝数 : " + fansCount);
            }
            $(".forcus").toggle();
            /*todo 再将其隐藏*/
        }
    })

    // })
}

$(function () {
    toStr("emotion", "c-publisher-imagetype");
    toStr("view", "emButton");
})

//实现删除
function deleteid(id) {
    $("#" + id).remove();

    $.ajax({
        url: "/microblog/deleteByIDAjax",
        dataType: "json",
        type: "POST",
        contentType: "application/json;charset=utf-8",
        //向后端传输的数据
        data: JSON.stringify({
            id: id
        }),
        //处理后端返回的数据
        success: function (data) {
            alert("删除成功");
        },
        //处理失败返回的数据
        error: function (data) {
            alert("删除成功");
        }
    });

}
//点赞
function like(id) {
    $.ajax({
        url: "/microblog/like",
        dataType: "json",
        type: "post",
        async: true,
        contentType: "application/json;charset=utf-8",
        //向后台传输的数据
        data: JSON.stringify({
            id: id//将当前文章的id传给后端
        }),
        success: function (map) {//接收到后端查到文章的总赞数
            var zNum = map.likecount;//保存后端查到的总赞数
            var counts = map.counts;//判断的条件 0--没有点赞 1--点赞


            if (counts == 1) {//todo 查询的数量为1，说明该用户已经点过赞了，数据库里的赞数要减一
                alert("你已经点过赞了" + zNum);
                $("#likecount" + id).text(zNum);


            }
            if (counts == 0) {//todo 查询数量为0，说明该用户没有点过赞，数据库赞数加一
                alert("点赞成功！" + zNum);
                $("#likecount" + id).text(zNum);

            }
        }
    })

}
//转发
function transmit(id) {//当前文章
    //todo transmit按钮被触发之后，将隐藏的div显示出来
    $(".view").toggle();//接收用户输入转发理由
    //todo 转发按钮触发后--
    $("#transmitButton").click(function () {

        $(".view").toggle();
        $.ajax({
            url: "/microblog/transmit",
            dataType: "json",
            type: "post",
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify({
                id: id,//向后端传文章id
                reason: $("#reason").val()//接收到转发页面传回的转发理由
            }),
            success: function (data) {

                if (data.videoUrl != null) {
                    $("#div1").prepend(
                        "<div class=\"WB_feed WB_feed_v3 WB_feed_v4\" style=\" max-width: 600px;left: 25%;\">" +
                        "    <div id='" + data.id + "' class=\"WB_cardwrap WB_feed_type S_bg2 WB_feed_like\">" +
                        "        <div class=\"WB_feed_detail clearfix\">" +
                        "            <div class=\"WB_face W_fl\">" +
                        "                <div class=\"face\">" +
                        "                    <a target=\"_blank\" class=\"W_face_radius\"" +
                        "                       href=\"/fanservice?refer_flag=0000015010_&amp;from=feed&amp;loc=avatar\">" +
                        "                        <img src=\"" + data.user.avatar + "\"" +
                        "                             class=\"W_face_radius\" width=\"50\" height=\"50\">" +
                        "                    </a>" +
                        "                </div>" +
                        "            </div>" +
                        "            <div class=\"WB_detail\">" +
                        "                <div class=\"WB_info\">" +
                        "                    <a target=\"_blank\"" +
                        "                       class=\"W_f14 W_fb S_txt1\"" +
                        "                       href=\"/fanservice?refer_flag=0000015010_&amp;from=feed&amp;loc=nickname\"" +
                        "                    >" + data.user.name + "</a>" +
                        "                </div>" +
                        "                <div class=\"WB_from S_txt2\">" +
                        "                    <a target=\"_blank\" href=\"/3756087501/HCuoE4SRE?ref=home&amp;rid=4_0_8_2633216961468354693_0_1_0\"" +
                        "                       title='" + timeStamp2String(data.createTime) + "'   date=\"1562554233000\" class=\"S_txt2\">" +
                        timeStamp2String(data.createTime) +
                        "                    </a>" +
                        "                </div>" +
                        "                <div class=\"PCD_user_b S_bg1\" node-type=\"follow_recommend_box\" style=\"display:none\"></div>" +
                        "                <div class=\"WB_text W_f14\" node-type=\"feed_list_content\">" + "转发理由" +
                        toImage(data.reason) +
                        "                </div>" +
                        "                <div class=\"WB_text W_f14\" node-type=\"feed_list_content\">" +
                        toImage(data.content) +
                        "                </div>" +
                        "                <div class=\"WB_expand_media_box \" style=\"display: none;\" node-type=\"feed_list_media_disp\"></div>" +
                        "                <div class=\"WB_media_wrap clearfix\" node-type=\"feed_list_media_prev\">" +
                        "                    <div class=\"media_box\">" +
                        "                        <ul class=\"WB_media_a WB_media_a_m1 clearfix\">" +
                        "                            <div id='video" + data.id + "' style=\"width: 100%; height: 300px;max-width: 460px;\">" +
                        "                            </div>" +
                        "                        </ul>" +
                        "                    </div>" +
                        "                </div>" +
                        "            </div>" +
                        "        </div>" +
                        "        <div class=\"WB_feed_handle\">" +
                        "            <div class=\"WB_handle\">" +
                        "                <ul class=\"WB_row_line WB_row_r4 clearfix S_line2\">" +
                        "                    <li>" +
                        "                        <a class=\"S_txt2\" href=\"javascript:deleteid(" + data.id + ");\">" +
                        "                            <span class=\"pos\">" +
                        "                                <span class=\"line S_line1\">" +
                        "                                    <span>" +
                        "                                    <em class=\"W_ficon ficon_favorite S_ficon\"></em>" +
                        "                                    <em>删除</em>" +
                        "                                    </span>" +
                        "                                </span>" +
                        "                            </span>" +
                        "                        </a>" +
                        "                    </li>" +
                        "                    <li>" +
                        "                        <a id='button" + data.id + "' class=\"S_txt2\" href=\"javascript:transmit(" + data.id + ");\">" +
                        "                            <span class=\"pos\">" +
                        "                                <span class=\"line S_line1\">" +
                        "                                    <span>" +
                        "                                        <em class=\"W_ficon ficon_forward S_ficon\">转发</em>" +
                        "                                        <em>" + data.forwardCount + "</em>" +
                        "                                    </span>" +
                        "                                </span>" +
                        "                            </span>" +
                        "                        </a>" +
                        "                    </li>" +
                        "                    <li>" +
                        "                        <a class=\"S_txt2\" href='/user/Test2?id=" + data.id + "'>" +
                        "                            <span class=\"pos\">" +
                        "                                <span class=\"line S_line1\">" +
                        "                                    <span>" +
                        "                                        <em class=\"W_ficon ficon_repeat S_ficon\">" +
                        "                                        </em>" + "评论" +
                        "                                        <em>" +
                        14 +
                        "                                        </em>" +
                        "                                    </span>" +
                        "                                </span>" +
                        "                            </span>" +
                        "                        </a>" +
                        "                        <span class=\"arrow\" style=\"display: none;\">" +
                        "                            <span class=\"W_arrow_bor W_arrow_bor_t\">" +
                        "                                <i class=\"S_line1\">" +
                        "                                </i>" +
                        "                                <em class=\"S_bg1_br\">" +
                        "                                </em>" +
                        "                            </span>" +
                        "                        </span>" +
                        "                    </li>" +
                        "                    <li class=\"\">" +
                        "                        <!--cuslike用于前端判断是否显示个性赞，1:显示 -->" +
                        "                        <a href=\"javascript:like(" + data.id + ");\" class=\"S_txt2\" action-type=\"fl_like\"" +
                        "                           action-data=\"version=mini&amp;qid=heart&amp;mid=4391733121164214&amp;like_src=1&amp;cuslike=1\"" +
                        "                           title=\"赞\"><span class=\"pos\"><span class=\"line S_line1\">" +
                        "                           <span node-type=\"like_status\"" +
                        "                                  class=\"\"><em" +
                        "                                    class=\"W_ficon ficon_praised S_txt2\">点赞</em><em id =\'likecount" + data.id + "\'>" + data.likesCount + "</em></span>" +
                        "                           </span></span></a>" +
                        "                        <span class=\"arrow\" node-type=\"cmtarrow\"><span class=\"W_arrow_bor W_arrow_bor_t\">" +
                        "                    <i" + "class=\"S_line1\"></i><em class=\"S_bg1_br\"></em></span></span>" + "</li>" +
                        "                </ul>" +
                        "            </div>" +
                        "        </div>" +
                        "    </div>" +
                        "</div>"
                    )

                    var videoObject = {
                        container: '#video' + data.id,
                        variable: 'player',
                        //loop: true,
                        autoplay: false,
                        poster: 'material/poster.jpg',
                        video: [
                            [data.videoUrl, 'video/mp4', '中文标清', 0],
                        ]
                    };
                    var player = new ckplayer(videoObject);
                }
                else if (data.pictureUrl != null) {
                    $("#div1").prepend(
                        "<div id='" + data.id + "' class=\"WB_cardwrap WB_feed_type S_bg2 WB_feed_like\" >" +
                        "    <div   class=\"WB_feed_detail clearfix\">" +
                        "        <div class=\"WB_face W_fl\">" +
                        "            <div class=\"face\"><a target=\"_blank\" class=\"W_face_radius\"><img" +
                        "                    src=\"" + data.user.avatar + "\"" +
                        "                    class=\"W_face_radius\" width=\"50\" height=\"50\"></a></div>" +
                        "        </div>" +
                        "        <div class=\"WB_detail\">" +
                        "            <div class=\"WB_info\">" +
                        "                <a target=\"_blank\" class=\"W_f14 W_fb S_txt1\"" +
                        "                   href=\"/u/6508492693?refer_flag=0000015010_&amp;from=feed&amp;loc=nickname\"> " + data.user.name + " " +
                        "                </a>" +
                        "            </div>" +
                        "            <div class=\"PCD_user_b S_bg1\" style=\"display:none\">" +
                        "            </div>" +
                        "                <div class=\"WB_text W_f14\" node-type=\"feed_list_content\">" + "转发理由" +
                        toImage(data.reason) +
                        "                </div>" +
                        "            <div class=\"WB_text W_f14\">" +
                        "                " + toImage(data.content) + " ​​​​" +
                        "            </div>" +
                        "            <div class=\"WB_expand_media_box \" style=\"display: none;\">" +
                        "            </div>" +
                        "            <div class=\"WB_media_wrap clearfix\">" +
                        "                <div class=\"media_box\">" +
                        "                    <ul class=\"WB_media_a  WB_media_a_m1 clearfix\"" +
                        "                        action-data=\"isPrivate=0&amp;relation=0&amp;clear_picSrc=%2F%2Fwx4.sinaimg.cn%2Fmw690%2F0076sYgBgy1g4mp5845hsj30eu0eiq7n.jpg\">" +
                        "                        <li class=\"WB_pic li_1 S_bg1 S_line2 bigcursor li_n_mix_w \">" +
                        "                            <img src=" + data.pictureUrl + ">" +
                        "                            <i class=\"W_loading\" style=\"display:none;\"></i>" +
                        "                            <i class=\"W_loading\" style=\"display:none;\"></i>" +
                        "                        </li>" +
                        "                    </ul>" +
                        "                </div>" +
                        "            </div>" +
                        "        </div>" +
                        "        <div class=\"WB_like\" style=\"display:none;\">" +
                        "            <div class=\"anibox UI_ani\"" +
                        "                 style=\"background-image:url(//img.t.sinajs.cn/t6/skin/public/like/p_0000_pc.png?version=201907181820);\"></div>" +
                        "        </div>" +
                        "    </div>" +
                        "    <div class=\"WB_feed_handle\">" +
                        "        <div class=\"WB_handle\">" +
                        "            <ul class=\"WB_row_line WB_row_r4 clearfix S_line2\">" +
                        "                <li>" +
                        "                    <a class=\"S_txt2\" href=\"javascript:deleteid(" + data.id + ");\">" +
                        "                        <span class=\"pos\">" +
                        "                            <span class=\"line S_line1\">" +
                        "                                <span>" +
                        "                                    <em class=\"W_ficon ficon_favorite S_ficon\">" +
                        "                                    </em>" +
                        "                                    <em>" +
                        "                                    删除" +
                        "                                    </em>" +
                        "                                </span>" +
                        "                            </span>" +
                        "                        </span>" +
                        "                    </a>" +
                        "                </li>" +
                        "                <li>" +
                        "                    <a id='button" + data.id + "' class=\"S_txt2\" href=\"javascript:transmit(" + data.id + ");\"><span class=\"pos\"><span class=\"line S_line1\"><span><em" +
                        "                            class=\"W_ficon ficon_forward S_ficon\">转发</em><em>" + data.forwardCount + "</em></span></span></span></a>" +
                        "                </li>" +
                        "                <li>" +
                        "                    <a class=\"S_txt2\" href='/user/Test2?id=" + data.id + "'><span class=\"pos\"><span class=\"line S_line1\"><span><em" +
                        "                            class=\"W_ficon ficon_repeat S_ficon\">评论</em><em >14</em></span></span></span></a>" +
                        "                    <span class=\"arrow\" style=\"display: none;\"><span class=\"W_arrow_bor W_arrow_bor_t\"><i" +
                        "                            class=\"S_line1\"></i><em class=\"S_bg1_br\"></em></span></span>" +
                        "                </li>" +
                        "                <li>" +
                        "                    <a href=\"javascript:like(" + data.id + ");\" class=\"S_txt2\"><span class=\"pos\"><span class=\"line S_line1\">" +
                        "                        <span><em class=\"W_ficon ficon_praised S_txt2\">点赞</em><em id =\'likecount" + data.id + "\'>" + data.likesCount + "</em></span></span></span></a>" +
                        "                    <span class=\"arrow\"><span class=\"W_arrow_bor W_arrow_bor_t\"><i class=\"S_line1\"></i><em" +
                        "                            class=\"S_bg1_br\"></em></span></span>" +
                        "                </li>" +
                        "            </ul>" +
                        "        </div>" +
                        "    </div>" +
                        "</div>"
                    );
                    document.getElementById('uploadPicture') && document.getElementById('uploadPicture').reset();
                }
                else {
                    $("#div1").prepend("<div class=\"WB_feed WB_feed_v3 WB_feed_v4\" style=\" max-width: 600px;left: 25%;\">" +
                        "    <div id='" + data.id + "' class=\"WB_cardwrap WB_feed_type S_bg2 WB_feed_like\">" +
                        "        <div class=\"WB_feed_detail clearfix\">" +
                        "            <div class=\"WB_face W_fl\">" +
                        "                <div class=\"face\">" +
                        "                    <a target=\"_blank\" class=\"W_face_radius\"" +
                        "                       href=\"/fanservice?refer_flag=0000015010_&amp;from=feed&amp;loc=avatar\">" +
                        "                        <img src=\"" + data.user.avatar + "\"" +
                        "                             class=\"W_face_radius\" width=\"50\" height=\"50\">" +
                        "                    </a>" +
                        "                </div>" +
                        "            </div>" +
                        "            <div class=\"WB_detail\">" +
                        "                <div class=\"WB_info\">" +
                        "                    <a target=\"_blank\"" +
                        "                       class=\"W_f14 W_fb S_txt1\"" +
                        "                       href=\"/fanservice?refer_flag=0000015010_&amp;from=feed&amp;loc=nickname\"" +
                        "                    >" + data.user.name + "</a>" +
                        "                </div>" +
                        "                <div class=\"WB_from S_txt2\">" +
                        "                    <a target=\"_blank\" href=\"/3756087501/HCuoE4SRE?ref=home&amp;rid=4_0_8_2633216961468354693_0_1_0\"" +
                        "                       title='" + timeStamp2String(data.createTime) + "'  class=\"S_txt2\">" +
                        timeStamp2String(data.createTime) +
                        "                    </a>" +
                        "                </div>" +
                        "                <div class=\"PCD_user_b S_bg1\" style=\"display:none\"></div>" +
                        "                <div class=\"WB_text W_f14\">" + "转发理由" +
                        toImage(data.reason) +
                        "                </div>" +
                        "                <div class=\"WB_text W_f14\" node-type=\"feed_list_content\">" +
                        toImage(data.content) +
                        "                </div>" +
                        "                <div class=\"WB_expand_media_box \" style=\"display: none;\" node-type=\"feed_list_media_disp\"></div>" +
                        "                <div class=\"WB_media_wrap clearfix\" >" +
                        "                    <div class=\"media_box\">" +
                        "                        <ul class=\"WB_media_a WB_media_a_m1 clearfix\">" +
                        "                        </ul>" +
                        "                    </div>" +
                        "                </div>" +
                        "            </div>" +
                        "        </div>" +
                        "        <div class=\"WB_feed_handle\">" +
                        "            <div class=\"WB_handle\">" +
                        "                <ul class=\"WB_row_line WB_row_r4 clearfix S_line2\">" +
                        "                    <li>" +
                        "                        <a class=\"S_txt2\" href=\"javascript:deleteid(" + data.id + ");\">" +
                        "                            <span class=\"pos\">" +
                        "                                <span class=\"line S_line1\">" +
                        "                                    <span>" +
                        "                                    <em class=\"W_ficon ficon_favorite S_ficon\"></em>" +
                        "                                    <em>删除</em>" +
                        "                                    </span>" +
                        "                                </span>" +
                        "                            </span>" +
                        "                        </a>" +
                        "                    </li>" +
                        "                    <li>" +
                        "                        <a id='button" + data.id + "' class=\"S_txt2\" href=\"javascript:transmit(" + data.id + ");\">" +
                        "                            <span class=\"pos\">" +
                        "                                <span class=\"line S_line1\">" +
                        "                                    <span>" +
                        "                                        <em class=\"W_ficon ficon_forward S_ficon\">转发</em>" +
                        "                                        <em>" + data.forwardCount + "</em>" +
                        "                                    </span>" +
                        "                                </span>" +
                        "                            </span>" +
                        "                        </a>" +
                        "                    </li>" +
                        "                    <li>" +
                        "                        <a class=\"S_txt2\" href='/user/Test2?id=" + data.id + "'>" +
                        "                            <span class=\"pos\">" +
                        "                                <span class=\"line S_line1\">" +
                        "                                    <span>" +
                        "                                        <em class=\"W_ficon ficon_repeat S_ficon\">" +
                        "                                        </em>" + "评论" +
                        "                                        <em>" +
                        14 +
                        "                                        </em>" +
                        "                                    </span>" +
                        "                                </span>" +
                        "                            </span>" +
                        "                        </a>" +
                        "                        <span class=\"arrow\" style=\"display: none;\">" +
                        "                            <span class=\"W_arrow_bor W_arrow_bor_t\">" +
                        "                                <i class=\"S_line1\">" +
                        "                                </i>" +
                        "                                <em class=\"S_bg1_br\">" +
                        "                                </em>" +
                        "                            </span>" +
                        "                        </span>" +
                        "                    </li>" +
                        "                    <li class=\"\">" +
                        "                        <!--cuslike用于前端判断是否显示个性赞，1:显示 -->" +
                        "                        <a href=\"javascript:like(" + data.id + ");\" class=\"S_txt2\" action-type=\"fl_like\"" +
                        "                           action-data=\"version=mini&amp;qid=heart&amp;mid=4391733121164214&amp;like_src=1&amp;cuslike=1\"" +
                        "                           title=\"赞\"><span class=\"pos\"><span class=\"line S_line1\">" +
                        "                           <span node-type=\"like_status\"" +
                        "                                  class=\"\"><em" +
                        "                                    class=\"W_ficon ficon_praised S_txt2\">点赞</em><em id =\'likecount" + data.id + "\'>" + data.likesCount + "</em></span>" +
                        "                           </span></span></a>" +
                        "                        <span class=\"arrow\" node-type=\"cmtarrow\"><span class=\"W_arrow_bor W_arrow_bor_t\">" +
                        "                    <i" + "class=\"S_line1\"></i><em class=\"S_bg1_br\"></em></span></span>" + "</li>" +
                        "                </ul>" +
                        "            </div>" +
                        "        </div>" +
                        "    </div>" +
                        "</div>"
                    );
                }
                $("#transmitcount" + id).text(data.forwardCount);

            },
            error: function () {
                alert("没有接收到后台传过来的值，转发失败");
            }
        })
    })
    $("#close").click(function () {
        $(".view").css("display", "none");
    })
}
//评论
function discuss(id) {

    $.ajax({
        url: "/user/ShowVblogDiscuss",
        dataType: "json",
        type: "post",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify({
            microblogId: id,//向后端传文章id
        }),
        success: function (data) {


        },
        error: function () {

        }
    })

}

window.onload = function () {
    $.ajax({
        url: "/microblog/selectHot",
        dataType: "json",
        type: "POST",
        contentType: "application/json;charset=utf-8",
        //向后端传输的数据
        data: JSON.stringify({
            pageNumber: 1
        }),
        //处理后端返回的数据
        success: function (data) {
            for (var i in data.microblogs) {
                if (data.microblogs[i].videoUrl != null) {
                    $("#div1").append(
                        "<div class=\"WB_feed WB_feed_v3 WB_feed_v4\" style=\" max-width: 600px;left: 25%;\">" +
                        "    <div id='" + data.microblogs[i].id + "' class=\"WB_cardwrap WB_feed_type S_bg2 WB_feed_like\">" +
                        "        <div class=\"WB_feed_detail clearfix\">" +
                        "            <div class=\"WB_face W_fl\">" +
                        "                <div class=\"face\">" +
                        "                    <a target=\"_blank\" class=\"W_face_radius\"" +
                        "                       href=\"/fanservice?refer_flag=0000015010_&amp;from=feed&amp;loc=avatar\">" +
                        "                        <img src=\"" + data.microblogs[i].user.avatar + "\"" +
                        "                             class=\"W_face_radius\" width=\"50\" height=\"50\">" +
                        "                    </a>" +
                        "                </div>" +
                        "            </div>" +
                        "            <div class=\"WB_detail\">" +
                        "                <div class=\"WB_info\">" +
                        "                    <a " +
                        "                       class=\"W_f14 W_fb S_txt1\"" +
                        "                       href=\"javascript:forcusUser(" + data.microblogs[i].id + ")\"" +
                        "                    >" + data.microblogs[i].user.name + "</a>" +
                        "                </div>" +
                        "                <div class=\"WB_from S_txt2\">" +
                        "                    <a target=\"_blank\" href=\"/3756087501/HCuoE4SRE?ref=home&amp;rid=4_0_8_2633216961468354693_0_1_0\"" +
                        "                       title=\"2019-07-08 10:50\" date=\"1562554233000\" class=\"S_txt2\">" +
                        timeStamp2String(data.microblogs[i].createTime) +
                        "                    </a>" +
                        "                </div>" +
                        "                <div class=\"PCD_user_b S_bg1\" node-type=\"follow_recommend_box\" style=\"display:none\"></div>" +
                        "                <div class=\"WB_text W_f14\" node-type=\"feed_list_content\">" +
                        toImage(data.microblogs[i].content) +
                        "                </div>" +
                        "                <div class=\"WB_expand_media_box \" style=\"display: none;\" node-type=\"feed_list_media_disp\"></div>" +
                        "                <div class=\"WB_media_wrap clearfix\" node-type=\"feed_list_media_prev\">" +
                        "                    <div class=\"media_box\">" +
                        "                        <ul class=\"WB_media_a WB_media_a_m1 clearfix\">" +
                        "                            <div id='video" + data.microblogs[i].id + "' style=\"width: 100%; height: 300px;max-width: 460px;\">" +
                        "                            </div>" +
                        "                        </ul>" +
                        "                    </div>" +
                        "                </div>" +
                        "            </div>" +
                        "        </div>" +
                        "        <div class=\"WB_feed_handle\">" +
                        "            <div class=\"WB_handle\">" +
                        "                <ul class=\"WB_row_line WB_row_r4 clearfix S_line2\">" +
                        "                    <li>" +
                        "                        <a class=\"S_txt2\" href=\"javascript:deleteid(" + data.microblogs[i].id + ");\">" +
                        "                            <span class=\"pos\">" +
                        "                                <span class=\"line S_line1\">" +
                        "                                    <span>" +
                        "                                    <em class=\"W_ficon ficon_favorite S_ficon\"></em>" +
                        "                                    <em>删除</em>" +
                        "                                    </span>" +
                        "                                </span>" +
                        "                            </span>" +
                        "                        </a>" +
                        "                    </li>" +

                        "                    <li>" +
                        "                        <a id='button" + data.microblogs[i].id + "' class=\"S_txt2\" href=\"javascript:transmit(" + data.microblogs[i].id + ");\">" +
                        "                            <span class=\"pos\">" +
                        "                                <span class=\"line S_line1\">" +
                        "                                    <span>" +
                        "                                        <em class=\"W_ficon ficon_forward S_ficon\">转发</em>" +
                        "                                        <em>" + data.microblogs[i].forwardCount + "</em>" +
                        "                                    </span>" +
                        "                                </span>" +
                        "                            </span>" +
                        "                        </a>" +
                        "                    </li>" +
                        "                    <li>" +
                        "                        <a class=\"S_txt2\" href='/user/Test2?id=" + data.microblogs[i].id + "'>" +
                        "                            <span class=\"pos\">" +
                        "                                <span class=\"line S_line1\">" +
                        "                                    <span>" +
                        "                                        <em class=\"W_ficon ficon_repeat S_ficon\">" +
                        "                                        评论</em>" +
                        "                                        <em>" +
                        "                                            14" +
                        "                                        </em>" +
                        "                                    </span>" +
                        "                                </span>" +
                        "                            </span>" +
                        "                        </a>" +
                        "                        <span class=\"arrow\" style=\"display: none;\">" +
                        "                            <span class=\"W_arrow_bor W_arrow_bor_t\">" +
                        "                                <i class=\"S_line1\">" +
                        "                                </i>" +
                        "                                <em class=\"S_bg1_br\">" +
                        "                                </em>" +
                        "                            </span>" +
                        "                        </span>" +
                        "                    </li>" +
                        "                    <li class=\"\">" +
                        "                        <!--cuslike用于前端判断是否显示个性赞，1:显示 -->" +
                        "                        <a href=\"javascript:like(" + data.microblogs[i].id + ");\" class=\"S_txt2\" " +
                        "                           title=\"赞\"><span class=\"pos\"><span class=\"line S_line1\">" +
                        "                           <span node-type=\"like_status\"" +
                        "                                  class=\"\"><em" +
                        "                                    class=\"W_ficon ficon_praised S_txt2 \">点赞</em><em id =\'likecount" + data.microblogs[i].id + "\'>" + data.microblogs[i].likesCount + "</em></span>" +
                        "                           </span></span></a>" +
                        "                        <span class=\"arrow\"><span class=\"W_arrow_bor W_arrow_bor_t\">" +
                        "                    <i" + "class=\"S_line1\"></i><em class=\"S_bg1_br\"></em></span></span>" + "</li>" +
                        "                </ul>" +
                        "            </div>" +
                        "        </div>" +
                        "    </div>" +
                        "</div>"
                    )

                    var videoObject = {
                        container: '#video' + data.microblogs[i].id,
                        variable: 'player',
                        //loop: true,
                        autoplay: false,
                        poster: 'material/poster.jpg',
                        video: [
                            [data.microblogs[i].videoUrl, 'video/mp4', '中文标清', 0],
                        ]
                    };
                    var player = new ckplayer(videoObject);
                } else if (data.microblogs[i].pictureUrl != null) {
                    $("#div1").append(
                        "<div id='" + data.microblogs[i].id + "' class=\"WB_cardwrap WB_feed_type S_bg2 WB_feed_like\" >" +
                        "    <div   class=\"WB_feed_detail clearfix\">" +
                        "        <div class=\"WB_face W_fl\">" +
                        "            <div class=\"face\"><a target=\"_blank\" class=\"W_face_radius\"><img" +
                        "                    src=\"" + data.microblogs[i].user.avatar + "\"" +
                        "                    class=\"W_face_radius\" width=\"50\" height=\"50\"></a></div>" +
                        "        </div>" +
                        "        <div class=\"WB_detail\">" +
                        "            <div class=\"WB_info\">" +
                        "                <a class=\"W_f14 W_fb S_txt1\"" +
                        "                   href=\"javascript:forcusUser(" + data.microblogs[i].id + ")\"> " + data.microblogs[i].user.name + " " +
                        "                </a>" +
                        "            </div>" +
                        "            <div class=\"PCD_user_b S_bg1\" style=\"display:none\">" +
                        "            </div>" +
                        "            <div class=\"WB_text W_f14\">" +
                        "                " + toImage(data.microblogs[i].content) + " ​​​​" +
                        "            </div>" +
                        "            <div class=\"WB_expand_media_box \" style=\"display: none;\">" +
                        "            </div>" +
                        "            <div class=\"WB_media_wrap clearfix\">" +
                        "                <div class=\"media_box\">" +
                        "                    <ul class=\"WB_media_a  WB_media_a_m1 clearfix\"" +
                        "                        action-data=\"isPrivate=0&amp;relation=0&amp;clear_picSrc=%2F%2Fwx4.sinaimg.cn%2Fmw690%2F0076sYgBgy1g4mp5845hsj30eu0eiq7n.jpg\">" +
                        "                        <li class=\"WB_pic li_1 S_bg1 S_line2 bigcursor li_n_mix_w \">" +
                        "                            <img src=" + data.microblogs[i].pictureUrl + ">" +
                        "                            <i class=\"W_loading\" style=\"display:none;\"></i>" +
                        "                            <i class=\"W_loading\" style=\"display:none;\"></i>" +
                        "                        </li>" +
                        "                    </ul>" +
                        "                </div>" +
                        "            </div>" +
                        "        </div>" +
                        "        <div class=\"WB_like\" style=\"display:none;\">" +
                        "            <div class=\"anibox UI_ani\"" +
                        "                 style=\"background-image:url(//img.t.sinajs.cn/t6/skin/public/like/p_0000_pc.png?version=201907181820);\"></div>" +
                        "        </div>" +
                        "    </div>" +
                        "    <div class=\"WB_feed_handle\">" +
                        "        <div class=\"WB_handle\">" +
                        "            <ul class=\"WB_row_line WB_row_r4 clearfix S_line2\">" +
                        "                <li>" +
                        "                    <a class=\"S_txt2\" href=\"javascript:deleteid(" + data.microblogs[i].id + ");\">" +
                        "                        <span class=\"pos\">" +
                        "                            <span class=\"line S_line1\">" +
                        "                                <span>" +
                        "                                    <em class=\"W_ficon ficon_favorite S_ficon\">" +
                        "                                    </em>" +
                        "                                    <em>" +
                        "                                    删除" +
                        "                                    </em>" +
                        "                                </span>" +
                        "                            </span>" +
                        "                        </span>" +
                        "                    </a>" +
                        "                </li>" +
                        "                <li>" +
                        "                    <a id='button" + data.microblogs[i].id + "' class=\"S_txt2\" href=\"javascript:transmit(" + data.microblogs[i].id + ");\"><span class=\"pos\"><span class=\"line S_line1\"><span><em" +
                        "                            class=\"W_ficon ficon_forward S_ficon\">转发</em><em>" + data.microblogs[i].forwardCount + "</em></span></a>" +
                        "                </li>" +
                        "                <li>" +
                        "                    <a class=\"S_txt2\" href='/user/Test2?id=" + data.microblogs[i].id + "'><span class=\"pos\"><span class=\"line S_line1\"><span><em" +
                        "                            class=\"W_ficon ficon_repeat S_ficon\">评论</em><em >14</em></span></span></span></a>" +
                        "                    <span class=\"arrow\" style=\"display: none;\"><span class=\"W_arrow_bor W_arrow_bor_t\"><i" +
                        "                            class=\"S_line1\"></i><em class=\"S_bg1_br\"></em></span></span>" +
                        "                </li>" +
                        "                <li>" +
                        "                    <a href=\"javascript:like(" + data.microblogs[i].id + ");\" class=\"S_txt2\"><span class=\"pos\"><span class=\"line S_line1\">" +
                        "                        <span><em class=\"W_ficon ficon_praised S_txt2\">点赞</em><em id =\'likecount" + data.microblogs[i].id + "\'>" + data.microblogs[i].likesCount + "</em></span></span></span></a>" +
                        "                    <span class=\"arrow\"><span class=\"W_arrow_bor W_arrow_bor_t\"><i class=\"S_line1\"></i><em" +
                        "                            class=\"S_bg1_br\"></em></span></span>" +
                        "                </li>" +
                        "            </ul>" +
                        "        </div>" +
                        "    </div>" +
                        "</div>"
                    );
                }
                else {
                    $("#div1").append("<div class=\"WB_feed WB_feed_v3 WB_feed_v4\" style=\" max-width: 600px;left: 25%;\">" +
                        "    <div id='" + data.microblogs[i].id + "'  class=\"WB_cardwrap WB_feed_type S_bg2 WB_feed_like\">" +
                        "        <div class=\"WB_feed_detail clearfix\">" +
                        "            <div class=\"WB_face W_fl\">" +
                        "                <div class=\"face\">" +
                        "                    <a target=\"_blank\" class=\"W_face_radius\"" +
                        "                       href=\"/fanservice?refer_flag=0000015010_&amp;from=feed&amp;loc=avatar\">" +
                        "                        <img src=\"" + data.microblogs[i].user.avatar + "\"" +
                        "                             class=\"W_face_radius\" width=\"50\" height=\"50\">" +
                        "                    </a>" +
                        "                </div>" +
                        "            </div>" +
                        "            <div class=\"WB_detail\">" +
                        "                <div class=\"WB_info\">" +
                        "                    <a " +
                        "                       class=\"W_f14 W_fb S_txt1\"" +
                        "                       href=\"javascript:forcusUser(" + data.microblogs[i].id + ");\"" +
                        "                    >" + data.microblogs[i].user.name + "</a>" +

                        "                </div>" +
                        "                <div class=\"WB_from S_txt2\">" +
                        "                    <a target=\"_blank\" href=\"/3756087501/HCuoE4SRE?ref=home&amp;rid=4_0_8_2633216961468354693_0_1_0\"" +
                        "                       title=\"2019-07-08 10:50\" date=\"1562554233000\" class=\"S_txt2\">" +
                        timeStamp2String(data.microblogs[i].createTime) +
                        "                    </a>" +
                        "                </div>" +
                        "                <div class=\"PCD_user_b S_bg1\" node-type=\"follow_recommend_box\" style=\"display:none\"></div>" +
                        "                <div class=\"WB_text W_f14\" node-type=\"feed_list_content\">" +
                        toImage(data.microblogs[i].content) +
                        "                </div>" +
                        "                <div class=\"WB_expand_media_box \" style=\"display: none;\" node-type=\"feed_list_media_disp\"></div>" +
                        "                <div class=\"WB_media_wrap clearfix\" node-type=\"feed_list_media_prev\">" +
                        "                    <div class=\"media_box\">" +
                        "                        <ul class=\"WB_media_a WB_media_a_m1 clearfix\">" +
                        "                        </ul>" +
                        "                    </div>" +
                        "                </div>" +
                        "            </div>" +
                        "        </div>" +
                        "        <div class=\"WB_feed_handle\">" +
                        "            <div class=\"WB_handle\">" +
                        "                <ul class=\"WB_row_line WB_row_r4 clearfix S_line2\">" +
                        "                    <li>" +
                        "                        <a class=\"S_txt2\" href=\"javascript:deleteid(" + data.microblogs[i].id + ");\">" +
                        "                            <span class=\"pos\">" +
                        "                                <span class=\"line S_line1\">" +
                        "                                    <span>" +
                        "                                    <em class=\"W_ficon ficon_favorite S_ficon\"></em>" +
                        "                                    <em>删除</em>" +
                        "                                    </span>" +
                        "                                </span>" +
                        "                            </span>" +
                        "                        </a>" +
                        "                    </li>" +

                        "                    <li>" +
                        "                        <a id='button" + data.microblogs[i].id + "' class=\"S_txt2\" href=\"javascript:transmit(" + data.microblogs[i].id + ");\">" +
                        "                            <span class=\"pos\">" +
                        "                                <span class=\"line S_line1\">" +
                        "                                    <span>" +
                        "                                        <em class=\"W_ficon ficon_forward S_ficon\">转发</em>" +
                        "                                        <em>" + data.microblogs[i].forwardCount + "</em>" +
                        "                                    </span>" +
                        "                                </span>" +
                        "                            </span>" +
                        "                        </a>" +
                        "                    </li>" +
                        "                    <li>" +
                        "                        <a class=\"S_txt2\" href='/user/Test2?id=" + data.microblogs[i].id + "'>" +
                        "                            <span class=\"pos\">" +
                        "                                <span class=\"line S_line1\">" +
                        "                                    <span>" +
                        "                                        <em class=\"W_ficon ficon_repeat S_ficon\">" +
                        "                                        评论</em>" +
                        "                                        <em>" +
                        "                                            14" +
                        "                                        </em>" +
                        "                                    </span>" +
                        "                                </span>" +
                        "                            </span>" +
                        "                        </a>" +
                        "                        <span class=\"arrow\" style=\"display: none;\">" +
                        "                            <span class=\"W_arrow_bor W_arrow_bor_t\">" +
                        "                                <i class=\"S_line1\">" +
                        "                                </i>" +
                        "                                <em class=\"S_bg1_br\">" +
                        "                                </em>" +
                        "                            </span>" +
                        "                        </span>" +
                        "                    </li>" +
                        "                    <li class=\"\">" +
                        "                        <!--cuslike用于前端判断是否显示个性赞，1:显示 -->" +
                        "                        <a href=\"javascript:like(" + data.microblogs[i].id + ");\" class=\"S_txt2\" action-type=\"fl_like\"" +
                        "                           action-data=\"version=mini&amp;qid=heart&amp;mid=4391733121164214&amp;like_src=1&amp;cuslike=1\"" +
                        "                           title=\"赞\"><span class=\"pos\"><span class=\"line S_line1\">" +
                        "                           <span node-type=\"like_status\"" +
                        "                                  class=\"\"><em" +
                        "                                    class=\"W_ficon ficon_praised S_txt2 \">点赞</em><em id =\'likecount" + data.microblogs[i].id + "\'>" + data.microblogs[i].likesCount + "</em></span>" +
                        "                           </span></span></a>" +
                        "                        <span class=\"arrow\" node-type=\"cmtarrow\"><span class=\"W_arrow_bor W_arrow_bor_t\">" +
                        "                    <i" + "class=\"S_line1\"></i><em class=\"S_bg1_br\"></em></span></span>" + "</li>" +
                        "                </ul>" +
                        "            </div>" +
                        "        </div>" +
                        "    </div>" +
                        "</div>"
                    );
                }
            }
            $("#pageNumber").val(data.page.pageNumber);
            $("#totalPage").val(data.page.totalPage);
        },
        //处理失败返回的数据
        error: function (data) {
            alert("无数据");
        }
    });
}

$(document).ready(
    function () {
        $("#flush").click(
            function () {
                $.ajax({
                    url: "/microblog/selectHot",
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    //向后端传输的数据
                    data: JSON.stringify({
                        pageNumber: $("#pageNumber").val()
                    }),
                    //处理后端返回的数据
                    success: function (data) {
                        for (var i in data.microblogs) {
                            $("#pageNumber").val(data.page.pageNumber);
                            $("#totalPage").val(data.page.totalPage);
                            if (data.microblogs[i].videoUrl != null) {
                                $("#div1").append(
                                    "<div class=\"WB_feed WB_feed_v3 WB_feed_v4\" style=\" max-width: 600px;left: 25%;\">" +
                                    "    <div id='" + data.microblogs[i].id + "' class=\"WB_cardwrap WB_feed_type S_bg2 WB_feed_like\">" +
                                    "        <div class=\"WB_feed_detail clearfix\">" +
                                    "            <div class=\"WB_face W_fl\">" +
                                    "                <div class=\"face\">" +
                                    "                    <a target=\"_blank\" class=\"W_face_radius\"" +
                                    "                       href=\"/fanservice?refer_flag=0000015010_&amp;from=feed&amp;loc=avatar\">" +
                                    "                        <img src=\"" + data.microblogs[i].user.avatar + "\"" +
                                    "                             class=\"W_face_radius\" width=\"50\" height=\"50\">" +
                                    "                    </a>" +
                                    "                </div>" +
                                    "            </div>" +
                                    "            <div class=\"WB_detail\">" +
                                    "                <div class=\"WB_info\">" +
                                    "                    <a" +
                                    "                       class=\"W_f14 W_fb S_txt1\"" +
                                    "                       href=\"javascript:forcusUser(" + data.microblogs[i].id + ")\"" +
                                    "                    >" + data.microblogs[i].user.name + "</a>" +
                                    "                </div>" +
                                    "                <div class=\"WB_from S_txt2\">" +
                                    "                    <a target=\"_blank\" href=\"/3756087501/HCuoE4SRE?ref=home&amp;rid=4_0_8_2633216961468354693_0_1_0\"" +
                                    "                       title=\"2019-07-08 10:50\" date=\"1562554233000\" class=\"S_txt2\">" +
                                    timeStamp2String(data.microblogs[i].createTime) +
                                    "                    </a>" +
                                    "                </div>" +
                                    "                <div class=\"PCD_user_b S_bg1\" node-type=\"follow_recommend_box\" style=\"display:none\"></div>" +
                                    "                <div class=\"WB_text W_f14\" node-type=\"feed_list_content\">" +
                                    toImage(data.microblogs[i].content) +
                                    "                </div>" +
                                    "                <div class=\"WB_expand_media_box \" style=\"display: none;\" node-type=\"feed_list_media_disp\"></div>" +
                                    "                <div class=\"WB_media_wrap clearfix\" node-type=\"feed_list_media_prev\">" +
                                    "                    <div class=\"media_box\">" +
                                    "                        <ul class=\"WB_media_a WB_media_a_m1 clearfix\">" +
                                    "                            <div id='video" + data.microblogs[i].id + "' style=\"width: 100%; height: 300px;max-width: 460px;\">" +
                                    "                            </div>" +
                                    "                        </ul>" +
                                    "                    </div>" +
                                    "                </div>" +
                                    "            </div>" +
                                    "        </div>" +
                                    "        <div class=\"WB_feed_handle\">" +
                                    "            <div class=\"WB_handle\">" +
                                    "                <ul class=\"WB_row_line WB_row_r4 clearfix S_line2\">" +
                                    "                    <li>" +
                                    "                        <a class=\"S_txt2\" href=\"javascript:deleteid(" + data.microblogs[i].id + ");\">" +
                                    "                            <span class=\"pos\">" +
                                    "                                <span class=\"line S_line1\">" +
                                    "                                    <span>" +
                                    "                                    <em class=\"W_ficon ficon_favorite S_ficon\"></em>" +
                                    "                                    <em>删除</em>" +
                                    "                                    </span>" +
                                    "                                </span>" +
                                    "                            </span>" +
                                    "                        </a>" +
                                    "                    </li>" +
                                    "                    <li>" +
                                    "                        <a id='button" + data.microblogs[i].id + "' class=\"S_txt2\" href=\"javascript:transmit(" + data.microblogs[i].id + ");\">" +
                                    "                            <span class=\"pos\">" +
                                    "                                <span class=\"line S_line1\">" +
                                    "                                    <span>" +
                                    "                                        <em class=\"W_ficon ficon_forward S_ficon\">转发</em>" +
                                    "                                        <em>" + data.microblogs[i].forwardCount + "</em>" +
                                    "                                    </span>" +
                                    "                                </span>" +
                                    "                            </span>" +
                                    "                        </a>" +
                                    "                    </li>" +
                                    "                    <li>" +
                                    "                        <a class=\"S_txt2\" href='/user/Test2?id=" + data.microblogs[i].id + "'>" +
                                    "                            <span class=\"pos\">" +
                                    "                                <span class=\"line S_line1\">" +
                                    "                                    <span>" +
                                    "                                        <em class=\"W_ficon ficon_repeat S_ficon\">" +
                                    "                                        评论</em>" +
                                    "                                        <em>" +
                                    "                                            14" +
                                    "                                        </em>" +
                                    "                                    </span>" +
                                    "                                </span>" +
                                    "                            </span>" +
                                    "                        </a>" +
                                    "                        <span class=\"arrow\" style=\"display: none;\">" +
                                    "                            <span class=\"W_arrow_bor W_arrow_bor_t\">" +
                                    "                                <i class=\"S_line1\">" +
                                    "                                </i>" +
                                    "                                <em class=\"S_bg1_br\">" +
                                    "                                </em>" +
                                    "                            </span>" +
                                    "                        </span>" +
                                    "                    </li>" +
                                    "                    <li class=\"\">" +
                                    "                        <!--cuslike用于前端判断是否显示个性赞，1:显示 -->" +
                                    "                        <a href=\"javascript:like(" + data.microblogs[i].id + ");\" class=\"S_txt2\" action-type=\"fl_like\"" +
                                    "                           action-data=\"version=mini&amp;qid=heart&amp;mid=4391733121164214&amp;like_src=1&amp;cuslike=1\"" +
                                    "                           title=\"赞\"><span class=\"pos\"><span class=\"line S_line1\">" +
                                    "                           <span node-type=\"like_status\"" +
                                    "                                  class=\"\"><em" +
                                    "                                    class=\"W_ficon ficon_praised S_txt2\">点赞</em><em id =\'likecount" + data.microblogs[i].id + "\'>" + data.microblogs[i].likesCount + "</em></span>" +
                                    "                           </span></span></a>" +
                                    "                        <span class=\"arrow\" node-type=\"cmtarrow\"><span class=\"W_arrow_bor W_arrow_bor_t\">" +
                                    "                    <i" + "class=\"S_line1\"></i><em class=\"S_bg1_br\"></em></span></span>" + "</li>" +
                                    "                </ul>" +
                                    "            </div>" +
                                    "        </div>" +
                                    "    </div>" +
                                    "</div>"
                                )

                                var videoObject = {
                                    container: '#video' + data.microblogs[i].id,
                                    variable: 'player',
                                    //loop: true,
                                    autoplay: false,
                                    poster: 'material/poster.jpg',
                                    video: [
                                        [data.microblogs[i].videoUrl, 'video/mp4', '中文标清', 0],
                                    ]
                                };
                                var player = new ckplayer(videoObject);
                            }
                            else if (data.microblogs[i].pictureUrl != null) {
                                $("#div1").append(
                                    "<div id='" + data.microblogs[i].id + "' class=\"WB_cardwrap WB_feed_type S_bg2 WB_feed_like\" >" +
                                    "    <div   class=\"WB_feed_detail clearfix\">" +
                                    "        <div class=\"WB_face W_fl\">" +
                                    "            <div class=\"face\"><a target=\"_blank\" class=\"W_face_radius\"><img" +
                                    "                    src=\"" + data.microblogs[i].user.avatar + "\"" +
                                    "                    class=\"W_face_radius\" width=\"50\" height=\"50\"></a></div>" +
                                    "        </div>" +
                                    "        <div class=\"WB_detail\">" +
                                    "            <div class=\"WB_info\">" +
                                    "                <a class=\"W_f14 W_fb S_txt1\"" +
                                    "                   href=\"javascript:forcusUser(" + data.microblogs[i].id + ")\"> " + data.microblogs[i].user.name + " " +
                                    "                </a>" +
                                    "            </div>" +
                                    "            <div class=\"PCD_user_b S_bg1\" style=\"display:none\">" +
                                    "            </div>" +
                                    "            <div class=\"WB_text W_f14\">" +
                                    "                " + toImage(data.microblogs[i].content) + " ​​​​" +
                                    "            </div>" +
                                    "            <div class=\"WB_expand_media_box \" style=\"display: none;\">" +
                                    "            </div>" +
                                    "            <div class=\"WB_media_wrap clearfix\">" +
                                    "                <div class=\"media_box\">" +
                                    "                    <ul class=\"WB_media_a  WB_media_a_m1 clearfix\"" +
                                    "                        action-data=\"isPrivate=0&amp;relation=0&amp;clear_picSrc=%2F%2Fwx4.sinaimg.cn%2Fmw690%2F0076sYgBgy1g4mp5845hsj30eu0eiq7n.jpg\">" +
                                    "                        <li class=\"WB_pic li_1 S_bg1 S_line2 bigcursor li_n_mix_w \">" +
                                    "                            <img src=\"" + data.microblogs[i].pictureUrl + "\">" +
                                    "                            <i class=\"W_loading\" style=\"display:none;\"></i>" +
                                    "                            <i class=\"W_loading\" style=\"display:none;\"></i>" +
                                    "                        </li>" +
                                    "                    </ul>" +
                                    "                </div>" +
                                    "            </div>" +
                                    "        </div>" +
                                    "        <div class=\"WB_like\" style=\"display:none;\">" +
                                    "            <div class=\"anibox UI_ani\"" +
                                    "                 style=\"background-image:url(//img.t.sinajs.cn/t6/skin/public/like/p_0000_pc.png?version=201907181820);\"></div>" +
                                    "        </div>" +
                                    "    </div>" +
                                    "    <div class=\"WB_feed_handle\">" +
                                    "        <div class=\"WB_handle\">" +
                                    "            <ul class=\"WB_row_line WB_row_r4 clearfix S_line2\">" +
                                    "                <li>" +
                                    "                    <a class=\"S_txt2\" href=\"javascript:deleteid(" + data.microblogs[i].id + ");\">" +
                                    "                        <span class=\"pos\">" +
                                    "                            <span class=\"line S_line1\">" +
                                    "                                <span>" +
                                    "                                    <em class=\"W_ficon ficon_favorite S_ficon\">" +
                                    "                                    </em>" +
                                    "                                    <em>" +
                                    "                                    删除" +
                                    "                                    </em>" +
                                    "                                </span>" +
                                    "                            </span>" +
                                    "                        </span>" +
                                    "                    </a>" +
                                    "                </li>" +
                                    "                <li>" +
                                    "                    <a id='button" + data.microblogs[i].id + "' class=\"S_txt2\" href=\"javascript:transmit(" + data.microblogs[i].id + ");\"><span class=\"pos\"><span class=\"line S_line1\"><span><em" +
                                    "                            class=\"W_ficon ficon_forward S_ficon\">转发</em><em>" + data.microblogs[i].forwardCount + "</em></span></span></span></a>" +
                                    "                </li>" +
                                    "                <li>" +
                                    "                    <a class=\"S_txt2\" href='/user/Test2?id=" + data.microblogs[i].id + "'><span class=\"pos\"><span class=\"line S_line1\"><span><em" +
                                    "                            class=\"W_ficon ficon_repeat S_ficon\">评论</em><em >14</em></span></span></span></a>" +
                                    "                    <span class=\"arrow\" style=\"display: none;\"><span class=\"W_arrow_bor W_arrow_bor_t\"><i" +
                                    "                            class=\"S_line1\"></i><em class=\"S_bg1_br\"></em></span></span>" +
                                    "                </li>" +
                                    "                <li>" +
                                    "                    <a href=\"javascript:like(" + data.microblogs[i].id + ");\" class=\"S_txt2\"><span class=\"pos\"><span class=\"line S_line1\">" +
                                    "                        <span><em class=\"W_ficon ficon_praised S_txt2\">点赞</em><em id =\'likecount" + data.microblogs[i].id + "\'>" + data.microblogs[i].likesCount + "</em></span></span></span></a>" +
                                    "                    <span class=\"arrow\"><span class=\"W_arrow_bor W_arrow_bor_t\"><i class=\"S_line1\"></i><em" +
                                    "                            class=\"S_bg1_br\"></em></span></span>" +
                                    "                </li>" +
                                    "            </ul>" +
                                    "        </div>" +
                                    "    </div>" +
                                    "</div>"
                                );
                            }
                            else {
                                $("#div1").append("<div class=\"WB_feed WB_feed_v3 WB_feed_v4\" style=\" max-width: 600px;left: 25%;\">" +
                                    "    <div id='" + data.microblogs[i].id + "' class=\"WB_cardwrap WB_feed_type S_bg2 WB_feed_like\">" +
                                    "        <div class=\"WB_feed_detail clearfix\">" +
                                    "            <div class=\"WB_face W_fl\">" +
                                    "                <div class=\"face\">" +
                                    "                    <a target=\"_blank\" class=\"W_face_radius\"" +
                                    "                       href=\"/fanservice?refer_flag=0000015010_&amp;from=feed&amp;loc=avatar\">" +
                                    "                        <img src=\"" + data.microblogs[i].user.avatar + "\"" +
                                    "                             class=\"W_face_radius\" width=\"50\" height=\"50\">" +
                                    "                    </a>" +
                                    "                </div>" +
                                    "            </div>" +
                                    "            <div class=\"WB_detail\">" +
                                    "                <div class=\"WB_info\">" +
                                    "                    <a" +
                                    "                       class=\"W_f14 W_fb S_txt1\"" +
                                    "                       href=\"javascript:forcusUser(" + data.microblogs[i].id + ")\"" +
                                    "                    >" + data.microblogs[i].user.name + "</a>" +
                                    "                </div>" +
                                    "                <div class=\"WB_from S_txt2\">" +
                                    "                    <a  href=\"#\"" +
                                    "                       title=\"2019-07-08 10:50\" class=\"S_txt2\">" +
                                    timeStamp2String(data.microblogs[i].createTime) +
                                    "                    </a>" +
                                    "                </div>" +
                                    "                <div class=\"PCD_user_b S_bg1\"  style=\"display:none\"></div>" +
                                    "                <div class=\"WB_text W_f14\" >" +
                                    toImage(data.microblogs[i].content) +
                                    "                </div>" +
                                    "                <div class=\"WB_expand_media_box \" style=\"display: none;\" ></div>" +
                                    "                <div class=\"WB_media_wrap clearfix\" >" +
                                    "                    <div class=\"media_box\">" +
                                    "                        <ul class=\"WB_media_a WB_media_a_m1 clearfix\">" +
                                    "                        </ul>" +
                                    "                    </div>" +
                                    "                </div>" +
                                    "            </div>" +
                                    "        </div>" +
                                    "        <div class=\"WB_feed_handle\">" +
                                    "            <div class=\"WB_handle\">" +
                                    "                <ul class=\"WB_row_line WB_row_r4 clearfix S_line2\">" +
                                    "                    <li>" +
                                    "                        <a class=\"S_txt2\" href=\"javascript:deleteid(" + data.microblogs[i].id + ");\">" +
                                    "                            <span class=\"pos\">" +
                                    "                                <span class=\"line S_line1\">" +
                                    "                                    <span>" +
                                    "                                    <em class=\"W_ficon ficon_favorite S_ficon\"></em>" +
                                    "                                    <em>删除</em>" +
                                    "                                    </span>" +
                                    "                                </span>" +
                                    "                            </span>" +
                                    "                        </a>" +
                                    "                    </li>" +
                                    "                    <li>" +
                                    "                        <a id='button" + data.microblogs[i].id + "' class=\"S_txt2\" href=\"javascript:transmit(" + data.microblogs[i].id + ");\">" +
                                    "                            <span class=\"pos\">" +
                                    "                                <span class=\"line S_line1\">" +
                                    "                                    <span>" +
                                    "                                        <em class=\"W_ficon ficon_forward S_ficon\">转发</em>" +
                                    "                                        <em>" + data.microblogs[i].forwardCount + "</em>" +
                                    "                                    </span>" +
                                    "                                </span>" +
                                    "                            </span>" +
                                    "                        </a>" +
                                    "                    </li>" +
                                    "                    <li>" +
                                    "                        <a class=\"S_txt2\" href='/user/Test2?id=" + data.microblogs[i].id + "'>" +
                                    "                            <span class=\"pos\">" +
                                    "                                <span class=\"line S_line1\">" +
                                    "                                    <span>" +
                                    "                                        <em class=\"W_ficon ficon_repeat S_ficon\">" +
                                    "                                        评论</em>" +
                                    "                                        <em>" +
                                    "                                            14" +
                                    "                                        </em>" +
                                    "                                    </span>" +
                                    "                                </span>" +
                                    "                            </span>" +
                                    "                        </a>" +
                                    "                        <span class=\"arrow\" style=\"display: none;\">" +
                                    "                            <span class=\"W_arrow_bor W_arrow_bor_t\">" +
                                    "                                <i class=\"S_line1\">" +
                                    "                                </i>" +
                                    "                                <em class=\"S_bg1_br\">" +
                                    "                                </em>" +
                                    "                            </span>" +
                                    "                        </span>" +
                                    "                    </li>" +
                                    "                    <li class=\"\">" +
                                    "                        <!--cuslike用于前端判断是否显示个性赞，1:显示 -->" +
                                    "                        <a href=\"javascript:like(" + data.microblogs[i].id + ");\" class=\"S_txt2\" action-type=\"fl_like\"" +
                                    "                           action-data=\"version=mini&amp;qid=heart&amp;mid=4391733121164214&amp;like_src=1&amp;cuslike=1\"" +
                                    "                           title=\"赞\"><span class=\"pos\"><span class=\"line S_line1\">" +
                                    "                           <span node-type=\"like_status\"" +
                                    "                                  class=\"\"><em" +
                                    "                                    class=\"W_ficon ficon_praised S_txt2\">点赞</em><em id =\'likecount" + data.microblogs[i].id + "\'>" + data.microblogs[i].likesCount + "</em></span>" +
                                    "                           </span></span></a>" +
                                    "                        <span class=\"arrow\" node-type=\"cmtarrow\"><span class=\"W_arrow_bor W_arrow_bor_t\">" +
                                    "                    <i" + "class=\"S_line1\"></i><em class=\"S_bg1_br\"></em></span></span>" + "</li>" +
                                    "                </ul>" +
                                    "            </div>" +
                                    "        </div>" +
                                    "    </div>" +
                                    "</div>"
                                );
                            }
                        }
                    },
                    //处理失败返回的数据
                    error: function (data) {
                        alert("无数据可刷新");
                    }
                });
            });


        $("#insertButton").click(
            function () {
                var obj;
                if (document.getElementById("pictureurl").value == null || document.getElementById("pictureurl").value == "") {
                    obj = new FormData($('#uploadVideo')[0]);
                    obj.append("content", $("#content").val());
                    obj.append("createtime", new Date());
                    obj.append("flag", 1);
                }

                else if (document.getElementById("videourl").value == null || document.getElementById("videourl").value == "") {
                    obj = new FormData($('#uploadPicture')[0]);
                    obj.append("content", $("#content").val());
                    obj.append("createtime", new Date());
                    obj.append("flag", 2);
                }

                $.ajax({
                    url: "/microblog/insertByMicroblog",
                    dataType: "json",
                    type: "POST",
                    contentType: false,
                    //向后端传输的数据
                    cache: false,
                    data: obj,
                    processData: false,

                    //处理后端返回的数据
                    success: function (data) {
                        if (data.videoUrl != null) {
                            $("#div1").prepend(
                                "<div class=\"WB_feed WB_feed_v3 WB_feed_v4\" style=\" max-width: 600px;left: 25%;\">" +
                                "    <div id='" + data.id + "' class=\"WB_cardwrap WB_feed_type S_bg2 WB_feed_like\">" +
                                "        <div class=\"WB_feed_detail clearfix\">" +
                                "            <div class=\"WB_face W_fl\">" +
                                "                <div class=\"face\">" +
                                "                    <a target=\"_blank\" class=\"W_face_radius\"" +
                                "                       href=\"/fanservice?refer_flag=0000015010_&amp;from=feed&amp;loc=avatar\">" +
                                "                        <img src=\"" + data.user.avatar + "\"" +
                                "                             class=\"W_face_radius\" width=\"50\" height=\"50\">" +
                                "                    </a>" +
                                "                </div>" +
                                "            </div>" +
                                "            <div class=\"WB_detail\">" +
                                "                <div class=\"WB_info\">" +
                                "                    <a" +
                                "                       class=\"W_f14 W_fb S_txt1\"" +
                                "                       href=\"javascript:forcusUser(" + data.id + ")\"" +
                                "                    >" + data.user.name + "</a>" +
                                "                </div>" +
                                "                <div class=\"WB_from S_txt2\">" +
                                "                    <a target=\"_blank\" href=\"/3756087501/HCuoE4SRE?ref=home&amp;rid=4_0_8_2633216961468354693_0_1_0\"" +
                                "                       title='" + timeStamp2String(data.createTime) + "'   class=\"S_txt2\">" +
                                timeStamp2String(data.createTime) +
                                "                    </a>" +
                                "                </div>" +
                                "                <div class=\"PCD_user_b S_bg1\"  style=\"display:none\"></div>" +
                                "                <div class=\"WB_text W_f14\" >" +
                                toImage(data.content) +
                                "                </div>" +
                                "                <div class=\"WB_expand_media_box \" style=\"display: none;\" ></div>" +
                                "                <div class=\"WB_media_wrap clearfix\" >" +
                                "                    <div class=\"media_box\">" +
                                "                        <ul class=\"WB_media_a WB_media_a_m1 clearfix\">" +
                                "                            <div id='video" + data.id + "' style=\"width: 100%; height: 300px;max-width: 460px;\">" +
                                "                            </div>" +
                                "                        </ul>" +
                                "                    </div>" +
                                "                </div>" +
                                "            </div>" +
                                "        </div>" +
                                "        <div class=\"WB_feed_handle\">" +
                                "            <div class=\"WB_handle\">" +
                                "                <ul class=\"WB_row_line WB_row_r4 clearfix S_line2\">" +
                                "                    <li>" +
                                "                        <a class=\"S_txt2\" href=\"javascript:deleteid(" + data.id + ");\">" +
                                "                            <span class=\"pos\">" +
                                "                                <span class=\"line S_line1\">" +
                                "                                    <span>" +
                                "                                    <em class=\"W_ficon ficon_favorite S_ficon\"></em>" +
                                "                                    <em>删除</em>" +
                                "                                    </span>" +
                                "                                </span>" +
                                "                            </span>" +
                                "                        </a>" +
                                "                    </li>" +
                                "                    <li>" +
                                "                        <a id='button" + data.id + "' class=\"S_txt2\" href=\"javascript:transmit(" + data.id + ");\">" +
                                "                            <span class=\"pos\">" +
                                "                                <span class=\"line S_line1\">" +
                                "                                    <span>" +
                                "                                        <em class=\"W_ficon ficon_forward S_ficon\">转发</em>" +
                                "                                        <em>" + data.forwardCount + "</em>" +
                                "                                    </span>" +
                                "                                </span>" +
                                "                            </span>" +
                                "                        </a>" +
                                "                    </li>" +
                                "                    <li>" +
                                "                        <a class=\"S_txt2\" href='/user/Test2?id=" + data.id + "'>" +
                                "                            <span class=\"pos\">" +
                                "                                <span class=\"line S_line1\">" +
                                "                                    <span>" +
                                "                                        <em class=\"W_ficon ficon_repeat S_ficon\">" +
                                "                                        </em>" + "评论" +
                                "                                        <em>" +
                                14 +
                                "                                        </em>" +
                                "                                    </span>" +
                                "                                </span>" +
                                "                            </span>" +
                                "                        </a>" +
                                "                        <span class=\"arrow\" style=\"display: none;\">" +
                                "                            <span class=\"W_arrow_bor W_arrow_bor_t\">" +
                                "                                <i class=\"S_line1\">" +
                                "                                </i>" +
                                "                                <em class=\"S_bg1_br\">" +
                                "                                </em>" +
                                "                            </span>" +
                                "                        </span>" +
                                "                    </li>" +
                                "                    <li class=\"\">" +
                                "                        <!--cuslike用于前端判断是否显示个性赞，1:显示 -->" +
                                "                        <a href=\"javascript:like(" + data.id + ");\" class=\"S_txt2\" action-type=\"fl_like\"" +
                                "                           action-data=\"version=mini&amp;qid=heart&amp;mid=4391733121164214&amp;like_src=1&amp;cuslike=1\"" +
                                "                           title=\"赞\"><span class=\"pos\"><span class=\"line S_line1\">" +
                                "                           <span node-type=\"like_status\"" +
                                "                                  class=\"\"><em" +
                                "                                    class=\"W_ficon ficon_praised S_txt2\">点赞</em><em id =\'likecount" + data.id + "\'>" + data.likesCount + "</em></span>" +
                                "                           </span></span></a>" +
                                "                        <span class=\"arrow\" node-type=\"cmtarrow\"><span class=\"W_arrow_bor W_arrow_bor_t\">" +
                                "                    <i" + "class=\"S_line1\"></i><em class=\"S_bg1_br\"></em></span></span>" + "</li>" +
                                "                </ul>" +
                                "            </div>" +
                                "        </div>" +
                                "    </div>" +
                                "</div>"
                            )

                            var videoObject = {
                                container: '#video' + data.id,
                                variable: 'player',
                                //loop: true,
                                autoplay: true,
                                poster: 'material/poster.jpg',
                                video: [
                                        [data.videoUrl, 'video/mp4', '中文标清', 0],
                                ]
                            };
                            var player = new ckplayer(videoObject);

                            document.getElementById('uploadVideo') && document.getElementById('uploadVideo').reset();
                            document.getElementById('content') && document.getElementById('content').reset();
                        } else if (data.pictureUrl != null) {
                            $("#div1").prepend(
                                "<div id='" + data.id + "' class=\"WB_cardwrap WB_feed_type S_bg2 WB_feed_like\" >" +
                                "    <div   class=\"WB_feed_detail clearfix\">" +
                                "        <div class=\"WB_face W_fl\">" +
                                "            <div class=\"face\"><a target=\"_blank\" class=\"W_face_radius\"><img" +
                                "                    src=\"" + data.user.avatar + "\"" +
                                "                    class=\"W_face_radius\" width=\"50\" height=\"50\"></a></div>" +
                                "        </div>" +
                                "        <div class=\"WB_detail\">" +
                                "            <div class=\"WB_info\">" +
                                "                <a target=\"_blank\" class=\"W_f14 W_fb S_txt1\"" +
                                "                   href=\"javascript:forcusUser(" + data.id + ")\"> " + data.user.name + " " +
                                "                </a>" +
                                "            </div>" +
                                "            <div class=\"PCD_user_b S_bg1\" style=\"display:none\">" +
                                "            </div>" +
                                "            <div class=\"WB_text W_f14\">" +
                                "                " + toImage(data.content) + " ​​​​" +
                                "            </div>" +
                                "            <div class=\"WB_expand_media_box \" style=\"display: none;\">" +
                                "            </div>" +
                                "            <div class=\"WB_media_wrap clearfix\">" +
                                "                <div class=\"media_box\">" +
                                "                    <ul class=\"WB_media_a  WB_media_a_m1 clearfix\"" +
                                "                        >" +
                                "                        <li class=\"WB_pic li_1 S_bg1 S_line2 bigcursor li_n_mix_w \">" +
                                "                            <img src=\"" + data.pictureUrl + "\">" +
                                "                            <i class=\"W_loading\" style=\"display:none;\"></i>" +
                                "                            <i class=\"W_loading\" style=\"display:none;\"></i>" +
                                "                        </li>" +
                                "                    </ul>" +
                                "                </div>" +
                                "            </div>" +
                                "        </div>" +
                                "        <div class=\"WB_like\" style=\"display:none;\">" +
                                "            <div class=\"anibox UI_ani\"" +
                                "                 style=\"background-image:url(//img.t.sinajs.cn/t6/skin/public/like/p_0000_pc.png?version=201907181820);\"></div>" +
                                "        </div>" +
                                "    </div>" +
                                "    <div class=\"WB_feed_handle\">" +
                                "        <div class=\"WB_handle\">" +
                                "            <ul class=\"WB_row_line WB_row_r4 clearfix S_line2\">" +
                                "                <li>" +
                                "                    <a class=\"S_txt2\" href=\"javascript:deleteid(" + data.id + ");\">" +
                                "                        <span class=\"pos\">" +
                                "                            <span class=\"line S_line1\">" +
                                "                                <span>" +
                                "                                    <em class=\"W_ficon ficon_favorite S_ficon\">" +
                                "                                    </em>" +
                                "                                    <em>" +
                                "                                    删除" +
                                "                                    </em>" +
                                "                                </span>" +
                                "                            </span>" +
                                "                        </span>" +
                                "                    </a>" +
                                "                </li>" +
                                "                <li>" +
                                "                    <a id='button" + data.id + "' class=\"S_txt2\" href=\"javascript:transmit(" + data.id + ");\"><span class=\"pos\"><span class=\"line S_line1\"><span><em" +
                                "                            class=\"W_ficon ficon_forward S_ficon\">转发</em><em>" + data.forwardCount + "</em></span></span></span></a>" +
                                "                </li>" +
                                "                <li>" +
                                "                    <a class=\"S_txt2\" href='/user/Test2?id=" + data.id + "'><span class=\"pos\"><span class=\"line S_line1\"><span><em" +
                                "                            class=\"W_ficon ficon_repeat S_ficon\">评论</em><em >14</em></span></span></span></a>" +
                                "                    <span class=\"arrow\" style=\"display: none;\"><span class=\"W_arrow_bor W_arrow_bor_t\"><i" +
                                "                            class=\"S_line1\"></i><em class=\"S_bg1_br\"></em></span></span>" +
                                "                </li>" +
                                "                <li>" +
                                "                    <a href=\"javascript:like(" + data.id + ");\" class=\"S_txt2\"><span class=\"pos\"><span class=\"line S_line1\">" +
                                "                        <span><em class=\"W_ficon ficon_praised S_txt2\">点赞</em><em id =\'likecount" + data.id + "\'>" + data.likesCount + "</em></span></span></span></a>" +
                                "                    <span class=\"arrow\"><span class=\"W_arrow_bor W_arrow_bor_t\"><i class=\"S_line1\"></i><em" +
                                "                            class=\"S_bg1_br\"></em></span></span>" +
                                "                </li>" +
                                "            </ul>" +
                                "        </div>" +
                                "    </div>" +
                                "</div>"
                            );
                            document.getElementById('uploadPicture') && document.getElementById('uploadPicture').reset();
                            document.getElementById('content') && document.getElementById('content').reset();
                        }
                        else {
                            $("#div1").prepend("<div class=\"WB_feed WB_feed_v3 WB_feed_v4\" style=\" max-width: 600px;left: 25%;\">" +
                                "    <div id='" + data.id + "' class=\"WB_cardwrap WB_feed_type S_bg2 WB_feed_like\">" +
                                "        <div class=\"WB_feed_detail clearfix\">" +
                                "            <div class=\"WB_face W_fl\">" +
                                "                <div class=\"face\">" +
                                "                    <a target=\"_blank\" class=\"W_face_radius\"" +
                                "                       href=\"/fanservice?refer_flag=0000015010_&amp;from=feed&amp;loc=avatar\">" +
                                "                        <img src=\"" + data.user.avatar + "\"" +
                                "                             class=\"W_face_radius\" width=\"50\" height=\"50\">" +
                                "                    </a>" +
                                "                </div>" +
                                "            </div>" +
                                "            <div class=\"WB_detail\">" +
                                "                <div class=\"WB_info\">" +
                                "                    <a " +
                                "                       class=\"W_f14 W_fb S_txt1\"" +
                                "                       href=\"javascript:forcusUser(" + data.id + ")\"" +
                                "                    >" + data.user.name + "</a>" +
                                "                </div>" +
                                "                <div class=\"WB_from S_txt2\">" +
                                "                    <a  href=\"#\"" +
                                "                       title='" + timeStamp2String(data.createTime) + "'  class=\"S_txt2\">" +
                                timeStamp2String(data.createTime) +
                                "                    </a>" +
                                "                </div>" +
                                "                <div class=\"PCD_user_b S_bg1\" style=\"display:none\"></div>" +
                                "                <div class=\"WB_text W_f14\" >" +
                                toImage(data.content) +
                                "                </div>" +
                                "                <div class=\"WB_expand_media_box \" style=\"display: none;\"></div>" +
                                "                <div class=\"WB_media_wrap clearfix\" >" +
                                "                    <div class=\"media_box\">" +
                                "                        <ul class=\"WB_media_a WB_media_a_m1 clearfix\">" +
                                "                        </ul>" +
                                "                    </div>" +
                                "                </div>" +
                                "            </div>" +
                                "        </div>" +
                                "        <div class=\"WB_feed_handle\">" +
                                "            <div class=\"WB_handle\">" +
                                "                <ul class=\"WB_row_line WB_row_r4 clearfix S_line2\">" +
                                "                    <li>" +
                                "                        <a class=\"S_txt2\" href=\"javascript:deleteid(" + data.id + ");\">" +
                                "                            <span class=\"pos\">" +
                                "                                <span class=\"line S_line1\">" +
                                "                                    <span>" +
                                "                                    <em class=\"W_ficon ficon_favorite S_ficon\"></em>" +
                                "                                    <em>删除</em>" +
                                "                                    </span>" +
                                "                                </span>" +
                                "                            </span>" +
                                "                        </a>" +
                                "                    </li>" +
                                "                    <li>" +
                                "                        <a id='button" + data.id + "' class=\"S_txt2\" href=\"javascript:transmit(" + data.id + ");\">" +
                                "                            <span class=\"pos\">" +
                                "                                <span class=\"line S_line1\">" +
                                "                                    <span>" +
                                "                                        <em class=\"W_ficon ficon_forward S_ficon\">转发</em>" +
                                "                                        <em>" + data.forwardCount + "</em>" +
                                "                                    </span>" +
                                "                                </span>" +
                                "                            </span>" +
                                "                        </a>" +
                                "                    </li>" +
                                "                    <li>" +
                                "                        <a class=\"S_txt2\" href='/user/Test2?id=" + data.id + "'>" +
                                "                            <span class=\"pos\">" +
                                "                                <span class=\"line S_line1\">" +
                                "                                    <span>" +
                                "                                        <em class=\"W_ficon ficon_repeat S_ficon\">" +
                                "                                        </em>" + "评论" +
                                "                                        <em>" +
                                14 +
                                "                                        </em>" +
                                "                                    </span>" +
                                "                                </span>" +
                                "                            </span>" +
                                "                        </a>" +
                                "                        <span class=\"arrow\" style=\"display: none;\">" +
                                "                            <span class=\"W_arrow_bor W_arrow_bor_t\">" +
                                "                                <i class=\"S_line1\">" +
                                "                                </i>" +
                                "                                <em class=\"S_bg1_br\">" +
                                "                                </em>" +
                                "                            </span>" +
                                "                        </span>" +
                                "                    </li>" +
                                "                    <li class=\"\">" +
                                "                        <!--cuslike用于前端判断是否显示个性赞，1:显示 -->" +
                                "                        <a href=\"javascript:like(" + data.id + ");\" class=\"S_txt2\" " +
                                "                           " +
                                "                           title=\"赞\"><span class=\"pos\"><span class=\"line S_line1\">" +
                                "                           <span " +
                                "                                  class=\"\"><em" +
                                "                                    class=\"W_ficon ficon_praised S_txt2\">点赞</em><em id =\'likecount" + data.id + "\'>" + data.likesCount + "</em></span>" +
                                "                           </span></span></a>" +
                                "                        <span class=\"arrow\" ><span class=\"W_arrow_bor W_arrow_bor_t\">" +
                                "                    <i" + "class=\"S_line1\"></i><em class=\"S_bg1_br\"></em></span></span>" + "</li>" +
                                "                </ul>" +
                                "            </div>" +
                                "        </div>" +
                                "    </div>" +
                                "</div>"
                            );
                        }
                        document.getElementById('content') && document.getElementById('content').reset();


                    },
                    //处理失败返回的数据
                    error: function (data) {
                        alert("插入失败");
                    }
                });

            });
    }
);
