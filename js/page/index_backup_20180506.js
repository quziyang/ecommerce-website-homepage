/***********************
 * 日期：2018/04/30
 * 作者：曲子扬
 * 用途：首页的js文件
 * version: 1.0
 * other: null
 */

var _headSearchKeyVal = "请输入文字";
var _headSearchKeyId = document.getElementById("headSearchKeyId");
_headSearchKeyId.setAttribute("value", _headSearchKeyVal);

//下面是聚焦和失焦效果
_headSearchKeyId.onfocus = function(){
	this.setAttribute("value", "");	
}

_headSearchKeyId.onblur = function(){
	this.setAttribute("value", _headSearchKeyVal);	
}

//下面是用js来写右侧top导航条
var _headTopNavArrs = ["你好，请登录", "免费注册", "我的订单", "我的京东"];
var _headTopNavId = document.getElementById("headTopNavId");
// console.log(_headTopNavId);

for(var i = 0; i < _headTopNavArrs.length; i++){
	var _li=document.createElement("li");
	_li.setAttribute("date-val", "val"+i);
	_li.innerHTML = _headTopNavArrs[i];
	_li.onclick = function(){
		console.log(this.getAttribute("date-val"));
	}
	if(i==3){
		var _em = document.createElement("em");
		_em.setAttribute("class", "icon_1 mt_10");
		_headTopNavId.appendChild(_em);
	}
	_headTopNavId.appendChild(_li);
}

//下面是用js来写colomn导航条
var _columnNavArrs = ["秒杀", "优惠券", "闪购", "京东超市", "拍卖"];
var _columnNavId = document.getElementById("columnNavId");

for (var i = 0; i < _columnNavArrs.length; i++) {
	var _col = document.createElement("li");
	_col.innerHTML = _columnNavArrs[i];
	_columnNavId.appendChild(_col);
	if(i==3){
		var _em = document.createElement("em");
		_em.setAttribute("class", "icon_1 mt_5");
		_columnNavId.appendChild(_em);
	}
}

//下面是用js来写左侧子导航条
var _leftSubNavArrs = [
	{
		liname: "手机x",
		lis: ["手机111", "手机222", "手机333"]
	},{
		liname: "家电x",
		lis: ["家电111", "家电222", "家电333", "家电444"]
	},{
		liname: "电脑x",
		lis: ["电脑111", "电脑222", "电脑333"]
	}
];

var _leftSubNavId = document.getElementById("leftSubNavId");

for (var i = 0; i < _leftSubNavArrs.length; i++) {

	var _leftSubLi = document.createElement("li");
	_leftSubNavId.appendChild(_leftSubLi);

	//鼠标移入
	_leftSubLi.onmouseover = function(){
		this.children[1].style.display = "block";
	}

	//鼠标移出
	_leftSubLi.onmouseout = function(){
		this.children[1].style.display = "none";
	}

	var _leftSubLi_p = document.createElement("p");
	_leftSubLi_p.innerHTML = _leftSubNavArrs[i].liname;
	_leftSubNavId.appendChild(_leftSubLi_p);
	// console.log(_leftSubLi_p.innerHTML);
	var _leftSubLi_div = document.createElement("div");
	_leftSubLi_div.setAttribute("class", "popupMenu");

	_leftSubNavId.appendChild(_leftSubLi_div);
	var _leftSubLi_div_ul = document.createElement("ul");
	_leftSubLi_div.appendChild(_leftSubLi_div_ul);

	_leftSubLi.appendChild(_leftSubLi_p);
	_leftSubLi.appendChild(_leftSubLi_div);

	for (var j = 0; j < _leftSubNavArrs[i].lis.length; j++) {
		var _leftSubLi_div_ul_li = document.createElement("li");
		_leftSubLi_div_ul_li.innerHTML = _leftSubNavArrs[i].lis[j];
		_leftSubLi_div_ul.appendChild(_leftSubLi_div_ul_li);
		// console.log(_leftSubLi_div_ul_li.innerHTML);
	}
}




