$(function(){
    var page=$("#book li").length;
// alert(page);
    $("#book li").each(function(index){
        $(this).css("z-index",page-index);
    });
    $("#book li:even").click(function(e){
        $(this).add($(this).next()).addClass("rl");
        var obj=this;
        setTimeout(function(){
            $(obj).add($(obj).next()).css("z-index","auto");
        },500)
    });
    $("#book li:odd").click(function(){
        $(this).prev().css("z-index",page-$(this).index()+1);
        $(this).css("z-index",page-$(this).index());
        $(this).add($(this).prev()).removeClass("rl");
    });





});