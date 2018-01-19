function GetQueryStringRegExp(name, url) {
	var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
	if(reg.test(url)) return decodeURIComponent(RegExp.$2.replace(/\+/g, " "));
	return "";
}

String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.lTrim = function() {
	return this.replace(/(^\s*)/g, "");
}
String.prototype.rTrim = function() {
	return this.replace(/(\s*$)/g, "");
}

String.prototype.startWith = function(str) {
	var reg = new RegExp("^" + str);
	return reg.test(this);
}

String.prototype.endWith = function(str) {
	var reg = new RegExp(str + "$");
	return reg.test(this);
}