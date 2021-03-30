<?php
/**
 * The template for displaying comments.
 *
 * Displays an area that contains both
 * the current comments and the comment form.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Marianne
 * @since Marianne 1.0
 */

/**
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
?>

<hr class="separator">

<?php if ( have_comments() ) : ?>
	<?php
	$marianne_comment_class = 'comments-area';

	if ( true === marianne_get_theme_mod( 'marianne_print_comments_hide' ) ) {
		$marianne_comment_class .= ' comments-print-hide';
	}
	?>
	<div id="comments"<?php marianne_add_class( $marianne_comment_class ); ?>>
		<?php
		$marianne_comment_title = sprintf(
			esc_html(
				/* translators: %d: comment count number. */
				_n( '%d comment', '%d comments', absint( get_comments_number() ), 'marianne' )
			),
			number_format_i18n( get_comments_number() )
		);
		?>

		<h3 class="comments-title"><?php echo esc_html( $marianne_comment_title ); ?></h3>

		<?php
		// Displays pagination for comments.
		$marianne_nav_args = array(
			'prev_text' => esc_html__( 'Older comments &rsaquo;', 'marianne' ),
			'next_text' => esc_html__( '&lsaquo; Newer comments', 'marianne' ),
		);

		the_comments_navigation( $marianne_nav_args );
		?>

		<ul class="comment-list list-no-disc">
			<?php wp_list_comments(); ?>
		</ul>

		<?php the_comments_navigation( $marianne_nav_args ); ?>
	</div>
<?php endif; ?>

<?php
comment_form();
