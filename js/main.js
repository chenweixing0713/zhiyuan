// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
// var rrr=require('./jquery-2.1.1.min.js');
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>回到首页</div>' }
const Bar = { template: '<div>联络我们</div>' }
const Boo = { template: '<div>一键拨号</div>' }
const Zaa = { template: '<div>在线咨询</div>' }
const Benke = { template: '<div class="dropdown"><div id="jmenu"></div></div>' }
const Zhuanke = { template: '<div class="dropdown"><div id="jmenu"></div></div>' }
const Zee = { template: '<div>哲学是一门抽象的学科，它很重要</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/boo', component: Boo },
  { path: '/zaa', component: Zaa },
  { path: '/benke', component: Benke },
  { path: '/zhuanke', component: Zhuanke },
  { path: '/zee', component: Zee },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

const kemu=new Vue({
	router
}).$mount('#kemu')

// 注册组件
Vue.component('my-component', {
  template: '<div class="subtitle"><h3>简介</h3></div>'
})
// 创建根实例
new Vue({
  el: '#example'
})

// 注册组件
Vue.component('my-component_2', {
  template: '<div class="title"><h3>学校简介</h3></div>'
})
// 创建根实例
new Vue({
  el: '#example_2'
})

var page_title=new Vue({
	el:'#page_title',
	data:{
		message:'全国院校',
		school:'学校性质',
		leixing:'院校类型',
		province:'广东省',
		fenshu:'600分',
		maoxian:'冒险',
	}
})

var xuexiao=new Vue({
	el:'#xuexiao',
	data:{
		school_title:'北京大学',
		description:'近三年的最低录取分数线'
	}
})

// 局部注册
var Child = {
  template: '<div>这是第一个局部组件</div>'
}

var Second={
	template:'<div>这是第二个局部组件</div>'
}

var Third={
	template:'<h3>批次分数线</h3>'
}
new Vue({
  el:'#example_3',
  components: {
    // <my-component> 将只在父模板可用
    'my-component_1': Child,
    'my-component_2': Second,
    'my-component_3':Third
  }
})

// 局部注册
var maox = {
  template: '<h4>冒险</h4>'
}

var went={
	template:'<h4>稳妥</h4>'
}

var anq={
	template:'<h4>安全</h4>'
}
new Vue({
  el:'#pinggu',
  components: {
    // <my-component> 将只在父模板可用
    'my-component_maox': maox,
    'my-component_went': went,
    'my-component_anq':anq
  }
})

// 添加过渡效果
new Vue({
        el: '#transition',
        data: {
            show: false
        },
        methods: {
            showme: function() {
                if (this.show) {
                    this.show = false;
                } else {
                    this.show = true;
                }
            }
        },
});

// 添加过渡效果
new Vue({
    el: '#transition_2',
    data: {
        show: false,
    },
    methods: {
        showme_2: function() {
            if (this.show) {
                this.show = false;
            } else {
                this.show = true;
            }
        }
    },
});

layui.use(['element', 'layer'], function(){
  var element = layui.element();
  var layer = layui.layer;

  //监听折叠
  element.on('collapse(test)', function(data){
    layer.msg('展开状态：'+ data.show);
  });
});


// 顶部搜索弹窗
$('#tanchuan').on('click', function(){
  layer.open({
  type: 1,
  area: ['600px', '360px'],
  shadeClose: true, //点击遮罩关闭
  content: '<form methods="post" action="3.html">\<\div>\<\div class="input-group">\<\input type="text" class="form-control" placeholder="搜大学" aria-describedby="basic-addon1"></div>\<\/div></form>'
  });
});


var xuex = new Vue({
  el: '#xuex',
  data: {
    schools: [
      { name: '北京大学',area:'北京',logo:'http://college.gaokao.com/style/college/images/icon/1.png' }
    ]
  }
})