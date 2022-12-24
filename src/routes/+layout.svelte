<script>
	import '../app.css';
	import Header from './Header.svelte';
</script>

<div class="min-h-screen m-0 p-0 bg-midnight text-white">
	<Header />
	<div class="max-w-[1280px] mx-auto mt-12 flex flex-col">
		<slot />
	</div>
</div>
