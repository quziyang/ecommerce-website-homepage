var _lisArrs=[
	{
		liname: "手机",
		lis: ["手机111","手机222","手机333"]
	},{
		liname: "家电",
		lis: ["家电111","家电222","家电333"]
	},{
		liname: "电脑",
		lis: ["电脑111","电脑222","电脑333"]
	}
];

console.log(_lisArrs);
for (var i = 0; i < _lisArrs.length; i++) {
	console.log(_lisArrs[i].liname);
	for (var j = 0; j < _lisArrs[i].lis.length; j++) {
		console.log(_lisArrs[i].lis[j]);
	}
}