<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package Marianne
 * @since Marianne 1.0
 */

get_header();
?>

<div id="content" class="site-content">
	<main id="primary" class="site-primary" role="main">
		<?php if ( have_posts() ) : ?>
			<header class="archive-header">
				<h1 class="page-title">
					<?php
					printf(
						/* translators: %s: search term. */
						esc_html__( 'Search for "%s"', 'marianne' ),
						esc_html( get_search_query() )
					);
					?>
				</h1>

				<div class="archive-description">
					<p>
						<?php
						printf(
							esc_html(
								/* translators: %d: the number of search results. */
								_n(
									'%d result found:',
									'%d results found:',
									absint( $wp_query->found_posts ),
									'marianne'
								)
							),
							absint( $wp_query->found_posts )
						);
						?>
					</p>
				</div>
			</header>

			<?php
			while ( have_posts() ) {
				the_post();

				get_template_part( 'template-parts/content', 'loop' );
			}

			marianne_loop_navigation();
			?>

		<?php else : ?>

			<header class="archive-header">
				<h1 class="page-title">
					<?php
					printf(
						/* translators: %s: search term. */
						esc_html__( 'Search for "%s"', 'marianne' ),
						esc_html( get_search_query() )
					);
					?>
				</h1>

				<div class="archive-description">
					<p>
						<?php esc_html_e( 'No results', 'marianne' ); ?>
					</p>
				</div>
			</header>

			<article <?php post_class( 'entry-page' ); ?>>
				<section class="entry-content page-content">
					<p>
						<?php esc_html_e( 'Maybe try a search?', 'marianne' ); ?>
					</p>

					<?php get_search_form(); ?>
				</section>
			</article>

		<?php endif; ?>
	</main>

	<?php get_sidebar(); ?>
</div>
<?php
get_footer();
