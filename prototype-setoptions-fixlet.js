/**
 *  prototype-setoptions.fixlet.js
 *  
 *  Pupose: 
 *    Re-adds Ajax.Base.setOptions() method to prototype base objects of libraries >= 1.7.0.
 *  
 *  Author:
 *    Copyright (c) 2013 Matthias Lienau <matthias@mlienau.de>
 *
 *  Licensed under the MIT license:
 *    http://www.opensource.org/licenses/mit-license.php
 */

(function($) { 
  
  function getVersion(verString) {
    var v = verString.replace(/_.*|\./g, '');
    v = parseInt(v + '0'.times(4 - v.length));
    return verString.indexOf('_') > -1 ? v - 1 : v;
  }
  
  if ((typeof Prototype == 'undefined') || 
	  (getVersion(Prototype.Version) <= getVersion('1.6.0'))) {
	throw('"prototype-setoptions-fixlet.js" only applicable for Prototype JavaScript framework >= 1.7.0. Skipping fixlet code.'); 
  }

  console.info('"prototype-setoptions-fixlet.js" detected Prototype version ' + Prototype.Version + '. Applying fixlet code.');
  
  Object.extend(Ajax.Base.prototype, {
	setOptions: function(options) {
	  this.options = {
	    method: 'post', 
	    asynchronous: true, 
	    contentType: 'application/x-www-form-urlencoded',
		encoding: 'UTF-8', 
		parameters: '', 
		evalJSON: true, 
		evalJS: true
	  };  
	  Object.extend(this.options, options || {});
	}
  });

})();