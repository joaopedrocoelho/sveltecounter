<script lang="ts">
	import Counter from '../components/Counter.svelte';
</script>

<div class="flex m-auto flex-col max-w-sm">
	<h1 class="text-6xl text-center mb-6">Multiple Counter</h1>
	<Counter />
	<button
		class="max-w-sm w-full mt-2 m-auto text-center
 bg-green-400 rounded text-white cursor-pointer"
	>
		new counter
	</button>
	<p class="flex ">title list:</p>
	<p class="flex">sum of count:</p>
</div>
