!function($,t){function e(t,e){var t=t,e=e;setTimeout(function(){for(var i=0;i<r.length;i++)if(r[i].parent===t){r[i].pageStr=e;break}},100)}var i,o,n,a=(window.UP.W.Util,window.UP.W.Ui,window.UP.W.Main),r=window.UP.Editor.page,d=[{label:"文本编辑",name:"editRichtext"},{label:"清除格式",name:"clearFormat"}];a.setOpt(d),$("#optionBody").on("click","#clearFormat",function(){$(".active *").css({fontStyle:"normal",color:"#000",fontWeight:"normal",fontSize:"normal",linHeight:"1em",backgroundColor:"rgba(0,0,0,0)",textDecoration:"none"}),i=$(this).data("id");var t=$("#"+i).find(".edit-show")[0].outerHTML;e(i,t)}),$("#optionBody").on("click","#editRichtext",function(){i=$(this).data("id");var t=$(".active").attr("id");if(new RegExp("richText").test(t)){o=$("#"+t).find(".edit-show"),n=$(o).html();var e=chrome.app.window.get("create");e?(e.close(),e.show()):chrome.app.window.create("../../html/rich.html",{bounds:{width:880,height:420},resizable:!1,frame:"none"}),event.stopPropagation(),event.preventDefault()}}),chrome.runtime.onMessage.addListener(function(t,r,d){if("getDOM"===t){var s=n;chrome.storage.local.set({richDOM:s}),d("y")}else"show"===t&&(chrome.storage.local.get("richDOM",function(t){$(o).html(t.richDOM),a.resetLayoutDiv($(o).parent().attr("id"),$(o).width(),$(o).height()),e(i,$(o)[0].outerHTML)}),d("00"))}),define(function(){return{options:d,dom:'<div class="edit-show" data-minH = "40" ><p>普通文本</p></div><div class="widgetSelectMask"><span class="widgetMaskClose"></span></div>',afterRender:function(t){var e={parent:t,pageStr:'<div class="edit-show"><p>普通文本</p></div>',style:{".edit-show":{padding:"0",margin:"0"}}};r.push(e),a.setResize(t,function(t,e,i){setTimeout(function(){a.layoutOpts[t].width=e,a.layoutOpts[t].height=i},500)}),a.setSelected(t,function(t){})}}})}(window.Zepto||window.jQuery,window.UP=window.UP||{});