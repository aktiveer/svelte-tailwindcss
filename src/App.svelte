<script>
	export let name;
</script>

<!-- Start Here -->
<main class="flex flex-col justify-center items-center text-center p-4 max-w-xs md:max-w-none md:h-screen mx-auto">
	<h1 class="animate-pulse uppercase text-6xl font-thin text-amber-600 my-12">Hello {name}!</h1>
	<p class="my-4">Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<p class="my-4">Visit the <a href="https://tailwindcss.com/docs/">Tailwind CSS docs</a> to learn more about utility first styling.</p>
</main>

<style global lang="postcss">
	
	/**
	 * Use @import directive rather than @tailwind
	 * to avoid issues in the IDE.
	*/
	@import "tailwindcss/base";
    @import "tailwindcss/components";
    @import "tailwindcss/utilities";

	/**
	 * Tailwind recommends adding via a @layer directive.
	 * However, the Svelte compiler will issue a warning.
	 * Until this is resolved we'll use it without @layer
	 * as postcss will still bundle this properly.
	 */
	a {
		@apply underline decoration-amber-600 text-sky-700; 
	}
	
</style>