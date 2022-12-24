<script>
	/**
	 * @type {any}
	 */
	export let data;
	const { tour } = data;
	$: tourData = JSON.parse(tour);
</script>

<div class="flex flex-row justify-between">
	<h1 class="text-2xl">{tourData.name}</h1>
	<h2 class="text-xl">{tourData.location}</h2>
	<div class="flex flex-row justify-between gap-4">
		<span class="material-symbols-outlined"> arrow_back_ios </span>
		<p>{tourData.edition}</p>
		<span class="material-symbols-outlined"> arrow_forward_ios </span>
	</div>
</div>

<style>
	.material-symbols-outlined {
		font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
	}
</style>
