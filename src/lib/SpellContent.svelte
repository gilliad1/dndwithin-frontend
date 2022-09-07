<script lang="ts">
    import type { Spell } from "./spells";
    export let spell: Spell;
</script>

<style>
    h6 {
        display: inline;
    }
</style>


<h6>School:</h6> {spell.school}<br/>
<h6>Components:</h6> {spell.components}<br/>
<h6>Range:</h6> {spell.range}<br/>
<h6>Duration:</h6> {spell.duration}<br/>
{#if spell.isEvil}
<h6>Evil:</h6> {spell.isEvil}<br/>
{/if}
<h6>Description:</h6> {spell.description}
