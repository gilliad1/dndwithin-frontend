<script lang="ts">
    export let school: string;
    export let components: string;
    export let range: string;
    export let duration: string;
    export let description: string;
    export let isEvil = false;
</script>

<b>School:</b> {school}<br/>
<b>Components:</b> {components}<br/>
<b>Range:</b> {range}<br/>
<b>Duration:</b> {duration}<br/>
{#if isEvil}
<b>Evil: </b> {isEvil}<br/>
{/if}
<b>Description:</b> {description}