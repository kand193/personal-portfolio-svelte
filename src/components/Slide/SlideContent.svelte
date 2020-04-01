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

  let titleFirst = content.title;
  let titleSecond = "";
  const splittedTitle = content.title.split(" ");
  if (splittedTitle.length > 2) {
    titleFirst = splittedTitle.slice(0, 2).join(" ");
    titleSecond = splittedTitle.slice(2).join(" ");
  }

  let isHovered = false;
  let hoverX = 0;
  let hoverY = 0;

  const onMouseEnter = e => {
    isHovered = true;
    hoverX = e.offsetX;
    hoverY = e.offsetY;
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
    font-size: 93px;
    font-weight: 900;

    animation: squiggly-text 0.34s linear infinite;
  }

  #title-text {
    font-size: 93px;
    font-weight: 900;
    fill: url(#imaging-text);
    z-index: 1000;
  }

  #period-text {
    font-size: 35px;
    font-weight: 600;
    letter-spacing: -2px;
  }

  #description-text,
  #logo-text {
    font-size: 20px;
    fill: gray;
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

<div
  id="slide-content-wrapper"
  style="background-color:{content.backgroundColor}">
  <svg id="content-svg">
    {@html SlideDefs}
    <defs>
      <pattern
        id="imaging-text"
        patternUnits="userSpaceOnUse"
        width="1330px"
        height="530px">
        <image xlink:href={content.backgroundImage} width="1330" height="530" />
      </pattern>
    </defs>
    <text id="shadowed-text" style="fill:{content.subColor}">
      <tspan x="12px" y="240px">{titleFirst}</tspan>
      <tspan x="12px" y="345px">{titleSecond}</tspan>
    </text>
    <text
      id="title-text"
      on:mouseenter={onMouseEnter}
      on:mouseleave={onMouseLeave}>
      <tspan x="0px" y="220px">{titleFirst}</tspan>
      <tspan x="0px" y="325px">{titleSecond}</tspan>
    </text>

    <text id="period-text" x="0px" y="100px" style="fill:{content.subColor}">
      #{('000' + index).substr(index.toString().length)} / {content.period}
    </text>
    <text id="description-text" width="20px">
      {#each content.description.split('\n') as desc, i}
        <tspan x="0" y={400 + i * 25}>{desc}</tspan>
      {/each}
    </text>

    <text id="logo-text" x="600px" y="400px">Developed using</text>
    <line
      x1="780px"
      y1="385px"
      x2="780px"
      y2="455px"
      style="stroke:gray;stroke-width:2" />

    {#each content.logos as logo, i}
      <image
        href={logo}
        width="70px"
        height="70px"
        x="{800 + i * 110}px"
        y="385px" />
    {/each}

    <circle
      id="hover-circle"
      class:active={isHovered}
      cx={`${hoverX}px`}
      cy={`${hoverY}px`}
      r="0px" />
  </svg>
</div>
