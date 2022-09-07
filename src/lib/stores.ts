import { writable } from 'svelte/store';

export const spellsToPrepare = writable([]);
export const tentativeSpellSlots = writable<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
export const tentativeSpellList = writable<string[][]>([[],[],[],[],[],[],[],[],[],[]])
//export const tentativeSpellList = writable(new Map<number, string[]>());