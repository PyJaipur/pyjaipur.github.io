"use strict";
var header = jQuery('.main_header'),
    header_h = header.height(),
    headerWrapper = jQuery('.header_wrapper'),
    menu = header.find('ul.menu'),
	main_li = menu.children('li'),
    html = jQuery('html'),
    body = jQuery('body'),
    footer = jQuery('.main_footer'),
    window_h = jQuery(window).height(),
    window_w = jQuery(window).width(),
    main_wrapper = jQuery('.main_wrapper'),
	main_wrapper_min = window_h-header_h-footer.height() - parseInt(jQuery('.site_wrapper').css('padding-top'), 10) - parseInt(jQuery('.site_wrapper').css('padding-bottom'), 10),
	right_sidebar = jQuery('.right-sidebar-block'),
	left_sidebar = jQuery('.left-sidebar-block'),
    site_wrapper = jQuery('.site_wrapper'),
    preloader_block = jQuery('.preloader'),
    fullscreen_block = jQuery('.fullscreen_block'),
    is_masonry = jQuery('.is_masonry'),
    grid_portfolio_item = jQuery('.grid-portfolio-item'),
    pp_block = jQuery('.pp_block'),
    fs_min = 0,
	map_h = 0;
	
function content_update() {
	"use strict";
	if (jQuery('.contacts_map').size() > 0) {
		map_h = jQuery('.contacts_map').height() + parseInt(jQuery('.contacts_map').css('margin-bottom'), 10);
	}
	main_wrapper_min = window_h-header_h-footer.height() - parseInt(jQuery('.site_wrapper').css('padding-top'), 10) - parseInt(jQuery('.site_wrapper').css('padding-bottom'), 10);
	
	if (jQuery('.contacts_map').size() > 0) {
		jQuery('.content_wrapper').css('min-height', main_wrapper_min - map_h);
	}

	fs_min = window_h-header_h-footer.height();
	main_wrapper.css('min-height', main_wrapper_min+'px');
	if (jQuery('.fullscreen_block').size() > 0) {
		jQuery('.fullscreen_block').css('min-height', fs_min+'px');
	}	
	var half1 = (81 - parseInt(main_li.children('a').css('line-height'), 10))/2 - 1,
		half2 = half1+2;
	main_li.children('a').css({'padding-top' : half1+'px', 'padding-bottom' : half2+'px',});
	if (jQuery('.contacts_map').size() > 0) {		
		if (right_sidebar.size() > 0) {		
			if (right_sidebar.height() < main_wrapper.height()-map_h) {
				right_sidebar.height(main_wrapper.height()-map_h);
			}
		}
		if (left_sidebar.size() > 0) {		
			if (left_sidebar.height() < main_wrapper.height()-map_h) {
				left_sidebar.height(main_wrapper.height()-map_h);
			}
		}		
	} else {
		if (right_sidebar.size() > 0) {
			if (right_sidebar.height() < main_wrapper.height()) {
				right_sidebar.height(main_wrapper.height());
			}
		}
		if (left_sidebar.size() > 0) {		
			if (left_sidebar.height() < main_wrapper.height()) {
				left_sidebar.height(main_wrapper.height());
			}
		}		
	}
}

function iframe16x9(container) {
	"use strict";
	container.find('iframe').each(function(){
		jQuery(this).height((jQuery(this).width()/16)*9);
	});
}

var setTop = 0;
function pp_center() {
	"use strict";
    var pp_block = jQuery('.pp_block');
    setTop = (window_h - pp_block.height()) / 2;
    pp_block.css('top', setTop + 'px');
    pp_block.removeClass('fixed');
}

function fullscrn_bg() {
	if (jQuery('.fw_background.bg_image').size() > 0) {
		jQuery('.fw_background').height(jQuery(window).height());		
	} else if (jQuery('.fw_background.bg_video').size() > 0) {
		jQuery('.fw_background').height(jQuery(window).height());
		if (jQuery(window).width() > 1024) {
			if (jQuery('.bg_video').size() > 0) {
				if (((jQuery(window).height()+150)/9)*16 > jQuery(window).width()) {				
					jQuery('iframe').height(jQuery(window).height()+150).width(((jQuery(window).height()+150)/9)*16);
					jQuery('iframe').css({'margin-left' : (-1*jQuery('iframe').width()/2)+'px', 'top' : "-75px", 'margin-top' : '0px'});
				} else {
					jQuery('iframe').width(jQuery(window).width()).height(((jQuery(window).width())/16)*9);
					jQuery('iframe').css({'margin-left' : (-1*jQuery('iframe').width()/2)+'px', 'margin-top' : (-1*jQuery('iframe').height()/2)+'px', 'top' : '50%'});
				}
			}
		} else if (jQuery(window).width() < 760) {
			jQuery('.bg_video, iframe').height(window_h-header.height()).width(window_w).css({
				'top': '0px',
				'left': '0px',
				'margin-left': '0px',
				'margin-top': '0px'
			});
		} else {
			jQuery('.bg_video, iframe').height(window_h).width(window_w).css({
				'top': '0px',
				'margin-left' : '0px',
				'left' : '0px',
				'margin-top': '0px'
			});			
		}		
	}
}

jQuery(document).ready(function () {
	"use strict";	
	if (jQuery('.main_wrapper').size() > 0) {
		var wrappertimer = setTimeout(function(){
			jQuery('.main_wrapper').animate({'opacity' : '1'}, 500);
			clearTimeout(wrappertimer);
		}, 500);
	} else if (jQuery('.fullscreen_block').size() > 0) {
		var screentimer = setTimeout(function(){
			jQuery('.fullscreen_block').animate({'opacity' : '1'}, 500);
			clearTimeout(screentimer);
		}, 500);
	}
	if (jQuery('.ribbon_wrapper').size() > 0) {
		var ribbontimer = setTimeout(function(){
			jQuery('.ribbon_wrapper').animate({'opacity' : '1'}, 1000);
			clearTimeout(ribbontimer);
		}, 500);
	}
	if (jQuery('.pf_output_container').size() > 0) {
		var pftimer = setTimeout(function(){
			jQuery('.pf_output_container').animate({'opacity' : '1'}, 1000);
			clearTimeout(pftimer);
		}, 500);
	}	
	if (jQuery('.strip-template').size() > 0) {
		var striptimer = setTimeout(function(){
			jQuery('.strip-template').animate({'opacity' : '1'}, 1000);
			clearTimeout(striptimer);
		}, 500);
	}	

	if (jQuery('.fs_controls').size() > 0) {
		var cntrlstimer = setTimeout(function(){
			jQuery('.fs_gallery_wrapper').animate({'opacity' : '1'}, 1000);
			clearTimeout(cntrlstimer);
		}, 500);
	}	
	if (jQuery('.strip-landing').size() > 0) {
		var landingtimer = setTimeout(function(){
			jQuery('.strip-landing').animate({'opacity' : '1'}, 1000);
			jQuery('.landing_logo2').animate({'opacity' : '1'}, 1000);
			clearTimeout(landingtimer);
		}, 500);
	}		
	
    if (window_w < 760 && jQuery('.module_content').size() > 0) {
		jQuery('.module_content').each(function(){
			if (jQuery.trim(jQuery(this).html()) == '') {
				jQuery(this).parent('.module_cont').addClass('empty_module');
			}
		});
	}
	if (window_w < 760 && jQuery('.module_blog_page').size() > 0) {
		iframe16x9(jQuery('.pf_output_container'));
	}	
	
    //Flickr Widget
    if (jQuery('.flickr_widget_wrapper').size() > 0) {
        jQuery('.flickr_badge_image a').each(function () {
            jQuery(this).append('<div class="flickr_fadder"></div>');
        });	
    }
	
	var contenttimer = setTimeout(function(){
		content_update();
		clearTimeout(contenttimer);
	}, 300);	
	
    // Main and Mobile Menu
    header.find('.header_wrapper').append('<a href="javascript:void(0)" class="menu_toggler"></a>');
    if (jQuery('.header_filter').size() > 0) {
        jQuery('.header_filter').before('<div class="mobile_menu_wrapper"><ul class="mobile_menu container"/></div>');
    } else {
        header.append('<div class="mobile_menu_wrapper"><ul class="mobile_menu container"/></div>');
    }
    jQuery('.mobile_menu').html(header.find('.menu').html());
    jQuery('.mobile_menu_wrapper').hide();
    jQuery('.menu_toggler').on("click", function () {
        jQuery('.mobile_menu_wrapper').slideToggle(300);
        jQuery('.main_header').toggleClass('opened');
    });
    if (pp_block.size() > 0) {
		html.addClass('pp_page');
		jQuery('.custom_bg').remove();
		jQuery('.fixed_bg').remove();		
        pp_center();
    }
	
	// Accordion & Toggle
	if (jQuery('.module_accordion').size() > 0 || jQuery('.module_toggle').size() > 0) {
		jQuery('.shortcode_accordion_item_title').on("click", function(){
			if (!jQuery(this).hasClass('state-active')) {
				jQuery(this).parents('.shortcode_accordion_shortcode').find('.shortcode_accordion_item_body').slideUp('fast',function(){
					content_update();
				});
				jQuery(this).next().slideToggle('fast',function(){
					content_update();
				});
				jQuery(this).parents('.shortcode_accordion_shortcode').find('.state-active').removeClass('state-active');
				jQuery(this).addClass('state-active');
			}
		});
		jQuery('.shortcode_toggles_item_title').on("click", function(){
			jQuery(this).next().slideToggle('fast',function(){
				content_update();
			});
			jQuery(this).toggleClass('state-active');
		});
	
		jQuery('.shortcode_accordion_item_title.expanded_yes, .shortcode_toggles_item_title.expanded_yes').each(function( index ) {
			jQuery(this).next().slideDown('fast',function(){
				content_update();
			});
			jQuery(this).addClass('state-active');
		});
	}
	
	// Counter
	if (jQuery('.shortcode_counter').size() > 0) {
		if (jQuery(window).width() > 760) {						
			jQuery('.shortcode_counter').each(function(){							
				if (jQuery(this).offset().top < jQuery(window).height()) {
					if (!jQuery(this).hasClass('done')) {
						var set_count = jQuery(this).find('.stat_count').attr('data-count');
						jQuery(this).find('.stat_temp').stop().animate({width: set_count}, {duration: 3000, step: function(now) {
								var data = Math.floor(now);
								jQuery(this).parents('.counter_wrapper').find('.stat_count').html(data);
							}
						});	
						jQuery(this).addClass('done');
						jQuery(this).find('.stat_count');
					}							
				} else {
					jQuery(this).waypoint(function(){
						if (!jQuery(this).hasClass('done')) {
							var set_count = jQuery(this).find('.stat_count').attr('data-count');
							jQuery(this).find('.stat_temp').stop().animate({width: set_count}, {duration: 3000, step: function(now) {
									var data = Math.floor(now);
									jQuery(this).parents('.counter_wrapper').find('.stat_count').html(data);
								}
							});	
							jQuery(this).addClass('done');
							jQuery(this).find('.stat_count');
						}
					},{offset: 'bottom-in-view'});								
				}														
			});
		} else {
			jQuery('.shortcode_counter').each(function(){							
				var set_count = jQuery(this).find('.stat_count').attr('data-count');
				jQuery(this).find('.stat_temp').animate({width: set_count}, {duration: 3000, step: function(now) {
						var data = Math.floor(now);
							jQuery(this).parents('.counter_wrapper').find('.stat_count').html(data);
						if (window_w > 760) {
							jQuery(this).parents('.counter_wrapper').find('.counter_body').width(jQuery(this).parents('.counter_wrapper').width() - 20 - jQuery(this).parents('.counter_wrapper').find('.stat_count').width());
						}
					}
				});
				jQuery(this).find('.stat_count');
			},{offset: 'bottom-in-view'});	
		}
	}
	
	// Tabs
	if (jQuery('.shortcode_tabs').size() > 0) {
		jQuery('.shortcode_tabs').each(function(index) {
			// GET ALL HEADERS
			var i = 1;
			jQuery(this).find('.shortcode_tab_item_title').each(function(index) {
				jQuery(this).addClass('it'+i); jQuery(this).attr('whatopen', 'body'+i);
				jQuery(this).addClass('head'+i);
				jQuery(this).parents('.shortcode_tabs').find('.all_heads_cont').append(this);
				i++;
			});

			// GET ALL BODY
			var i = 1;
			jQuery(this).find('.shortcode_tab_item_body').each(function(index) {
				jQuery(this).addClass('body'+i);
				jQuery(this).addClass('it'+i);
				jQuery(this).parents('.shortcode_tabs').find('.all_body_cont').append(this);
				i++;
			});

			// OPEN ON START
			jQuery(this).find('.expand_yes').addClass('active');
			var whatopenOnStart = jQuery(this).find('.expand_yes').attr('whatopen');
			jQuery(this).find('.'+whatopenOnStart).addClass('active');
		});

		jQuery(document).on("click", '.shortcode_tab_item_title', function(){
			jQuery(this).parents('.shortcode_tabs').find('.shortcode_tab_item_body').removeClass('active');
			jQuery(this).parents('.shortcode_tabs').find('.shortcode_tab_item_title').removeClass('active');
			var whatopen = jQuery(this).attr('whatopen');
			jQuery(this).parents('.shortcode_tabs').find('.'+whatopen).addClass('active');
			jQuery(this).addClass('active');
			content_update();
		});		
	}
	
	// Messagebox
	if (jQuery('.shortcode_messagebox').size() > 0) {
		jQuery('.shortcode_messagebox').find('.box_close').on("click", function(){
			jQuery(this).parents('.module_messageboxes').fadeOut(400);
		});
	}
	
	// Diagram
	if (jQuery('.shortcode_diagramm').size() > 0) {
		jQuery('.chart').each(function(){
			jQuery(this).css({'font-size' : jQuery(this).parents('.skills_list').attr('data-fontsize'), 'line-height' : jQuery(this).parents('.skills_list').attr('data-size')});
			jQuery(this).find('span').css('font-size' , jQuery(this).parents('.skills_list').attr('data-fontsize'));
		});

		if (jQuery(window).width() > 760) {
			jQuery('.skill_li').waypoint(function(){							
				jQuery('.chart').each(function(){
					jQuery(this).easyPieChart({
						barColor: jQuery(this).parents('ul.skills_list').attr('data-color'),
						trackColor: jQuery(this).parents('ul.skills_list').attr('data-bg'),
						scaleColor: false,
						lineCap: 'square',
						lineWidth: parseInt(jQuery(this).parents('ul.skills_list').attr('data-width'), 10),
						size: parseInt(jQuery(this).parents('ul.skills_list').attr('data-size'), 10),
						animate: 1500
					});
				});
			},{offset: 'bottom-in-view'});
		} else {
			jQuery('.chart').each(function(){
				jQuery(this).easyPieChart({
					barColor: jQuery(this).parents('ul.skills_list').attr('data-color'),
					trackColor: jQuery(this).parents('ul.skills_list').attr('data-bg'),
					scaleColor: false,
					lineCap: 'square',
					lineWidth: parseInt(jQuery(this).parents('ul.skills_list').attr('data-width'), 10),
					size: parseInt(jQuery(this).parents('ul.skills_list').attr('data-size'), 10),
					animate: 1500
				});
			});
		}
	}
	
	// Contact form
	if (jQuery('.contact_form').size() > 0) {
		jQuery("#ajax-contact-form").on("submit", function() {
			var str = $(this).serialize();		
			$.ajax({
				type: "POST",
				url: "contact_form/contact_process.php",
				data: str,
				success: function(msg) {
					// Message Sent - Show the 'Thank You' message and hide the form
					if(msg == 'OK') {
						var result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
						jQuery("#fields").hide();
					} else {
						var result = msg;
					}
					jQuery('#note').html(result);
				}
			});
			return false;
		});
	}
	
	// NivoSlider
	if (jQuery('.nivoSlider').size() > 0) {
		jQuery('.nivoSlider').each(function(){
			jQuery(this).nivoSlider({
				directionNav: false,
				controlNav: true,
				effect:'fade',
				pauseTime:4000,
				slices: 1
			});
		});
	}
	
	// Magnific Popup
	if (jQuery('.photozoom').size() > 0) {
		if (jQuery('.photozoom').parents('.photo_gallery').hasClass('photo_gallery')) {
			jQuery('.photo_gallery').each(function() {
				jQuery(this).magnificPopup({
					delegate: 'a',
					type: 'image',
					gallery: {
						enabled: true
					},
					iframe: {
						markup: '<div class="mfp-iframe-scaler">'+'<div class="mfp-close"></div>'+'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+'<div class="mfp-counter"></div>'+'</div>'
					}
				});
			});
		} else {
			jQuery('.photozoom').magnificPopup({type:'image'});
		}
	}
	
	// Fullscreen Bg
	if (jQuery('.fw_background').size() > 0) {
		fullscrn_bg()
	}
	
});

jQuery(window).resize(function () {
	"use strict";
    window_h = jQuery(window).height();
    window_w = jQuery(window).width();
	header_h = header.height();
    content_update();	
	if (jQuery('.fw_background').size() > 0) {
		fullscrn_bg()
	}
});

jQuery(window).load(function () {
	"use strict";
    content_update();
});
