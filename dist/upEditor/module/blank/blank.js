!function($,n){var a=(window.UP.W.Util,window.UP.W.Ui,window.UP.W.Main);a.blank=a.blank||{};var t=a.blank,o=window.UP.Editor.page,e=[{label:"备注说明",name:"remarkText"},{label:"背景色",name:"blankBackground"},{label:"文字颜色",name:"blankfontColor"},{label:"文字大小",name:"blankfontSize"},{label:"文字粗细",name:"blankfontBold"}];setTimeout(function(){a.setBg()},100),$("#optionBody").on("input","[data-name=remarkText]",function(){var n=$(this).attr("data-id"),a=$(this).val();$("#"+n).find(".blankdom").text(a);var e=null;clearTimeout(e),e=setTimeout(function(){t[n].remarkTxt=a;for(var e=o.length,i=0;i<e;i++)if(o[i].parent===n){o[i].pageStr="<div data-minH = '42' class='blankdom'>"+a+"</div>";break}},300)}),$("#optionBody").on("input","[data-name=blankBackground]",function(){var n=$(this).val(),a=$(this).attr("data-id"),n=$(this).val();$("#"+a).find(".blankdom").css({"background-color":n});var e=null;clearTimeout(e),e=setTimeout(function(){t[a].blankBackground=n;for(var e=o.length,i=0;i<e;i++)if(o[i].parent===a){o[i].style[".blankdom"]["background-color"]=n;break}},300)}),$("#optionBody").on("input","[data-name=blankfontColor]",function(){var n=$(this).val(),a=$(this).attr("data-id"),n=$(this).val();$("#"+a).find(".blankdom").css({color:n});var e=null;clearTimeout(e),e=setTimeout(function(){t[a].blankfontColor=n;for(var e=o.length,i=0;i<e;i++)if(o[i].parent===a){o[i].style[".blankdom"].color=n;break}},300)}),$("#optionBody").on("input","[data-name=blankfontSize]",function(){var n=$(this).val(),a=$(this).attr("data-id"),n=$(this).val();$("#"+a).find(".blankdom").css({"font-size":n+"px"});var e=null;clearTimeout(e),e=setTimeout(function(){t[a].blankfontSize=n;for(var e=o.length,i=0;i<e;i++)if(o[i].parent===a){o[i].style[".blankdom"]["font-size"]=n+"px";break}},300)}),$("#optionBody").on("change","[data-name=blankfontBold]",function(){var n=$(this).val(),a=$(this).attr("data-id"),n=$(this).val();$("#"+a).find(".blankdom").css({"font-weight":n});var e=null;clearTimeout(e),e=setTimeout(function(){t[a].blankfontBold=n;for(var e=o.length,i=0;i<e;i++)if(o[i].parent===a){o[i].style[".blankdom"]["font-weight"]=n;break}},300)}),define(function(){return{dom:'<div class="blankdom" data-minH = "60" style="height:100%; background-color:#ccc; background-size: 0.8rem 0.8rem; background-image: linear-gradient(45deg, rgba(255, 255, 255, 1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 75%, transparent 75%, transparent); ">占位</div><div class="widgetSelectMask" ><span class="widgetMaskClose"></span></div>',options:e,afterRender:function(n){t[n]={remarkTxt:"占位",blankBackground:"#ffffff",blankfontColor:"#666666",blankfontSize:"16",blankfontBold:"normal"};var e={parent:n,pageStr:"<div class='blankdom'></div>",style:{".blankdom":{width:"100%",height:"100%"}}};o.push(e),a.setResize(n,function(n,t,o){setTimeout(function(){a.layoutOpts[n].width=t,a.layoutOpts[n].height=o},500)}),a.setSelected(n,function(n){setTimeout(function(){$("#optionBody").find("[data-name=remarkText]").val(t[n].remarkTxt),$("#optionBody").find("[data-name=blankBackground]").val(t[n].blankBackground),$("#optionBody").find("[data-name=blankBackground]").next("span").find("span").css({"background-color":t[n].blankBackground}),$("#optionBody").find("[data-name=blankfontColor]").val(t[n].blankfontColor),$("#optionBody").find("[data-name=blankfontColor]").next("span").find("span").css({"background-color":t[n].blankfontColor}),$("#optionBody").find("[data-name=blankfontSize]").val(t[n].blankfontSize),$("#optionBody").find("[data-name=blankfontBold]").val(t[n].blankfontBold)},300)})}}})}(window.Zepto||window.jQuery,window.UP=window.UP||{});