<script lang="ts">
    import type { Spell } from './spells';
    import SpellContent from './spellContent.svelte';
    import { tentativeSpellList } from './stores';
    import { AccordionItem, NumberInput } from "carbon-components-svelte";


    export let spell: Spell;
    export let maxCastings: number;
    export let slotLevel: number;
    export let remainingSlots: number;

    let value:number = 0;
    let lastValue:number = 0;
    let numberPreparedText: string = '';
    let invalidNumberPrepared: boolean = false;

    function updatePrepared() {
        if (value >= lastValue && remainingSlots == 0) {
            invalidNumberPrepared = true
            return
        }
        invalidNumberPrepared = false

        if (value > 0) {
            numberPreparedText = `(${value})`
        } else {
            numberPreparedText = '';
        }
        tentativeSpellList.update((n) => {
            let theseSpells = n[slotLevel]
            if (value > lastValue) {
                theseSpells!.push(spell.name)
            } else {
                let toRemove = theseSpells!.indexOf(spell.name)
                if (toRemove != -1) {
                    theseSpells!.splice(toRemove, 1)
                }
            }
            n[slotLevel] = theseSpells
            return n
        })
        lastValue = value;
    }

</script>

<style></style>

<AccordionItem title="{spell.name} {numberPreparedText}">
    <SpellContent spell={spell}/><br/><br/>
    <div style="width:150px">
        <NumberInput
            bind:value
            light
            invalid={invalidNumberPrepared}
            invalidText="No more open spell slots"
            label="Castings Prepared"
            min={0} max={maxCastings}
            on:change={updatePrepared}  
        />
    </div>
</AccordionItem>