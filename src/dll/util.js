/**
 * Created by xiaobxia on 2017/12/26.
 */
function changeTitle(title) {
  var body = document.getElementsByTagName('body')[0];
  document.title = title;
  var iframe = document.createElement("iframe");
  iframe.setAttribute("src", "/favicon.ico");

  iframe.addEventListener('load', function () {
    setTimeout(function () {
      iframe.removeEventListener('load');
      document.body.removeChild(iframe);
    }, 0);
  });
  document.body.appendChild(iframe);
}

function setAdaptive() {
  var _baseFontSize = 20;
  //和width有关
  var winWidth = 0;
  if (window.innerWidth) {
    winWidth = window.innerWidth;
  } else if ((document.body) && (document.body.clientWidth)) {
    winWidth = document.body.clientWidth;
  }
  //通过深入Document内部对body进行检测，获取窗口大小
  if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
    winWidth = document.documentElement.clientWidth;
  }
  var _fontscale = winWidth / 375;
  var ua = navigator.userAgent;
  var matches = ua.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i);
  var UCversion = ua.match(/U3\/((\d+|\.){5,})/i);
  var isUCHd = UCversion && parseInt(UCversion[1].split('.').join(''), 10) >= 80;
  var isIos = navigator.appVersion.match(/(iphone|ipad|ipod)/gi);
  var dpr = parseInt((window.devicePixelRatio || 1), 10);
  if (!isIos && !(matches && matches[1] > 534) && !isUCHd) {
    // 如果非iOS, 非Android4.3以上, 非UC内核, 就不执行高清, dpr设为1;
    dpr = 1;
  }
  var scale = 1 / dpr;
  var metaEl = document.querySelector('meta[name="viewport"]');
  if (!metaEl) {
    metaEl = document.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    document.head.appendChild(metaEl);
  }
  metaEl.setAttribute('content', 'width=device-width,user-scalable=no,initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale);
  document.documentElement.style.fontSize = (_baseFontSize / 2 * dpr * _fontscale) + 'px';
  document.documentElement.setAttribute('data-dpr', dpr);
  window.adaptive = {
    winWidth: winWidth,
    dpr: dpr,
    fontSize: _baseFontSize / 2 * dpr * _fontscale,
    baseFontSize: _baseFontSize
  };
}

function load(url) {
  var iFrame;
  iFrame = document.createElement("iframe");
  iFrame.setAttribute("src", url);
  iFrame.setAttribute("style", "display:none;");
  iFrame.setAttribute("height", "0px");
  iFrame.setAttribute("width", "0px");
  iFrame.setAttribute("frameborder", "0");
  document.body.appendChild(iFrame);
  iFrame.parentNode.removeChild(iFrame);
  iFrame = null;
}

function hasClass(el, cls) {
  //如果产生不对就返回
  if (!el || !cls) return false;
  //如果输入问空格
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  //["aa", "bb", value: "aa bb"]
  if (el.classList) {
    //判断是否在
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}
