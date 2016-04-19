/**
 * Created by tan on 16/4/15.
 */
$(function(){
    var my_options_time = {
        "type":"POST",
        "url":"",
        "dataType":"json",
        "success":function(data){
            var data = $.parseJSON(data);
            var $timelength = data.length;
            for(var i = 0;i<$timelength;i++){
                $(".list-holder ul").append("<li class='file' status='inactive'><div class='file-bg'></div><div class='date'>"+timedata[i].time+"</div></li>");
            }
            $('.path-info').append(' <span class="path-name">我的文件</span>');
        },
        "error":function(){
            alert("数据库加载错误!");
        }
    };
    var my_options_name = {
        "type":"POST",
        "url":"",
        "dataType":"json",
        "success":function(data){
            var data = $.parseJSON(data);
            var $filelength = data.length;
            for(var i = 0;i<$filelength;i++){
                $(".list-holder ul").append("<li class='file' status='inactive'><div class='file-txt-bg'></div><div class='date'>"+filename[i].attributeName+"</div></li>");
            }
            $('.path-info').html("<div class='new-path'><span class='back myback'>返回上一级</span><span class='old-path myback'>"+$oldpath+"</span><span class='path'>>&nbsp;"+$path+"</span></div>");
        },
        "error":function(){
            alert("数据库加载错误!");
        }
    };
    var pb_options_time = {
        "type":"POST",
        "url":"",
        "dataType":"json",
        "success":function(data){
            var data = $.parseJSON(data);
            var $timelength = data.length;
            for(var i = 0;i<$timelength;i++){
                $(".list-holder ul").append("<li class='file' status='inactive'><div class='file-bg'></div><div class='date'>"+timedata[i].time+"</div></li>");
            }
            $('.path-info').append(' <span class="path-name">公共文件</span>');
        },
        "error":function(){
            alert("数据库加载错误!");
        }
    };
    var pb_options_name = {
        "type":"POST",
        "url":"",
        "dataType":"json",
        "success":function(data){
            var data = $.parseJSON(data);
            var $filelength = data.length;
            for(var i = 0;i<$filelength;i++){
                $(".list-holder ul").append("<li class='file' status='inactive'><div class='file-txt-bg'></div><div class='date'>"+filename[i].attributeName+"</div></li>");
            }
            $('.path-info').html("<div class='new-path'><span class='back pbback'>返回上一级</span><span class='old-path pbback'>"+$oldpath+"</span><span class='path'>>&nbsp;"+$path+"</span></div>");
        },
        "error":function(){
            alert("数据库加载错误!");
        }
    };
    $.ajax(my_options_time);//打开云盘的第一次加载时间

    //var timedata = [
    //    {
    //        "time":"2016"
    //    },
    //    {
    //        "time":"2015"
    //    },
    //    {
    //        "time":"2014"
    //    },
    //    {
    //        "time":"2013"
    //    },
    //    {
    //        "time":"2012"
    //    },
    //    {
    //        "time":"2011"
    //    },
    //    {
    //        "time":"2010"
    //    },
    //    {
    //        "time":"2009"
    //    },
    //    {
    //        "time":"2008"
    //    }
    //];//测试时间数据
    //var filename = [
    //    {
    //        "attributeName":"1"
    //    },
    //    {
    //        "attributeName":"2"
    //    },
    //    {
    //        "attributeName":"3"
    //    },
    //    {
    //        "attributeName":"4"
    //    },
    //    {
    //        "attributeName":"5"
    //    }
    //];//测试文件名数据
    $pgheight = $(window).height() - 57;
    $lsheight = $(window).height() - 156;
    function Loadinfo(){
        var $path = $(this).find(".date").text();
        var $oldpath = $('.path-name').text();
        $(".list-holder ul").empty();
        if($(document).find('.path-name').text()=="我的文件") {
            $.ajax(my_options_name);//点击文件之后第二次加载我的文件名
        }
        else{
            $.ajax(pb_options_name);//点击文件之后第二次加载公共文件名
        }
    }
    $(".leftPanel").css({height:$pgheight});
    $(".mainPanel").css({height:$pgheight});
    $(".file-list").css({height:$lsheight});
    $(document).on('click','.leftPanel li',function(){
        if($(this).status!="active"){
            $(this).css({
                "color":"#0068b7",
                "backgroundPosition":"-22px 4px",
                "backgroundColor":"#e3f0fc",
                "borderBottom":"1px solid #d9ebfc",
                "borderTop":"1px solid #d9ebfc"
            });
            $(this).attr('status','active');
            $(this).find('.bg').css("display","block");
            $(this).siblings().css({
                    "color":"#000",
                    "backgroundPosition":"0px 4px",
                    "backgroundColor":"#f6fafd",
                    "borderBottom":"1px solid #f6fafd",
                    "borderTop":"1px solid #f6fafd"
                })
                .attr('status','inactive')
                .find('.bg').css("display","none");
        }
    });//侧边栏点击事件
    $(document).on('mouseover','.leftPanel li',function(){
        if($(this).attr('status')!='active')
            $(this).css({
                "backgroundColor":"#e3f0fc",
                "borderBottom":"1px solid #d9ebfc",
                "borderTop":"1px solid #d9ebfc"
            })
    });//侧边栏mouseover事件
    $(document).on('mouseout','.leftPanel li',function(){
        if($(this).attr('status')=='inactive')
            $(this).css({
                "background":"#f6fafd",
                "borderBottom":"1px solid #f6fafd",
                "borderTop":"1px solid #f6fafd"
            })
    });//侧边栏mouseout事件
    $(document).on('mouseover','.file',function(){
        if($(this).attr('status')!='active')
            $(this).css({
                "background":"#F6F8FD",
                "border": "1px solid #D3DFEC"
            });
    });//文件mouseover事件
    $(document).on('mouseout','.file',function(){
        if($(this).attr('status')=='inactive')
            $(this).css({
                "background":"#fff",
                "border": "1px solid #fff"
            });
    });//文件mouseout事件
    $(document).on('click','.file',function(){//文件获得焦点事件
        $(".sp").css("display","inline-block");
        $(this).css({
            "background":"#eff3f9",
            "border":"1px solid #bcccde"
        }).attr('status','active');
        $(this).siblings().attr('status','inactive').css({
            "background":"#fff",
            "border": "1px solid #fff"
        });
    });


    //$(document).on('blur','.file',function(){
    //    $(this).css({
    //        "background":"#fff",
    //        "border": "1px solid #fff"
    //    })
    //});
    $(document).on('dblclick','.file',Loadinfo);//文件双击进入事件
    $(document).on('click','.date',Loadinfo);//文件单击标签进入事件
    $('body').on('click',function(){
        $(".file").css({
            "background":"#fff",
            "border": "1px solid #fff"
        }).attr('status','inactive');
        $(".sp").css("display","none");
        console.log(1)
    });
    $(document).on('click','.myback',function(){
        $(".list-holder ul").empty();
        $.ajax(my_options_time);
    });//点击返回我的文件
    $(document).on('click','.pbback',function(){
        $(".list-holder ul").empty();
        $.ajax(pb_options_time);
    });//点击返回公共文件
});