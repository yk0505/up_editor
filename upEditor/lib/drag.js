;(function($, window, document,undefined) {
    //定义的构造函数
    var Drag = function(ele, opt) {
        this.$ele = ele,
				this.x = 0,
				this.y = 0,
        this.defaults = {
					parent:'parent',
					randomPosition:false,
					direction:'all',
					handler:false,
					dragStart:function(x,y,el){},
					dragEnd:function(x,y,el){},
					dragMove:function(x,y,el){}
				},
				this.options = $.extend({}, this.defaults, opt)
    }
    //定义方法
    Drag.prototype = {
        run: function() {
					var $this = this;
					var element = this.$ele;
					var randomPosition  = this.options.randomPosition; //位置
					var direction = this.options.direction; //方向
					var handler = this.options.handler;
					var parent = this.options.parent;
					var isDown = false; //记录鼠标是否按下
					var fun = this.options; //使用外部函数
					var X = 0,
						Y = 0,
						moveX,
						moveY,
						initX,
						initY
						;
					// 阻止冒泡
					element.find('*').not('img').mousedown(function(e) {
						e.stopPropagation();
					});
					//初始化判断
					if(parent == 'parent'){
						parent = element.parent();
					}else{
						parent = element.parents(parent);
					}
					if(!handler){
						handler = element; 
					}else{
						handler = element.find(handler);
					}
					//初始化
					parent.css({position:'relative'});
					element.css({position:'fixed'});
					var boxWidth=0,boxHeight=0,sonWidth=0,sonHeight=0;
					//盒子 和 元素大小初始化
					initSize();
					if(randomPosition){randomPlace();}
					$(window).resize(function(){
						initSize();
						if(randomPosition){randomPlace();}
					});
					//盒子 和 元素大小初始化函数
					function initSize(){
						boxWidth = parent.outerWidth();
						boxHeight = parent.outerHeight();
						sonWidth = element.outerWidth();
						sonHeight = element.outerHeight();
					}
					//位置随机函数
					function randomPlace(){
						if(randomPosition){
							var randX = parseInt(Math.random()*(boxWidth-sonWidth));
							var randY = parseInt(Math.random()*(boxHeight-sonHeight));
							if(direction.toLowerCase() == 'x'){
								element.css({left:randX});
							}else if(direction.toLowerCase() == 'y'){
								element.css({top:randY});
							}else{
								element.css({left:randX,top:randY});
							}
						}
					}
					handler.mousedown(function(e){
						isDown = true;
						X = e.pageX;
						Y = e.pageY;
						$this.x = element.position().left;
						$this.y = element.position().top;
						initX = element.position().left;
						initY = element.position().top;
						element.addClass('on');
						var eleNm = element.attr('data-nm');
						fun.dragStart(parseInt(element.css('left')),parseInt(element.css('top')),element,eleNm);
						return false;
					});
					handler.mouseup(function(e){
						if(e.originalEvent.type === 'mouseup'){
                            element.css({
                                'left':initX,
                                'top':initY,
                                'opacity':0
                            })
						}else{
                            element.css({
                                'left':initX,
                                'top':initY,
                                'opacity':0
                            })
						}

                        var eleNm = element.attr('data-nm');
						fun.dragEnd(parseInt(element.css('left')),parseInt(element.css('top')),element,eleNm);
						element.removeClass('on');
						isDown = false;
					});
					$(document).mousemove(function(e){
						moveX = $this.x+e.pageX-X;
						moveY = $this.y+e.pageY-Y;
						function thisXMove(){ //x轴移动
							if(isDown == true){
								element.css({left:moveX});
							}else{
								return;
							}
							if(moveX < 0){
								element.css({left:0});
							}
							if(moveX > (boxWidth-sonWidth)){
								element.css({left:boxWidth-sonWidth});
							}
							return moveX;
						}
						function thisYMove(){ //y轴移动
							if(isDown == true){
								element.css({top:moveY});
							}else{
								return;
							}
							if(moveY < sonHeight){
								element.css({top:0});
							}
							if(moveY > (boxHeight-sonHeight)){
								element.css({top:boxHeight-sonHeight});
							}
							return moveY;
						}
						function thisAllMove(){ //全部移动
							if(isDown == true){
								element.css({left:moveX,top:moveY});
							}else{
								return;
							}
							if(moveX < 0){
								element.css({left:0});
							}
							if(moveX > (boxWidth-sonWidth)){
								element.css({left:boxWidth-sonWidth});
							}
							if(moveY < 0){
								element.css({top:0});
							}
							if(moveY > (boxHeight-sonHeight)){
								element.css({top:boxHeight-sonHeight});
							}
						}
						if(isDown){
					  	fun.dragMove(parseInt(element.css('left')),parseInt(element.css('top')),element);
						}else{
						    if(document.activeElement.tagName != 'INPUT'){
                                return false;
                            }
						}
						if(direction.toLowerCase() == "x"){
							thisXMove();
						}else if(direction.toLowerCase() == "y"){
							thisYMove();
						}else{
							thisAllMove();
						}
					});
        }
    }

    //插件
    $.fn.myDrag = function(options) {
        //创建实体
        var drag = new Drag(this, options);
        //调用方法
        drag.run();
		return this;
    }
})(jQuery, window, document);