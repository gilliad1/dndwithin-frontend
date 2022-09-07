import type { Spell } from "./spells";

export let dummySpells: Spell[][] = [
    [
        {
            name: "Phantasmal Killer",
            school: "Illusion",
            components: "V,S,M",
            range:"Personal",
            duration: "5 Rounds",
            savingThrow: "wisdom",
            description: 'You create a phantasmal image of the most fearsome creature imaginable to the subject simply by forming the fears of the subject\'s subconscious mind into something that its conscious mind can visualize: this most horrible beast',
            isEvil: false
        }
    ],
    [
        {
            name: "Phantasmal Killer2",
            school: "Illusion",
            components: "V,S,M",
            range:"Personal",
            duration: "5 Rounds",
            savingThrow: "wisdom",
            description: 'You create a phantasmal image of the most fearsome creature imaginable to the subject simply by forming the fears of the subject\'s subconscious mind into something that its conscious mind can visualize: this most horrible beast',
            isEvil: false
        },
        {
            name: "Dead End",
            school: "illusion",
            components: "Verbal,Somatic,Material,",
            range: " Touch",
            duration: " 10 minutes/level (D)",
            savingThrow: "Will",
            isEvil: false,
            description: "Sprinkling spice on the ground, you complete the final step of the spell.  Upon touching your intended targets, you note with satisfaction that the area around all of you seems a little cleaner and less tread upon. \nThis spell flawlessly disguises the spoor left by the subjects, concealing their tracks, scent, and other signs of their passage with an illusion that defeats even the senses of taste and touch.  Any creature making a Search check, using the scent ability, or using the Survival skill to track a creature affected by this spell interacts with the illusion and can make a will save to disbelieve.  Creatures that succeed on the save can detect the subjects normally.  Creatures merely passing through an area the subjects passed through do not count as interacting with the illusion. Targets of this spell can make a Will save to negate it, and spell resistance applies. Material Component: A pinch of some odoriferous spice. "
          }
    ], [
        {
            name: "Shadow Conjuration",
            school: "illusion",
            components: "Verbal,Somatic,",
            range: " See text",
            duration: " See text",
            savingThrow: " Will disbelief (if interacted with); varies; see text",
            description: "You use material from the Plane of Shadow to shape quasi-real illusions of one or more creatures, objects, or forces. Shadow conjuration can mimic any sorcerer or wizard conjuration (summoning) or conjuration (creation) spell of 3rd level or lower. Shadow conjurations are actually one-fifth (20%) as strong as the real things, though creatures who believe the shadow conjurations to be real are affected by them at full strength. Any creature that interacts with the conjured object, force, or creature can make a Will save to recognize its true nature. Spells that deal damage, such as Melf's acid arrow, have normal effects unless the affected creature succeeds on a Will save. Each disbelieving creature takes only one-fifth (20%) damage from the attack. If the disbelieved attack has a special effect other than damage, that effect is only 20% likely to occur. Regardless of the result of the save to disbelieve, an affected creature is also allowed any save that the spell being simulated allows, but the save DC is set according to shadow conjuration's level (5th) rather than the spell's normal level. In addition, any effect created by shadow conjuration allows spell resistance, even if the spell it is simulating does not. Shadow objects or substances, such as obscuring mist, have normal effects except against those who disbelieve them. Against disbelievers, they are 20% likely to work. A shadow creature has one-fifth the hit points of a normal creature of its kind (regardless of whether it's recognized as shadowy). It deals normal damage and has all normal abilities and weaknesses. Against a creature that recognizes it as a shadow creature, however, the shadow creature's damage is one-fifth (20%) normal, and all special abilities that do not deal lethal damage are only 20% likely to work. (Roll for each use and each affected character separately). Furthermore, the shadow creature's AC bonuses are one-fifth as large (so a +7 bonus resulting in AC 17 would change to a +1 total bonus for a new AC of 11). A creature that succeeds on its save sees the shadow conjurations as transparent images superimposed on vague, shadowy forms. Objects automatically succeed on their Will saves against this spell. ",
            isEvil: false
        }
    ],
    [
        {
            name: "Shadow Cache",
            school: "illusion",
            components: "V,S",
            range: " Medium (100 ft. + 10 ft./level)",
            duration: " 1 minute/level",
            savingThrow: " Fortitude partial; see text",
            description: `With a flourish, you open an invisible portal.
              Plunging your arm inside, you see your hand vanish as though it were invisible.
              You can temporarily stash small items on the Plane of Shadow (DMG 152) or permanently dispose of them there.
              This spell opens a small portal to the Plane of Shadow that is invisible on the Material Plane and
              appears as a small disk on the Plane of Shadow. You can reach into the Plane of Shadow through the portal
              created by shadow cache, but only small, nonliving objects can pass entirely through the hole.
              The cache can hold up to 30 cubic feet of material, or 250 pounds. You can recover objects placed in the
              portal throughout the duration of the spell, or by casting another hadow cache later.
              A shadow cache remains stationary at the point where you create it. Items placed in a shadow cache can
              possibly be picked up by natives of the Plane of Shadow, and in any event are slowly moved by the morphic trait of the plane.
              For every 24 hours that passes, there is a 10% chance each day that objects placed on the Plane of Shadow with shadow cache
              are gone (either moved or taken). The spell cannot be cast on the Plane of Shadow itself, but only on planes coexistent with the Plane of Shadow.`,
              isEvil: false
          },
          {
            name: "Deceptive Facade",
            school: "illusion",
            components: "Verbal,Somatic,",
            range: " Touch",
            duration: " 10 minutes/level (D)",
            savingThrow: " Will negates (harmless, object) or Will disbelief (if interacted with, everyone else)",
            description: "After an instant to lock the appropriate image in your mind, your touch brings it to life, spreading a new image across the canvas of reality. Deceptive facade allows you to alter the appearance of another being or object. When cast on another creature, it functions as disguise self,except that it can affect a target other than yourself. When cast on an inanimate object or a structure, the spell allows you to alter the object's visible characteristics. You might change its color, make it appear to be made of a different material or substance, increase or decrease its apparent size by up to 10 percent, or modify other cosmetic details. Deceptive facade does not alter any other sensory properties of the target. A creature that interacts with the glamer can make a Will save to recognize the illusion, just as with disguise self. ",
            isEvil: true
        }
    ], [
        {
            name: "Modify Memory",
            school: "Enchantment", 
            savingThrow: "Will negates",
            duration: "Permanent",
            range: "self",
            components: "V, S",
            description: `You reach into the subject's mind and modify as many as 5 minutes of its memories in one of the following ways.
                Eliminate all memory of an event the subject actually experienced. This spell cannot negate charm, geas/quest, suggestion, 
                or similar spells. Allow the subject to recall with perfect clarity an event it actually experienced. For instance, it could
                recall every word from a 5-minute conversation or every detail from a passage in a book.
                Change the details of an event the subject actually experienced. Implant a memory of an event the subject never experienced.
                Casting the spell takes 1 round. If the subject fails to save, you proceed with the spell by spending as much as 5 minutes
                (a period of time equal to the amount of memory time you want to modify) visualizing the memory you wish to modify in the subject.
                If your concentration is disturbed before the visualization is complete, or if the subject is ever beyond the spell's range during this time, the spell is lost.
                
                
                A modified memory does not necessarily affect the subject's actions, particularly if it contradicts the creature's natural inclinations. An illogical modified memory,
                such as the subject recalling how much it enjoyed drinking poison, is dismissed by the creature as a bad dream or a memory muddied by too much wine.
                More useful applications of modify memory include implanting memories of friendly encounters with you (inclining the subject to act favorably toward you),
                changing the details of orders given to the subject by a superior, or causing the subject to forget that it ever saw you or your party.
                The DM reserves the right to decide whether a modified memory is too nonsensical to significantly affect the subject.`,
            isEvil: false

          }
    ]
];

export let dummySpellSlots: number[] = [6, 9, 9, 7, 6, 6];