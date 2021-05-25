<?php
/**
 * Template part for displaying posts in the loop.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Marianne
 * @since Marianne 1.0
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'entry-loop' ); ?>>
	<header class="entry-header loop-header">
		<?php if ( is_sticky() ) : ?>
			<div class="entry-meta entry-sticky text-secondary">
				<?php esc_html_e( 'Sticky post', 'marianne' ); ?>
			</div>
		<?php endif; ?>

		<?php
		$marianne_post_info_args = array();

		if ( 'enabled' === marianne_get_theme_mod( 'marianne_loop_author_name' ) ) {
			$marianne_post_info_args[] = 'author_name';
		} elseif ( 'with_prefix' === marianne_get_theme_mod( 'marianne_loop_author_name' ) ) {
			$marianne_post_info_args[] = 'author_name';
			$marianne_post_info_args[] = 'author_prefix';
		}

		if ( true === marianne_get_theme_mod( 'marianne_loop_author_avatar' ) ) {
			$marianne_post_info_args[] = 'author_avatar';
		}

		if ( true === marianne_get_theme_mod( 'marianne_loop_post_time' ) ) {
			$marianne_post_info_args[] = 'time';
		}

		marianne_post_info( 'entry-meta text-secondary', $marianne_post_info_args );
		?>

		<?php marianne_the_categories( 'entry-meta entry-categories text-secondary' ); ?>

		<h3 class="entry-title loop-title">
			<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
		</h3>

		<?php
		$marianne_thumbnail_class = 'entry-thumbnail loop-thumbnail';

		if ( true === marianne_get_theme_mod( 'marianne_global_images_expand' ) ) {
			$marianne_thumbnail_class .= ' entry-thumbnail-wide';
		}

		marianne_the_post_thumbnail( $marianne_thumbnail_class, array( 'link' ) );
		?>
	</header>

	<?php
	$marianne_single_classes  = 'entry-content loop-content';
	$marianne_single_classes .= ' text-align-' . marianne_get_theme_mod( 'marianne_content_text_align' );

	if ( true === marianne_get_theme_mod( 'marianne_content_hyphens' ) ) {
		$marianne_single_classes .= ' text-hyphens';
	}
	?>
	<section <?php marianne_add_class( $marianne_single_classes, false ); ?>>
		<a href="<?php the_permalink(); ?>">
			<?php the_excerpt(); ?>
		</a>
	</section>

	<?php marianne_loop_comments( 'entry-footer loop-footer text-secondary' ); ?>
</article>
