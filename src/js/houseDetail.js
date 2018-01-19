/**
 * Created by xiaobxia on 2017/12/20.
 */
(function () {
  var bLazy = new Blazy({
  });
  // mui('body').on('resize', resizeFn);
  console.log(window.adaptive);
  var baseFontSize = window.adaptive.baseFontSize;
  var windowZoom = window.adaptive.winWidth / 375,
    mapZoom = windowZoom * 17,
    map = new BMap.Map("house-baidu-map"),
    point = new BMap.Point(b_map_x, b_map_y),
    iconInfo = {
      path: mapLabel,
      width: 260,
      height: 132,
      textHeight: 88
    };

  map.disableDragging();
  map.disableScrollWheelZoom();
  map.disablePinchToZoom();
  var trueIconWidth = iconInfo.width;
  var trueIconHeight = iconInfo.height;
  var adaptiveIconWidth = trueIconWidth * window.adaptive.fontSize / baseFontSize;
  var adaptiveIconHeight = trueIconHeight * window.adaptive.fontSize / baseFontSize;

  //设置背景部分
  var iconSize = new BMap.Size(adaptiveIconWidth, adaptiveIconHeight);
  var myIcon = new BMap.Icon(iconInfo.path, iconSize);
  myIcon.setImageSize(new BMap.Size(adaptiveIconWidth, adaptiveIconHeight));
  var marker = new BMap.Marker(point, { icon: myIcon }); // 创建标注
  //设置文字部分
  var opts = {
    position: point, // 指定文本标注所在的地理位置
    offset: new BMap.Size(-adaptiveIconWidth / 2, -adaptiveIconHeight / 2) //设置文本偏移量
  };
  var labelWrapStyle = "width: " + (trueIconWidth / baseFontSize + 'rem') + ";height: " + (iconInfo.textHeight / baseFontSize + 'rem') + ";line-height:" + (iconInfo.textHeight / baseFontSize + 'rem') +  ";font-size: "+(32/baseFontSize)+"rem;"+"text-align: center;color: #555";
  var labelText = `${disrictName},${streetName}`;
  var labelTemplate = "<div class=\"point-label\" style=\"" + labelWrapStyle + "\">" + labelText + "</div>";
  var label = new BMap.Label(labelTemplate, opts); // 创建文本标注对象
  label.setStyle({
    border: 'none'
  });
  map.addOverlay(marker);
  map.addOverlay(label);
  map.setCurrentCity("杭州");
  map.disableDragging(); //禁止拖拽
  map.centerAndZoom(point, mapZoom); // 初始化地图,设置中心点坐标和地图级别
})();
//图片滚动
mui.init({
  swipeBack: true //启用右滑关闭功能
});
var slider = mui("#slider");
document.querySelector("#slider").addEventListener('slide', function (event) {
  document.querySelector('#slider-number-index').innerHTML = event.detail.slideNumber + 1;
}, false);
//图片放大
mui.previewImage();

mui('.mui-scroll-wrapper').scroll({
  scrollY: false, //是否竖向滚动
  scrollX: true, //是否横向滚动
  startX: 0, //初始化时滚动至x
  startY: 0, //初始化时滚动至y
  indicators: false, //是否显示滚动条
  deceleration: 0.001, //阻尼系数,系数越小滑动越灵敏
  bounce: true //是否启用回弹
});

var $likeBtn = $('#like-btn');
var $likeIcon = $('#like-icon');

$likeBtn.on('tap', function () {
  mui.ajax('/user/attention', {
    data: {
      businessNum,
      businessType: businessTypeRaw === '1' ? '二手房' : '租房',
      userId,
      sysType: '1',
      attentionState: attentionState === '0' ? '1' : '0'
    },
    dataType: 'json',//服务器返回json格式数据
    type: 'get',//HTTP请求类型
    success: function (data) {
      console.log(data);
      if (data.success === true) {
        if (attentionState === '0') {
          attentionState = '1';
          $likeIcon.addClass('active');
        } else if (attentionState === '1') {
          attentionState = '0';
          $likeIcon.removeClass('active');
        }
      }
    }
  });
});

mui('body').on('tap','a',function(){
  if (hasClass(this, 'link-a')) {
    document.location.href=this.href;
  }
});

mui('body').on('tap','.mui-fullscreen img',function(){
  window.WebViewJavascriptBridge.callHandler(
    'functionInAndroid'
    , {'param': this.src}
    , function(responseData) {
      alert('"send get responseData from java, data = "' + responseData)
    }
  );
  console.log(this.src)
});

// 192.168.2.237:4000/house/houseDetail?houseId=2&userType=customer&houseType=2&userId=kpgnpdqqfl
function connectWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    callback(WebViewJavascriptBridge)
  } else {
    document.addEventListener(
      'WebViewJavascriptBridgeReady'
      , function() {
        callback(WebViewJavascriptBridge)
      },
      false
    );
  }
}

connectWebViewJavascriptBridge(function(bridge) {
  bridge.init(function(message, responseCallback) {
    // console.log('JS got a message', message);
    // var data = {
    //   'Javascript Responds': '测试中文!'
    // };
    // console.log('JS responding with', data);
    // responseCallback(data);
  });

  bridge.registerHandler("functionInJs", function(data, responseCallback) {
    console.log("data from Java: = " + data)
    var responseData = "Javascript Says Right back aka!";
    responseCallback(responseData);
  });
})



