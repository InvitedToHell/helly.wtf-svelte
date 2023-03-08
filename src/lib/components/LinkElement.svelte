<script lang="ts">
export let link: string, name: string, cl: string; 
</script>

<style>
    a:hover {
        color: var(--cl);
    }
</style>

<li>
    <a style="--cl: {cl}" href={link} target="_blank" rel= "noopener noreferrer">{name}</a>
</li>