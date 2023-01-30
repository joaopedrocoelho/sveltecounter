<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { sum, nameList } from '../store';
  export let index: number = 0;
  let count: number = 0;
  let name: string = 'new';
  let counterRef: HTMLDivElement;

  const increment = () => {
    sum.update((n) => n + 1);
    count++;
  };

  const decrement = () => {
    if (count > 0) {
      sum.update((n) => n - 1);
      count--;
    }
  };

  const reset = () => {
    sum.update((n) => n - count);
    count = 0;
  };

  const removeCounter = () => {
    sum.update((n) => n - count);
    counterRef.remove();
    nameList.update((n) => {
      let newList = [...n];
      newList.splice(index, 1);
      return newList;
    });
  };

  onMount(() => {
    nameList.update((n) => {
      let newList = [...n];
      newList[index] = name;
      return newList;
    });
  });

  onDestroy(() => {
    nameList.update((n) => {
      let newList = [...n];
      newList.splice(index, 1);
      return newList;
    });
  });

  const onChangeList = (event: Event) => {
    nameList.update((n) => {
      let newList = [...n];
      newList[index] = (event.target as HTMLInputElement).value;

      return newList;
    });
  };
</script>

<div
  class="max-w-sm bg-gray-100
	shadow-lg m-auto 
	flex relative 
	items-center mb-4 py-2"
  bind:this={counterRef}
>
  <input value={name} on:input={onChangeList} class="text-gray-600 mx-4 px-1 w-32" />
  <span class="text-lg font-bold px-4">{count}</span>
  <div class="ml-auto flex">
    <button on:click={increment} class="btn bg-red-500 rounded-l">+</button>
    <button on:click={decrement} class="btn bg-blue-500">-</button>
    <button on:click={reset} class="btn bg-yellow-500 rounded-r">0</button>
    <button
      on:click={removeCounter}
      class="bg-white text-gray-600 
		rounded-full h-8 w-8 mx-4
		flex items-center justify-center font-bold px-1 py-0">X</button
    >
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
