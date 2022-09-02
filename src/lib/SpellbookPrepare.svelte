<script lang="ts">
    import type { Spell } from './spells';
    import {  Modal, Tabs, Tab, TabContent, Accordion, AccordionItem, NumberInput } from "carbon-components-svelte";

    export let open: boolean = false;
    export let allowedSpellSlots: number;
    export let knownSpells: Spell[][];


    let pickedSpells: string[][];

</script>
<style>
</style>

<Modal
    bind:open
    modalHeading="Prepare Spells"
    on:open
    on:close
    on:submit
>
    <Tabs>
        {#each knownSpells as _, k}
        <Tab label={k.toString(2)}/>
        {/each}
    </Tabs>

</Modal>