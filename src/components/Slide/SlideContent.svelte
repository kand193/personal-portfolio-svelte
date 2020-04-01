<script>
  import SlideDefs from "./style/SlideDefs.svg";

  export let title = "UNTITLED";
  export let period = "";
  export let description = "";
  export let logos = [];
  export let backgroundImage = "";
  export let backgroundColor = "";

  let titleFirst = title;
  let titleSecond = "";

  const splittedTitle = title.split(" ");
  if (splittedTitle.length > 2) {
    titleFirst = splittedTitle.slice(0, 2).join(" ");
    titleSecond = splittedTitle.slice(2).join(" ");
  }

  let isHovered = false;
  let hoverX = 0;
  let hoverY = 0;

  const onMouseEnter = e => {
    isHovered = true;
    hoverX = e.clientX;
    hoverY = e.clientY;
  };

  const onMouseLeave = e => {
    isHovered = false;
  };
</script>

<style>
  #slide-content-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
  }

  #content-svg {
    position: relative;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    max-width: 1330px;
    max-height: 530px;
    transform: translate(-50%, -50%);
  }

  #shadowed-text {
    font: 900 93px "Roboto";
    fill: #e9c26a;

    animation: squiggly-text 0.34s linear infinite;
  }

  #title-text {
    font: 900 93px "Roboto";
    fill: url(#imaging-text);
    z-index: 1000;
  }

  #hover-circle {
    fill: url(#imaging-text);
    pointer-events: none;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
    animation-name: shirink-circle;
    animation-timing-function: cubic-bezier(0.1, 0.9, 0, 0);
  }

  #hover-circle.active {
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-name: expand-circle;
    animation-timing-function: cubic-bezier(0.9, 0, 1, 1);
  }
</style>

<div id="slide-content-wrapper" style="--background-color:{backgroundColor}">
  <svg id="content-svg">
    {@html SlideDefs}
    <defs>
      <pattern
        id="imaging-text"
        patternUnits="userSpaceOnUse"
        width="1330"
        height="530">
        <image xlink:href={backgroundImage} width="1330" height="530" />
      </pattern>
    </defs>
    <text id="shadowed-text">
      <tspan x="12px" y="270px">{titleFirst}</tspan>
      <tspan x="12px" y="375px">{titleSecond}</tspan>
    </text>
    <text
      id="title-text"
      on:mouseenter={onMouseEnter}
      on:mouseleave={onMouseLeave}>
      <tspan x="0px" y="250px">{titleFirst}</tspan>
      <tspan x="0px" y="355px">{titleSecond}</tspan>
    </text>
    <circle
      id="hover-circle"
      class:active={isHovered}
      cx={`${hoverX}px`}
      cy={`${hoverY}px`}
      r="0px" />
  </svg>
</div>
