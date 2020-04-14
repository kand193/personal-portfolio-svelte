<script>
  import SlideContent from "./SlideContent.svelte";

  export let width = "100%";
  export let height = "100%";
  export let contents = [];

  const currentIndex = 0;

  const onMouseWheel = e => {};
</script>

<style>
  #slide-wrapper {
    width: var(--width);
    height: var(--height);
    overflow-y: hidden;
  }
</style>

<div
  id="slide-wrapper"
  on:mousewheel={onMouseWheel}
  style="--width:{width}; --height:{height}">
  {#each contents as content, i}
    <SlideContent {content} index={i + 1} />
  {/each}
</div>
