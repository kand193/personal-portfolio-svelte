<script>
  import { onMount } from "svelte";

  import { renderer } from "./SlideRenderer.js";
  import SlideContent from "./SlideContent.svelte";

  let canvas;
  const FPS = 60;

  const currentIndex = 0;
  let offsetY = 0;

  export let contents = [];

  onMount(() => {
    const ctx = canvas.getContext("2d");

    let frame = 0;
    const fpsInterval = 1000 / FPS;
    let then = Date.now();
    let now = 0;
    let elapsed = 0;

    (function loop() {
      frame = requestAnimationFrame(loop);
      now = Date.now();
      elapsed = now - then;

      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        // Put your drawing code here
        $renderer.forEach(r => r(ctx, offsetY));
      }
    })();

    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>

<canvas class="slide-canvas" width="1330" height="530" bind:this={canvas}>
  {#each contents as content, i}
    <SlideContent {content} index={i + 1} />
  {/each}
</canvas>
