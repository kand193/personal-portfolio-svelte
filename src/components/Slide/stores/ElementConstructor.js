import { writable } from "svelte/store";

function createConstructor() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    push: render => update(n => [...n, render]),
    pop: index => update(n => n.splice(index, 1)),
    reset: () => set([]),
  };
}

export const constructor = createConstructor();
