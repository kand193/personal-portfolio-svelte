<script>
  import SlideContent from "./SlideContent.svelte";

  const currentIndex = 0;

  export let width = "100%";
  export let height = "100%";
  export let contents = [];
</script>

<style>
  #slide-wrapper {
    width: var(--width);
    height: var(--height);
    overflow-y: hidden;
  }
</style>

<div id="slide-wrapper" style="--width:{width}; --height:{height}">
  {#each contents as content, i}
    <SlideContent {content} index={i + 1} />
  {/each}
</div>
