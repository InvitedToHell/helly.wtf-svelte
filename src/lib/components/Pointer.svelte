<script lang="ts">
  import { onMount } from "svelte";


let pointer: any;

function move(event: any) {
    const { clientX, clientY } = event;
  
  pointer.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 2500, fill: "forwards" });
}

onMount(() => {
        document.body.onpointermove = move;
    })

</script>
<div id="blob" class="blur" bind:this={pointer}></div>
<div id="blur" class="blur"></div>
