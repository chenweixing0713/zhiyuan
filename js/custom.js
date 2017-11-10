    function start(){
      var s = '[{"c1name":"哲学","c1z":[{"c1zname":"古典哲学","c2z":[{"c2zname":"微观古典哲学"},{"c2zname":"宏观古典哲学"}]},{"c1zname":"现代哲学","c2z":[{"c2zname":"微观现代哲学"},{"c2zname":"宏观现代哲学"}]}]},{"c1name":"物理","c1z":[{"c1zname":"天体物理"},{"c1zname":"力学物理"}]},{"c1name":"计算机","c1z":[{"c1zname":"计算机科学","c2z":[{"c2zname":"计算机科学基础学科"},{"c2zname":"计算机科学高级应用"}]},{"c1zname":"计算机信息","c2z":[{"c2zname":"计算机网络通信"},{"c2zname":"计算机信息系统"}]}]},{"c1name":"材料科学","c1z":[{"c1zname":"高分子材料科学"},{"c1zname":"新型材料科学"}]}]';


      // console.log(s);
      var so=JSON.parse(s);
      // console.log(so);
      var li_farther="";
      for(var j=0;j<so.length;j++){
        // 第一级菜单
      var li_sz="";
      var fart='<span>'+so[j].c1name+'</span>';
          for(var i=0;i<so[j].c1z.length;i++){
          var li_son="";
            // 第二级菜单
          var li = '<li role="presentation"><a role="menuitem" tabindex="-1" href="#">'+so[j].c1z[i].c1zname+'</a></li>';
            // 第三级菜单
              // for (var n=0;n<so[j].c1z[i].c2z.length;n++) {
              //   var lson='<ul><li role="presentation"><a role="menuitem" tabindex="-1" href="#">'+so[j].c1z[i].c2z[n].c2zname+'</a></li></ul>';
              //   li_son=li_son+lson;
              // };
            li_sz = li_sz + li;
          };
          // li_farther=li_farther+fart;
          console.log(li_farther);
          console.log(li_son);
          console.log(li_sz);
          console.log(so.length);
          // 折叠面板效果
          var ul = '<div class="panel-group" id="accordion">'+'<div class="panel panel-default">'+'<div class="panel-heading" id="collapseTwo_'+[j]+'">'+'<h4 class="panel-title">'+'<a data-toggle="collapse" data-parent="#accordion'+[j]+'" href="#collapseOne_'+[j]+'">'+fart+'</a></h4></div><div id="collapseOne_'+[j]+'" class="panel-collapse collapse in"><div class="panel-body">'+li_sz+'</div></div></div></div>';
            $("#jmenu").append(ul);
            $('.panel-body>li').append(li_son);
            // 下拉框效果
          // var ul='<div class="dropdown"><a id="dLabel" role="button" data-toggle="dropdown" class="btn btn-primary" data-target="#" href="javascript:;">'+so[j].c1name+'<span class="caret"></span></a><ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu"><li class="dropdown-submenu"><a tabindex="-1" href="javascript:;">'+li_sz+'</a><ul class="dropdown-menu"><li><a tabindex="-1" href="javascript:;">'+li_son+'</a></li></ul></li></ul></div>';
          // $("#jmenu").append(ul);
      };
    }
// ====================================================================================================================

function titles(){

  var locations='[{"c1name":"北京","school":"北京大学","area":"海定区","grade":"600"}]';
  var locations=JSON.parse(locations);
  console.log(locations);
  var somebody="";
  for (var i = 0; i < locations.length; i++) {
    var tte='<p class="person"><span class="aeed">'+locations[i].c1name+'</span><span class="fenshu">'+locations[i].grade+'</span></p>';
    var somebody=somebody+tte;
  }
  $("#headd").append(somebody);
}

//=================================================================================================================

function ttest(){
var sw='[{"name":"哲学","submenu":[{"name":"古典哲学","url":"www.baidu.com"},{"name":"现代哲学","url":"www.habotalk.com"}]},{"name":"物理","submenu":[{"name":"量子物理","url":""},{"name":"力学物理","submenu":[{"name":"牛顿力学物理","submenu":[{"name":"经典牛顿物理","url":"www.cibawang.com"}]},{"name":"开普勒力学物理","url":"www.okdyfy.com"}]},{"name":"电磁物理","url":"www.dianci.com"},{"name":"分子物理","submenu":[{"name":"原子物理","submenu":[{"name":"原子核物理","url":"www.core.com"},{"name":"电子物理","submenu":[{"name":"夸克物理","url":"www.kuake.com"},{"name":"正极夸克物理","url":"www.zhengjikuake.com"}]}]},{"name":"微生物物理","url":"www.weishengwu.com"}]},{"name":"核电物理","url":"www.hedian.com"}]},{"name":"计算机","submenu":[{"name":"计算机编程","url":""},{"name":"计算机通信","url":""},{"name":"计算机网络","url":""}]}]';


}


//===========================================================================================================
// function aa(){
// obj = $.ajax({
//     url: './test.json',
//     type: 'get',
//     dataType: 'json',
//     success: function (user) {
//         //字符串拼接
//         var htmlNodes = '';
//         for(var i = 0; i < user.length; i ++){
//             htmlNodes += '<figure><div class="img"><img width="120" height="120" src="' + user[i].img + '"></div><figcaption><strong>' + user[i].name + '</strong><p>' + user[i].caption + '</p></figcaption></figure>';
//         }

//         $('#containerds').append(htmlNodes);
//     }
// });
// console.log(obj);
// return obj;
// }

function aaTest(){
obj = $.ajax({
    url: './test.json',
    type: 'get',
    dataType: 'json',
    contentType : "application/json",
    data : null,
    success: function (user) {
        //字符串拼接
        var htmlNodes = '';
        for(var i = 0; i < user.length; i ++){
            htmlNodes += '<div class="row rrems"><div class="col-xs-4 col-sm-4 col-md-3 col-lg-2"><div class="logo"><a href="' + user[i].url + '"><img src="' + user[i].img + '"></a></div></div><div class="col-xs-8 col-sm-8 col-md-9 col-lg-10"><h4 class="school_title"><a href="' + user[i].url + '">'+user[i].name+'</a></h4><p class="description">'+user[i].caption+'</p><p class="description">最近一年的录取分数线</p><div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="'+user[i].grade+'" aria-valuemin="0" aria-valuemax="750" style="width:'+(100)*((user[i].grade)/(750))+'%">'+user[i].grade+'<span class="sr-only">'+user[i].grade+' Complete (success)</span></div></div></div></div>';
        }

        $('#xuexiao').append(htmlNodes);
    }
});
console.log(obj);
return obj;
}

//==========================================================================================================
function Nengshang(){
obj = $.ajax({
    url: './maoxian.json',
    type: 'get',
    dataType: 'json',
    contentType : "application/json",
    data : null,
    success: function (user) {
        //字符串拼接
        var htmlNodes = '';
        for(var i = 0; i < user.length; i ++){
            htmlNodes += '<div class="row rrems"><div class="col-xs-4 col-sm-4 col-md-3 col-lg-2"><div class="logo"><a href="' + user[i].url + '"><img src="' + user[i].img + '"></a></div></div><div class="col-xs-8 col-sm-8 col-md-9 col-lg-10"><h4 class="school_title"><a href="' + user[i].url + '">'+user[i].name+'</a></h4><p class="description">'+user[i].caption+'</p><p class="description">最近一年的录取分数线</p><div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="'+user[i].grade+'" aria-valuemin="0" aria-valuemax="750" style="width:'+(100)*((user[i].grade)/(750))+'%">'+user[i].grade+'<span class="sr-only">'+user[i].grade+' Complete (success)</span></div></div></div></div>';
        }

        $('#xuexiao').append(htmlNodes);
    }
});
console.log(obj);
return obj;
}

//===========================================================================================
function rwrrm(){
obj = $.ajax({
    url: './xuexiao.json',
    type: 'get',
    dataType: 'json',
    contentType : "application/json",
    data : null,
    success: function (user) {
        //字符串拼接
        var htmlNodes = '';
        for(var i = 0; i < user.length; i ++){
          var weer="";
          for (var j = 0; j < user[i].zhuanye.length; j++) {
            var li='<div class="row amew"><div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 vertical">'+user[i].zhuanye[j].name+'</div><div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"><div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="'+user[i].zhuanye[j].lowerScore+'" aria-valuemin="0" aria-valuemax="750" style="width:'+(100)*((user[i].zhuanye[j].lowerScore)/(750))+'%">'+user[i].zhuanye[j].lowerScore+'<span class="sr-only">'+user[i].zhuanye[j].lowerScore+' Complete (success)</span></div></div><div class="progress blue"><div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="'+user[i].zhuanye[j].higherScore+'" aria-valuemin="0" aria-valuemax="750" style="width:'+(100)*((user[i].zhuanye[j].higherScore)/(750))+'%">'+user[i].zhuanye[j].higherScore+'<span class="sr-only">'+user[i].zhuanye[j].higherScore+' Complete (success)</span></div></div></div><div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 vertical">80%</div></div>';
            weer=weer+li;
          }
            htmlNodes += weer;
        }

        $('#yuanxiaozy').append(htmlNodes);
    }
});
console.log(obj);
return obj;
}

//=========================================================================================================
function yx(){
obj = $.ajax({
    // url: './xuexiao.json',
    url:'http://www.yoochoice.com:8112/api/gaokao/v1/schools',
    type: 'get',
    dataType: 'json',
    contentType : "application/json",
    data : null,
    success: function (user) {
        //字符串拼接
        var htmlNodes = '';
        for(var i = 0; i < user.length; i ++){
          var weer='<div class="row amew"><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 logo"><img src="'+user[i].schoolLogo+'"></div><div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 vertical"><a href="'+user[i].url+'">'+user[i].schoolName+'</a></div><div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 vertical">'+user[i].areaName+'</div></div>';
        htmlNodes += weer;
        }

        $('#yxiao').append(htmlNodes);
    }
});
console.log(obj);
return obj;
}

//===========================================================================================================
function sc(){
obj = $.ajax({
    url: './xuexiao.json',
    type: 'get',
    dataType: 'json',
    contentType : "application/json",
    data : null,
    success: function (user) {
        //字符串拼接
        var htmlNodes = '';
        for(var i = 0; i < user.length; i ++){
          var weer='<div class="row amew"><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 logo vertical"><img src="'+user[i].img+'"></div><div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 vertical"><a href="'+user[i].url+'">'+user[i].name+'</a></div><div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 vertical">'+user[i].area+'</div></div>';
        htmlNodes += weer;
        }

        $('#school_detail').append(htmlNodes);
    }
});
console.log(obj);
return obj;
}


var jianjie=document.getElementById('jianjie');
var lqyx=document.getElementById('lqyx');
  $("#jianjie h3").click(function(){
    $(this).addClass("active");
    $("#lqyx h3").removeClass("active");
});
  $("#lqyx h3").click(function () {
      $(this).addClass("active");
      $("#jianjie h3").removeClass("active");
  })