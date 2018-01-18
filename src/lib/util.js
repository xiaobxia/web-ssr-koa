function changeTitle(e){document.getElementsByTagName("body")[0];document.title=e;var t=document.createElement("iframe");t.setAttribute("src","/favicon.ico"),t.addEventListener("load",function(){setTimeout(function(){t.removeEventListener("load"),document.body.removeChild(t)},0)}),document.body.appendChild(t)}function setAdaptive(){var e=0;window.innerWidth?e=window.innerWidth:document.body&&document.body.clientWidth&&(e=document.body.clientWidth),document.documentElement&&document.documentElement.clientHeight&&document.documentElement.clientWidth&&(e=document.documentElement.clientWidth);var t=e/375,o=navigator.userAgent,i=o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),n=o.match(/U3\/((\d+|\.){5,})/i),s=n&&parseInt(n[1].split(".").join(""),10)>=80,r=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),a=parseInt(window.devicePixelRatio||1,10);r||i&&i[1]>534||s||(a=1);var l=1/a,c=document.querySelector('meta[name="viewport"]');c||((c=document.createElement("meta")).setAttribute("name","viewport"),document.head.appendChild(c)),c.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+l+",maximum-scale="+l+",minimum-scale="+l),document.documentElement.style.fontSize=10*a*t+"px",document.documentElement.setAttribute("data-dpr",a),window.adaptive={winWidth:e,dpr:a,fontSize:10*a*t,baseFontSize:20}}function load(e){var t;(t=document.createElement("iframe")).setAttribute("src",e),t.setAttribute("style","display:none;"),t.setAttribute("height","0px"),t.setAttribute("width","0px"),t.setAttribute("frameborder","0"),document.body.appendChild(t),t.parentNode.removeChild(t),t=null}function hasClass(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}function addClass(e,t){if(e){for(var o=e.className,i=(t||"").split(" "),n=0,s=i.length;n<s;n++){var r=i[n];r&&(e.classList?e.classList.add(r):hasClass(e,r)||(o+=" "+r))}e.classList||(e.className=o)}}function removeClass(e,t){if(e&&t){for(var o=t.split(" "),i=" "+e.className+" ",n=0,s=o.length;n<s;n++){var r=o[n];r&&(e.classList?e.classList.remove(r):hasClass(e,r)&&(i=i.replace(" "+r+" "," ")))}e.classList||(e.className=trim(i))}}function $(e,t){return(t||document).getElementById(e)}function $$(e,t){return(t||document).getElementsByTagName(e)}function $$$(e,t){return(t||document).getElementsByClassName(e)}!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.Blazy=t()}(this,function(){"use strict";var e,t,o,i,n="src",s="srcset";return function(n){if(!document.querySelectorAll){var s=document.createStyleSheet();document.querySelectorAll=function(e,t,o,i,n){for(n=document.all,t=[],o=(e=e.replace(/\[for\b/gi,"[htmlFor").split(",")).length;o--;){for(s.addRule(e[o],"k:v"),i=n.length;i--;)n[i].currentStyle.k&&t.push(n[i]);s.removeRule(0)}return t}}var l=this,c=l._util={};c.elements=[],c.destroyed=!0,l.options=n||{},l.options.error=l.options.error||!1,l.options.offset=l.options.offset||100,l.options.root=l.options.root||document,l.options.success=l.options.success||!1,l.options.selector=l.options.selector||".b-lazy",l.options.separator=l.options.separator||"|",l.options.containerClass=l.options.container,l.options.container=!!l.options.containerClass&&document.querySelectorAll(l.options.containerClass),l.options.errorClass=l.options.errorClass||"b-error",l.options.breakpoints=l.options.breakpoints||!1,l.options.loadInvisible=l.options.loadInvisible||!1,l.options.successClass=l.options.successClass||"b-loaded",l.options.validateDelay=l.options.validateDelay||25,l.options.saveViewportOffsetDelay=l.options.saveViewportOffsetDelay||50,l.options.srcset=l.options.srcset||"data-srcset",l.options.src=e=l.options.src||"data-src",i=Element.prototype.closest,o=window.devicePixelRatio>1,(t={}).top=0-l.options.offset,t.left=0-l.options.offset,l.revalidate=function(){r(l)},l.load=function(e,t){var o=this.options;e&&void 0===e.length?d(e,t,o):x(e,function(e){d(e,t,o)})},l.destroy=function(){var e=l._util;l.options.container&&x(l.options.container,function(t){b(t,"scroll",e.validateT)}),b(window,"scroll",e.validateT),b(window,"resize",e.validateT),b(window,"resize",e.saveViewportOffsetT),e.count=0,e.elements.length=0,e.destroyed=!0},c.validateT=z(function(){a(l)},l.options.validateDelay,l),c.saveViewportOffsetT=z(function(){h(l.options.offset)},l.options.saveViewportOffsetDelay,l),h(l.options.offset),x(l.options.breakpoints,function(t){if(t.width>=window.screen.width)return e=t.src,!1}),setTimeout(function(){r(l)})};function r(e){var t=e._util;t.elements=function(e){for(var t=[],o=e.root.querySelectorAll(e.selector),i=o.length;i--;t.unshift(o[i]));return t}(e.options),t.count=t.elements.length,t.destroyed&&(t.destroyed=!1,e.options.container&&x(e.options.container,function(e){E(e,"scroll",t.validateT)}),E(window,"resize",t.saveViewportOffsetT),E(window,"resize",t.validateT),E(window,"scroll",t.validateT)),a(e)}function a(e){for(var t=e._util,o=0;o<t.count;o++){var i=t.elements[o];(l(i,e.options)||y(i,e.options.successClass))&&(e.load(i),t.elements.splice(o,1),t.count--,o--)}0===t.count&&e.destroy()}function l(e,o){var n=e.getBoundingClientRect();if(o.container&&i){var s=e.closest(o.containerClass);if(s){var r=s.getBoundingClientRect();if(c(r,t)){var a=r.top-o.offset,l=r.right+o.offset,d=r.bottom+o.offset,u=r.left-o.offset;return c(n,{top:a>t.top?a:t.top,right:l<t.right?l:t.right,bottom:d<t.bottom?d:t.bottom,left:u>t.left?u:t.left})}return!1}}return c(n,t)}function c(e,t){return e.right>=t.left&&e.bottom>=t.top&&e.left<=t.right&&e.top<=t.bottom}function d(t,i,r){if(!y(t,r.successClass)&&(i||r.loadInvisible||t.offsetWidth>0&&t.offsetHeight>0)){var a=v(t,e)||v(t,r.src);if(a){var l=a.split(r.separator),c=l[o&&l.length>1?1:0],d=v(t,r.srcset),h=w(t,"img"),p=t.parentNode,g=p&&w(p,"picture");if(h||void 0===t.src){var z=new Image,S=function(){r.error&&r.error(t,"invalid"),T(t,r.errorClass),b(z,"error",S),b(z,"load",_)},_=function(){h?g||f(t,c,d):t.style.backgroundImage='url("'+c+'")',u(t,r),b(z,"load",_),b(z,"error",S)};g&&(z=t,x(p.getElementsByTagName("source"),function(e){m(e,s,r.srcset)})),E(z,"error",S),E(z,"load",_),f(z,c,d)}else t.src=c,u(t,r)}else w(t,"video")?(x(t.getElementsByTagName("source"),function(e){m(e,n,r.src)}),t.load(),u(t,r)):(r.error&&r.error(t,"missing"),T(t,r.errorClass))}}function u(e,t){T(e,t.successClass),t.success&&t.success(e),g(e,t.src),g(e,t.srcset),x(t.breakpoints,function(t){g(e,t.src)})}function m(e,t,o){var i=v(e,o);i&&(p(e,t,i),g(e,o))}function f(e,t,o){o&&p(e,s,o),e.src=t}function h(e){t.bottom=(window.innerHeight||document.documentElement.clientHeight)+e,t.right=(window.innerWidth||document.documentElement.clientWidth)+e}function p(e,t,o){e.setAttribute(t,o)}function v(e,t){return e.getAttribute(t)}function g(e,t){e.removeAttribute(t)}function w(e,t){return e.nodeName.toLowerCase()===t}function y(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")}function T(e,t){y(e,t)||(e.className+=" "+t)}function E(e,t,o){e.attachEvent?e.attachEvent&&e.attachEvent("on"+t,o):e.addEventListener(t,o,{capture:!1,passive:!0})}function b(e,t,o){e.detachEvent?e.detachEvent&&e.detachEvent("on"+t,o):e.removeEventListener(t,o,{capture:!1,passive:!0})}function x(e,t){if(e&&t)for(var o=e.length,i=0;i<o&&!1!==t(e[i],i);i++);}function z(e,t,o){var i=0;return function(){var n=+new Date;n-i<t||(i=n,e.apply(o,arguments))}}}),function(e,t){var o="__DEFAULT",i=document.createElement("div"),n=function(t){this.options=e.extend(!0,{id:"__MUI_PREVIEWIMAGE",zoom:!0,header:'<span class="mui-preview-indicator"></span>',footer:""},t||{}),this.init(),this.initEvent()},s=n.prototype;s.init=function(){var t=this.options,o=document.getElementById(this.options.id);o||(i.innerHTML='<div id="{{id}}" class="mui-slider mui-preview-image mui-fullscreen"><div class="mui-preview-header">{{header}}</div><div class="mui-slider-group"></div><div class="mui-preview-footer mui-hidden">{{footer}}</div><div class="mui-preview-loading"><span class="mui-spinner mui-spinner-white"></span></div></div>'.replace(/\{\{id\}\}/g,this.options.id).replace("{{header}}",t.header).replace("{{footer}}",t.footer),document.body.appendChild(i.firstElementChild),o=document.getElementById(this.options.id)),this.element=o,this.scroller=this.element.querySelector(e.classSelector(".slider-group")),this.indicator=this.element.querySelector(e.classSelector(".preview-indicator")),this.loader=this.element.querySelector(e.classSelector(".preview-loading")),t.footer&&this.element.querySelector(e.classSelector(".preview-footer")).classList.remove(e.className("hidden")),this.addImages()},s.initEvent=function(){var t=this;e(document.body).on("tap","img[data-preview-src]",function(){return t.open(this),!1});var o=null,i=function(){!o&&(o=e.later(function(){t.loader.removeEventListener("tap",i),t.scroller.removeEventListener("tap",i),t.close()},300))};this.scroller.addEventListener("doubletap",function(){o&&(o.cancel(),o=null)}),this.element.addEventListener("webkitAnimationEnd",function(){t.element.classList.contains(e.className("preview-out"))?(t.element.style.display="none",t.element.classList.remove(e.className("preview-out")),t.element.classList.remove(e.className("preview-in")),o=null):(t.loader.addEventListener("tap",i),t.scroller.addEventListener("tap",i))}),this.element.addEventListener("slide",function(o){if(t.options.zoom){var i=t.element.querySelector(".mui-zoom-wrapper:nth-child("+(t.lastIndex+1)+")");i&&e(i).zoom().setZoom(1)}var n=o.detail.slideNumber;t.lastIndex=n,t.indicator&&(t.indicator.innerText=n+1+"/"+t.currentGroup.length),t._loadItem(n)})},s.addImages=function(e,t){this.groups={};var i=[];if((i=e?e===o?document.querySelectorAll("img[data-preview-src]:not([data-preview-group])"):document.querySelectorAll("img[data-preview-src][data-preview-group='"+e+"']"):document.querySelectorAll("img[data-preview-src]")).length)for(var n=0,s=i.length;n<s;n++)this.addImage(i[n])},s.addImage=function(e){var t=e.getAttribute("data-preview-group");t=t||o,this.groups[t]||(this.groups[t]=[]);var i=e.getAttribute("src");if(e.__mui_img_data&&e.__mui_img_data.src===i)this.groups[t].push(e.__mui_img_data);else{var n=e.getAttribute("data-preview-src");n||(n=i);var s={src:i,lazyload:i===n?"":n,loaded:i===n,sWidth:0,sHeight:0,sTop:0,sLeft:0,sScale:1,el:e};this.groups[t].push(s),e.__mui_img_data=s}},s.empty=function(){this.scroller.innerHTML=""},s._initImgData=function(o,i){if(!o.sWidth){var n=o.el;o.sWidth=n.offsetWidth,o.sHeight=n.offsetHeight;var s=e.offset(n);o.sTop=s.top,o.sLeft=s.left,o.sScale=Math.max(o.sWidth/t.innerWidth,o.sHeight/t.innerHeight)}i.style.webkitTransform="translate3d(0,0,0) scale("+o.sScale+")"},s._getScale=function(e,t){var o=e.width/t.width,i=e.height/t.height;return o<=i?e.height/(t.height*o):e.width/(t.width*i)},s._imgTransitionEnd=function(t){var o=t.target;o.classList.remove(e.className("transitioning")),o.removeEventListener("webkitTransitionEnd",this._imgTransitionEnd.bind(this))},s._loadItem=function(t,o){var i=this.scroller.querySelector(e.classSelector(".slider-item:nth-child("+(t+1)+")")),n=this.currentGroup[t],s=i.querySelector("img");if(this._initImgData(n,s),o){var r=this._getPosition(n);s.style.webkitTransitionDuration="0ms",s.style.webkitTransform="translate3d("+r.x+"px,"+r.y+"px,0) scale("+n.sScale+")",s.offsetHeight}if(!n.loaded&&s.getAttribute("data-preview-lazyload")){var a=this;a.loader.classList.add(e.className("active")),s.style.webkitTransitionDuration="0.5s",s.addEventListener("webkitTransitionEnd",a._imgTransitionEnd.bind(a)),s.style.webkitTransform="translate3d(0,0,0) scale("+n.sScale+")",this.loadImage(s,function(){n.loaded=!0,s.src=n.lazyload,a._initZoom(i,this.width,this.height),s.classList.add(e.className("transitioning")),s.addEventListener("webkitTransitionEnd",a._imgTransitionEnd.bind(a)),s.setAttribute("style",""),s.offsetHeight,a.loader.classList.remove(e.className("active"))})}else n.lazyload&&(s.src=n.lazyload),this._initZoom(i,s.width,s.height),s.classList.add(e.className("transitioning")),s.addEventListener("webkitTransitionEnd",this._imgTransitionEnd.bind(this)),s.setAttribute("style",""),s.offsetHeight;this._preloadItem(t+1),this._preloadItem(t-1)},s._preloadItem=function(t){var o=this.scroller.querySelector(e.classSelector(".slider-item:nth-child("+(t+1)+")"));if(o){var i=this.currentGroup[t];if(!i.sWidth){var n=o.querySelector("img");this._initImgData(i,n)}}},s._initZoom=function(t,o,i){if(this.options.zoom&&!t.getAttribute("data-zoomer"))if("IMG"===t.querySelector(e.classSelector(".zoom")).tagName){var n=this._getScale({width:t.offsetWidth,height:t.offsetHeight},{width:o,height:i});e(t).zoom({maxZoom:Math.max(n,1)})}else e(t).zoom()},s.loadImage=function(e,t){var o=function(){t&&t.call(this)},i=new Image;i.onload=o,i.onerror=o,i.src=e.getAttribute("data-preview-lazyload")},s.getRangeByIndex=function(e,t){return{from:0,to:t-1}},s._getPosition=function(e){var o=e.sLeft-t.pageXOffset,i=e.sTop-t.pageYOffset;return{left:o,top:i,x:o-(t.innerWidth-e.sWidth)/2,y:i-(t.innerHeight-e.sHeight)/2}},s.refresh=function(o,i){this.currentGroup=i;for(var n=i.length,s=[],r=this.getRangeByIndex(o,n),a=r.from,l=r.to+1,c=o,d="",u="",m=(t.innerWidth,t.innerHeight,0);a<l;a++,m++){var f=i[a],h="";f.sWidth&&(h="-webkit-transform:translate3d(0,0,0) scale("+f.sScale+");transform:translate3d(0,0,0) scale("+f.sScale+")"),u='<div class="mui-slider-item mui-zoom-wrapper {{className}}"><div class="mui-zoom-scroller"><img src="{{src}}" data-preview-lazyload="{{lazyload}}" style="{{style}}" class="mui-zoom"></div></div>'.replace("{{src}}",f.src).replace("{{lazyload}}",f.lazyload).replace("{{style}}",h),a===o?(c=m,d=e.className("active")):d="",s.push(u.replace("{{className}}",d))}this.scroller.innerHTML=s.join(""),this.element.style.display="block",this.element.classList.add(e.className("preview-in")),this.lastIndex=c,this.element.offsetHeight,e(this.element).slider().gotoItem(c,0),this.indicator&&(this.indicator.innerText=c+1+"/"+this.currentGroup.length),this._loadItem(c,!0)},s.openByGroup=function(e,t){e=Math.min(Math.max(0,e),this.groups[t].length-1),this.refresh(e,this.groups[t])},s.open=function(e,t){this.isShown()||("number"==typeof e?(t=t||o,this.addImages(t,e),this.openByGroup(e,t)):(t=(t=e.getAttribute("data-preview-group"))||o,this.addImages(t,e),this.openByGroup(this.groups[t].indexOf(e.__mui_img_data),t)))},s.close=function(o,i){if(this.isShown()){this.element.classList.remove(e.className("preview-in")),this.element.classList.add(e.className("preview-out"));var n=this.scroller.querySelector(e.classSelector(".slider-item:nth-child("+(this.lastIndex+1)+")")).querySelector("img");if(n){n.classList.add(e.className("transitioning"));var s=this.currentGroup[this.lastIndex],r=this._getPosition(s),a=r.left,l=r.top;l>t.innerHeight||a>t.innerWidth||l<0||a<0?(n.style.opacity=0,n.style.webkitTransitionDuration="0.5s",n.style.webkitTransform="scale("+s.sScale+")"):(this.options.zoom&&e(n.parentNode.parentNode).zoom().toggleZoom(0),n.style.webkitTransitionDuration="0.5s",n.style.webkitTransform="translate3d("+r.x+"px,"+r.y+"px,0) scale("+s.sScale+")")}for(var c=this.element.querySelectorAll(e.classSelector(".zoom-wrapper")),d=0,u=c.length;d<u;d++)e(c[d]).zoom().destroy();e(this.element).slider().destroy()}},s.isShown=function(){return this.element.classList.contains(e.className("preview-in"))};var r=null;e.previewImage=function(e){return r||(r=new n(e)),r},e.getPreviewImage=function(){return r}}(mui,window),function(e,t){var o="."+e.className("zoom"),i="."+e.className("zoom-scroller"),n="pinchstart",s="pinch",r="pinchend";"ongesturestart"in t&&(n="gesturestart",s="gesturechange",r="gestureend"),e.Zoom=function(t,a){var l=this;l.options=e.extend(e.Zoom.defaults,a),l.wrapper=l.element=t,l.scroller=t.querySelector(i),l.scrollerStyle=l.scroller&&l.scroller.style,l.zoomer=t.querySelector(o),l.zoomerStyle=l.zoomer&&l.zoomer.style,l.init=function(){e.options.gestureConfig.pinch=!0,e.options.gestureConfig.doubletap=!0,l.initEvents()},l.initEvents=function(t){var o=t?"removeEventListener":"addEventListener",i=l.scroller;i[o](n,l.onPinchstart),i[o](s,l.onPinch),i[o](r,l.onPinchend),i[o](e.EVENT_START,l.onTouchstart),i[o](e.EVENT_MOVE,l.onTouchMove),i[o](e.EVENT_CANCEL,l.onTouchEnd),i[o](e.EVENT_END,l.onTouchEnd),i[o]("drag",l.dragEvent),i[o]("doubletap",l.doubleTapEvent)},l.dragEvent=function(e){(v||m)&&e.stopPropagation()},l.doubleTapEvent=function(e){l.toggleZoom(e.detail.center)},l.transition=function(e,t){return t=t||0,e.webkitTransitionDuration=t+"ms",l},l.translate=function(e,t,o){return t=t||0,o=o||0,e.webkitTransform="translate3d("+t+"px,"+o+"px,0px)",l},l.scale=function(e,t){return t=t||1,e.webkitTransform="translate3d(0,0,0) scale("+t+")",l},l.scrollerTransition=function(e){return l.transition(l.scrollerStyle,e)},l.scrollerTransform=function(e,t){return l.translate(l.scrollerStyle,e,t)},l.zoomerTransition=function(e){return l.transition(l.zoomerStyle,e)},l.zoomerTransform=function(e){return l.scale(l.zoomerStyle,e)};var c=1,d=1,u=!1,m=!1;l.onPinchstart=function(e){m=!0},l.onPinch=function(e){u||(l.zoomerTransition(0),u=!0),(c=(e.detail?e.detail.scale:e.scale)*d)>l.options.maxZoom&&(c=l.options.maxZoom-1+Math.pow(c-l.options.maxZoom+1,.5)),c<l.options.minZoom&&(c=l.options.minZoom+1-Math.pow(l.options.minZoom-c+1,.5)),l.zoomerTransform(c)},l.onPinchend=function(e){c=Math.max(Math.min(c,l.options.maxZoom),l.options.minZoom),l.zoomerTransition(l.options.speed).zoomerTransform(c),d=c,u=!1},l.setZoom=function(e){c=d=e,l.scrollerTransition(l.options.speed).scrollerTransform(0,0),l.zoomerTransition(l.options.speed).zoomerTransform(c)},l.toggleZoom=function(t,o){if("number"==typeof t&&(o=t,t=void 0),o=void 0===o?l.options.speed:o,c&&1!==c)c=d=1,l.scrollerTransition(o).scrollerTransform(0,0);else if(c=d=l.options.maxZoom,t){var i=e.offset(l.zoomer),n=i.top,s=i.left,r=(t.x-s)*c,a=(t.y-n)*c;this._cal(),r>=E&&r<=E+f?r=E-r+f/2:r<E?r=E-r+f/2:r>E+f&&(r=E+f-r-f/2),a>=b&&a<=b+h?a=b-a+h/2:a<b?a=b-a+h/2:a>b+h&&(a=b+h-a-h/2),r=Math.min(Math.max(r,y),E),a=Math.min(Math.max(a,T),b),l.scrollerTransition(o).scrollerTransform(r,a)}else l.scrollerTransition(o).scrollerTransform(0,0);l.zoomerTransition(o).zoomerTransform(c)},l._cal=function(){f=l.wrapper.offsetWidth,h=l.wrapper.offsetHeight,x=l.zoomer.offsetWidth,z=l.zoomer.offsetHeight;var e=x*c,t=z*c;y=Math.min(f/2-e/2,0),E=-y,T=Math.min(h/2-t/2,0),b=-T};var f,h,p,v,g,w,y,T,E,b,x,z,S,_,L,N,M,A,I,C={},W={};return l.onTouchstart=function(t){p=!0,C.x=t.type===e.EVENT_START?t.targetTouches[0].pageX:t.pageX,C.y=t.type===e.EVENT_START?t.targetTouches[0].pageY:t.pageY},l.onTouchMove=function(t){if(t.preventDefault(),p){if(!v){f=l.wrapper.offsetWidth,h=l.wrapper.offsetHeight,x=l.zoomer.offsetWidth,z=l.zoomer.offsetHeight;var o=e.parseTranslateMatrix(e.getStyles(l.scroller,"webkitTransform"));S=o.x||0,_=o.y||0,l.scrollerTransition(0)}var i=x*c,n=z*c;i<f&&n<h||(y=Math.min(f/2-i/2,0),E=-y,T=Math.min(h/2-n/2,0),b=-T,W.x=t.type===e.EVENT_MOVE?t.targetTouches[0].pageX:t.pageX,W.y=t.type===e.EVENT_MOVE?t.targetTouches[0].pageY:t.pageY,v||u||!(Math.floor(y)===Math.floor(S)&&W.x<C.x||Math.floor(E)===Math.floor(S)&&W.x>C.x)?(v=!0,g=W.x-C.x+S,w=W.y-C.y+_,g<y&&(g=y+1-Math.pow(y-g+1,.8)),g>E&&(g=E-1+Math.pow(g-E+1,.8)),w<T&&(w=T+1-Math.pow(T-w+1,.8)),w>b&&(w=b-1+Math.pow(w-b+1,.8)),L||(L=W.x),A||(A=W.y),N||(N=e.now()),M=(W.x-L)/(e.now()-N)/2,I=(W.y-A)/(e.now()-N)/2,Math.abs(W.x-L)<2&&(M=0),Math.abs(W.y-A)<2&&(I=0),L=W.x,A=W.y,N=e.now(),l.scrollerTransform(g,w)):p=!1)}},l.onTouchEnd=function(e){if(e.touches.length||(m=!1),!p||!v)return p=!1,void(v=!1);p=!1,v=!1;var t=300,o=300,i=g+M*t,n=w+I*o;0!==M&&(t=Math.abs((i-g)/M)),0!==I&&(o=Math.abs((n-w)/I));var s=Math.max(t,o);g=i,w=n;var r=x*c,a=z*c;y=Math.min(f/2-r/2,0),E=-y,T=Math.min(h/2-a/2,0),b=-T,g=Math.max(Math.min(g,E),y),w=Math.max(Math.min(w,b),T),l.scrollerTransition(s).scrollerTransform(g,w)},l.destroy=function(){l.initEvents(!0),delete e.data[l.wrapper.getAttribute("data-zoomer")],l.wrapper.setAttribute("data-zoomer","")},l.init(),l},e.Zoom.defaults={speed:300,maxZoom:3,minZoom:1},e.fn.zoom=function(t){var o=[];return this.each(function(){var i=null,n=this.getAttribute("data-zoomer");n?i=e.data[n]:(n=++e.uuid,e.data[n]=i=new e.Zoom(this,t),this.setAttribute("data-zoomer",n)),o.push(i)}),1===o.length?o[0]:o}}(mui,window);var on=document.addEventListener?function(e,t,o){e&&t&&o&&e.addEventListener(t,o,!1)}:function(e,t,o){e&&t&&o&&e.attachEvent("on"+t,o)},off=document.removeEventListener?function(e,t,o){e&&t&&e.removeEventListener(t,o,!1)}:function(e,t,o){e&&t&&e.detachEvent("on"+t,o)},once=function(e,t,o){var i=function(){o&&o.apply(this,arguments),off(e,t,i)};on(e,t,i)};