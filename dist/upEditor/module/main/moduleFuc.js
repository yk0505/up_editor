define(function(){UP.W.Main=UP.W.Main||{};var t=(UP.W.Main,window.UP.Editor.page),e=t[0].pageStr,i=e.substring(0,e.indexOf("</body>"));return{blank:function(e){var o=e.createDiv();require(["blank"],function(d){addDom=$(d.dom);var s="blank_"+ ++e.domId;o.layoutDiv.id=s,o.layoutDiv=$("#"+o.layoutDiv.id),e.getHtml(s,i);var a="#"+s,n={};n[a]={width:"375px",height:"60px",position:"absolute",top:"0",left:"0",opacity:"1","z-index":"0",transform:"rotate(0deg)"},t[0].style[a]=n[a],o.layoutDiv.append(addDom),e.dragxy(s);try{d.afterRender(s)}catch(t){}e.setAttr(s),e.findLast(),e.layoutOpts[s]={};var l=$("#device > div:last");e.setLayoutCss(s,l),$(document).on("keydown",function(t){e.setKey(s,t)}),$("#"+s).find(".widgetMaskClose").on("click",function(){$(this).parent().parent().remove(),e.domNum--,$("#projectAmount").text(e.domNum),e.addCl(),e.setOpt(e.opt),e.setBg(),e.restDomObj(s,i)}),e.setOpt(d.options,s),e.setBg(),$("#"+s).on("click",function(){$("#device > div").find(".widgetSelectMask").css("display","none"),$(this).find(".widgetSelectMask").css("display","block"),$(this).addClass("active").siblings("div").removeClass("active");var t=$(this).attr("id");e.setAttr(s),e.setAttrVal(s),s=t,e._selected[t]&&e._selected[t](t),e.setOpt(d.options,s),e.setBg(),e.setdisabled(s),e.removeCl()}),e.removeCl()}),$("#device").append(o.layoutDiv),e.domNum++,$("#projectAmount").text(e.domNum)},image:function(e){var o=e.createDiv();require(["image"],function(d){addDom=$(d.dom);var s="image_"+ ++e.domId;o.layoutDiv.id=s,o.layoutDiv=$("#"+o.layoutDiv.id),e.getHtml(s,i);var a="#"+s,n={};n[a]={width:"375px",height:"60px",position:"absolute",top:"0",left:"0",opacity:"1","z-index":"0",transform:"rotate(0deg)"},t[0].style[a]=n[a],o.layoutDiv.append(addDom),e.dragxy(s);try{d.afterRender(s)}catch(t){}e.setAttr(s),e.findLast();var l=$("#device > div:last");e.layoutOpts[s]={},e.layoutOpts[s].width=375,e.setLayoutCss(s,l),$(document).on("keydown",function(t){e.setKey(s,t)}),$("#"+s).find(".widgetMaskClose").on("click",function(){$(this).parent().parent().remove(),e.domNum--,$("#projectAmount").text(e.domNum),e.addCl(),e.setOpt(e.opt),e.setBg(),e.restDomObj(s,i)}),e.setOpt(d.options,s),$("#"+s).on("click",function(){$("#device > div").find(".widgetSelectMask").css("display","none"),$(this).find(".widgetSelectMask").css("display","block"),$(this).addClass("active").siblings("div").removeClass("active");var t=$(this).attr("id");e.setAttr(s),e.setAttrVal(s),"image"===s.slice(0,5)&&setTimeout(function(){var t=$("#"+s).find(".up-editor-image").height();e.layoutOpts[s].imgHeight=t,$("#changeHeight").val(e.layoutOpts[s].imgHeight),$("#"+s).find(".widgetSelectMask").css({height:e.layoutOpts[s].imgHeight})},50),e._selected[t]&&e._selected[t](t),s=t,e.setOpt(d.options,s),e.setdisabled(s),e.removeCl()}),e.removeCl()}),$("#device").append(o.layoutDiv),e.domNum++,$("#projectAmount").text(e.domNum)},richText:function(e){var o=e.createDiv();require(["richText"],function(d){addDom=$(d.dom);var s="richText_"+ ++e.domId;o.layoutDiv.id=s,o.layoutDiv.style.position="relative",o.layoutDiv=$("#"+o.layoutDiv.id),e.getHtml(s,i);var a="#"+s,n={};n[a]={width:"375px",height:"60px",position:"absolute",top:"0",left:"0",opacity:"1","z-index":"0",transform:"rotate(0deg)"},t[0].style[a]=n[a],o.layoutDiv.append(addDom),e.dragxy(s);try{d.afterRender(s)}catch(t){}e.setAttr(s),e.findLast();var l=$("#device > div:last");e.layoutOpts[s]={},e.setLayoutCss(s,l),$(document).on("keydown",function(t){e.setKey(s,t)}),$("#"+s).find(".widgetMaskClose").on("click",function(){$(this).parent().parent().remove(),e.domNum--,$("#projectAmount").text(e.domNum),e.addCl(),e.setOpt(e.opt),e.setBg(),e.restDomObj(s,i)}),e.setOpt(d.options,s),$("#"+s).on("click",function(){$("#device > div").find(".widgetSelectMask").css("display","none"),$(this).find(".widgetSelectMask").css("display","block"),$(this).addClass("active").siblings("div").removeClass("active");var t=$(this).attr("id");e.setAttr(s),e.setAttrVal(s),s=t,e._selected[t]&&e._selected[t](t),e.setOpt(d.options,s),e.setdisabled(s),e.removeCl()}),e.removeCl()}),$("#device").append(o.layoutDiv),e.domNum++,$("#projectAmount").text(e.domNum)},linkButton:function(e){var o=e.createDiv();require(["linkButton"],function(d){addDom=$(d.dom);var s="linkButton_"+ ++e.domId;o.layoutDiv.id=s,o.layoutDiv=$("#"+o.layoutDiv.id),e.getHtml(s,i);var a="#"+s,n={};n[a]={width:"375px",height:"60px",position:"absolute",top:"0",left:"0",opacity:"1","z-index":"0",transform:"rotate(0deg)"},t[0].style[a]=n[a],o.layoutDiv.append(addDom),e.dragxy(s);try{d.afterRender(s)}catch(t){}e.setAttr(s),e.findLast();var l=$("#device > div:last");e.layoutOpts[s]={},e.setLayoutCss(s,l),$(document).on("keydown",function(t){e.setKey(s,t)}),$("#"+s).find(".widgetMaskClose").on("click",function(){$(this).parent().parent().remove(),e.domNum--,$("#projectAmount").text(e.domNum),e.addCl(),e.setOpt(e.opt),e.setBg(),e.restDomObj(s,i)}),e.setOpt(d.options,s),e.setBg(),$("#"+s).on("click",function(){$("#device > div").find(".widgetSelectMask").css("display","none"),$(this).find(".widgetSelectMask").css("display","block"),$(this).addClass("active").siblings("div").removeClass("active");var t=$(this).attr("id");e.setAttr(s),e.setAttrVal(s),s=t,e._selected[t]&&e._selected[t](t),e.setOpt(d.options,s),e.setBg(),e.setdisabled(s),e.removeCl()}),e.removeCl()}),$("#device").append(o.layoutDiv),e.domNum++,$("#projectAmount").text(e.domNum)},qrCode:function(e){var o=e.createDiv();require(["qrCode"],function(d){addDom=$(d.dom);var s="qrCode_"+ ++e.domId;o.layoutDiv.id=s,o.layoutDiv=$("#"+o.layoutDiv.id),e.getHtml(s,i);var a="#"+s,n={};n[a]={width:"375px",height:"60px",position:"absolute",top:"0",left:"0",opacity:"1","z-index":"0",transform:"rotate(0deg)"},t[0].style[a]=n[a],o.layoutDiv.append(addDom),e.dragxy(s);try{d.afterRender(s)}catch(t){}e.setAttr(s),e.findLast();var l=$("#device > div:last");e.layoutOpts[s]={},e.setLayoutCss(s,l),$(document).on("keydown",function(t){e.setKey(s,t)}),$("#"+s).find(".widgetMaskClose").on("click",function(){$(this).parent().parent().remove(),e.domNum--,$("#projectAmount").text(e.domNum),e.addCl(),e.setOpt(e.opt),e.setBg(),e.restDomObj(s,i)}),e.setOpt(d.options,s),$("#"+s).on("click",function(){$("#device > div").find(".widgetSelectMask").css("display","none"),$(this).find(".widgetSelectMask").css("display","block"),$(this).addClass("active").siblings("div").removeClass("active");var t=$(this).attr("id");e.setAttr(s),e.setAttrVal(s),s=t,e._selected[t]&&e._selected[t](t),e.setOpt(d.options,s),e.setdisabled(s),e.removeCl()}),e.removeCl()}),$("#device").append(o.layoutDiv),e.domNum++,$("#projectAmount").text(e.domNum)}}});