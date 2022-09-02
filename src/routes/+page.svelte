<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components-svelte/css/g100.css"
  />
</svelte:head>

<script type="ts">
    import { Button, Modal, Tabs, Tab, TabContent, Accordion, AccordionItem, NumberInput } from "carbon-components-svelte";
    import SpellContent from "$lib/SpellContent.svelte"
    let open = false;
    let allSpells: string[][] = [[], [], [], [], [], [], [], [], [], []];
  </script>
  
  <Button on:click={() => (open = true)}>Create database</Button>
  {#each Array(9) as _, w}
    <h4>Level {w}</h4>
    <Accordion>
      {#each allSpells[w] as spell}
        <AccordionItem title={spell}>
          This is {spell}
        </AccordionItem>
      {/each}
    </Accordion>
  {/each}
  
  <Modal
    bind:open
    modalHeading="Prepare Spells"
    primaryButtonText="Close"
    on:open
    on:close
    on:submit
  >
  <Tabs>
    {#each Array(9) as _, i}
    <Tab label="Level {i}" />
    {/each}
    <svelte:fragment slot="content">
    {#each Array(9) as _, j}
    <TabContent>
      <Accordion>
        {#each Array(5) as _, i}
        <AccordionItem title="Spell {i}">
          <SpellContent
            school="illusion"
            components="V,S,M"
            range="Personal"
            duration="5 Rounds"
            description="Your subject breaks out in a cold sweat as a burning fever sinks into its mind.
            A creature subjected to this spell feels a spiking fever accompanied by vertigo and a phantasmagoric 
            confusion of the senses. The target first gets a Will save to recognize the dream as unreal. If that save fails,
            the creature becomes exhausted while the spell lasts. A successful Fortitude save lessens the condition to fatigued.
            
            Regardless of the outcome of the Fortitude save, the subject has difficulty focusing its mind on spellcasting. Each time it attempts to cast, concentrate on, or direct a spell, it must first succeed on a Concentration check 
            (DC equal to this spell's save DC + the level of the spell being used). When this spell ends (whether because
            its duration ends, you dismiss it, or it is dispelled), the subject is confused for 1 round afterward.
            If the subject of fever dream is already under the effect of a luminous swarm spell (see page 110),
            the Will save DC of this spell (as well as the DC for Concentration checks required by this spell) increases by 2.
            If the subject of fever dream is already under the effect of a prickling torment spell (see page 113)
            ,the Fortitude save DC of this spell increases by 2."
          />
          <br/><br/><h6>Casts Prepared:</h6>
          <div style="width:150px"><nobr><NumberInput min={1} value={1}/><Button size="field">Add</Button></nobr></div> 
        </AccordionItem>
        {/each}
      </Accordion>
    </TabContent>
    {/each}
    </svelte:fragment>
  </Tabs>
  
  </Modal>


  