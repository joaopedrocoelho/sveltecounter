<script lang="ts">
  import Counter from '../components/Counter.svelte';
  import { sum, nameList } from '../store';
  let counters = [Counter];
  let currentSum: number;
  let currentNameList: string[] = [];

  sum.subscribe((value) => {
    currentSum = value;
  });

  nameList.subscribe((value) => {
    currentNameList = value.filter(Boolean);
  });

  const addCounter = () => {
    counters = [...counters, Counter];
  };
</script>

<div class="flex m-auto flex-col max-w-sm">
  <h1 class="text-6xl text-center mb-6">Multiple Counter</h1>
  {#each counters as Counter, i}
    <Counter index={i} />
  {/each}
  <button
    on:click={addCounter}
    class="max-w-sm w-full mt-2 m-auto text-center
 bg-green-400 rounded text-white cursor-pointer"
  >
    new counter
  </button>
  <p class="flex ">title list: {currentNameList}</p>
  <p class="flex">sum of count: {currentSum}</p>
</div>
