<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-full">
	<header class=" bg-teal-300 shadow">
		<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-bold tracking-tight text-teal-900">TAWOW</h1>
		</div>
	</header>
	<main>
		<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
			{@render children()}
		</div>
	</main>
</div>
