<script>
  import Background from "./components/Background.svelte";
  import Title from "./components/Title.svelte";

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

<Background color={content.backgroundColor} {index} />
<Title text={content.title} imageSrc={content.backgroundImage} {index} />
