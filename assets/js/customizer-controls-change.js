( function( $ ) {
	"use strict";

	$( document ).ready( function( $ ) {
		/**
		 * Show/hide controls in the Theme Customizer
		 * depending on other control values.
		 */

		// The speed of animations.
		var speed = 200;

		// Show the front page title displaying if a front page is set.
		if ( $( "#_customize-input-show_on_front-radio-page:checked" ).val() ) {
			$( "#customize-control-static_front_page_title" ).show();
		} else {
			$( "#customize-control-static_front_page_title" ).hide();
		}

		$( "#customize-control-show_on_front" ).change( function () {
			if ( $( "#_customize-input-show_on_front-radio-page:checked" ).val() ) {
				$( "#customize-control-static_front_page_title" ).show();
			} else {
				$( "#customize-control-static_front_page_title" ).hide();
			}
		} );

		// Show sidebar parameters if a sidebar is set.
		if ( $( "#_customize-input-marianne_global_layout-radio-two-column-left-sidebar:checked" ).val() ) {
			$( "#customize-control-marianne_global_sidebar_width" ).show();
			$( "#customize-control-marianne_global_sidebar_margin" ).show();
		} else {
			$( "#customize-control-marianne_global_sidebar_width" ).hide();
			$( "#customize-control-marianne_global_sidebar_margin" ).hide();
		}

		$( "#customize-control-marianne_global_layout" ).change( function () {
			if ( $( "#_customize-input-marianne_global_layout-radio-two-column-left-sidebar:checked" ).val() ) {
				$( "#customize-control-marianne_global_sidebar_width" ).show( speed );
				$( "#customize-control-marianne_global_sidebar_margin" ).show( speed );
			} else {
				$( "#customize-control-marianne_global_sidebar_width" ).hide( speed );
				$( "#customize-control-marianne_global_sidebar_margin" ).hide( speed );
			}
		} );

		// Show the right font list depending on the selected font family.
		if ( $( "#_customize-input-marianne_global_font_family-radio-sans-serif:checked" ).val() ) {
			$( "#customize-control-marianne_global_fonts_sans_serif" ).show();
			$( "#customize-control-marianne_global_fonts_serif" ).hide();
			$( "#customize-control-marianne_global_fonts_monospace" ).hide();
		} else if ( $( "#_customize-input-marianne_global_font_family-radio-serif:checked" ).val() ) {
			$( "#customize-control-marianne_global_fonts_sans_serif" ).hide();
			$( "#customize-control-marianne_global_fonts_serif" ).show();
			$( "#customize-control-marianne_global_fonts_monospace" ).hide();
		} else if ( $( "#_customize-input-marianne_global_font_family-radio-monospace:checked" ).val() ) {
			$( "#customize-control-marianne_global_fonts_sans_serif" ).hide();
			$( "#customize-control-marianne_global_fonts_serif" ).hide();
			$( "#customize-control-marianne_global_fonts_monospace" ).show();
		}

		$( "#customize-control-marianne_global_font_family" ).change( function () {
			if ( $( "#_customize-input-marianne_global_font_family-radio-sans-serif:checked" ).val() ) {
				$( "#customize-control-marianne_global_fonts_sans_serif" ).show();
				$( "#customize-control-marianne_global_fonts_serif" ).hide();
				$( "#customize-control-marianne_global_fonts_monospace" ).hide();
			} else if ( $( "#_customize-input-marianne_global_font_family-radio-serif:checked" ).val() ) {
				$( "#customize-control-marianne_global_fonts_sans_serif" ).hide();
				$( "#customize-control-marianne_global_fonts_serif" ).show();
				$( "#customize-control-marianne_global_fonts_monospace" ).hide();
			} else if ( $( "#_customize-input-marianne_global_font_family-radio-monospace:checked" ).val() ) {
				$( "#customize-control-marianne_global_fonts_sans_serif" ).hide();
				$( "#customize-control-marianne_global_fonts_serif" ).hide();
				$( "#customize-control-marianne_global_fonts_monospace" ).show();
			}
		} );

		// Show Round Logo when a logo is set.
		if ( $( "#customize-control-custom_logo .remove-button" ).length > 0 ) {
			$( "#customize-control-marianne_header_logo_round" ).show();
		} else {
			$( "#customize-control-marianne_header_logo_round" ).hide();
		}

		$( "#customize-control-custom_logo" ).on( "DOMSubtreeModified", function () {
			if ( $( "#customize-control-custom_logo .remove-button" ).length > 0 ) {
				$( "#customize-control-marianne_header_logo_round" ).show( speed );
			} else {
				$( "#customize-control-marianne_header_logo_round" ).hide( speed );
			}
		} );

		// Show Search button text only when the search button is enabled.
		if ( $( "#_customize-input-marianne_header_menu_search" ).is( ":checked" ) ) {
			$( "#customize-control-marianne_header_menu_search_text" ).show();
		} else {
			$( "#customize-control-marianne_header_menu_search_text" ).hide();
		}

		$( "#_customize-input-marianne_header_menu_search" ).change( function () {
			if ( $( this ).is( ":checked" ) ) {
				$( "#customize-control-marianne_header_menu_search_text" ).show( speed );
			} else {
				$( "#customize-control-marianne_header_menu_search_text" ).hide( speed );
			}
		} );

		// Show the author prefix when the author's name is displayed.
		if ( $( "#_customize-input-marianne_loop_author_name" ).is( ":checked" ) ) {
			$( "#customize-control-marianne_loop_author_name_prefix" ).show();
		} else {
			$( "#customize-control-marianne_loop_author_name_prefix" ).hide();
		}

		$( "#_customize-input-marianne_loop_author_name" ).change( function () {
			if ( $( this ).is( ":checked" ) ) {
				$( "#customize-control-marianne_loop_author_name_prefix" ).show( speed );
			} else {
				$( "#customize-control-marianne_loop_author_name_prefix" ).hide( speed );
			}
		} );

		// Show the author info and prefix options when the position is set to header.
		if ( $( "#_customize-input-marianne_post_author_position-radio-top" ).is( ":checked" ) ) {
			$( "#customize-control-marianne_post_author_info" ).show();

			if ( $( "#_customize-input-marianne_post_author_info-radio-name" ).is( ":checked" )
		 		|| $( "#_customize-input-marianne_post_author_info-radio-name_avatar" ).is( ":checked" )
			) {
				$( "#customize-control-marianne_post_author_name_prefix" ).show();
			} else {
				$( "#customize-control-marianne_post_author_name_prefix" ).hide();
			}
		} else {
			$( "#customize-control-marianne_post_author_info" ).hide();
			$( "#customize-control-marianne_post_author_name_prefix" ).hide();
		}

		$( "#customize-control-marianne_post_author_position" ).change( function () {
			if ( $( "#_customize-input-marianne_post_author_position-radio-top" ).is( ":checked" ) ) {
				$( "#customize-control-marianne_post_author_info" ).show( speed );

				if ( $( "#_customize-input-marianne_post_author_info-radio-name" ).is( ":checked" )
			 		|| $( "#_customize-input-marianne_post_author_info-radio-name_avatar" ).is( ":checked" )
				) {
					$( "#customize-control-marianne_post_author_name_prefix" ).show( speed );
				} else {
					$( "#customize-control-marianne_post_author_name_prefix" ).hide( speed );
				}
			} else {
				$( "#customize-control-marianne_post_author_info" ).hide( speed );
				$( "#customize-control-marianne_post_author_name_prefix" ).hide( speed );
			}
		} );

		$( "#customize-control-marianne_post_author_info" ).change( function () {
			if ( $( "#_customize-input-marianne_post_author_info-radio-avatar" ).is( ":checked" ) ) {
				$( "#customize-control-marianne_post_author_name_prefix" ).hide( speed );
			} else {
				$( "#customize-control-marianne_post_author_name_prefix" ).show( speed );
			}
		} );

		// Show the author avatar and biography if the position is set to bottom.
		if ( $( "#_customize-input-marianne_post_author_position-radio-bottom" ).is( ":checked" ) ) {
			$( "#customize-control-marianne_post_author_avatar" ).show();
			$( "#customize-control-marianne_post_author_bio" ).show();
		} else {
			$( "#customize-control-marianne_post_author_avatar" ).hide();
			$( "#customize-control-marianne_post_author_bio" ).hide();
		}

		$( "#customize-control-marianne_post_author_position" ).change( function () {
			if ( $( "#_customize-input-marianne_post_author_position-radio-bottom" ).is( ":checked" ) ) {
				$( "#customize-control-marianne_post_author_avatar" ).show( speed );
				$( "#customize-control-marianne_post_author_bio" ).show( speed );
			} else {
				$( "#customize-control-marianne_post_author_avatar" ).hide( speed );
				$( "#customize-control-marianne_post_author_bio" ).hide( speed );
			}
		} );

		// Show Phone Type only when a phone number is typed.
		if ( $( "#_customize-input-marianne_social_phone" ).val().length > 0 ) {
			$( "#customize-control-marianne_social_phone_type" ).show();
		} else {
			$( "#customize-control-marianne_social_phone_type" ).hide();
		}

		$( "#_customize-input-marianne_social_phone" ).on( "input", function () {
			if ( $( this ).val().length > 0 ) {
				$( "#customize-control-marianne_social_phone_type" ).show( speed );
			} else {
				$( "#customize-control-marianne_social_phone_type" ).hide( speed );
			}
		} );
	} );
} )( jQuery, wp.customize );
