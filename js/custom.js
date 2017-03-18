$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});
$(function(){
	
	/* plaseholder */
	if($.browser.msie){ 
		   $('input[placeholder]').each(function(){  
				
				var input = $(this);        
				
				$(input).val(input.attr('placeholder'));
						
				$(input).focus(function(){
					 if (input.val() == input.attr('placeholder')) {
						 input.val('');
					 }
				});
				
				$(input).blur(function(){
					if (input.val() == '' || input.val() == input.attr('placeholder')) {
						input.val(input.attr('placeholder'));
					}
				});
			});
			
		};
		if($.browser.msie){ 
		   $('textarea[placeholder]').each(function(){  
				
				var input = $(this);        
				
				$(input).val(input.attr('placeholder'));
						
				$(input).focus(function(){
					 if (input.val() == input.attr('placeholder')) {
						 input.val('');
					 }
				});
				
				$(input).blur(function(){
					if (input.val() == '' || input.val() == input.attr('placeholder')) {
						input.val(input.attr('placeholder'));
					}
				});
			});
			
		};
		
	$('input, textarea').each(function(){
			var placeholder = $(this).attr('placeholder');
			$(this).focus(function(){ $(this).attr('placeholder', ''); return false;});
			$(this).focusout(function(){			 
				$(this).attr('placeholder', placeholder);
				return false;
			});
		});
	
	/* plaseholder */
	
	/* tabs */	
	$('.js-tabs-link').click(function(){
		 $(this).parents('.js-tabs').find('.js-tab-cont').addClass('hide-tab');
		 $(this).parents('.js-tabs').find('.js-tabs-item').removeClass('active'); 
		 var id = $(this).attr('href');
		 $(id).removeClass('hide-tab');
		 $(this).parent().addClass('active'); 
		 return false;
	 });
	$('.js-tabs2-link').click(function(){
		 $(this).parents('.js-tabs2').find('.js-tab2-cont').addClass('hide-tab');
		 $(this).parents('.js-tabs2').find('.js-tabs2-item').removeClass('active'); 
		 var id = $(this).attr('href');
		 $(id).removeClass('hide-tab');
		 $(this).parent().addClass('active'); 
		 return false;
	 });
	/* tabs */
	
	/* custom forms */	
		$('.js-styled').styler();		
	/* custom forms */
	
	/* custom scroll */
	$(window).load(function(){
		$(".js-scroll").mCustomScrollbar({});
	});
	/* custom scroll */
	
	/* lightbox, popup */	
	$('.fancybox').fancybox();	
	/* lightbox, popup */
    
	/* open info */
    $('.js-open-info').click(function(){
		 $('.box-drop-info').fadeIn(0);
		 return false;
	 });
     $(document).click(function(e){
		if ($(e.target).parents().filter('.box-drop-info:visible').length != 1) {
			$('.box-drop-info').fadeOut();		
		}
	});
	 /* open info */
    
	/* open nav */
    $('.js-open-user-menu').click(function(){
		 $(this).parents('.box-user').find('.box-user__drop').fadeToggle(0);
		 return false;
	 });
     $(document).click(function(e){
		if ($(e.target).parents().filter('.box-user__drop:visible').length != 1) {
			$('.box-user__drop').fadeOut();		
		}
	});
	 /* open nav */
	 
	 /* open filter */    
    $('.js-open-filter').click(function(){
		$('body').toggleClass('for-open-filter');
		 return false;
	 });
	/* open filter */    
    
	/* open category */    
    $('.js-open-category').click(function(){
		$(this).parent().find('.box-category__drop').slideToggle();
        $('body').find('.box-description__drop').slideUp();
		 return false;
	 });
     $(document).click(function(e){
		if ($(e.target).parents().filter('.box-category__drop:visible').length != 1) {
			$('.box-category__drop').fadeOut();		
		}
	});
	 /* open category */  
	 
	 /* open description */      
    $('.js-open-description').click(function(){
		$(this).parent().find('.box-description__drop').slideToggle();
        $('body').find('.box-category__drop').slideUp();
		 return false;
	 });
    $(document).click(function(e){
		if ($(e.target).parents().filter('.box-description__drop:visible').length != 1) {
			$('.box-description__drop').fadeOut();		
		}
	});    
    $('.box-description__btn').click(function(){
		$(this).parents('.box-description__drop').slideUp();
		 return false;
	 });
	 /* open description */ 
    
    
	/* open sublist category */ 
     $('.list-category .with-drop .list-category__link').click(function(){
		$(this).parent().find('.list-category-level2').slideToggle();
         $(this).parent().siblings().find('.list-category-level2').slideUp();
		 return false;
	 });
    $('.list-category-level2 .with-drop .list-category__link').click(function(){
		$(this).parent().find('.list-category-level3').slideToggle();
         $(this).parent().siblings().find('.list-category-level3').slideUp();
		 return false;
	 });
	/* open sublist category */ 
    
	
	/* open list field */ 
     $('.field-new-name__input').focus(function(){
		$(this).parent().find('.field-new-name__drop').slideDown();
		 return false;
	 });
     $('.field-new-name__input').focusout(function(){
		$(this).parent().find('.field-new-name__drop').slideUp();
		 return false;
	 });
	 /* open list field */ 
    
	/* window add new */ 
    $('.js-open-add-new').click(function(){
		$('body').toggleClass('for-open-edit');
		 return false;
	 });
	$('.close-add-new').click(function(){
		$('body').removeClass('for-open-edit');
		 return false;
	 });
	/* window add new */ 
    
	/* open table row */ 
    $('.table-vitamin__tr').click(function(){
		$(this).find('.table-vitamin-drop').slideToggle();
		 return false;
	 });
	/* open table row */ 
    
	/* dropdown info */ 
    $('.box-vitamins__line').click(function(){
		$(this).parent().find('.drop-info-vitamin').fadeToggle(0);
		 return false;
	 });
    $(document).click(function(e){
		if ($(e.target).parents().filter('.drop-info-vitamin:visible').length != 1) {
			$('.drop-info-vitamin').fadeOut();		
		}
	});
    $('.drop-info-vitamin__close').click(function(){
		$(this).parents('.drop-info-vitamin').fadeToggle(0);
		 return false;
	 });
	/* open dropdown info */ 
    
    
    /* remove compare item */
    $('.short-list-compare__delete').click(function(){
		$(this).parents('.short-list-compare__item').fadeOut(0);
		 return false;
	 });
	/* remove compare item */
    
	/* open form for new password */
    $('.js-reestablish').click(function(){
		$(this).parents('.form-login').fadeOut(0);
        $(this).parents('.window-login').find('.form-reestablish').fadeIn(0);
		 return false;
	 });
    $('.js-back-login').click(function(){
		$(this).parents('.form-reestablish').fadeOut(0);
        $(this).parents('.window-login').find('.form-login').fadeIn(0);
		 return false;
	 });
	/* open form for new password */
    
    
	/* select category*/	
	$(".js-link-category").click(function(){
        var name = $(this).html();
        $(this).parents('.box-category').find('.js-open-category').html(name);
        $(this).parents('.box-category__drop').slideUp(100);
		$(this).parents('.list-category').find('.active').removeClass('active'); 
		$(this).parent().addClass('active');
        return false;
    });
	/* select category*/	
	
	/* click on plus, open dropdown info*/
    $('.js-icon-plus').click(function(){
		$(this).parent().find('.box-add__drop').slideToggle(100);
		 return false;
	 });
    $(document).click(function(e){
		if ($(e.target).parents().filter('.box-add__drop:visible').length != 1) {
			$('.box-add__drop').fadeOut();		
		}
	});
	/* click on plus, open dropdown info*/
    
	/* show all comments */
    $('.button-all-comments').click(function(){
		$(this).parent().find('.old-comment').slideToggle(0);
        $(this).parent().find('.js-scroll').mCustomScrollbar("update");
		 return false;
	 });
    
     $('.js-open-comment').click(function(){
		$(this).parents('.js-parent-comments').find('.drop-info-diary').toggleClass('open');
		return false;
	 });
     $(document).click(function(e){
		if ($(e.target).parents().filter('.drop-info-diary:visible').length != 1) {
			$('.drop-info-diary').removeClass('open');
            $('.js-open-comment').removeClass('active');
		}
	});
	 
	 /* show all comments */
    
	/* user dropdown */
    $('.status-user__link').click(function(){
		$(this).parent().find('.drop-field-status').fadeToggle(200);
		 return false;
	 });
    $('.section-info-user__link').click(function(){
		$(this).parent().find('.drop-field-status').fadeToggle(200);
		 return false;
	 });
     $(document).click(function(e){
		if ($(e.target).parents().filter('.drop-field-status:visible').length != 1) {
			$('.drop-field-status').fadeOut(200);		
		}
	});
     $('.drop-field-status__btn').click(function(){
		$(this).parent().fadeOut(200);
		 return false;
	 });
	 /* user dropdown */
    
	 /* choose mood */
    $('.list-select-moods__link').click(function(){
        $(this).parents('.list-select-moods').find('.active').removeClass('active');
		$(this).parent().addClass('active');
		 return false;
	 });
     /* choose mood */
	
	/* context menu */	
    $('.context-menu__link-open').click(function(){
        $(this).parents('.table__tr').siblings().find('.context-menu__drop').fadeOut(200);
        $(this).parents('.table__tr').siblings().find('.context-menu__link-open').removeClass('active');  
        $(this).parent().find('.context-menu__drop').fadeToggle();
        $(this).toggleClass('active');
		 return false;
	 });
     $('.list-context-menu__link').click(function(){
        $(this).parents('.context-menu__drop').fadeOut();
        $(this).removeClass('active');
		 return false;
	 });
    $(document).click(function(e){
		if ($(e.target).parents().filter('.context-menu__cont:visible').length != 1) {
			$('.context-menu__drop').fadeOut(200);		
            $('.context-menu__link-open').removeClass('active');
		}
	});
	/* context menu */	
    
	/* add class for two last row */	
    $('.table__tr:last-child').addClass('last');
    $('.table__tr:last-child').prev().addClass('last');
	/* add class for two last row */	
    
	/* close notification */	
    $('.box-notification__close').click(function(){
        $(this).parents('.box-notification').slideUp(200);
		 return false;
	 });
	/* close notification */	
    
    
	/* list select */
    $('.select-set__link').click(function(){
        $(this).parents('.select-set').find('.list-select-set').slideToggle(), 
        $('.select-set__link').toggleClass('active'); 
        return false;
    });
		
	$(".list-select-set__link").click(function(){
        var name = $(this).html();
        $(".select-set__link").html(name);
        $(".list-select-set").slideUp(100);
		$('.list-select-set__item').removeClass("active"); 
		$('.list-select-set__link').removeClass("active"); 
		$(this).parent().addClass("active");
        return false;
    });
	
	$(document).click(function(e){
		if ($(e.target).parents().filter('.list-select-set:visible').length != 1) {
			$('.list-select-set').hide();
		}
	});
	/* list select */
    
	/* open sublist category */
    $(".list-category-right__link").click(function(){
		$(this).parent().find('.list-category-right').slideToggle(200);
        $(this).parent().toggleClass('active');
        return false;
    });
	/* open sublist category */
    
	/* open comments */
    $(".box-info-diary__item").click(function(){
		$(this).toggleClass('active');
        return false;
    });
	/* open comments */
    
});


(function($) {
$(function() {
	
	/* select all checkbox */ 
    $('.js-tab-cont').each(function() {
       
        var checked = false;
        $(this).find('.selall').click(function() {
            if (checked) {
                $(this).parents('.js-tab-cont').find(':checkbox').each(function() {
                    $(this).prop('checked', false).trigger('refresh');
                });
                checked = false;
            } else {
                $(this).parents('.js-tab-cont').find(':checkbox').each(function() {
                    $(this).prop('checked', true).trigger('refresh');
                });
                checked = true;
            }
            return false;
        });
    
    });
	/* select all checkbox */ 
    
})
})(jQuery)  


var handler2 = function(){
	
	/* min-height for main content */ 
	var height_content = $(window).height();	
	$('.content-right__cont').css({'min-height':height_content-68});
	/* min-height for main content */ 
    
	/* max-height for table */ 
	var height_window = $(window).height();	
	$('.box-scroll-table.h7').css({'max-height':height_window-88});
	/* max-height for table */ 
	
}
$(window).bind('load', handler2);
$(window).bind('resize', handler2);


var handler3 = function(){ 
	
	
	/* fixed blocks */ 
    var offset_top = $('.box-user').offset();
	$(window).scroll(function() {  
		if ($(window).scrollTop() > offset_top.top) {
	       $('.box-user').addClass("fixed");
		} else{
		  $('.box-user').removeClass("fixed") 
		}
    });
		 
    $(window).load(function() {  
        if ($(window).scrollTop() > offset_top.top) {
            $('.box-user').addClass("fixed");
        } else{
            $('.box-user').removeClass("fixed") 
        }
    });     
    
    var offset_top2 = $('.fixed-for-scroll').offset();
	$(window).scroll(function() {  
		if ($(window).scrollTop() > offset_top2.top) {
	       $('.fixed-for-scroll').addClass("fixed");
		} else{
		  $('.fixed-for-scroll').removeClass("fixed") 
		}
    });
		 
    $(window).load(function() {  
        if ($(window).scrollTop() > offset_top2.top) {
            $('.fixed-for-scroll').addClass("fixed");
        } else{
            $('.fixed-for-scroll').removeClass("fixed") 
        }
    }); 
	/* fixed blocks */ 
     
}
$(window).bind('load', handler3);
$(window).bind('resize', handler3);

/*======================
price. 
======================*/

$(document).ready(function(){
	$('#click_grn').on('click',function(){
		if($(this).data('click')==0){
			$('#price_wrapper_rub').css('display','none');
			$('#price_wrapper_dol').css('display','none');
			$('#price_wrapper_grn').css('display','block');

			$(this).data('click','0');
		}
		else{
			$(this).data('click','0');
		} 
	});
});

$(document).ready(function(){
	$('#click_dol').on('click',function(){
		if($(this).data('click')==0){
			$('#price_wrapper_rub').css('display','none');
			$('#price_wrapper_dol').css('display','block');
			$('#price_wrapper_grn').css('display','none');
			
			$(this).data('click','0');
		}
		else{
			$(this).data('click','0');
		} 
	});
});

$(document).ready(function(){
	$('#click_rub').on('click',function(){
		if($(this).data('click')==0){
			$('#price_wrapper_rub').css('display','block');
			$('#price_wrapper_dol').css('display','none');
			$('#price_wrapper_grn').css('display','nona');
			
			$(this).data('click','0');
		}
		else{
			$(this).data('click','0');
		} 
	});
}); 
// Color change and underlining for links when clicking
$(document).ready(function(){
	$("#click_grn").click(function(){
		$("#click_grn").addClass("active_li");
		$("#click_rub").removeClass("active_li");
		$("#click_dol").removeClass("active_li");
	});
});

$(document).ready(function(){
	$("#click_dol").click(function(){
		$("#click_grn").removeClass("active_li");
		$("#click_rub").removeClass("active_li");
		$("#click_dol").addClass("active_li");
	});
});

$(document).ready(function(){
	$("#click_rub").click(function(){
		$("#click_grn").removeClass("active_li");
		$("#click_rub").addClass("active_li");
		$("#click_dol").removeClass("active_li");
	});
});

//popup message when clicking
$("#button_popup_message").on("click", function(e){
	e.preventDefault();
	$(".popup_message").addClass("popup_message_non-opacity");
});