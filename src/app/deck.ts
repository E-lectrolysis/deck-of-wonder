export type Card = {
    name: string;
    description: string;
}

/**
 * Class for simulating the deck i guess
 */
export class Deck {
    private cards: Card[];
    //chances are this could be made modular if someone wanted to expand upon this for whatever reason
    constructor() {
        this.cards = [
            {name:"Beginning", description:"Your hit point maximum and current hit points increase by 2d10. Your hit point maximum remains increased in this way for the next 8 hours."},
            {name:"Champion", description:"You gain a +1 bonus to weapon attack and damage rolls. This bonus lasts for 8 hours."},
            {name:"Chancellor", description:"Within 8 hours of drawing this card, you can cast Augury once as an action, requiring no material components. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice)."},
            {name:"Chaos", description:"You gain resistance to one of the following damage types (chosen by the DM): acid, cold, fire, lightning, or thunder. This resistance lasts for 1d12 days."},
            {name:"Coin", description:"You gain resistance to one of the following damage types (chosen by the DM): acid, cold, fire, lightning, or thunder. This resistance lasts for 1d12 days."},
            {name:"Crown", description:"You learn the Friends cantrip. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice). If you already know this cantrip, the card has no effect."},
            {name:"Dawn", description:"This card invigorates you. For the next 8 hours, you can add your proficiency bonus to your initiative rolls."},
            {name:"Day", description:"You gain a +1 bonus to saving throws. This benefit lasts until you finish a long rest."},
            {name:"Destiny", description:"This card protects you against an untimely demise. The first time after drawing this card that you would drop to 0 hit points from taking damage, you instead drop to 1 hit point."},
            {name:"Dusk", description:"This card supernaturally saps your energy. You have disadvantage on initiative rolls. This effect lasts until you finish a long rest, but it can be ended early by a Remove Curse spell or similar magic."},
            {name:"End", description:"This card is an omen of death. You take 2d10 necrotic damage, and your hit point maximum is reduced by an amount equal to the damage taken. This effect can’t reduce your hit point maximum below 10 hit points. This reduction lasts until you finish a long rest, but it can be ended early by a Remove Curse spell or similar magic."},
            {name:"Isolation", description:"You disappear, along with anything you are wearing or carrying, and become trapped in a harmless extradimensional space for 1d4 minutes. You draw no more cards. You then reappear in the space you left or the nearest unoccupied space. When you reappear, you must succeed on a DC 11 Constitution saving throw or have the poisoned condition for 1 hour as your body reels from the extradimensional travel."},
            {name:"Justice", description:"You momentarily gain the ability to balance the scales of fate. For the next 8 hours, whenever you or a creature within 60 feet of you is about to roll a d20 with advantage or disadvantage, you can use your reaction to prevent the roll from being affected by advantage or disadvantage."},
            {name:"Knife", description:"An uncommon magic weapon you\’re proficient with appears in your hands. The DM chooses the weapon."},
            {name:"Lock", description:"You gain the ability to cast Knock 1d3 times. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice)."},
            {name:"Mischief", description:"You receive an uncommon wondrous item (chosen by the DM), or you can draw two additional cards beyond your declared draws."},
            {name:"Monster", description:"This card\’s monstrous visage curses you. While cursed in this way, whenever you make a saving throw, you must roll 1d4 and subtract the number rolled from the total. The curse lasts until you finish a long rest, but it can be ended early with a Remove Curse spell or similar magic."},
            {name:"Mystery", description:"You have disadvantage on Intelligence saving throws for 1 hour. Discard this card and draw from the deck again; together, the two draws count as one of your declared draws."},
            {name:"Night", description:"You gain darkvision within a range of 300 feet. This darkvision lasts for 8 hours."},
            {name:"Order", description:"You gain resistance to one of the following damage types (chosen by the DM): force, necrotic, poison, psychic, or radiant. This resistance lasts for 1d12 days."},
            {name:"Student", description:"You gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice)."},
            {name:"Vulture", description:"One nonmagical item or piece of equipment in your possession (chosen by the DM) disappears. The item remains nearby but concealed for a short time, so it can be found with a successful DC 15 Wisdom (Perception) check. If the item isn’t recovered within 1 hour, it disappears forever."}
        ];
    }

    public getCards(): Card[] {
        return this.cards;
    }
}