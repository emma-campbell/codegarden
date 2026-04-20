<script lang="ts">
  import { page } from "$app/stores";
  import clsx from "clsx";

  const navItems: Record<string, { name: string }> = {
    "/": { name: "home" },
    "https://spookyemma.com": { name: "blog" },
  };

  $: pathname = $page.url.pathname.includes("/blog/")
    ? "/blog"
    : $page.url.pathname || "/";
</script>

<aside class="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0">
  <div class="lg:sticky lg:top-20">
    <nav
      id="nav"
      class="flex flex-row sm:flex-col items-start relative px-6 md:px-0 pb-0 fade scroll-pr-6 md:relative"
    >
      <div
        class="font-heading font-bold space-x-2 md:space-x-0 text-2xl sm:text-[40px] flex flex-row md:flex-col items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6"
      >
        {#each Object.entries(navItems) as [path, { name }] (path)}
          <a
            href={path}
            class={clsx(
              "transition-all hover:text-white/95 flex align-middle leading-extra-tight sm:leading-tight",
              { "text-white/60": path !== pathname }
            )}
          >
            {name}
          </a>
        {/each}
      </div>
    </nav>
  </div>
</aside>
