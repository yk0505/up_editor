!function($,t){function a(t){var a=$("#left p").eq(t);t>0&&(d++,d>2&&(p=!0),p||(n+=100)),t>2&&(c=126,3===t&&(n=0,c=126),4===t&&(n=100,c=126));var e=document.createElement("div");e.style.position="fixed",e.style.width="100px",e.style.height="90px",e.style.left=n+"px",e.style.top=26+c+12+"px",e.style.zIndex=100001,e.className="dragDiv",e.dataset.nm=s[t].name,a.append(e),a.find(".dragDiv").myDrag({parent:"body",direction:"all",dragStart:function(a,e,i,o){u=!0,$(i).html(h[t]),$(i).css("opacity",.5)},dragEnd:function(t,a,e,l){setTimeout(function(){r&&"function"==typeof i[l]&&i[l](o)},100)}})}function e(t){var a=t;if(/image\/\w+/.test(a.type)){if(window.FileReader){var e=new FileReader;e.onloadend=function(t){$("#deviceBox").css({"background-image":"url("+t.target.result+")","background-repeat":"no-repeat","background-size":"100% 100%"}),l[0].style["#makedir"]["background-image"]="url('../image/bg.png')",l[0].src=t.target.result},e.readAsDataURL(a)}}else alert("请确保文件为图像类型")}window.UP.W.Ui;t.W=t.W||{},t.W.Main=t.W.Main||{};var i,o=t.W.Main,l=window.UP.Editor.page;require(["moduleFuc"],function(t){i=t}),o.layObj={},o.domId=o.domId||0,o.domNum=o.domNum||0;var s=window.UP.W.temp,n=0,c=0,d=0,p=!1,r=!1,u=!1;o.richTextId=null;var h=['<img src="../../module/blank/icon.png">','<img src="../../module/image/icon.png">','<img src="../../module/richText/icon.png">','<img src="../../module/linkButton/icon.png">','<img src="../../module/qrCode/icon.png">'];a(0),a(1),a(2),a(3),a(4),$(document.body).on("mouseover","#deviceBox",function(){r=!0}),$(document.body).on("mouseout","#deviceBox",function(){r=!1}),o.bgColor={};$("#changeInput").on("click",function(){o.addCl(),o.setOpt(o.opt),o.setBg(),o.bgColor.colorVal?($("#optionBody [data-name='backgroundColor']").next("span").find("span").css({"background-color":o.bgColor.colorVal}),l[0].style["#makedir"]["background-color"]=o.bgColor.colorVal,$("#optionBody [data-name='backgroundColor']").val(o.bgColor.colorVal)):($("#optionBody [data-name='backgroundColor']").next("span").find("span").css({"background-color":"#ffffff"}),$("#optionBody [data-name='backgroundColor']").val("#ffffff")),$("#optionBody [data-name='backgroundColor']").removeAttr("disabled"),$("#device > div").find(".widgetSelectMask").css("display","none"),$(".minicolors").find("input").on("input",function(){var t=$("#layoutBody #deviceBox"),a=$(this).val();o.bgColor.colorVal=a,t.css("background-color",$(this).val()),l[0].style["#makedir"]["background-color"]=o.bgColor.colorVal})}),$("#optionBody").on("click","#delBg",function(){$("#deviceBox").css({"background-image":"none"}),l[0].style["#makedir"]["background-image"]="none",l[0].style["#makedir"].src=""}),o.getHtml=function(t,a){var e="",i=document.createElement("div");i.id=t;var s=i.outerHTML,n="#"+t;o.layObj[n]=s;for(var c in o.layObj)e+=o.layObj[c];a=a.concat(e);a=a.concat("</body></html>"),l[0].pageStr=a},$("#optionBody").on("click","[data-name=bgsrc]",function(){chrome.fileSystem.chooseEntry({type:"openWritableFile",accepts:[{description:"图片文件",mimeTypes:["image/png","image/jpeg","image/jpg"],extensions:["jpg","png"]}]},function(t){t.file(function(t){e(t)})})}),$("#optionBody").on("change","[data-name=bgSet]",function(){var t;t=$(this).val(),$("#deviceBox").attr("data-rp",t),"100% 100%"===t?($("#deviceBox").css({"background-size":"100% 100%"}),l[0].style["#makedir"]["background-size"]="100% 100%",$("#deviceBox").css({"background-repeat":"no-repeat"}),l[0].style["#makedir"]["background-repeat"]="no-repeat"):($("#deviceBox").css({"background-size":"auto"}),l[0].style["#makedir"]["background-size"]="auto",$("#deviceBox").css({"background-repeat":"repeat"}),l[0].style["#makedir"]["background-repeat"]="repeat")}),function(){$("#projectAmount").text(o.domNum)}(),o.setLayoutCss=function(t,a){var e,i,s,n,c,d,p,r;i=$(a).width(),s=$(a).find("[data-minH]").attr("data-minH"),r=t.slice(0,5),"image"===r&&setTimeout(function(){p=$(a).find(".up-editor-image").height(),o.layoutOpts[t].imgHeight=p,$("#changeHeight").val(o.layoutOpts[t].imgHeight),$(a).find(".widgetSelectMask").css({height:o.layoutOpts[t].imgHeight})},50),$(a).css({height:s+"px"}),n=$(a).attr("data-op"),o.layoutOpts[t]={width:i,height:s,opacity:n,rotateDeg:0,wselValue:"自动",hselValue:"自动",defaultrelative:"默认定位",positionValX:0,positionValY:0,zindexVal:1},$("#changeWidth").val(o.layoutOpts[t].width),$("#changeHeight").val(o.layoutOpts[t].height),$("#showVal").val(o.layoutOpts[t].opacity),$("#changeOpacity").val(o.layoutOpts[t].opacity),$("#showDeg").val(o.layoutOpts[t].rotateDeg),$("#selWidth").val(o.layoutOpts[t].wselValue),$("#selHeight").val(o.layoutOpts[t].hselValue),$("#changeX").val(o.layoutOpts[t].positionValX),$("#changeY").val(o.layoutOpts[t].positionValY),$(".publicAttr [data-zindex = "+t+"]").on("input",function(){$(a).hasClass("active")&&$("#changeZindex").attr("data-zindex")===t&&(e=$(this).val(),$(a).css({"z-index":e}),o.layoutOpts[t].zindexVal=e,l[0].style["#"+t]["z-index"]=e)}),$(".publicAttr [data-x = "+t+"]").on("change",function(){$(a).hasClass("active")&&$("#changeX").attr("data-x")===t&&(e=$(this).val(),$(a).css({left:e+"px"}),o.layoutOpts[t].positionValX=e,l[0].style["#"+t].left=e+"px")}),$(".publicAttr [data-y = "+t+"]").on("change",function(){$(a).hasClass("active")&&$("#changeY").attr("data-y")===t&&(e=$(this).val(),$(a).css({top:e+"px"}),o.layoutOpts[t].positionValY=e,l[0].style["#"+t].top=e+"px")}),$(".publicAttr [data-rotate = "+t+"]").on("change",function(){$(a).hasClass("active")&&$("#changeDeg").attr("data-rotate")===t&&(e=$(this).val(),$(a).css({"-webkit-transform-origin":"center center",transform:"rotate("+e+"deg)"}),o.layoutOpts[t].rotateDeg=e,l[0].style["#"+t].transform="rotate("+e+"deg)")}),$(".publicAttr [data-deg = "+t+"]").on("input",function(){$(a).hasClass("active")&&$("#showDeg").attr("data-deg")===t&&(e=$(this).val(),$("#changeDeg").val(e),$(a).css({"-webkit-transform-origin":"center center",transform:"rotate("+e+"deg)"}),o.layoutOpts[t].rotateDeg=e)}),$(".publicAttr [data-opacity = "+t+"]").on("change",function(){$(a).hasClass("active")&&$("#changeOpacity").attr("data-opacity")===t&&(e=$(this).val(),$(a).attr("data-op",e),$(a).css({opacity:e/100}),o.layoutOpts[t].opacity=e,l[0].style["#"+t].opacity=e/100)}),$(".publicAttr [data-v = "+t+"]").on("input",function(i){$(a).hasClass("active")&&$("#showVal").attr("data-v")===t&&(e=$(this).val(),$("#changeOpacity").val(e),$(a).css({opacity:e/100}))}),$(".publicAttr [data-selW = "+t+"]").on("change",function(){$(a).hasClass("active")&&$("#selWidth").attr("data-selW")===t&&(c=$(this).val(),"手动"===$(this).val()?($(".publicAttr [data-W = "+t+"]").attr("disabled",!1),o.layoutOpts[t].wselValue=c):($(".publicAttr [data-W = "+t+"]").attr("disabled",!0),o.layoutOpts[t].wselValue=c))}),$(".publicAttr [data-selH = "+t+"]").on("change",function(){$(a).hasClass("active")&&$("#selHeight").attr("data-selH")===t&&(d=$(this).val(),"手动"===$(this).val()?($(".publicAttr [data-H = "+t+"]").attr("disabled",!1),o.layoutOpts[t].hselValue=d):($(".publicAttr [data-H = "+t+"]").attr("disabled",!0),o.layoutOpts[t].hselValue=d))}),$(".publicAttr [data-W = "+t+"]").on("blur",function(){if($(a).hasClass("active")&&$("#changeWidth").attr("data-W")===t){e=$(this).val(),parseFloat(e)>375&&(e=375),$(a).css({width:e+"px"}),$("#changeWidth").val(e),o._resize[t]&&o._resize[t](t,e,parseFloat($(a).css("height")),!0),o.layoutOpts[t].width=e;var i=$("#"+t).find(".up-editor-image").height();o.layoutOpts[t].height=i,$("#"+t).find(".widgetSelectMask").css({height:o.layoutOpts[t].height}),l[0].style["#"+t].width=e+"px"}}),$(".publicAttr [data-H = "+t+"]").on("blur",function(i){$(a).hasClass("active")&&$("#changeHeight").attr("data-H")===t&&(e=$(this).val(),$(a).css({height:e+"px"}),o.layoutOpts[t]&&o._resize[t](t,parseFloat($(a).css("width")),e,!1),o.layoutOpts[t].height=e,$("#"+t).find(".up-editor-image").height(e),$("#"+t).find(".widgetSelectMask").css({height:o.layoutOpts[t].height}),l[0].style["#"+t].height=e+"px")})},o.findLast=function(){$("#device > div").find(".widgetSelectMask").css("display","none"),$("#device > div:last").find(".widgetSelectMask").css("display","block"),$("#device > div").removeClass("active"),$("#device > div:last").addClass("active")},o.removeCl=function(){$(".publicAttr").removeClass("initDn")},o.addCl=function(){$(".publicAttr").addClass("initDn")},o.createDiv=function(){var t={layoutDiv:null};return t.layoutDiv=document.createElement("div"),t.layoutDiv.style.width="375px",t.layoutDiv.style.position="absolute",t.layoutDiv.style.top="0px",t.layoutDiv.style.left="0px",t.layoutDiv.dataset.op="100",t},o.setAttr=function(t){$("#changeZindex").attr("data-zindex",t),$("#changeX").attr("data-x",t),$("#changeY").attr("data-y",t),$("#changeWidth").attr("disabled",!0),$("#changeHeight").attr("disabled",!0),$("#selWidth").attr("data-selW",t),$("#selHeight").attr("data-selH",t),$("#changeWidth").attr("data-W",t),$("#changeHeight").attr("data-H",t),$("#changeOpacity").attr("data-opacity",t),$("#showVal").attr("data-v",t),$("#changeDeg").attr("data-rotate",t),$("#showDeg").attr("data-deg",t)},o.setAttrVal=function(t){$("#changeX").val(o.layoutOpts[t].positionValX),$("#changeY").val(o.layoutOpts[t].positionValY),$("#changeWidth").val(o.layoutOpts[t].width),"image"===t.slice(0,5)&&$("#changeHeight").val(o.layoutOpts[t].imgHeight),$("#changeHeight").val(o.layoutOpts[t].height),$("#showVal").val(o.layoutOpts[t].opacity),$("#changeOpacity").val(o.layoutOpts[t].opacity),$("#showDeg").val(o.layoutOpts[t].rotateDeg),$("#changeDeg").val(o.layoutOpts[t].rotateDeg),$("#selWidth").val(o.layoutOpts[t].wselValue),$("#selHeight").val(o.layoutOpts[t].hselValue),$("#changeZindex").val(o.layoutOpts[t].zindexVal)},o.setdisabled=function(t){"自动"===$("#selWidth").val()?$(".publicAttr [data-W = "+t+"]").attr("disabled",!0):$(".publicAttr [data-W = "+t+"]").attr("disabled",!1),"自动"===$("#selHeight").val()?$(".publicAttr [data-H = "+t+"]").attr("disabled",!0):$(".publicAttr [data-H = "+t+"]").attr("disabled",!1)},o.setKey=function(t,a){if($("#"+t).hasClass("active")){var e,i=$("#"+t),s=i.width(),n=i.height();e=$("#device").height(),"INPUT"!==document.activeElement.tagName&&("37"===a.keyCode&&(o.layoutOpts[t].positionValX=o.layoutOpts[t].positionValX-5,o.layoutOpts[t].positionValX<0&&(o.layoutOpts[t].positionValX=0),i.css({left:o.layoutOpts[t].positionValX+"px"}),$(".publicAttr [data-x = "+t+"]").val(o.layoutOpts[t].positionValX)),"39"===a.keyCode&&(o.layoutOpts[t].positionValX=o.layoutOpts[t].positionValX+5,s>="375"?o.layoutOpts[t].positionValX>0&&(o.layoutOpts[t].positionValX=0):o.layoutOpts[t].positionValX>375-s&&(o.layoutOpts[t].positionValX=375-s),i.css({left:o.layoutOpts[t].positionValX+"px"}),$(".publicAttr [data-x = "+t+"]").val(o.layoutOpts[t].positionValX)),"38"===a.keyCode&&(o.layoutOpts[t].positionValY=o.layoutOpts[t].positionValY-5,o.layoutOpts[t].positionValY<0&&(o.layoutOpts[t].positionValY=0),i.css({top:o.layoutOpts[t].positionValY+"px"}),$(".publicAttr [data-y = "+t+"]").val(o.layoutOpts[t].positionValY)),"40"===a.keyCode&&(o.layoutOpts[t].positionValY=o.layoutOpts[t].positionValY+5,o.layoutOpts[t].positionValY>e-n&&(o.layoutOpts[t].positionValY=e-n,e+=n,$("#device").height(e)),i.css({top:o.layoutOpts[t].positionValY+"px"}),$(".publicAttr [data-y = "+t+"]").val(o.layoutOpts[t].positionValY))),l[0].style["#"+t].top=o.layoutOpts[t].positionValY+"px",l[0].style["#"+t].left=o.layoutOpts[t].positionValX+"px"}},o.dragxy=function(t){var a,e,i,s,n,c,d,p,r,u,h,g=!0;$("body").on("mousedown","#"+t+" .widgetSelectMask",function(y){"mousedown"===y.type&&(g=!0,u=$(this).parent().width(),h=$(this).parent().height(),d=$("#device").height(),n=$(this).parent().width(),c=$(this).parent().height(),i=$("#device").offset().top,s=$("#device").offset().left,$("body").on("mousemove","#deviceBox",function(c){g&&(a=c.pageX,e=c.pageY,p=a-s-u/2,r=e-i-h/2,p<0&&(p=0),u>=375?p>0&&(p=0):p>n-u+(375-u)&&(p=n-u+(375-u)),r<i&&(r=0),r>d-h&&(r=d-h,d+=h,$("#device").height(d)),$("#"+t).css({left:p+"px",top:r+"px"}),o.layoutOpts[t].positionValX=p,o.layoutOpts[t].positionValY=r,$("#changeX").val(o.layoutOpts[t].positionValX),$("#changeY").val(o.layoutOpts[t].positionValY),l[0].style["#"+t].top=r+"px",l[0].style["#"+t].left=p+"px")}),$(document).on("mouseup",function(){g=!1}))})},o.restDomObj=function(t,a){for(var e in o.layObj)e==="#"+t&&delete o.layObj[e];for(var i in l[0].style)i==="#"+t&&delete l[0].style[i];for(var s=l.length,i=0;i<s;i++)if(l[i].parent===t){l.splice(i,1);break}var n="";for(var c in o.layObj)n+=o.layObj[c];a=a.concat(n);a=a.concat("</body></html>"),l[0].pageStr=a},o.setBg=function(){$(".demo").minicolors({control:$(this).attr("data-control")||"hue",defaultValue:$(this).attr("data-defaultValue")||"",inline:"true"===$(this).attr("data-inline"),letterCase:$(this).attr("data-letterCase")||"lowercase",opacity:$(this).attr("data-opacity"),position:$(this).attr("data-position")||"bottom left",change:function(t,a){t&&a&&(t+=", "+a)},theme:"bootstrap"}),$(".minicolors").css({width:"200px",display:"inline-block","margin-left":"5px"}),$(".minicolors").find("input").css({width:"100%","padding-left":"35px"})},o.setBg(),o.setResize=function(t,a){o._resize=o._resize||{},o._resize[t]=function(t,e,i,o){try{a(t,e,i,o)}catch(t){}}},o.setSelected=function(t,a){o._selected=o._selected||{},o._selected[t]=function(t){try{a(t)}catch(t){}}},o.resetLayoutDiv=function(t,a,e){var i=$("#"+t);o.layoutOpts[t].width=a,o.layoutOpts[t].height=e,$(".publicAttr  [data-W = "+t+"]").val(o.layoutOpts[t].width),$(".publicAttr  [data-H = "+t+"]").val(o.layoutOpts[t].height),i.css({width:a,height:e}),i.find(".widgetSelectMask").css({width:a,height:e})}}(window.Zepto||window.jQuery,window.UP=window.UP||{});