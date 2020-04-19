<script>
  import { onMount } from "svelte";

  import { renderer } from "../SlideRenderer.js";

  export let text = "";
  export let index = 0;

  const render = (ctx, offsetY) => {};

  onMount(() => {
    renderer.push(render);
  });
</script>

<slot />
