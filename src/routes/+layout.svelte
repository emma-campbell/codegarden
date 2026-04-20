<script lang="ts">
  import "../app.css";
  import { inject } from "@vercel/analytics";
  import { onMount } from "svelte";
  import Navigation from "$lib/components/navigation.svelte";
  import Footer from "$lib/components/footer.svelte";

  onMount(() => {
    inject();
  });
</script>

<Navigation />
<main class="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
  <slot />
  <Footer />
</main>
