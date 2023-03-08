<script lang="ts">
  import Header from "../lib/components/Header.svelte";
  import Footer from "../lib/components/Footer.svelte";
  import LinkElement from "../lib/components/LinkElement.svelte";
  import Pointer from "$lib/components/Pointer.svelte";

  export let data;

  const links: any = data.links;
</script>

<Pointer />

<div class="center-content d-flex justify-content-md-center">
  <div class="container">
    <div class="head d-flex justify-content-md-center">
      <Header />
    </div>

    <div class="tree d-flex justify-content-md-center">
      <ul class="linktree">
        {#each links as link}
          <LinkElement name={link.name} link={link.link} cl={link.color} />
        {/each}
      </ul>
    </div>
  </div>
</div>

<Footer />
