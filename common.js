/**
 * Google Analytics
 */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-24431485-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(key,value,options){if(arguments.length>1&&String(value)!=="[object Object]"){options=jQuery.extend({},options);if(value===null||value===undefined){options.expires=-1}if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days)}value=String(value);return(document.cookie=[encodeURIComponent(key),'=',options.raw?value:encodeURIComponent(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''))}options=value||{};var result,decode=options.raw?function(s){return s}:decodeURIComponent;return(result=new RegExp('(?:^|; )'+encodeURIComponent(key)+'=([^;]*)').exec(document.cookie))?decode(result[1]):null};


/**
 * And the rest.. MIINE, ALL MINE, AHAHA
 */


function switchBg(el, src) {
	$(new Image()).hide()
		.load(function () {
			el.css('background-image', 'url('+src+')');
		})
		.error(function() {alert('err..')})
		.attr('src', src);
}

Array.prototype.rotate = function(n) {
	this.unshift.apply(this, this.splice(n, this.length));
	return this;
}

var pagebgs = [
	{lbl:'trIppY',img:'floralpat.jpg'},
	{lbl:'wOOdY',img:'wood.jpg'}
];

$(function() {

	$('#csswitch').click(function(){
		switchBg($('body'), '/images/'+pagebgs[0].img);
		var nextbg = pagebgs.rotate(1)[0];
		$(this).text(nextbg.lbl);
	});

});

