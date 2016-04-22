/**
 * Created by tan on 16/3/29.
 */
$(function(){
    var url = window.location.search;
    var id = url.substr(4,url.length);
    var $long;
    var $pg_num;

    var data = [{
        "area": "无",
        "associatedTasks": "分类算法",
        "filePath": "3\\dataset\\word.txt",
        "attributeCount": 2,
        "submitDatetime": "2016-03-18 19:27:58",
        "description": "文本",
        "ispublic": 0,
        "platform": "java",
        "datasetName": "文本数据",
        "datasetType": 0,
        "attributes": [{
            "attributeLabel": 0,
            "attributeDatabaseType": "int",
            "attributeType": "数值",
            "attributeCharacter": 0,
            "attributeName": "ll",
            "attributeMissing": "无",
            "attributeSequence": 1,
            "attributeRange": "无"
        }, {
            "attributeLabel": 1,
            "attributeDatabaseType": "int",
            "attributeType": "数值",
            "attributeCharacter": 0,
            "attributeName": "label",
            "attributeMissing": "无",
            "attributeSequence": 2,
            "attributeRange": "无"
        }]
    }];
    $pg_num = 1;
    $("h2").text(data[0].datasetName);
    $("#description").text(data[0].description);
    $("#datasetType").text(data[0].datasetType);
    $("#associatedTasks").text(data[0].associatedTasks);
    $("#platform").text(data[0].platform);
    $("#area").text(data[0].area);
    $("#SubmitDatetime").text(data[0].submitDatetime);
    $("#DownloadCount").text(data[0].downloadCount);
    var $inf = $(".inf").html();
    var $infheight = $(".inf").height();
    for (var i = 0, j = 0; i <= (data[0].attributes.length * 2 - 2); i = i + 2, j++) {
        if ((data[0].attributes.length - j) > 1) {
            $(".container").css({"height":"+="+2*$infheight});
            $(".inf").append($inf);

        }
        var $li_first = $(".inf").find("ul").eq(i).find("li");
        var $li_second = $(".inf").find("ul").eq(i + 1).find("li");
        $li_first.eq(0).find("span").text(data[0].attributes[j].attributeName);
        $li_first.eq(1).find("span").text(data[0].attributes[j].attributeLabel);
        $li_first.eq(2).find("span").text(data[0].attributes[j].attributeDatabaseType);
        $li_first.eq(3).find("span").text(data[0].attributes[j].attributeCharacter);
        $li_second.eq(0).find("span").text(data[0].attributes[j].attributeRange);
        $li_second.eq(1).find("span").text(data[0].attributes[j].attributeSequence);
        $li_second.eq(2).find("span").text(data[0].attributes[j].attributeMissing);
        $li_second.eq(3).find("span").text(data[0].attributes[j].attributeType);
    }
    //$.ajax({
    //    "type":"POST",
    //    "url":"getInfo",
    //    "datatype":"json",
    //    "data":{"datasetID":id},
    //    success:function(data){
    //        data = $.parseJSON(data);
    //        $pg_num = 1;
    //        $("h2").text(data[0].datasetName);
    //        $("#description").text(data[0].description);
    //        $("#datasetType").text(data[0].datasetType);
    //        $("#associatedTasks").text(data[0].associatedTasks);
    //        $("#platform").text(data[0].platform);
    //        $("#area").text(data[0].area);
    //        $("#SubmitDatetime").text(data[0].submitDatetime);
    //        $("#DownloadCount").text(data[0].downloadCount);
    //        var $inf = $(".inf").html();
    //        var $infheight = $(".inf").height();
    //        for (var i = 0, j = 0; i <= (data[0].attributes.length * 2 - 2); i = i + 2, j++) {
    //            if ((data[0].attributes.length - j) > 1) {
    //                $(".container").css({"height":"+="+$infheight});
    //                $(".inf").append($inf);
    //            }
    //            var $li_first = $(".inf").find("ul").eq(i).find("li");
    //            var $li_second = $(".inf").find("ul").eq(i + 1).find("li");
    //            $li_first.eq(0).find("span").text(data[0].attributes[j].attributeName);
    //            $li_first.eq(1).find("span").text(data[0].attributes[j].attributeLabel);
    //            $li_first.eq(2).find("span").text(data[0].attributes[j].attributeDatabaseType);
    //            $li_first.eq(3).find("span").text(data[0].attributes[j].attributeCharacter);
    //            $li_second.eq(0).find("span").text(data[0].attributes[j].attributeRange);
    //            $li_second.eq(1).find("span").text(data[0].attributes[j].attributeSequence);
    //            $li_second.eq(2).find("span").text(data[0].attributes[j].attributeMissing);
    //            $li_second.eq(3).find("span").text(data[0].attributes[j].attributeType);
    //        }
    //    },
    //    error:function(){
    //        alert("数据读取错误");
    //    }
    //})



});
