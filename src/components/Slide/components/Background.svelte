<script>
  import { onMount } from "svelte";

  import { renderer } from "../SlideRenderer.js";

  export let color = "white";
  export let index = 0;

  const render = (ctx, options) => {
    const baseHeight = options.canvasHeight * index;

    ctx.fillStyle = color;
    ctx.fillRect(0, baseHeight, options.canvasWidth, options.canvasHeight);
  };

  onMount(() => {
    renderer.push(render);
  });
</script>

<slot />
