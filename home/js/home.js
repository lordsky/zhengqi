
//根据hash更改nav li的样式
/*HASH*/

var $nav_list = $('#nav_list'),
  $nav_li = $nav_list.find('li');
var classInit;

var $line = $('.line');
var pos = 0;
var wid = 0;

var lineChange = function () {
  $active = $nav_list.find('.active');

  var position = $active.position().left + 40;
  var width = $active.width();
  if (position >= pos) {
    $line.animate({
      width: ((position - pos) + width)
    }, 300, function () {
      $line.animate({
        width: width,
        left: position
      }, 150);
    });
  } else {
    $line.animate({
      left: position,
      width: ((pos - position) + wid)
    }, 300, function () {
      $line.animate({
        width: width
      }, 150);
    });
  }

  pos = position;
  wid = width;

};

window.onhashchange = classInit = function () {

  function changeClass(index) {
    $nav_li.eq(index).addClass('active').siblings().removeClass('active');
    lineChange();
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

// main_kv鼠标跟随文字提示
var tip = {
  $: function (ele) {
    if (typeof (ele) == "object")
      return ele;
    else if (typeof (ele) == "string" || typeof (ele) == "number")
      return document.getElementById(ele.toString());
    return null;
  },
  mousePos: function (e) {
    var x, y;
    var e = e || window.event;
    return {
      x: e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
      y: e.clientY + document.body.scrollTop + document.documentElement.scrollTop
    };
  },
  start: function (obj) {
    var self = this;
    var t = self.$("mjs:tip");
    obj.onmousemove = function (e) {
      var mouse = self.mousePos(e);
      t.style.left = mouse.x + 20 + 'px';
      t.style.top = mouse.y + 0 + 'px';
      //t.innerHTML = obj.getAttribute("tips");
      t.style.display = '';
    };
    obj.onmouseout = function () {
      t.style.display = 'none';
    };
  }
}


// 显示二维码
var $qr_icon = $('.qr_icon');

$qr_icon.on('mouseenter', function () {
  $(this).find('img').fadeIn(500);
});
$qr_icon.on('mouseleave', function () {
  $(this).find('img').fadeOut();
});

