
;window.Drillz = function(el, options) {
  this.options = this.extend( {}, this.options );
  var tmp = el.getAttribute('data-drillz-options');
  if(tmp != null)
    var tmp2 = tmp.replace(/[{}]/g, "").split(',');
  if(tmp2.length > 0){
    for(x in tmp2){
      var s = tmp2[x].split(':');
      this.options[s[0].trim()] = s[1].trim();
    }
  }
  this.extend( this.options, options );
  this.menuWrap = el;
  if(console)console.log(this.menuWrap.getElementsByClassName('drilldown'));
  this.init();
};
window.Drillz.prototype.options = {
  resizeSpeed: 200,
  itemPause: 50
};
window.Drillz.prototype.init = function(){
  if(console)console.log('drillz init');
};
window.Drillz.prototype.initEvents = function(){

};
window.Drillz.prototype.addBreadcrumb = function(){

};
window.Drillz.prototype.openMenu = function(){

};
window.Drillz.prototype.closeMenu = function(){

};
window.Drillz.prototype.extend = function( a, b ) {
  for( var key in b ) {
    if( b.hasOwnProperty( key ) ) {
      a[key] = b[key];
		}
	}
	return a;
};
window.Drillz.prototype.check3d = function(){
  if (!window.getComputedStyle) {
      return false;
  }
  var el = document.createElement('p'),
      has3d,
      transforms = {
          'webkitTransform':'-webkit-transform',
          'OTransform':'-o-transform',
          'msTransform':'-ms-transform',
          'MozTransform':'-moz-transform',
          'transform':'transform'
      };
  // Add it to the body to get the computed style.
  document.body.insertBefore(el, null);
  for (var t in transforms) {
      if (el.style[t] !== undefined) {
          el.style[t] = "translate3d(1px,1px,1px)";
          has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
      }
  }
  document.body.removeChild(el);
  return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
};
window.Drillz.prototype.whichTransitionEvent = function(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }
    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
};
