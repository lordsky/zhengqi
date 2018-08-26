$(function () {
  var $news_img = $('.news_img'),
    $new_step_tit = $('.new_step_tit'),
    $new_step_box = $('.new_step_box'),
    $slider_box = $('.slider_box'),
    $sliderList = $slider_box.find('li'),
    $step_list = $('.new_step_list li');

  /* onscroll 事件 */
  var winTop,
    throttle;
  var count = 0,
    speed = 100;

  console.log(navigator.appVersion);
  if (/Trident/.test(navigator.appVersion)) {
    speed = 300;
  }


  function imgMove() {
    ++count;
    console.log(count);
    /* $news_img.css('transform', 'translateY(' + -winTop / 3 + 'px)'); */
    /*  $new_step_tit.css('transform', 'translateX(' + -winTop / 3 + 'px)');
     $new_step_box.css(
       'transform', 'translateX(' + winTop / 3 + 'px)'
     ); */

    clearInterval(throttle)
    throttle = null;
  }

  $(window).scroll(function () {
    //控制news_img中的元素移动
    winTop = $(window).scrollTop();
    //imgMove();
    if (winTop <= 300) {
      if (!throttle) {
        throttle = setInterval(function () {
          imgMove();
        }, speed);
      }
    };


    /*  $new_step_box[0].addEventListener('transitionend', function () {
       end = true;
       console.log(1);    
     })
     //console.dir($new_step_box[0].TransitionEnd); */

    //侧边栏导航
    if (winTop >= 1100) {
      $slider_box.fadeIn(500);
    } else {
      $slider_box.fadeOut(500);
    }

    if (winTop >= 1200 && winTop <= 1400) {
      _index = 0;
      if (_index === lastIndex) return;

      $sliderList.eq(_index).addClass('is_on');
      $sliderList.eq(lastIndex).removeClass('is_on');
      lastIndex = _index;
    }
    if (winTop > 2000 && winTop <= 2100) {
      _index = 1;
      if (_index === lastIndex) return;

      $sliderList.eq(_index).addClass('is_on');
      $sliderList.eq(lastIndex).removeClass('is_on');
      lastIndex = _index;
    }
    if (winTop > 2800 && winTop <= 3100) {
      _index = 2;
      if (_index === lastIndex) return;

      $sliderList.eq(_index).addClass('is_on');
      $sliderList.eq(lastIndex).removeClass('is_on');
      lastIndex = _index;
    }
    if (winTop >= 3550) {
      _index = 3;
      if (_index === lastIndex) return;

      $sliderList.eq(_index).addClass('is_on');
      $sliderList.eq(lastIndex).removeClass('is_on');
      lastIndex = _index;
    }

  });


  var _index,
    lastIndex = 0,
    isScroll = false,
    posArr = [1210, 2010, 2810, 3550];

  var handleScroll = function () {
    _index = $(this).index();
    if (isScroll) return;
    isScroll = true;

    $('html').animate({
      scrollTop: posArr[_index]
    }, 300, function () {
      /* $sliderList.eq(_index).addClass('is_on');
      $sliderList.eq(lastIndex).removeClass('is_on');
      lastIndex = _index; */
      isScroll = false;
    });
  };

  $step_list.on('click', handleScroll);

  $sliderList.on('click', handleScroll);

  $('.btn_top').on('click',function () {
    $('html').animate({
      scrollTop:0
    },500)
  })

});

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