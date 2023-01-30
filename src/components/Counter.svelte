<script lang="ts">
</script>

<div
	class="max-w-sm bg-gray-100
	shadow-lg m-auto 
	flex relative 
	items-center mb-2 py-2"
>
	<input class="text-gray-600 mx-4 px-1 w-32" />
	<span class="text-lg font-bold px-4">1</span>
	<div class="ml-auto flex">
		<button class="btn bg-red-500 rounded-l ">+</button>
		<button class="btn bg-blue-500">-</button>
		<button class="btn bg-yellow-500 rounded-r">0</button>
		<button class="bg-white text-gray-600 
		rounded-full h-8 w-8 mx-4
		flex items-center justify-center font-bold px-1 py-0">X</button>
	</div>
</div>

<style>
	.btn {
		--text-opacity: 1;
		color: #fff;
		color: rgba(255, 255, 255, var(--text-opacity));
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		font-size: 1.125rem;
	}
</style>
