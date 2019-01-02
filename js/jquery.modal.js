(function($, window, document, undefined){

	$.fn.modal = function(userOptions){
		
		var options = $.extend({}, $.fn.modal.defaults, userOptions);
		
		$.fn.modal.defaults = {
			
			
			
		};
		
		
		
		return this.each(function(){
			
			var btn = $(this),
			modal = btn.next(),
			closeBtn = $(".close");
		
		
			btn.on("click", function(){
				modal.show();
			});
			
			closeBtn.on("click", function(){
				modal.hide();
			});
			
			modal.on("click", function(event){
				var target = $(event.target);
				if (target.is(modal)) {
					modal.hide();
				}
				
			});

		});
	};
	
	
	
	
})(jQuery, window, document);