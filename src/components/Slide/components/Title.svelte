<script>
  import { onMount } from "svelte";

  import { renderer } from "../stores/ElementRenderer.js";
  import { constructors } from "../stores/ElementConstructor.js";

  export let text = "";
  export let imageSrc = "";
  export let index = 0;

  const texts = text.split("\n");
  let pattern;
  let img;

  const constructor = ctx => {
    img = new Image();
    img.onload = function() {
      pattern = ctx.createPattern(img, "repeat");
    };
    img.src = imageSrc;
  };

  const render = (ctx, options) => {
    const baseHeight = options.canvasHeight * index;

    ctx.font = "900 93px Roboto";
    ctx.fillStyle = pattern;
    ctx.fillText(text, 0, baseHeight + options.canvasHeight / 2);
  };

  onMount(() => {
    renderer.push(render);
    constructors.push(constructor);
  });
</script>

<slot />
