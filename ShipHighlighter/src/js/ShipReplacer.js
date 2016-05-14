(function() {
	"use strict";
	
	window.ShipReplacer = {
			_database:{},
			
			
			init:function() {
				this._database = window.ShipDatabase;
			},
			
			runReplacer:function($elements) {
				$elements.addClass('highlighted-ship')
						.each(function() {
							if($(this).find("div").length > 0) {
								ShipReplacer.replaceAt($(this).find("div"))
							} else {
								ShipReplacer.replaceAt($(this))
							}
						})
			},
			
			replaceAt:function($element) {
				var jpName = $element.text();
				var readableName = ShipReplacer._database.getShipName(jpName);
				
				if(readableName != null && readableName != jpName) {
					$element.text(readableName + " / " + jpName)
				}
			}
	}
})()