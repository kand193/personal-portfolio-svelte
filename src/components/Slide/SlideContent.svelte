<script>
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

<Title text={content.title} />
