<!--浏览器动态标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/WowYiJiu/image@master/blog/favicon.png");
         document.title = '( •̀ .̫ •́ )✧你要玩捉迷藏嘛';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/WowYiJiu/image@master/blog/favicon.png");
         document.title = 'This Love！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });