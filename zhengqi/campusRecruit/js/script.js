 var $nav_list = $('#nav_list');
  var $active = $nav_list.find('.active');
  var $line = $('.line');  
  
  if ($active.length) {
    pos = $active.position().left + 40;
    wid = $active.find('a').width();

    $line.css({
      left: pos,
      width: wid
    });
  }
  
//判断鼠标滚动方向
/* $(document).on('mousewheel DOMMouseScroll', onMouseScroll);

function onMouseScroll(e) {
  //e.preventDefault();
  var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
  var delta = Math.max(-1, Math.min(1, wheel));
  if (delta < 0) { //向下滚动
    console.log('向下滚动');
  } else { //向上滚动
    console.log('向上滚动');
  }
} */