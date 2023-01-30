import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const sum: Writable<number> = writable(0);

export const nameList: Writable<string[]> = writable([]);
