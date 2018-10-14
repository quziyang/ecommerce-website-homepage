/***********************
 * 日期：2018/05/06
 * 作者：曲子扬
 * 用途：首页的js文件
 * version: 1.1
 * other: null
 */

headSearchFn();
topNavFn();
colomnNavFn();
leftSubNavFn();
slideFn();

// 顶部搜索条
function headSearchFn(){
 	var _headSearchKeyVal = "请输入文字";
	var _headSearchKeyId = gId("headSearchKeyId");
	_headSearchKeyId.setAttribute("value", _headSearchKeyVal);

	//下面是聚焦和失焦效果
	_headSearchKeyId.onfocus = function(){
		this.setAttribute("value", "");	
	}

	_headSearchKeyId.onblur = function(){
		this.setAttribute("value", _headSearchKeyVal);	
	}
  }

// 顶部导航
function topNavFn(){
	//下面是用js来写右侧top导航条
	var _headTopNavArrs = ["你好，请登录", "免费注册", "我的订单", "我的京东"];
	var _headTopNavId = gId("headTopNavId");
	// console.log(_headTopNavId);

	for(var i = 0; i < _headTopNavArrs.length; i++){
		var _li = createDom("li");
		_li.setAttribute("date-val", "val"+i);
		_li.innerHTML = _headTopNavArrs[i];
		_li.onclick = function(){
			console.log(this.getAttribute("date-val"));
		}
		if(i==3){
			var _em = createDom("em");
			_em.setAttribute("class", "icon_1 mt_10");
			_headTopNavId.appendChild(_em);
		}
		_headTopNavId.appendChild(_li);
	}
}

// 顶部栏目导航条
function colomnNavFn(){
	//下面是用js来写colomn导航条
	var _columnNavArrs = ["秒杀", "优惠券", "闪购", "京东超市", "拍卖"];
	var _columnNavId = gId("columnNavId");

	for (var i = 0; i < _columnNavArrs.length; i++) {
		var _col = createDom("li");
		_col.innerHTML = _columnNavArrs[i];
		_columnNavId.appendChild(_col);
		if(i==3){
			var _em = createDom("em");
			_em.setAttribute("class", "icon_1 mt_5");
			_columnNavId.appendChild(_em);
		}
	}
}

// 左侧子导航条
function leftSubNavFn(){

	//下面是用js来写左侧子导航条
	var _leftSubNavArrs = LeftSubNavDate;

	var _leftSubNavId = gId("leftSubNavId");

	for (var i = 0; i < _leftSubNavArrs.length; i++) {

		var _leftSubLi = createDom("li");
		_leftSubNavId.appendChild(_leftSubLi);

		//鼠标移入
		_leftSubLi.onmouseover = function(){
			this.children[1].style.display = "block";
		}

		//鼠标移出
		_leftSubLi.onmouseout = function(){
			this.children[1].style.display = "none";
		}

		var _leftSubLi_p = createDom("p");
		_leftSubLi_p.innerHTML = _leftSubNavArrs[i].liname;
		_leftSubNavId.appendChild(_leftSubLi_p);
		// console.log(_leftSubLi_p.innerHTML);
		var _leftSubLi_div = createDom("div");
		_leftSubLi_div.setAttribute("class", "popupMenu");

		_leftSubNavId.appendChild(_leftSubLi_div);
		var _leftSubLi_div_ul = createDom("ul");
		_leftSubLi_div.appendChild(_leftSubLi_div_ul);

		_leftSubLi.appendChild(_leftSubLi_p);
		_leftSubLi.appendChild(_leftSubLi_div);

		for (var j = 0; j < _leftSubNavArrs[i].lis.length; j++) {
			var _leftSubLi_div_ul_li = createDom("li");
			_leftSubLi_div_ul_li.innerHTML = _leftSubNavArrs[i].lis[j];
			_leftSubLi_div_ul.appendChild(_leftSubLi_div_ul_li);
			// console.log(_leftSubLi_div_ul_li.innerHTML);
		}
	}
}


// 轮播图
function slideFn(){
	var _ulWrapId = gId("ulWrapId");
	var _leftBtnId = gId("leftBtnId");
	var _rightBtnId = gId("rightBtnId");
	var _inx = 0;
	var _sliderImgUrl = SliderImgUrl;
	_ulWrapId.style.width = _sliderImgUrl.length*996+"px";
	var _pointerUlId = gId("pointerUlId");

	// 调整小白点宽度
	var _pointComputeVal = _sliderImgUrl.length*24+10;
	var _pointerWrapId = gId("pointerWrapId");
	_pointerWrapId.style.width = _pointComputeVal+"px";
	_pointerWrapId.style.marginLeft = -_pointComputeVal/2+"px";
	var _pointerWrapBgId = gId("pointerWrapBgId");
	_pointerWrapBgId.style.width = _pointComputeVal+"px";
	_pointerWrapBgId.style.marginLeft = -_pointComputeVal/2+"px";

	// _ulWrapId.setAttribute("width", _sliderImgUrl.length*995+"px");

	// 创建图片Dom节点
	for (var i = 0; i < _sliderImgUrl.length; i++) {
		var _sliderLi = createDom("li");
		_ulWrapId.appendChild(_sliderLi);
		var _sliderLiImg = createDom("img");
		_sliderLi.appendChild(_sliderLiImg);
		_sliderLiImg.setAttribute("src", _sliderImgUrl[i]);
	}

	// 创建小白点Dom节点
	for (var i = 0; i < _sliderImgUrl.length; i++) {
		var _pointerLi = createDom("li");
		_pointerLi.inx = i;
		_pointerLi.onclick = function(){
			console.log(this.inx);
			_inx = this.inx;
			_ulWrapId.style.left = "-"+996*_inx+"px";
			// _ulWrapId.style.left = "-"+996*this.inx+"px";

			switchPointColorFn(_pointerUlId, _inx);
		}
		_pointerUlId.appendChild(_pointerLi);

	}

	_leftBtnId.onclick = function(){
		
		if (_inx < _sliderImgUrl.length-1){
			_inx++;
		}else{
			_inx=0;
		}

		_ulWrapId.style.left = "-"+996*_inx+"px";
		switchPointColorFn(_pointerUlId, _inx);
	}
	_rightBtnId.onclick = function(){
		
		if (_inx > 0){
			_inx--;
		}else{
			_inx=_sliderImgUrl.length-1;
		}
	
		_ulWrapId.style.left = "-"+996*_inx+"px";
		switchPointColorFn(_pointerUlId, _inx);
	}
}

	// 小白点颜色切换
	function switchPointColorFn(_pointerUlId, _inx){
		for (var i = 0; i < _pointerUlId.children.length; i++) {
			_pointerUlId.children[i].setAttribute("class", "");
		}
		_pointerUlId.children[_inx].setAttribute("class", "red");
	}





