/**
 * Created by Administrator on 2016/9/23.
 */
$(function(){
    var cur_status = "less";
    $.extend({
        show_more_init:function(){
//alert("show_more_init!");
            var charNumbers=$(".content").html().length;//总字数
            var limit=250;//显示字数
            if(charNumbers>limit)
            {
                var orgText=$(".content").html();//原始文本
                var orgHeight=$(".content").height();//原始高度
                var showText=orgText.substring(0,limit);//最终显示的文本
                $(".content").html(showText);
                var contentHeight=$(".content").height();//截取内容后的高度
                $(".switch").click(
                    function() {
                        if(cur_status == "less"){
                            $(".content").height(contentHeight).html(orgText).animate({ height:orgHeight}, { duration: "slow" });
                            $(this).html("收缩");
                            cur_status = "more";
                        }else{
                            $(".content").height(orgHeight).html(showText).animate({ height:contentHeight}, { duration: "fast" });
                            $(this).html("......");
                            cur_status = "less";
                        }
                    }
                );
            }
            else
            {
                $(".switch").hide();
            }
        }
    });
    $('.switch').ready(function(){
        $.show_more_init();
    });
    var _index=0;
    $("#bottom_left ul li").mouseenter(function(){
       var oImg= $(this).find("img").attr('src');
        var _index=$(this).index();//alert(_index);



    });

});