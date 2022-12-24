<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	console.log('in login page', $page.data.session);
	//let formFields = ['email', 'password'];
</script>

<div class="flex flex-col w-[600px] border-2 border-blue-border px-8 py-8 gap-12 place-self-center">
	<h1 class="text-2xl font-bold">Login</h1>
	<div class="flex flex-col gap-8">
		{#if $page.data.session}
			<span class="signedInText">
				<p class="text-xl">Signed in as {$page.data.session.user?.name ?? 'User'}</p>
			</span>
			<button on:click={() => signOut()} class="bg-orange px-4 py-4">Sign out</button>
		{:else}
			<span class="notSignedInText">You are not signed in</span>
			<button on:click={() => signIn('github')} class="bg-orange px-4 py-4"
				>Sign In with your credentials</button
			>
		{/if}
	</div>
</div>
