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
	{lbl:'w00dY',img:'wood.jpg'},
	{lbl:'trIppY',img:'floralpat.jpg'},
	{lbl:'aWeS0Me',img:'awesome.jpg'},
	{lbl:'BuBBLeS',img:'bubbles.jpg'},
];

$(function() {

	var actbg = $.cookie('actbg');
	if(actbg != null) {
		for(var i=0; i<pagebgs.length; i++) {
			if(pagebgs[i].img == actbg) {
				switchBg($('body'), '/images/'+pagebgs[i].img);
				var nextbg = pagebgs.rotate(i+1)[0];
				$('#csswitch').text(nextbg.lbl);
				break;
			}
		}
	}

	$('#csswitch').click(function(){
		switchBg($('body'), '/images/'+pagebgs[0].img);
		$.cookie('actbg', pagebgs[0].img, {path:'/'});
		var nextbg = pagebgs.rotate(1)[0];
		$(this).text(nextbg.lbl);
	});

});

