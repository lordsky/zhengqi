// page_2地图
(function () {
  //地图容器
  var chart = echarts.init(document.getElementById('page_map'));
  //34个省、市、自治区的名字拼音映射数组
  var provinces = {
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
  };

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
        color: '#000',
        text: '',
        fontSize: 0,
        fontWeight: 'normal',
        fontFamily: "Microsoft YaHei"
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}'
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
})();

(function () {
  // swiper
  var mySwiper = new Swiper('.swiper-container', {
    /* wrapperClass: 'page_box',
    slideClass: 'page', */
    direction: 'vertical',
    //loop: true,
    mousewheel: true,
    speed: 500,
    mousewheel: {
      forceToAxis: true,
      invert: true,
    },


    // 如果需要分页器
    pagination: {
      el: '.page_idx',
      bulletElement: 'li',
      clickable: true,
      bulletClass: 'bullet',
      bulletActiveClass: 'active',
    },
  });

  var $qr_icon = $('.qr_icon');
   
  $qr_icon.on('mouseenter', function () {
    $(this).find('img').fadeIn(500);
  });
  $qr_icon.on('mouseleave', function () {
    $(this).find('img').fadeOut();
  });



})();




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