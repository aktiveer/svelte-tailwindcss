<script>
	export let name;
</script>

<main class="text-center p-4 max-w-xs md:max-w-none my-0 mx-auto">
	<h1 class="uppercase text-6xl font-thin text-orange-600 mb-1">Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style global>
	/**
	 * Use @import directive rather than @tailwind
	 * to avoid issues in the IDE.
	*/
    @import "tailwindcss/base";
    @import "tailwindcss/components";
    @import "tailwindcss/utilities";
</style>