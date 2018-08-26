// page_2地图
var mapInit = function () {
  //地图容器
  var chart = echarts.init(document.getElementById('page_map'));
  //34个省、市、自治区的名字拼音映射数组
  /*  var provinces = {
     //23个省
     "台湾": "taiwan",
     "河北": "hebei",
     "山西": "shanxi",
     "辽宁": "liaoning",
     "吉林": "jilin",
     "黑龙江": "heilongjiang",
     "江苏": "jiangsu",
     "浙江": "zhejiang",
     "安徽": "anhui",
     "福建": "fujian",
     "江西": "jiangxi",
     "山东": "shandong",
     "河南": "henan",
     "湖北": "hubei",
     "湖南": "hunan",
     "广东": "guangdong",
     "海南": "hainan",
     "四川": "sichuan",
     "贵州": "guizhou",
     "云南": "yunnan",
     "陕西": "shanxi1",
     "甘肃": "gansu",
     "青海": "qinghai",
     //5个自治区
     "新疆": "xinjiang",
     "广西": "guangxi",
     "内蒙古": "neimenggu",
     "宁夏": "ningxia",
     "西藏": "xizang",
     //4个直辖市
     "北京": "beijing",
     "天津": "tianjin",
     "上海": "shanghai",
     "重庆": "chongqing",
     //2个特别行政区
     "香港": "xianggang",
     "澳门": "aomen"
   }; */

  // 全国省份列表
  var dataMap = [{
      name: '北京'
    }, {
      name: '天津'
    }, {
      name: '上海'
    }, {
      name: '重庆'
    }, {
      name: '河北'
    }, {
      name: '河南'
    }, {
      name: '云南'
    }, {
      name: '辽宁'
    }, {
      name: '黑龙江'
    }, {
      name: '湖南'
    }, {
      name: '安徽'
    }, {
      name: '山东'
    },
    {
      name: '新疆'
    }, {
      name: '江苏'
    }, {
      name: '浙江'
    }, {
      name: '江西'
    }, {
      name: '湖北'
    }, {
      name: '广西'
    }, {
      name: '甘肃'
    }, {
      name: '山西'
    }, {
      name: '内蒙古'
    }, {
      name: '陕西'
    }, {
      name: '吉林'
    }, {
      name: '福建'
    }, {
      name: '贵州'
    },
    {
      name: '广东'
    }, {
      name: '青海'
    }, {
      name: '西藏'
    }, {
      name: '四川'
    }, {
      name: '宁夏'
    }, {
      name: '海南'
    }, {
      name: '台湾'
    }, {
      name: '香港'
    }, {
      name: '澳门'
    }
  ]
  // 需要在页面上直接标记出来的城市
  var specialMap = ['浙江', '云南', '陕西'];
  // 对dataMap进行处理，使其可以直接在页面上展示
  for (var i = 0; i < specialMap.length; i++) {
    for (var j = 0; j < dataMap.length; j++) {
      if (specialMap[i] == dataMap[j].name) {
        dataMap[j].selected = true;
        break;
      }
    }
  }

  //直辖市和特别行政区-只有二级地图，没有三级地图
  var special = ["北京", "天津", "上海", "重庆", "香港", "澳门"];
  var mapdata = [];

  //绘制全国地图
  $.getJSON('js/map/china.json', function (data) {
    d = [];
    for (var i = 0; i < data.features.length; i++) {
      d.push({
        name: data.features[i].properties.name
      })
    }
    mapdata = d;
    //注册地图
    echarts.registerMap('china', data);
    //绘制地图
    renderMap('china', d);
  });


  //初始化绘制全国地图配置
  var option = {
    backgroundColor: '',
    title: {
      text: '',
      subtext: '',
      link: '',
      left: 'center',

      subtextStyle: {
        color: '',
        text: '',
        fontSize: 0,
        fontWeight: 'normal',
        fontFamily: "Microsoft YaHei"
      }
    },
    tooltip: {
      formatter: function (params) {
        var info = '<p style="font-size:18px">' + params.name + '</p><p style="font-size:14px">这里可以写一些，想展示在页面上的别的信息</p>'
        return info;
      },
      backgroundColor: "#ff7f50", //提示标签背景颜色
      textStyle: {
        color: "#fff"
      } //提示标签字体颜色

      /* trigger: 'item',
      formatter: '{b}' */
    },

    animationDuration: 1000,
    animationEasing: 'cubicOut',
    animationDurationUpdate: 1000

  };

  function renderMap(map, data) {
    option.title.subtext = map;
    option.series = [{
      name: map,
      type: 'map',
      mapType: map,
      roam: false,

      label: {
        normal: {
          show: false,
          textStyle: {
            color: '#999',
            fontSize: 13
          }
        },
        emphasis: {
          show: false,
          textStyle: {
            color: '#fff',
            fontSize: 13
          }
        }
      },
      itemStyle: {
        normal: {
          areaColor: '#FFF',
          borderColor: 'dodgerblue'
        },
        emphasis: {
          areaColor: '#0080C9'
        }
      },
      data: data
    }];
    //渲染地图
    chart.setOption(option);
  }
};

window.onload = function () {
  mapInit();
}


// (function () {
//   // swiper
//   var mySwiper = new Swiper('.swiper-container', {
//     /* wrapperClass: 'page_box',
//     slideClass: 'page', */
//     direction: 'vertical',
//     //loop: true,
//     mousewheel: true,
//     speed: 500,
//     mousewheel: {
//       forceToAxis: true,
//       invert: true,
//     },


//     // 如果需要分页器
//     pagination: {
//       el: '.page_idx',
//       bulletElement: 'li',
//       clickable: true,
//       bulletClass: 'bullet',
//       bulletActiveClass: 'active',
//     },
//   });
// })();

// 计算swiper_wrapper的高度
var $header = $('.header'),
  $swiper_wrapper = $('.swiper_wrapper');
var winH = document.activeElement.clientHeight;
var swiperH = winH - $header.height();

$swiper_wrapper.css('height', swiperH);

// 点击主KV进入招聘主页
/* var $main_kv = $('.main_kv'),
  $swiper_container = $('.container');

$main_kv.on('click', function () {
  $main_kv.hide();
  $swiper_container.show();
  mapInit();
}); */

// 切换各公司的招聘页面
/* var $nav_list = $('#nav_list'),
    $nav_li=$nav_list.find('li'),
  $swiper_slide = $swiper_wrapper.find('.swiper_slide');

$nav_list.on('click', function (e) {
  if (e.target.tagName === 'A') {
    var $parent = $(e.target).parent();
    $parent.addClass('active').siblings().removeClass('active');
    var index=$nav_li.index($parent);  
    $swiper_slide.eq(index).show().siblings().hide();
    if(index===4){
      mapInit();
    }  
  }
}) */

//根据hash更改nav li的样式
/*HASH*/
var classInit;
window.onhashchange = classInit = function () {
  var $nav_list = $('#nav_list'),
    $nav_li = $nav_list.find('li');

  function changeClass(index) {
    $nav_li.eq(index).addClass('active').siblings().removeClass('active');
    console.log('hash change');
    
  }

  var url = window.location.href, //=>获取当前页面的URL地址  location.href='xxx'这种写法是让其跳转到某一个页面
    well = url.indexOf('#'),
    hash = well === -1 ? null : url.substr(well + 1),
    index;
  switch (hash) {
    case 'page_home':
      index = 0;
      changeClass(index);
      break;
    case 'page_zq':
      index = 1;
      changeClass(index);
      break;
    case 'page_qt':
      index = 2;
      changeClass(index);
      break;
    case 'page_zx':
      index = 3;
      changeClass(index);
      break;
    case 'join_us':
      index = 4;
      changeClass(index);
      break;

    default:
      index = 0;
      changeClass(index);
  }
  
};
classInit();

var $nav = $('.nav_list');
var $line = $('.line');

var $active = $nav.find('.active');
var pos = 0;
var wid = 0;

if ($active.length) {
  pos = $active.position().left + 40;
  wid = $active.find('a').width();

  $line.css({
    left: pos,
    width: wid
  });
}

$nav.find('li a').click(function (e) {
  if (!$(this).parent().hasClass('active')) {

    var _this = $(this);

    $nav.find('li').removeClass('active');

    var position = _this.parent().position().left + 40;
    var width = _this.width();

    if (position >= pos) {
      $line.animate({
        width: ((position - pos) + width)
      }, 300, function () {
        $line.animate({
          width: width,
          left: position
        }, 150);
        _this.parent().addClass('active');
      });
    } else {
      $line.animate({
        left: position,
        width: ((pos - position) + wid)
      }, 300, function () {
        $line.animate({
          width: width
        }, 150);
        _this.parent().addClass('active');
      });
    }

    pos = position;
    wid = width;
  }
});

// backup
/* var $nav = $('.nav_list');
var $line = $('.line');

var $active = $nav.find('.active');
var pos = 0;
var wid = 0;

if ($active.length) {
  pos = $active.position().left + 40;
  wid = $active.find('a').width();

  $line.css({
    left: pos,
    width: wid
  });
}

$nav.find('li a').click(function (e) {
  if (!$(this).parent().hasClass('active')) {

    var _this = $(this);

    $nav.find('li').removeClass('active');

    var position = _this.parent().position().left + 40;
    var width = _this.width();

    if (position >= pos) {
      $line.animate({
        width: ((position - pos) + width)
      }, 300, function () {
        $line.animate({
          width: width,
          left: position
        }, 150);
        _this.parent().addClass('active');
      });
    } else {
      $line.animate({
        left: position,
        width: ((pos - position) + wid)
      }, 300, function () {
        $line.animate({
          width: width
        }, 150);
        _this.parent().addClass('active');
      });
    }

    pos = position;
    wid = width;
  }
}); */



// 显示二维码
var $qr_icon = $('.qr_icon');

$qr_icon.on('mouseenter', function () {
  $(this).find('img').fadeIn(500);
});
$qr_icon.on('mouseleave', function () {
  $(this).find('img').fadeOut();
});


/* (function () {
  var $page_box = $('page_box'),
    $page = $page_box.find('.page'),
    $page_idx = $('.page_idx');

  var wheelTimer = null,
    page = 0;

  var winH = document.documentElement.clientHeight;

  var pageClass = function (page) {
    $page_idx.find('a').eq(page - 1).addClass('active').siblings().removeClass('active');
  };

  // 判断鼠标滚轮滚动的方向 
  $(document).on('mousewheel DOMMouseScroll', onMouseScroll);

  function onMouseScroll(e) {


    if (wheelTimer) return;

    var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
    var delta = Math.max(-1, Math.min(1, wheel));
    if (delta < 0) {
      wheelTimer = setTimeout(function () {
        page++;
        page = page <= 0 ? 0 : page;
        console.log(page, page * winH);

        $(window).scrollTop(page * winH);

        clearTimeout(wheelTimer);
        wheelTimer = null;
      }, 100)
    } else {
      wheelTimer = setTimeout(function () {
        page--;
        page = page >= 7 ? 7 : page;
        console.log(page);
        $(window).scrollTop(page * winH);
        clearTimeout(wheelTimer);
        wheelTimer = null;
      }, 100)
    }
  }

})(); */