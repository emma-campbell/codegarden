<script lang="ts">
  import clsx from "clsx";

  export let title: string | undefined = undefined;
  export let styled = false;
  export let position: "left" | "right" = "left";
  // position retained for API parity with previous React component
  void position;
</script>

<div class="bg-white/10 px-2 py-2 rounded-md mt-2 mb-2">
  {#if title}
    <div class="mb-2 text-base italic text-opacity-100">{title}</div>
  {/if}
  <div
    class={clsx({
      "text-sm italic text-white/60 [&>span[data-rehype-pretty-code-fragment]]:!text-[11px]":
        styled,
    })}
  >
    <slot />
  </div>
</div>
