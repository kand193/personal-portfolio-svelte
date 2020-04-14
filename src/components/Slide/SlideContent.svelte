<script>
  import SlideDefs from "./style/SlideDefs.svg";

  export let content = {
    title: "UNTITLED",
    period: "",
    description: "",
    logos: [],
    backgroundImage: "",
    backgroundColor: "",
    subColor: ""
  };
  export let index = 0;
</script>

<style>

</style>

<div
  id="slide-content-wrapper"
  style="background-color:{content.backgroundColor}">
  <canvas id="slide{index}" class="slide-canvas" />
</div>
