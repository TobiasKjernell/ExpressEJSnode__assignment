class CharacterClass {
    constructor(classType, name, armorTypes, races, weaponSpec, description = 'No information') {
        this.classType = classType;
        this.name = name;
        this.armorTypes = armorTypes;
        this.races = races;
        this.weaponSpec = weaponSpec;
        this.description = description;
        this.idType = 'classes';
    }
}

class Race {
    constructor(name, acceptedClasses, str, con, dex, qui, piety, startResist1, startResist2, startResist3, startResist4, description = 'No Information') {
        this.name = name;
        this.acceptedClasses = acceptedClasses;
        this.str = str;
        this.con = con;
        this.dex = dex;
        this.qui = qui;
        this.piety = piety;
        this.startResist1 = startResist1;
        this.startResist2 = startResist2;
        this.startResist3 = startResist3;
        this.startResist4 = startResist4;
        this.description = description;
        this.idType = 'races'
    }
}

const spiritmaster = new CharacterClass('Range', 'Spiritmaster', ['Cloth'], [], ['Staff'], `Spiritmasters are a primary casting class in the Midgardian realm. They derive their power from the Queen of the Norse underworld, Hel. Her divine grace provides the Spiritmaster with the ability to summon the spirits of Midgard soldiers from the underworld to the surface to aid in the continuing battle against the infidels of Albion and Hibernia.
They carry with them the ability to debuff and control large crowds of enemies with their area effect mesmerize spells. They also have the ability to buff their spirit fighters.

Spiritmasters have 3 specialization paths with differing levels of utility depending upon the situation. For solo PvE, the summoning specialization line is excellent for quick leveling. WIth a fully buffed pet a summoning spec SM can "solo" many epic mobs. Summoning specialized Spiritmasters are considered very weak in RvR. For solo RvR, the darkness specialization line is the most appropriate. The darkness line grants multiple area-effect mesmerization spells, a DEX/QUI debuff, and the lifetap spec nuke which is the primary damage spell. The suppression specialization works very well in group based PvE and RvR due to the high damage point-blank area-effect spell and the STR/CON debuff and is used to form the basis of "bomb groups". Suppression Spritmasters will not find much success with solo RvR.`);
const warrior = new CharacterClass('Melee', 'Warrior', ['Cloth', 'Leather', 'Studded', 'Chain'], [], ['Sword', 'Axe', 'Hammer', 'Two-Handed Weapon', 'Shield', 'Throw'], "The fighting class of Midgard, Warriors are provided strength by Tyr, the Norse god of battle. Warriors have no magical abilities; instead they are the masters of weapons and armor. Able to use one and two handed weapons equally well, Warriors are also skilled with shield and parry. Courageous in battle, Warriors strike fear into their enemies and protect their weaker realm members from harm. They have little fear of other fighters, but an enemy mage can be their downfall.")
const berserker = new CharacterClass('Melee', 'Berserker', ['Cloth', 'Leather', 'Studded'], [], ['Sword', 'Hammer', 'Axe', 'Two Handed Weapon', 'Left-Handed Weapon', 'Throw'], `Patrons of Modi, the Norse god of battle-rage, Berserkers are light tanks who eschew heavy armor and rely on wielding two weapons at once. Their heavy training in weapons helps them deal powerful amounts of damage when in battle. They have the ability to call upon their god, Modi, and transform into a giant beast. This is called "Berserk" and makes each hit that lands a critical hit. It comes with the sacrifice of all defensive abilities, but is so powerful and frightening in battle that it is considered worth the price to this fierce fighter.`)
const savage = new CharacterClass('Melee', 'Savage', ['Cloth', 'Leather', 'Studded'], [], ['Hand-To-Hand', 'Hammer', 'Sword', 'Axe', 'Two Handed Weapon'], `The Savage is a studded-armor wearing fighter who disdains normal weapons in favor of hand-to-hand combat. Savages aren't interested in mastering the art of complicated weapons - instead they affix simple sharp or bladed weapons to their hands and swing away.
Savages follow the Valkyn god of war, Kelgor, who represents bloodlust and the battlefield. Kelgor has been adopted by the Norse gods, especially Modi and Odin, as a brother-in-arms so long as the Valkyn continue assisting the Norse in their fight against the Morvaltar.
The Savage receives a weapon skill called "Hand to Hand". In general, the Savage's hand to hand weapons attach to his hands and can deal out slashing or thrusting damage. H2H is a dual-weapon skill, in that it allows the Savage to wield two weapons at the same time. However, it is set up differently from the dual wield/left axe skills that are currently in the game. H2H will always attack with the right hand by default. When the skill "fires", then the Savage will hit with both hands in that round. Please note that at higher levels, Savages have the chance of hitting more than twice per round.
In addition to a number of different weapon types, the Savage can learn special H2H combat styles as he specs up in the H2H spec - some of these combat styles allow the Savage to attack more than one enemy in the same round. The Savage also can specialize in a set of combat abilities called "Savagery", which allow the Savage to modify his combat chances, such as chance to evade, parry, buff attack speed or DPS, and also convert hit points to endurance. Most Savagery abilities take a percentage of your base hitpoints when they wear off or are refreshed.`);
const thane = new CharacterClass('Melee', 'Thane', ['Cloth', 'Leather', 'Studded', 'Chain'], [], ['Sword, Hammer', 'Axe', 'Two Handed Weapons', 'Shield'], `A Thane is a worshiper of the Norse God of Thunder and Lightning. Thor is probably the most famous of all the Norse gods know for his protection of Midgard using Mjolnir his mighty hammer, and the power of the storms rage to defeat any danger to Midgard. The character of a Thane draws upon both the Magic of Lightning and the Strength of Melee combat to defend Midgard. Thanes belong to the Viking Profession, but are part of the Hybrid grouping of characters; they attack their enemies through the use of Lightning when their foe is at range, and their Strength and Melee Weapons once they reach their target. Thanes are eventually able to use the best armor available to Midgard, and any Midgard weapon save the Spear, Hand-to-hand Devices of the Savages and Thrown Weapons.`);
const allClasses = [warrior, berserker, savage, thane, spiritmaster];

const norseman = new Race('Norseman', [warrior, berserker, thane], '70', '70', '50', '50', '60', '2% Crush', '3% Slash', '5% Cold', "", `The Norse are the common men and women of Midgard. Tall and strong, they love the snow and ice of the native land. Norsemen are very adaptable, and can be found in almost any position of the armies of Midgard, from the stealthy Shadowblades attacking the enemy by surprise, to the stalwart Healers keeping their compatriots alive and well.`);
const troll = new Race('Troll', [warrior, berserker, thane], '100', '70', '35', '35', '60', '3% Slash', '2% Thrust', '5% Matter', "", `To some, the Trolls are furious creatures of myth and legend... yet to others, the Trolls are stalwart allies and faithful comrades of war. It all depends on which side of the battlefield you're on.

Huge, strong and slow, Trolls dominate the battlefield with their great physical strength, although a few Trolls have also been known to dabble in the primitive mystical arts.`);
const dwarf = new Race('Dwarf', [warrior, berserker, thane], '60', '80', '50', '50', '60', '2% Slash', '3% Thrust', '5% Body', "", `Steadfast in their devotion to the elder gods and the finer ales, the Dwarves of Haggerfel are the backbone of Midgard's armies, from the healers tending to the fallen, to the hunters picking off foes from the trees, to the berserkers wading into battle with fierce abandon. Although Dwarves originally hailed from underneath the earth, today they live alongside the other races of Midgard.`);
const kobold = new Race('Kobold', [warrior, berserker], '50', '50', '70', '70', '60', '5% Crush', '5% Energy', "", "", `Mischievous, quick, and small, the Kobolds often act as scouts for the armies of Midgard, although many also have an affinity for the mystical runic arts. A few even serve as warriors on the front lines of battle, where their great speed and dexterity make up for their diminutive size.`);
const valkyn = new Race('Valkyn', [warrior, savage, berserker], '55', '45', '65', '75', '60', '3% Slash', '2% Thrust', '5% Cold', '5% Body', `Hailing from the recently re-discovered island of Aegir, the Valkyn have revolted from the oppressive rule of the Morvaltar and now fight alongside their new allies from Midgard to liberate their home.

The Valkyn, descending from the Morvalt, are a lithe, hunched cat-like race that are tribal in nature and still close to their primitive, pre-Norse gods.`);
const frostalf = new Race('Frostalf', [thane, spiritmaster], '55', '55', '55', '60', '75', '2% Slash', '3% Thrust', '5% Spirit', "",`The origins of the Frostalf date back many generations to the time of the twin Svartalfar princes, Hauk and Enar, who, when their parents both died suddenly, were left to determine who should rule. One, and only one, could rule the kingdom, but they did not know which twin was the firstborn and therefore the rightful ruler. Into this situation came a human stranger. Being unfriendly to strangers, the Svartalfar meant to imprison the traveler. But the stranger suggested that if he could but speak with the princes, he could offer a solution to their dilemma - a trial of combat and magical craftsmanship - in exchange for his freedom. However, the stranger was treacherous, and sabotaged Enar's artifact during the competition. With further treachery, he carefully laid the blame on Hauk. In the ensuing disruption, Hauk left the kingdom with a few of his followers. The stranger disappeared with the kingdom's treasured artifacts, and Enar became the ruler, but was terribly remorseful at having falsely accused his brother. However, despite Enar's pleas, Hauk decided to remain where he had settled, in Niflheim - a place of darkness, bitter cold and icy fogs and mists. It was the lowest level of the universe. Generations later, Hauk's descendents came to be known as the Frostalfs, and they were recently discovered by a band of dwarves seeking a way to bolster the forces of Midgard. Realizing that their fate was still bound with that of Midgard, the Frostalfs have agreed to come to the aid of the Realm and fight side by side with Midgard's forces. With naturally high Piety they are especially suitable as Spiritmasters, Runemasters, Bonedancer, Healers and Shamans.`);
const allRaces = [norseman, troll, dwarf, kobold, valkyn, frostalf];

warrior.races.push(norseman, troll, dwarf, kobold, valkyn);
berserker.races.push(norseman, troll, dwarf, valkyn);
savage.races.push(norseman, troll, kobold, dwarf, valkyn);
thane.races.push(norseman, troll, dwarf, frostalf)
spiritmaster.races.push(norseman, kobold, frostalf);

export { warrior, berserker, savage, thane, spiritmaster, norseman, allRaces, allClasses };