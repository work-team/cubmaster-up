/**
 * Created by tan on 16/4/15.
 */
$(function(){
    var time;var id;var downpath;var $oldpath;var $path;var $month;

    ////////////////////////////////////////////////测试数据区域

    //var data = [
    //    {
    //        time:2016,
    //        month:[01,02,04]
    //    },
    //    {
    //        time:2015,
    //        month:[01,03,05]
    //    }
    //];
    //var $timelength = data.length;
    //for(var i = 0;i<$timelength;i++){
    //    $(".list-holder ul").append("<li class='file' status='inactive'><div class='file-bg'></div><div class='date'>"+data[i].time+"</div></li>");
    //    $(".file").eq(i).data("MONTH",data[i].month);
    //}
    //if($(".path-name").length==0){
    //    $('.path-info').append(' <span class="path-name">我的文件</span>');
    //}
    //var data1 = [
    //    {
    //        name:"xx"
    //    },
    //    {
    //        name:"yy"
    //    }
    //];

    /////////////////////////////////////////////////测试数据趋于


    var my_options_time = {
        "type":"POST",
        "url":"getTime",
        "dataType":"json",
        "data": {"userId":"1"},
        "success":function(data){
            var data = $.parseJSON(data.content);
            var $timelength = data.length;
            for(var i = 0;i<$timelength;i++){
                $(".list-holder ul").append("<li class='file' status='inactive'><div class='file-bg'></div><div class='date'>"+data[i].time+"</div></li>");
                $(".file").eq(i).data("MONTH",data[i].month);
            }
            if($(".path-name").length==0){
            	$('.path-info').append(' <span class="path-name">我的文件</span>');
            }   
        },
        "error":function(){
            alert("数据库加载错误!");
        }
    };//第一次私有加载
    var my_options_name = {
        "type":"POST",
        "url":"getName",
        "dataType":"json",
        "data": {"time":time,"userId":"1"},
        "success":function(data){
            var data = $.parseJSON(data.content);
            var $filelength = data.length;
            for(var i = 0;i<$filelength;i++){
                $(".list-holder ul").append("<li class='package' status='inactive'><div class='file-txt-bg'></div><div class='name'>"+data[i].name+"</div></li>");
                $(".package").eq(i).data("ID",data[i].id);
                $(".package").eq(i).data("PATH",data[i].path);
            }
            $('.path-info').html("<div class='new-path'><span class='back myback'>返回上一级</span><span class='old-path myback'>"+$oldpath+"</span><span class='path'>>&nbsp;"+$path+"</span></div>");
        },
        "error":function(){
            alert("数据库加载错误!");
        }
    };//第二次私有加载

    var pb_options_time = {
        "type":"POST",
        "url":"getTime",
        "dataType":"json",
        "success":function(data){
        	 var data = $.parseJSON(data.content);
            var $timelength = data.length;
            for(var i = 0;i<$timelength;i++){
                $(".list-holder ul").append("<li class='file' status='inactive'><div class='file-bg'></div><div class='date'>"+data[i].time+"</div></li>");
                $(".file").eq(i).data("MONTH",data[i].month);
            }
            if($(".path-name").length==0){
            $('.path-info').append(' <span class="path-name">公共文件</span>');
            }
        },
        "error":function(){
            alert("数据库加载错误!");
        }
    };//第一次公有加载
    var pb_options_name = {
        "type":"POST",
        "url":"getName",
        "dataType":"json",
		"data": {"time":time},
        "success":function(data){
            var data = $.parseJSON(data.content);
            var $filelength = data.length;
            for(var i = 0;i<$filelength;i++){
                $(".list-holder ul").append("<li class='package' status='inactive' data><div class='file-txt-bg'></div><div class='name'>"+data[i].name+"</div></li>");
                $(".package").eq(i).data("ID",data[i].id);
                $(".package").eq(i).data("PATH",data[i].path);
            }
            $('.path-info').html("<div class='new-path'><span class='back pbback'>返回上一级</span><span class='old-path pbback'>"+$oldpath+"</span><span class='path'>>&nbsp;"+$path+"</span></div>");
        },
        "error":function(){
            alert("数据库加载错误!");
        }
    };//第二次公有加载

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
    function Loadinfo(){//对于文件信息的请求
        $path = $path+"-"+"0"+$(this).find(".datemonth").text();
        time=$path;
        $(".list-holder ul").empty();
        if($oldpath=="我的文件") {
            $.ajax(my_options_name);//点击文件之后第二次加载我的文件名

            ///////////////////////////////测试数据范区域

            //var $filelength = data1.length;
            //for(var i = 0;i<$filelength;i++){
            //    $(".list-holder ul").append("<li class='package' status='inactive'><div class='file-txt-bg'></div><div class='name'>"+data1[i].name+"</div></li>");
            //    $(".package").eq(i).data("ID",data[i].id);
            //    $(".package").eq(i).data("PATH",data[i].path);
            //}
            //$('.path-info').html("<div class='new-path'><span class='back myback'>返回上一级</span><span class='old-path myback'>"+$oldpath+"</span><span class='path'>>&nbsp;"+$path+"</span></div>");

            ///////////////////////////////测试数据区域
        }
        else{
            $.ajax(pb_options_name);//点击文件之后第二次加载公共文件名
        }
    }
    function  Loadinfomonth(){
        $month = $(this).data("MONTH");
        var $monthlength = $month.length;
        $(".list-holder ul").empty();
        for(var i = 0;i<$monthlength;i++){
            $(".list-holder ul").append("<li class='filemonth' status='inactive'><div class='file-bg'></div><div class='datemonth'>"+$month[i]+"</div></li>");
        }
        $oldpath = $(".path-name").text();
        $path = $(this).find(".date").text();
        $('.path-info').html("<div class='new-path'><span class='back myback'>返回上一级</span><span class='old-path myback'>"+$oldpath+"</span><span class='path'>>&nbsp;"+$path+"</span></div>");
    }
    function Loadinfopg(){//对于文件详情的请求
        id = $(this).data("ID");
        window.open("cubmaster-数据展示.html?id="+id);
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
        $(this).css({
            "background":"#eff3f9",
            "border":"1px solid #bcccde"
        }).attr('status','active');
        $(this).siblings().attr('status','inactive').css({
            "background":"#fff",
            "border": "1px solid #fff"
        });
    });
    $(document).on('mouseover','.filemonth',function(){
        if($(this).attr('status')!='active')
            $(this).css({
                "background":"#F6F8FD",
                "border": "1px solid #D3DFEC"
            });
    });//文件mouseover事件
    $(document).on('mouseout','.filemonth',function(){
        if($(this).attr('status')=='inactive')
            $(this).css({
                "background":"#fff",
                "border": "1px solid #fff"
            });
    });//文件mouseout事件
    $(document).on('click','.filemonth',function(){//文件获得焦点事件
        $(this).css({
            "background":"#eff3f9",
            "border":"1px solid #bcccde"
        }).attr('status','active');
        $(this).siblings().attr('status','inactive').css({
            "background":"#fff",
            "border": "1px solid #fff"
        });
    });
    $(document).on('mouseover','.package',function(){
        if($(this).attr('status')!='active')
            $(this).css({
                "background":"#F6F8FD",
                "border": "1px solid #D3DFEC"
            });
    });//文件信息mouseover事件
    $(document).on('mouseout','.package',function(){
        if($(this).attr('status')=='inactive')
            $(this).css({
                "background":"#fff",
                "border": "1px solid #fff"
            });
    });//文件信息mouseout事件
    $(document).on('click','.package',function(){//文件获得焦点事件
        $(".sp").css("display","inline-block");
        downpath = $(this).data("PATH");
        $(this).css({
            "background":"#eff3f9",
            "border":"1px solid #bcccde"
        }).attr('status','active');
        $(this).siblings().attr('status','inactive').css({
            "background":"#fff",
            "border": "1px solid #fff"
        });

    });



    $(document).on('dblclick','.file',Loadinfomonth);//文件双击进入事件
    $(document).on('click','.date',Loadinfomonth);//文件单击标签进入事件
    $(document).on('dblclick','.filemonth',Loadinfo);//文件双击进入事件
    $(document).on('click','.datemonth',Loadinfo);//文件单击标签进入事件
    $(document).on('dblclick','.package',Loadinfopg);//文件双击查看详情进入事件
    $(document).on('click','.name',Loadinfopg);//文件单击查看详情进入事件


    $('body').on('click',function(){
        $(".file").css({
            "background":"#fff",
            "border": "1px solid #fff"
        }).attr('status','inactive');
        $(".package").css({
            "background":"#fff",
            "border": "1px solid #fff"
        }).attr('status','inactive');
        $(".filemonth").css({
            "background":"#fff",
            "border": "1px solid #fff"
        }).attr('status','inactive');
        $(".sp").css("display","none");
    });
    $("#download").on('click',function(){//下载
        $.ajax({
            "type":"POST",
            "url":"",
            "dataType":"json",
            "data":downpath,
            "success":function(data){
                alert("success");
            }
        })
    });

    $(document).on('click','.myback',function(){
        $(".list-holder ul").empty();
        $(".new-path").remove();
        $.ajax(my_options_time);
    });//点击返回我的文件
    $(document).on('click','.pbback',function(){
        $(".list-holder ul").empty();
        $(".path-info").empty();
        $.ajax(pb_options_time);
    });//点击返回公共文件


    $("#uplist").on("click",function(){
        window.open("cubmaster-上传表单.html");
    });
    $("#logo").on('click',function(){
        location.href = "cubmaster-云盘主页.html"
    });
});