<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import {
    PUBLIC_POSTHOG_KEY,
    PUBLIC_POSTHOG_API_HOST,
    PUBLIC_POSTHOG_UI_HOST,
  } from "$env/static/public";
  import posthog from "posthog-js";
  import Navigation from "$lib/components/navigation.svelte";
  import Footer from "$lib/components/footer.svelte";

  let initialized = false;

  onMount(() => {
    if (!PUBLIC_POSTHOG_KEY) return;
    posthog.init(PUBLIC_POSTHOG_KEY, {
      api_host: PUBLIC_POSTHOG_API_HOST,
      ui_host: PUBLIC_POSTHOG_UI_HOST,
      capture_pageview: false,
    });
    initialized = true;
  });

  afterNavigate(() => {
    if (initialized) posthog.capture("$pageview");
  });
</script>

<Navigation />
<main class="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
  <slot />
  <Footer />
</main>
