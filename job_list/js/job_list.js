(function () {
  var $job_list = $('#job_list'),
    $job_detail_t = $job_list.find('.job_detail_t'),
    $job_detail_d = $job_list.find('.job_detail_d');

  var _index;
  $job_detail_t.on('click', function () {
    _index = $job_detail_t.index($(this));
    $job_detail_t.each(function (index, ele) {
      index === _index ? ($(ele).find('i').addClass('job_show'), $(ele).next().show()) : ($(ele).find('i').removeClass('job_show'), $(ele).next().hide()); 
    });
  })


})();