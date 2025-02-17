class CharacterClass {
    constructor(classType, name, armorTypes, races, weaponSpec, description = 'No information') {
        this.classType = classType;
        this.name = name;
        this.armorTypes = armorTypes;
        this.races = races;
        this.weaponSpec = weaponSpec;
        this.description = description;
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

const norseman = new Race('Norseman', [warrior, berserker], '70', '70', '50', '50', '60', '2% Crush', '3% Slash', '5% Cold', "");
const troll = new Race('Troll', [warrior, berserker], '100', '70', '35', '35', '60', '3% Slash', '2% Thrust', '5% Matter', "");
const dwarf = new Race('Dwarf', [warrior, berserker], '60', '80', '50', '50', '60', '2% Slash', '3% Thrust', '5% Body', "");
const kobold = new Race('Kobold', [warrior, berserker], '50', '50', '70', '70', '60', '5% Crush', '5% Energy', "", "");
const valkyn = new Race('Valkyn', [warrior, savage, berserker], '55', '45', '65', '75', '60', '3% Slash', '2% Thrust', '5% Cold', '5% Body');
const frostalf = new Race('Frostalf', [thane], '55', '55', '55', '60', '75', '2% Slash', '3% Thrust', '5% Spirit');
const allRaces = [norseman, troll, dwarf, kobold, valkyn, frostalf];

warrior.races.push(norseman, troll, dwarf, kobold, valkyn);
berserker.races.push(norseman, troll, dwarf, valkyn);
savage.races.push(norseman, troll, kobold, dwarf, valkyn);
thane.races.push(norseman, troll, dwarf, frostalf)
spiritmaster.races.push(norseman, kobold, frostalf);

export { warrior, berserker, savage, thane, spiritmaster, norseman, allRaces, allClasses };