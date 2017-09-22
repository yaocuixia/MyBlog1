/**
 * Created by Administrator on 2017/9/20.
 */
/*头部导航栏影藏显示子菜单*/
var oClient=document.getElementById('client');
var oFr_List=oClient.getElementsByTagName('ul')[0];
oClient.onmousemove=function(){
    oFr_List.style.display="block";
};
oClient.onmouseout=function(){
    oFr_List.style.display="none";
};