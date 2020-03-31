<script>
  import { Router, Link, Route } from "svelte-routing";

  import Main from "routes/Main.svelte";

  export let url = "";
</script>

<Router {url}>
  <Route path="/">
    <Main />
  </Route>
</Router>
