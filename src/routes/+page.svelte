<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components-svelte/css/g100.css"
  />
</svelte:head>

<script type="ts">
    import { dummySpells, dummySpellSlots } from "$lib/dummySpells";
    import { tentativeSpellList } from '$lib/stores';
    import { Button, ToastNotification } from "carbon-components-svelte";
    import PrepareSpellsModal from "$lib/prepareSpellsModal.svelte";

    let selectedSpellList: string[][];
    tentativeSpellList.subscribe((l) => {
      selectedSpellList = l
    })

    let open = false;
  </script>
  <Button on:click={() => (open = true)}>Prepare Spells</Button>
  <PrepareSpellsModal
    open={open}
    spellSlots={dummySpellSlots}
    knownSpells={dummySpells}
  />
  <ToastNotification
  kind="success"
  title="Success"
  subtitle="Spellbook Updated"
  timeout={5000}
/>