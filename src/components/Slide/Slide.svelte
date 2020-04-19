<script>
  import { onMount } from "svelte";

  import { renderer } from "./stores/ElementRenderer.js";
  import { constructors } from "./stores/ElementConstructor.js";
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

    $constructors.forEach(c => c(ctx));

    (function loop() {
      frame = requestAnimationFrame(loop);
      now = Date.now();
      elapsed = now - then;

      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        // Put your drawing code here

        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();

        const options = {
          canvasWidth: canvas.width,
          canvasHeight: canvas.height,
          offsetY
        };

        $renderer.forEach(render => {
          render(ctx, options);
          ctx.restore();
        });
      }
    })();

    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>

<canvas class="slide-canvas" bind:this={canvas}>
  {#each contents as content, i}
    <SlideContent {content} index={i} />
  {/each}
</canvas>
