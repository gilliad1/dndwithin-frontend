<script lang="ts">
    import type { Spell } from './spells';
    import { tentativeSpellList } from './stores';
    import {  Modal, Tabs, Tab, TabContent, Accordion } from "carbon-components-svelte";
    import PrepareableSpell from './prepareableSpell.svelte';

    export let open: boolean = false;
    export let spellSlots: number[];
    export let knownSpells: Spell[][];

    let remainingSpells: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    tentativeSpellList.subscribe(list => {
        remainingSpells = list.map((theseSpells, q) => spellSlots[q] - theseSpells.length)
    });

    let levelTranslation: Map<number, string> = new Map(
        Object.entries(
            {0: 'Cantrips'},
            {}
        )

    )

</script>

<Modal
    bind:open
    modalHeading="Prepare Spells"
    primaryButtonText="Confirm"
    secondaryButtonText="Cancel"
    hasScrollingContent={true}
    preventCloseOnClickOutside
    on:open
    on:close
    on:submit
>
    <Tabs>
        {#each knownSpells as _, level}
        <Tab label="{level.toString(10)} ({remainingSpells[level]}/{spellSlots[level]})"/>
        {/each}
        <svelte:fragment slot="content">
        {#each knownSpells as spells, level}
        <TabContent>
            <Accordion>
                {#each spells as spell}
                <PrepareableSpell spell={spell} maxCastings={spellSlots[level]} slotLevel={level} remainingSlots={remainingSpells[level]}/>
                {/each}
            </Accordion>
        </TabContent>
        {/each}
        </svelte:fragment>
    </Tabs>

</Modal>