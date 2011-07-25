/*
 * this uses jquery UI/Effects/switchClass with transitions
 * parameters are:
 * normal: starter class
 * pump: class to transform to
 * interval: time interval
 * stop: if the object hast this stopper class it will break, 
 *       you can set the class from the outside
 *       
 * usage: $('.status').pump({normal : 'someclass',
                             pump :  'otherclass',
                             interval : 400,
                             stop : 'doneclass'
                            });
 */
(function($) {
$.fn.pump = function(options){
 if($(this).hasClass(options.stop) == false){
     $(this).animate({opacity:"1.0"}, 0, function() {
			$(this).switchClass(options.normal,options.pump,options.interval,'easeOutBounce')
                                .switchClass(options.pump,options.normal,options.interval,'easeOutBounce')
                                .pump({normal: options.normal,
                                       pump: options.pump,
                                       interval: options.interval,
                                       stop: options.stop});
			return $(this);
		});
 }
}
})(jQuery);
