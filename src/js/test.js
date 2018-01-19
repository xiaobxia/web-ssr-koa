/**
 * Created by xiaobxia on 2018/1/18.
 */
var filterWrap = document.getElementById('filter-nav-wrap');


var menu = document.getElementById("menu");

var backdrop = document.getElementById("filter-backdrop");

var toggleAllMenu  = (function () {

})();



// backdrop.addEventListener('tap', toggleAllMenu);

var toggleRangeMenu = (function () {
  // range块
  var $rangeWrapper = $("#range-wrapper");
  // range的btn
  var $rangeBtn = $("#range-btn");
  var busying = false;
  return function () {
    if (busying) {
      return;
    }
    busying = true;
    if ($rangeWrapper.hasClass('active')) {
      $rangeBtn.removeClass('active');
      $('#filter-nav-wrap .filter-control-wrap').removeClass('active');
      $rangeWrapper.removeClass('active fade-out-up animated');
    } else {
      $rangeBtn.addClass('active');
      $('#filter-nav-wrap .filter-control-wrap').addClass('active');
      $rangeWrapper.addClass('active fade-out-up animated');
    }
    busying = false;
  }
})();

$('#range-btn').on('tap', toggleRangeMenu);
// rangeBtn.addEventListener('tap', toggleRangeMenu);





