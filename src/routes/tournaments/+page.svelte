<script>
	/**
	 * @type {any}
	 */
	export let data;
	const { tours } = data;
	$: toursData = JSON.parse(tours);
</script>

<div class="bg-blue-dark py-8 px-8 rounded-2xl">
	<div class="flex felx-row justify-between py-4 px-8 ">
		<h1 class="text-2xl">Your Tournaments</h1>
		<a href="/tournaments/create" class="bg-blue-accent px-2 py-2">create a new</a>
	</div>
	<div class="flex flex-col gap-4">
		{#each toursData as tour}
			<div class="flex felx-row justify-between border-b border-blue-border py-4 px-8 text-xl">
				<a href={`/tournaments/${tour._id}`}>{tour.name}</a>
				<a href={`/tournaments/${tour._id}/create`} class="text-orange text-base">new edition</a>
			</div>
			{#each tour.editions as edition, idx}
				<div class="flex felx-row justify-between px-12">
					<a href={`/tournaments/${tour._id}-${idx}`}>{edition.name}</a>
				</div>
			{/each}
		{/each}
	</div>
</div>
