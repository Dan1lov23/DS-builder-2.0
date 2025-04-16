import './characterList.css';

export default function CharacterList({setName, setSrc, setLevel, setVitality, setAttunement, setStrength, setDexterity, setResistance, setIntelligence, setFaith}) {

    const charatersArray = [
        {
            name: "Warrior", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/warrior-starting-class-male-dark-souls.jpg",
            level: 1, vitality: 10, attunement: 11, strength: 9, dexterity: 12, resistance: 12, intelligence: 10, faith: 8,
        },
        {name: "Knight", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/knight-starting-class-male-dark-souls.jpg"},
        {name: "Wanderer", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/wanderer-starting-class-male-dark-souls.jpg"},
        {name: "Thief", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/thief-starting-class-male-dark-souls.jpg"},
        {name: "Bandit", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/bandit-starting-class-male-dark-souls.jpg"},
        {name: "Hunter", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/hunter-starting-class-male-dark-souls.jpg"},
        {name: "Sorcerer", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/sorcerer-starting-class-male-dark-souls.jpg"},
        {name: "Pyromancer", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/pyromancer-starting-class-male-dark-souls.jpg"},
        {name: "Cleric", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/cleric-starting-class-male-dark-souls.jpg"},
        {name: "Deprived", src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/deprived-starting-class-male-dark-souls.jpg"},
    ]

    function getCharacterStat(name, src, level, vitality, attunement, strength, dexterity, intelligence, faith, resist) {
        setName(name);
        setSrc(src);
        setLevel(level);
        setVitality(vitality);
        setAttunement(attunement);
        setResistance(resist);
        setStrength(strength);
        setDexterity(dexterity);
        setIntelligence(intelligence);
        setFaith(faith);
    }

    return (
        <>
            <div className="charactersListMain">
                <div className="charactersListMainContainer">
                    {charatersArray.map((character, index) => (
                        <div className="character" key={index} onClick={() => getCharacterStat(character.name, character.src, character.level, character.vitality, character.attunement, character.resistance, character.strength, character.dexterity, character.intelligence, character.faith)}>
                            <img src={character.src} alt="character"/>
                            <a href={"https://darksouls.wiki.fextralife.com/" + character.name}>
                                <p>{character.name}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}