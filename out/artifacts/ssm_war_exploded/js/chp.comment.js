
// function createComment(microbogid) {
//     $.ajax(
//         {
//             url: "/user/ShowVblogDiscuss",
//             dataType: "json",
//             type: "post",
//             contentType: "application/json;charset=utf-8",
//             //向后台传输的数据
//             data: JSON.stringify({
//                 id: microbogid
//             }),
//
//             success: function (data) {
//                 //接收到后端查到评论回复的内容
//                 var floorNum = 0;
//                 if (data == ""||data ==null ) {
//                     alert('22')
//                     $('#floorNum').html(floorNum);
//                 } else {
//                     $.each(data, function (index, value) {
//                             //todo 接受库里的时间
//                             // alert(Date())
//                             // var myDate =  Date(value.discussTime);
//                             // alert(myDate)
//                             // alert(value.discussTime)
//                             // alert(myDate)
//                             // var year=myDate.getFullYear();
//                             // var month=myDate.getMonth()+1;
//                             // var date=myDate.getDate();
//                             // var h=myDate.getHours();       //获取当前小时数(0-23)
//                             // var m=myDate.getMinutes();     //获取当前分钟数(0-59)
//                             // if(m<10) m = '0' + m;
//                             // var s=myDate.getSeconds();
//                             // if(s<10) s = '0' + s;
//                             // var now=year+'-'+month+"-"+date+" "+h+':'+m+":"+s;
//                             var now = Date();
//                             //这里接受库里的评论内容
//                             var oSize = value.comment;
//                             //这里发表评论的人的名字
//                             var comment = value.commentPerson.name;
//                             //这里是回复的点赞数
//                             var like = value.likeCount;
//                             //这里对用评论楼层数
//                             var floor = value.floor;
//                             //被回复评论的人的名字
//                             var getCommentPerson = value.getCommentPerson;
//                             var replyAuthor;
//                             if (getCommentPerson == null || getCommentPerson == "") {
//                                 floorNum = floorNum + 1;
//                                 $('#floorNum').html(floorNum);
//                                 oHtml = '<div class="comment-show-con clearfix floor-' + floor + 'st"><div class="comment-show-con-img pull-left">' +
//                                     //todo 这里是用户头像的保存路径,这里暂时写死,之后通过字符串拼接路径实现更换头像
//                                     '<img src="/images/header-img-comment_03.png" alt=""></div> <div class="comment-show-con-list pull-left clearfix"><div class="pl-text clearfix"> <a href="#" class="comment-size-name">' + comment + ' : </a> <span class="my-pl-con">&nbsp;' + oSize + '</span> </div> <div class="date-dz"> <span class="date-dz-left pull-left comment-time">' + now + '</span> <div class="date-dz-right pull-right comment-pl-block"><a href="javascript:;" class="removeBlock">删除</a> <a href="javascript:;" class="date-dz-pl pl-hf hf-con-block pull-left">回复</a> <span class="pull-left date-dz-line">|</span> <a href="javascript:;" class="date-dz-z pull-left"><i class="date-dz-z-click-red"></i>赞 (<i class="z-num">' + like + '</i>)</a> </div> </div><div class="hf-list-con"></div></div> </div>';
//                                 //加载出页面
//                                 $('.comment-show').prepend(oHtml);
//
//                             } else {
//                                 replyAuthor = getCommentPerson.name;
//                                 //oHfName保存被回复人的姓名加上:  张三:
//                                 var oHfName = replyAuthor + ':';
//                                 //  回复@张三:
//                                 var oAllVal = '回复@' + oHfName;
//                                 var oHtml = '<div class="all-pl-con"><div class="pl-text hfpl-text clearfix"><a href="#" class="comment-size-name">' + comment + ' : </a><span class="my-pl-con">' + oAllVal + oSize + '</span></div><div class="date-dz"> <span class="date-dz-left pull-left comment-time">' + now + '</span> <div class="date-dz-right pull-right comment-pl-block"> <a href="javascript:;" class="removeBlock">删除</a> <a href="javascript:;" class="date-dz-pl pl-hf hf-con-block pull-left">回复</a> <span class="pull-left date-dz-line">|</span> <a href="javascript:;" class="date-dz-z pull-left"><i class="date-dz-z-click-red"></i>赞 (<i class="z-num">' + like + '</i>)</a> </div> </div></div>';
//                                 // 将标签输入到页面上
//                                 $('.floor-' + floor + 'st').find('.comment-show-con-list').find('.hf-list-con').css('display', 'block', 'background-color', '').prepend(oHtml);
//                             }
//                         }
//                     )
//                 }
//             }
//         }
//     )
// }


function createComment(microbogid) {
    $.ajax(
        {
            url: "/user/ShowVblogDiscuss",
            dataType: "json",
            type: "post",
            contentType: "application/json;charset=utf-8",
            //向后台传输的数据
            data: JSON.stringify({
                id: microbogid
            }),

            success: function (data) {
                //接收到后端查到评论回复的内容
                var floorNum = 0;
                if (data == ""||data ==null) {
                    $('#floorNum').html(floorNum);
                } else {
                    $.each(data, function (index, value) {
                            //todo 接受库里的时间
                            // alert(Date())
                            // var myDate =  Date(value.discussTime);
                            // alert(myDate)
                            // alert(value.discussTime)
                            // alert(myDate)
                            // var year=myDate.getFullYear();
                            // var month=myDate.getMonth()+1;
                            // var date=myDate.getDate();
                            // var h=myDate.getHours();       //获取当前小时数(0-23)
                            // var m=myDate.getMinutes();     //获取当前分钟数(0-59)
                            // if(m<10) m = '0' + m;
                            // var s=myDate.getSeconds();
                            // if(s<10) s = '0' + s;
                            // var now=year+'-'+month+"-"+date+" "+h+':'+m+":"+s;
                            var now =new Date(value.discussTime);
                            //这里接受库里的评论内容
                            var oSize = value.comment;
                            //这里发表评论的人的名字
                            var comment = value.commentPerson.name;
                            //这里是回复的点赞数
                            var like = value.likeCount;
                            //这里对用评论楼层数
                            var floor = value.floor;
                            //被回复评论的人的名字
                            var getCommentPerson = value.getCommentPerson;
                            var replyAuthor;
                            if (getCommentPerson == null || getCommentPerson == "") {
                                floorNum = floorNum + 1;
                                $('#floorNum').html(floorNum);
                                oHtml = '<div class="comment-show-con clearfix floor-' + floor + 'st"><div class="comment-show-con-img pull-left">' +
                                    //todo 这里是用户头像的保存路径,这里暂时写死,之后通过字符串拼接路径实现更换头像
                                    '<img src="/images/header-img-comment_03.png" alt=""></div> <div class="comment-show-con-list pull-left clearfix"><div class="pl-text clearfix"> <a href="#" class="comment-size-name">' + comment + ' : </a> <span class="my-pl-con">&nbsp;' + oSize + '</span> </div> <div class="date-dz"> <span class="date-dz-left pull-left comment-time">' + now + '</span> <div class="date-dz-right pull-right comment-pl-block"><a href="javascript:;" class="removeBlock">删除</a> <a href="javascript:;" class="date-dz-pl pl-hf hf-con-block pull-left">回复</a> <span class="pull-left date-dz-line">|</span> <a href="javascript:;" class="date-dz-z pull-left"><i class="date-dz-z-click-red"></i>赞 (<i class="z-num">' + like + '</i>)</a> </div> </div><div class="hf-list-con"></div></div> </div>';
                                //加载出页面
                                $('.comment-show').prepend(oHtml);

                            } else {
                                replyAuthor = getCommentPerson.name;
                                //oHfName保存被回复人的姓名加上:  张三:
                                var oHfName = replyAuthor + ':';
                                //  回复@张三:
                                var oAllVal = '回复@' + oHfName;
                                var oHtml = '<div class="all-pl-con"><div class="pl-text hfpl-text clearfix"><a href="#" class="comment-size-name">' + comment + ' : </a><span class="my-pl-con">' + oAllVal + oSize + '</span></div><div class="date-dz"> <span class="date-dz-left pull-left comment-time">' + now + '</span> <div class="date-dz-right pull-right comment-pl-block"> <a href="javascript:;" class="removeBlock">删除</a> <a href="javascript:;" class="date-dz-pl pl-hf hf-con-block pull-left">回复</a> <span class="pull-left date-dz-line">|</span> <a href="javascript:;" class="date-dz-z pull-left"><i class="date-dz-z-click-red"></i>赞 (<i class="z-num">' + like + '</i>)</a> </div> </div></div>';
                                // 将标签输入到页面上
                                $('.floor-' + floor + 'st').find('.comment-show-con-list').find('.hf-list-con').css('display', 'block', 'background-color', '').prepend(oHtml);
                            }
                        }
                    )
                }
            }
        }
    )
}
